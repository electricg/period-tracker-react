const {
  getToday,
  newDate,
  ...utils
} = require('../../../src/state/entries/utils');

describe('getToday', () => {
  test('should succeed', () => {
    const output = getToday();
    console.log(output);
    expect(!!output.match(/\d{4}-[01]\d{1}-[0-3]\d{1}/)).toEqual(true);
  });
});

describe('newDate', () => {
  const cases1 = [
    {
      desc: 'should succeed and return today with null',
      input: null,
    },
    {
      desc: 'should succeed and return today with undefined',
      input: undefined,
    },
    {
      desc: 'should succeed and return today with an empty string',
      input: '',
    },
    {
      desc: 'should succeed and return today with a number',
      input: 0,
    },
    {
      desc: 'should succeed and return today with a bool',
      input: true,
    },
    {
      desc: 'should succeed and return today with an object',
      input: {},
    },
    {
      desc: 'should succeed and return today with a function',
      input: () => {},
    },
    {
      desc: 'should succeed and return today with an array',
      input: [],
    },
  ];

  const cases2 = [
    {
      desc: 'should succeed with a valid date - first day of the year',
      input: '2018-01-01',
      expectedOutput: {
        year: 2018,
        month: 0,
        day: 1,
      },
    },
    {
      desc: 'should succeed with a valid date - last day of the year',
      input: '2018-12-31',
      expectedOutput: {
        year: 2018,
        month: 11,
        day: 31,
      },
    },
  ];

  cases1.forEach(o => {
    const { desc, input } = o;
    test(desc, () => {
      const expectedOutput = new Date();
      const output = newDate(input);
      expect(Object.prototype.toString.call(output)).toEqual('[object Date]');
      // this is risky
      expect(output.getFullYear()).toEqual(expectedOutput.getFullYear());
      expect(output.getMonth()).toEqual(expectedOutput.getMonth());
      expect(output.getDate()).toEqual(expectedOutput.getDate());
    });
  });

  cases2.forEach(o => {
    const { desc, input, expectedOutput } = o;
    test(desc, () => {
      const output = newDate(input);
      expect(Object.prototype.toString.call(output)).toEqual('[object Date]');
      // this is risky
      expect(output.getFullYear()).toEqual(expectedOutput.year);
      expect(output.getMonth()).toEqual(expectedOutput.month);
      expect(output.getDate()).toEqual(expectedOutput.day);
    });
  });
});

const methods = Object.keys(utils);

const _cases = {
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
