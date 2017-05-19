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

  renderLayer(layer: Models.Layer) {
    const halfSize = this.props.chip.size / 2;
    let angles = [layer.angle || 0];
    if (layer.count !== undefined && layer.count > 1) {
      const step = 360 / layer.count;
      for (let i = 1; i < (layer.count || 0); i++) {
        angles.push(step * i + angles[0]);
      }
    }
    return angles.map((angle) => <g
      transform={`translate(${halfSize}, ${halfSize}) rotate(${angle}) translate(0, -${layer.offset || 0})`}
    >
      {this.renderLayerKind(layer.kind)}
    </g>);
  }

  renderLayerKind(layerKind: Models.LayerKind) {
    switch (layerKind.kind) {
      case Models.CIRCLE: return this.renderCircle(layerKind);
    }
  }

  renderCircle(circle: Models.Circle) {
    return <circle
      fill={Models.toRGBA(circle.color)}
      r={circle.radius}
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