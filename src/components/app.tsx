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
          color: { r: 225, g: 119, b: 0, a: 255 },
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
                width: 12,
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
                width: 3.3,
                height: 10,
                color: { r: 255, g: 255, b: 255 },
              },
              offset: 19.5,
              count: 4,
            },
          ],
        }}
      />
    </div>;
  }
}