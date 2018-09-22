import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import Nav from '../../../src/components/nav';

test('should succeed with home page', () => {
  const component = renderer.create(
    <StaticRouter location="/" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail 404 with not existing page', () => {
  const component = renderer.create(
    <StaticRouter location="/nope" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should succeed with calendar page', () => {
  const component = renderer.create(
    <StaticRouter location="/calendar" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should succeed with calendar sub page', () => {
  const component = renderer.create(
    <StaticRouter location="/calendar/2018" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should succeed with log page', () => {
  const component = renderer.create(
    <StaticRouter location="/log" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail 404 with log sub page', () => {
  const component = renderer.create(
    <StaticRouter location="/log/sub" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should succeed with settings page', () => {
  const component = renderer.create(
    <StaticRouter location="/settings" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should fail 404 with settings sub page', () => {
  const component = renderer.create(
    <StaticRouter location="/settings/sub" context={{}}>
      <Nav />
    </StaticRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
