import * as React from 'react';

import * as Models from '../models';

export interface Props {
  width: number;
  height: number;
  chip: Models.Chip;
}

export interface State { }

export default class Chip extends React.Component<Props, State> {
  constructor(props?: Props, context?: any) {
    super(props, context);

    this.renderLayer = this.renderLayer.bind(this);
    this.renderLayerKind = this.renderLayerKind.bind(this);
    this.renderCircle = this.renderCircle.bind(this);
  }

  minDimension(): number {
    return Math.min(this.props.width, this.props.height);
  }

  renderLayer(layer: Models.Layer): JSX.Element {
    const halfSize = this.props.chip.size / 2;
    let angles = [layer.angle || 0];
    if (layer.count !== undefined && layer.count > 1) {
      const step = 360 / layer.count;
      for (let i = 1; i < (layer.count || 0); i++) {
        angles.push(step * i + angles[0]);
      }
    }
    return <g
      clipPath="url(#chip-clip)"
    >
      {angles.map((angle) => <g
        transform={`translate(${halfSize}, ${halfSize}) rotate(${angle}) translate(0, -${layer.offset || 0})`}
      >
        {this.renderLayerKind(layer.kind)}
      </g>)}
    </g>;
  }

  renderLayerKind(layerKind: Models.LayerKind): JSX.Element {
    switch (layerKind.kind) {
      case Models.CIRCLE: return this.renderCircle(layerKind);
      case Models.CURVED_RECT: return this.renderCurvedRect(layerKind);
    }
  }

  renderCircle(circle: Models.Circle): JSX.Element {
    return <circle
      fill={Models.toRGBA(circle.color)}
      r={circle.radius}
    />;
  }

  renderCurvedRect(rect: Models.CurvedRect): JSX.Element {
    const angleRad = rect.angle / 180 * Math.PI;
    const direction = Math.PI / 2; // Straight up
    const halfAngleRad = angleRad / 2;
    // The amount to adjust the width of the rect corners.
    const halfHeight = rect.height / 2;
    const topY = -rect.radius
      + (rect.radius + halfHeight)
      * Math.sin(direction + angleRad);
    const bottomY = -rect.radius
      + (rect.radius - halfHeight)
      * Math.sin(direction + angleRad);
    const topX = (rect.radius + halfHeight) * Math.cos(direction + angleRad);
    const bottomX = (rect.radius - halfHeight) * Math.cos(direction + angleRad);
    // Define in parts for readability.
    const parts = [
      // Start top left corner.
      `M ${-topX} ${topY}`,
      // Curve to the top right corner.
      `A ${rect.radius + halfHeight} ${rect.radius + halfHeight} 0 0 1 ${topX} ${topY}`,
      // Straight to the botton right corner.
      `L ${bottomX} ${bottomY}`,
      // Curve to the bottom left corner.
      `A ${rect.radius - halfHeight} ${rect.radius - halfHeight} 0 0 0 ${-bottomX} ${bottomY}`,
    ];
    return <path
      d={parts.join(' ')}
      transform="rotate(180)"
      fill={Models.toRGBA(rect.color)}
    />;
  }

  render() {
    const halfSize = this.props.chip.size / 2;
    return <svg
      width={this.props.width}
      height={this.props.height}
      viewBox={`0 0 ${this.props.chip.size} ${this.props.chip.size}`}
    >
      <defs>
        <clipPath id="chip-clip">
          <circle
            cx={halfSize}
            cy={halfSize}
            r={halfSize}
          />
        </clipPath>
      </defs>
      <rect
        x={0}
        y={0}
        width={this.props.chip.size}
        height={this.props.chip.size}
        fill={Models.toRGBA(this.props.chip.color)}
        clipPath="url(#chip-clip)"
      />
      {this.props.chip.layers.map(this.renderLayer)}
    </svg>;
  }
}