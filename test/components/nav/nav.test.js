import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import Nav, { NavItem } from '../../../src/components/nav';

describe('NavItem', () => {
  test('should fail returning nothing if no id is passed', () => {
    const component = renderer.create(
      <NavItem path="something" label="something" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should fail returning nothing if no path is passed', () => {
    const component = renderer.create(
      <NavItem id="something" label="something" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should fail returning nothing if no label is passed', () => {
    const component = renderer.create(
      <NavItem id="something" path="something" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Nav', () => {
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
});
