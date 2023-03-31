import { Component } from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    const missionsCard = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ `${name}/${year}` }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));
    return (
      <div id="missions-div">
        <Title headline="Missões" />
        { missionsCard }
      </div>
    );
  }
}

export default Missions;
