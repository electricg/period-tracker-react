import DateFnsFormat from 'date-fns/format';
const _utils = require('../../src/lib/utils');
import { mockDate, mockDateReset } from '../helper';

console.log(_utils);

const {
  getMonth,
  getToday,
  getWeekdaysNames,
  getNextMonth,
  getPrevMonth,
  ...utils
} = _utils;

describe('getToday', () => {
  const cases = [
    {
      desc: 'should work with smaller than 10 month and day',
      input: [],
      expectedOutput: '2018-01-01',
    },
    {
      desc: 'should work with bigger than 10 month and day',
      input: [],
      expectedOutput: '2018-12-31',
    },
  ];

  afterEach(() => {
    mockDateReset();
  });

  cases.forEach(o => {
    const { desc, input, expectedOutput } = o;
    const freeze = input.map(item => JSON.stringify(item));
    test(desc, () => {
      mockDate(`${expectedOutput} 00:00:00`);
      const output = getToday.apply(null, input);
      expect(output).toEqual(expectedOutput);
      // check that the function is pure and doesn't change the arguments
      input.forEach((item, i) => {
        expect(JSON.stringify(item)).toEqual(freeze[i]);
      });
    });
  });
});

const methods = Object.keys(utils);

const _cases = {
  newDate: [
    {
      desc: 'should succeed and return today with null',
      input: [null],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with undefined',
      input: [undefined],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with an empty string',
      input: [''],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with a number',
      input: [0],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with a bool',
      input: [true],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with an object',
      input: [{}],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with a function',
      input: [() => {}],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed and return today with an array',
      input: [[]],
      expectedOutput: new Date(
        DateFnsFormat(new Date(), 'YYYY-MM-DD[T]12:00:00.000[Z]')
      ),
    },
    {
      desc: 'should succeed with a valid date - first day of the year',
      input: ['2018-01-01'],
      expectedOutput: new Date('2018-01-01T12:00:00.000Z'),
    },
    {
      desc: 'should succeed with a valid date - last day of the year',
      input: ['2018-12-31'],
      expectedOutput: new Date('2018-12-31T12:00:00.000Z'),
    },
  ],
  sortDates: [
    {
      desc: 'should succeed with null',
      input: [null],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with undefined',
      input: [undefined],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a string',
      input: ['test'],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a number',
      input: [0],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a bool',
      input: [true],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an object',
      input: [{}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a function',
      input: [() => {}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an empty array',
      input: [[]],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an array of one item',
      input: [['2018-01-01']],
      expectedOutput: ['2018-01-01'],
    },
    {
      desc: 'should succeed with an array of multiple items',
      input: [['2018-02-01', '2018-01-02', '2018-01-01']],
      expectedOutput: ['2018-01-01', '2018-01-02', '2018-02-01'],
    },
    {
      desc:
        'should succeed with an array of multiple items and some identical items',
      input: [['2018-02-01', '2018-01-02', '2018-01-02', '2018-01-01']],
      expectedOutput: ['2018-01-01', '2018-01-02', '2018-01-02', '2018-02-01'],
    },
  ],
  deleteDuplicatedDates: [
    {
      desc: 'should succeed with null',
      input: [null],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with undefined',
      input: [undefined],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a string',
      input: ['test'],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a number',
      input: [0],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a bool',
      input: [true],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an object',
      input: [{}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a function',
      input: [() => {}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an empty array',
      input: [[]],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an array of one item',
      input: [['2018-01-01']],
      expectedOutput: ['2018-01-01'],
    },
    {
      desc:
        'should succeed with an array of multiple items and no identical items',
      input: [['2018-02-01', '2018-01-02', '2018-01-01']],
      expectedOutput: ['2018-02-01', '2018-01-02', '2018-01-01'],
    },
    {
      desc:
        'should succeed with an array of multiple items and some identical items',
      input: [['2018-02-01', '2018-01-02', '2018-01-01', '2018-01-02']],
      expectedOutput: ['2018-02-01', '2018-01-02', '2018-01-01'],
    },
  ],
  doesDateExists: [
    {
      desc: 'should return false with no arguments',
      input: [undefined, undefined],
      expectedOutput: false,
    },
    {
      desc: 'should return false with null',
      input: ['', null],
      expectedOutput: false,
    },
    {
      desc: 'should return false with undefined',
      input: ['', undefined],
      expectedOutput: false,
    },
    {
      desc: 'should return false with a string',
      input: ['', 'test'],
      expectedOutput: false,
    },
    {
      desc: 'should return false with a number',
      input: ['', 0],
      expectedOutput: false,
    },
    {
      desc: 'should return false with a bool',
      input: ['', true],
      expectedOutput: false,
    },
    {
      desc: 'should return false with an object',
      input: ['', {}],
      expectedOutput: false,
    },
    {
      desc: 'should return false with a function',
      input: ['', () => {}],
      expectedOutput: false,
    },
    {
      desc: 'should return false with an empty array',
      input: [['2018-01-01'], []],
      expectedOutput: false,
    },
    {
      desc:
        'should return false when element is not found in an array of one item',
      input: ['2018-01-02', ['2018-01-01']],
      expectedOutput: false,
    },
    {
      desc: 'should return true when element is found in an array of one item',
      input: ['2018-01-01', ['2018-01-01']],
      expectedOutput: true,
    },
    {
      desc:
        'should return true when element is found in an array of multiple items and no identical items',
      input: ['2018-01-01', ['2018-02-01', '2018-01-02', '2018-01-01']],
      expectedOutput: true,
    },
    {
      desc:
        'should return true when element is found in an array of multiple items and some identical items',
      input: [
        '2018-01-01',
        ['2018-02-01', '2018-01-02', '2018-01-01', '2018-01-02'],
      ],
      expectedOutput: true,
    },
  ],
  calcDatesRanges: [
    {
      desc: 'should succeed with null',
      input: [null],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with undefined',
      input: [undefined],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a string',
      input: ['test'],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a number',
      input: [0],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a bool',
      input: [true],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an object',
      input: [{}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a function',
      input: [() => {}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an empty array',
      input: [[]],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an array of one item',
      input: [['2018-01-01']],
      expectedOutput: [0],
    },
    {
      desc: 'should succeed with an array of two identical items',
      input: [['2018-01-01', '2018-01-01']],
      expectedOutput: [0, 0],
    },
    {
      desc: 'should succeed with an array of two different items',
      input: [['2018-01-01', '2018-01-02']],
      expectedOutput: [0, 1],
    },
    {
      desc: 'should succeed with an array of multiple different items',
      input: [['2018-01-01', '2018-01-02', '2018-02-01', '2019-02-01']],
      expectedOutput: [0, 1, 30, 365],
    },
    {
      desc:
        'should succeed with an array of multiple different items in desc order',
      input: [['2019-02-01', '2018-02-01', '2018-01-02', '2018-01-01']],
      expectedOutput: [0, 365, 30, 1],
    },
  ],
  calcDatesCovered: [
    {
      desc: 'should succeed with null',
      input: [null],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with undefined',
      input: [undefined],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a string',
      input: ['test'],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a number',
      input: [0],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a bool',
      input: [true],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an object',
      input: [{}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a function',
      input: [() => {}],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with an empty array',
      input: [[]],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with a cover equal to 0',
      input: [['2019-02-01', '2018-02-01', '2018-01-02', '2018-01-01'], 0],
      expectedOutput: ['2019-02-01', '2018-02-01', '2018-01-02', '2018-01-01'],
    },
    {
      desc: 'should succeed with a negative cover',
      input: [['2019-02-01', '2018-02-01', '2018-01-02', '2018-01-01'], -1],
      expectedOutput: ['2019-02-01', '2018-02-01', '2018-01-02', '2018-01-01'],
    },
    {
      desc: 'should succeed with an array of one item and cover equal to 1',
      input: [['2018-01-01'], 1],
      expectedOutput: ['2018-01-01', '2018-01-02'],
    },
    {
      desc: 'should succeed with an array of one item and cover equal to 2',
      input: [['2018-01-30'], 2],
      expectedOutput: ['2018-01-30', '2018-01-31', '2018-02-01'],
    },
    {
      desc:
        'should succeed with an array of multiple different items and cover equal to 3',
      input: [['2018-01-01', '2018-01-02', '2018-02-01', '2018-12-30'], 3],
      expectedOutput: [
        '2018-01-01',
        '2018-01-02',
        '2018-01-03',
        '2018-01-04',
        '2018-01-02',
        '2018-01-03',
        '2018-01-04',
        '2018-01-05',
        '2018-02-01',
        '2018-02-02',
        '2018-02-03',
        '2018-02-04',
        '2018-12-30',
        '2018-12-31',
        '2019-01-01',
        '2019-01-02',
      ],
    },
  ],
  calcFutureDates: [
    {
      desc: 'should succeed with no lastDate',
      input: [''],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with no untilDate',
      input: ['2018-01-01', ''],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with range equal to 0',
      input: ['2018-01-01', '2018-02-01', 0],
      expectedOutput: [],
    },
    {
      desc: 'should succeed with no range passed',
      input: ['2017-12-04', '2018-02-01'],
      expectedOutput: ['2018-01-01', '2018-01-29', '2018-02-26'],
    },
    {
      desc: 'should succeed with no range equal to 1',
      input: ['2017-12-27', '2018-01-04', 1],
      expectedOutput: [
        '2017-12-28',
        '2017-12-29',
        '2017-12-30',
        '2017-12-31',
        '2018-01-01',
        '2018-01-02',
        '2018-01-03',
        '2018-01-04',
        '2018-01-05',
      ],
    },
  ],
};

describe('utils', () => {
  methods.forEach(method => {
    describe(method, () => {
      const cases = _cases[method];
      cases.forEach(o => {
        const { desc, input, expectedOutput } = o;
        const freeze = input.map(item => JSON.stringify(item));
        test(desc, () => {
          const output = utils[method].apply(null, input);
          expect(output).toEqual(expectedOutput);
          // check that the function is pure and doesn't change the arguments
          input.forEach((item, i) => {
            expect(JSON.stringify(item)).toEqual(freeze[i]);
          });
        });
      });
    });
  });
});
