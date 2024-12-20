import * as React from 'react';

import renderer from 'react-test-renderer';

import { BodyText } from '../StyledText';
/* eslint-disable no-undef */
it(`renders correctly`, () => {
  const tree = renderer.create(<BodyText>Snapshot test!</BodyText>).toJSON();
  /* eslint-disable no-undef */
  expect(tree).toMatchSnapshot();
});
