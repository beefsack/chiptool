import * as React from 'react';

import * as Models from '../models';
import Chip from './chip';

export interface Props { }

export interface State {

}

export default class App extends React.Component<Props, State> {
  render() {
    return <div>
      <Chip
        width={500}
        height={500}
        chip={{
          size: 39,
          color: { r: 225, g: 128, b: 0, a: 255 },
          layers: [
            {
              kind: {
                kind: Models.CIRCLE,
                radius: 12.5,
                color: { r: 192, g: 192, b: 192 },
              },
            },
            {
              kind: {
                kind: Models.CIRCLE,
                radius: 10.5,
                color: { r: 255, g: 255, b: 255 },
              },
            },
            {
              kind: {
                kind: Models.CURVED_RECT,
                radius: 19.5,
                angle: 20,
                height: 10,
                color: { r: 0, g: 143, b: 255 },
              },
              offset: 19.5,
              count: 4,
            },
            {
              kind: {
                kind: Models.CURVED_RECT,
                radius: 19.5,
                angle: 5.5,
                height: 10,
                color: { r: 255, g: 255, b: 255 },
              },
              offset: 19.5,
              count: 4,
            },
            {
              kind: {
                kind: Models.CURVED_TEXT,
                text: '25c',
                fontSize: 2.5,
                fontFamily: 'Sans Serif',
                radius: 16,
                color: { r: 0, g: 143, b: 255 },
              },
              offset: 15.3,
              angle: 45,
              count: 4,
            }
          ],
        }}
      />
    </div>;
  }
}