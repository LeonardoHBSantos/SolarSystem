import { Component } from 'react';
import SolarSystem from './SolarSystem';
import Missions from './Missions';

class Main extends Component {
  render() {
    return (
      <main>
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default Main;
