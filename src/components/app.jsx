// @pure

import React from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

export default class App extends React.Component {
  props: {
    cameraPosition: THREE.Vector3,
  };
  static defaultProps = {
    cameraPosition: new THREE.Vector3(0, 0, 5),
  };
  state = {
    cubeRotation: new THREE.Euler(),
  };

  constructor(props, context) {
    super(props, context);

    (this: any).onAnimate = this.onAnimate.bind(this);
  }

  onAnimate() {
    this.setState({
      cubeRotation: new THREE.Euler(
        this.state.cubeRotation.x + 0.1,
        this.state.cubeRotation.y + 0.1,
        0,
      )
    })
  }

  render() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return <React3
      mainCamera="camera"
      width={width}
      height={height}
      onAnimate={this.onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}
          position={this.props.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>;
  }
}