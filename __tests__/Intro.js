import 'react-native';
import React from 'react';
import Intro, {sum} from '../components/Intro';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <Intro />
  )

  expect(tree).toMatchSnapshot();
});

test('return correct sum', () => {
  expect(sum(2,8)).toMatchSnapshot();
})
