import * as React from 'react';

import * as Models from '../models';
import Chip from './chip';

export interface Props { }

export interface State {

}

const CHIP_SIZE = 39;
const SVG_SIZE = 300;
const OUTER_RING_CENTER = 15.25;
const INLAY_BORDER_LAYER: Models.Layer = {
  kind: {
    kind: Models.CIRCLE,
    radius: 12.7,
    color: { r: 192, g: 192, b: 192 },
  },
};
const INLAY_CENTER_LAYER: Models.Layer = {
  kind: {
    kind: Models.CIRCLE,
    radius: 10.7,
    color: { r: 255, g: 255, b: 255 },
  },
};

const BLUE_BELL_PRIMARY: Models.Color = { r: 202, g: 126, b: 252 };
const BLUE_BELL_SECONDARY: Models.Color = { r: 78, g: 102, b: 10 };
const BLUE_BELL_TERTIARY: Models.Color = { r: 241, g: 241, b: 234 };
const BLUE_BELL_FLOWER_RADIUS = 1;
const BLUE_BELL_FLOWER_OFFSET = 0.8;
const CONTAINER_SPAN_STYLE: React.CSSProperties = {
  display: 'inline-block',
  marginRight: 50,
  marginBottom: 50,
};

function ringDenomText(denom: string, color: Models.Color): Models.Layer {
  return {
    kind: {
      kind: Models.CURVED_TEXT,
      radius: OUTER_RING_CENTER,
      text: {
        kind: Models.TEXT,
        content: denom,
        fontSize: 2.5,
        fontFamily: 'Sans Serif',
        color: color,
        style: {
          fontWeight: 'bold',
        },
      },
    },
    cy: OUTER_RING_CENTER,
    angle: 45,
    count: 4,
  };
}

function wideEdgeSpot(color: Models.Color): Models.Layer {
  return edgeSpot(color, 15);
}

function narrowEdgeSpot(color: Models.Color): Models.Layer {
  return edgeSpot(color, 4);
}

function edgeSpot(color: Models.Color, angle: number): Models.Layer {
  return {
    kind: {
      kind: Models.CURVED_RECT,
      radius: 19.5,
      angle,
      height: 3,
      color,
    },
    cy: 19.5,
    count: 4,
  };
}

export default class App extends React.Component<Props, State> {
  render() {
    return <div style={{ margin: 100 }}>
      {/* 25c */}
      <span style={CONTAINER_SPAN_STYLE}>
        <Chip
          width={300}
          height={300}
          chip={{
            size: CHIP_SIZE,
            color: { r: 230, g: 45, b: 23 },
            layers: [
              INLAY_BORDER_LAYER,
              INLAY_CENTER_LAYER,
              wideEdgeSpot({ r: 238, g: 220, b: 208 }),
              narrowEdgeSpot({ r: 14, g: 82, b: 142 }),
              {
                kind: {
                  kind: Models.RECT,
                  width: 2,
                  height: 3,
                  color: { r: 238, g: 220, b: 208 },
                },
                cy: 15.25,
                count: 4,
              },
              {
                kind: {
                  kind: Models.RECT,
                  width: 2,
                  height: 3,
                  color: { r: 238, g: 220, b: 208 },
                },
                cx: -2.5,
                cy: 15.25,
                count: 4,
              },
              {
                kind: {
                  kind: Models.RECT,
                  width: 2,
                  height: 3,
                  color: { r: 238, g: 220, b: 208 },
                },
                cx: 2.5,
                cy: 15.25,
                count: 4,
              },
              ringDenomText('25c', { r: 238, g: 220, b: 208 }),
            ],
          }}
        />
      </span>
      {/* $1 */}
      <span style={CONTAINER_SPAN_STYLE}>
        <Chip
          width={300}
          height={300}
          chip={{
            size: CHIP_SIZE,
            color: { r: 0, g: 0, b: 119 },
            layers: [
              INLAY_BORDER_LAYER,
              INLAY_CENTER_LAYER,
              wideEdgeSpot({ r: 255, g: 204, b: 0 }),
              narrowEdgeSpot({ r: 255, g: 255, b: 255 }),
              {
                kind: {
                  kind: Models.CURVED_RECT,
                  radius: 15,
                  angle: 12,
                  height: 3,
                  color: { r: 255, g: 204, b: 0 },
                },
                cy: OUTER_RING_CENTER,
                count: 4,
              },
              ringDenomText('$1', { r: 255, g: 204, b: 0 }),
            ],
          }}
        />
      </span>
      {/* $5 */}
      <span style={CONTAINER_SPAN_STYLE}>
        <Chip
          width={300}
          height={300}
          chip={{
            size: CHIP_SIZE,
            color: { r: 230, g: 151, b: 23, a: 255 },
            layers: [
              INLAY_BORDER_LAYER,
              INLAY_CENTER_LAYER,
              wideEdgeSpot({ r: 0, g: 106, b: 255 }),
              narrowEdgeSpot({ r: 255, g: 255, b: 255 }),
              {
                kind: {
                  kind: Models.CIRCLE,
                  radius: 1.5,
                  color: { r: 0, g: 106, b: 255 },
                },
                cy: OUTER_RING_CENTER,
                angle: 8,
                count: 4,
              },
              {
                kind: {
                  kind: Models.CIRCLE,
                  radius: 1.5,
                  color: { r: 0, g: 106, b: 255 },
                },
                cy: OUTER_RING_CENTER,
                angle: -8,
                count: 4,
              },
              ringDenomText('$5', { r: 0, g: 106, b: 255 }),
            ],
          }}
        />
      </span>
      {/* $25 */}
      <span style={CONTAINER_SPAN_STYLE}>
        <Chip
          width={300}
          height={300}
          chip={{
            size: CHIP_SIZE,
            color: { r: 134, g: 204, b: 20 },
            layers: [
              INLAY_BORDER_LAYER,
              INLAY_CENTER_LAYER,
              wideEdgeSpot({ r: 254, g: 239, b: 64 }),
              narrowEdgeSpot({ r: 31, g: 45, b: 153 }),
              ringDenomText('$25', { r: 31, g: 45, b: 153 }),
              {
                kind: {
                  kind: Models.ELLIPSE,
                  radiusX: 3.1,
                  radiusY: 1.5,
                  color: { r: 31, g: 45, b: 153 },
                },
                cy: OUTER_RING_CENTER,
                count: 4,
              },
            ],
          }}
        />
      </span>
      {/* $100 */}
      <span style={CONTAINER_SPAN_STYLE}>
        <Chip
          width={300}
          height={300}
          chip={{
            size: CHIP_SIZE,
            color: { r: 26, g: 25, b: 31 },
            layers: [
              INLAY_BORDER_LAYER,
              INLAY_CENTER_LAYER,
              wideEdgeSpot({ r: 210, g: 59, b: 48 }),
              narrowEdgeSpot({ r: 255, g: 250, b: 255 }),
              ringDenomText('$100', { r: 210, g: 59, b: 48 }),
              {
                kind: {
                  kind: Models.TRIANGLE,
                  width: 6,
                  height: 3,
                  color: { r: 210, g: 59, b: 48 },
                },
                cy: OUTER_RING_CENTER,
                count: 4,
              },
            ],
          }}
        />
      </span>
      {/* $500 */}
      <span style={CONTAINER_SPAN_STYLE}>
        <Chip
          width={300}
          height={300}
          chip={{
            size: CHIP_SIZE,
            color: BLUE_BELL_PRIMARY,
            layers: [
              INLAY_BORDER_LAYER,
              INLAY_CENTER_LAYER,
              wideEdgeSpot(BLUE_BELL_SECONDARY),
              narrowEdgeSpot(BLUE_BELL_TERTIARY),
              ringDenomText('$500', BLUE_BELL_SECONDARY),
              {
                kind: {
                  kind: Models.CIRCLE,
                  radius: BLUE_BELL_FLOWER_RADIUS,
                  color: BLUE_BELL_SECONDARY,
                },
                cy: OUTER_RING_CENTER - BLUE_BELL_FLOWER_OFFSET,
                count: 4,
              },
              {
                kind: {
                  kind: Models.CIRCLE,
                  radius: BLUE_BELL_FLOWER_RADIUS,
                  color: BLUE_BELL_SECONDARY,
                },
                cy: OUTER_RING_CENTER + BLUE_BELL_FLOWER_OFFSET,
                count: 4,
              },
              {
                kind: {
                  kind: Models.CIRCLE,
                  radius: BLUE_BELL_FLOWER_RADIUS,
                  color: BLUE_BELL_SECONDARY,
                },
                cx: BLUE_BELL_FLOWER_OFFSET,
                cy: OUTER_RING_CENTER,
                count: 4,
              },
              {
                kind: {
                  kind: Models.CIRCLE,
                  radius: BLUE_BELL_FLOWER_RADIUS,
                  color: BLUE_BELL_SECONDARY,
                },
                cx: -BLUE_BELL_FLOWER_OFFSET,
                cy: OUTER_RING_CENTER,
                count: 4,
              },
            ],
          }}
        />
      </span>
    </div>;
  }
}