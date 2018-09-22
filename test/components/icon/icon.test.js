import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../../../src/components/icon';

test('should fail returning nothing if no id is passed', () => {
  const component = renderer.create(
    <Icon className="someclassname" cssModifier="somecssmodifier" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should succeed when no cssModifier is passed', () => {
  const component = renderer.create(
    <Icon id="someid" className="someclassname" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should succeed when no className is passed', () => {
  const component = renderer.create(
    <Icon id="someid" cssModifier="somecssmodifier" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
