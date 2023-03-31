import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const cardOfPlanets = planets.map((planet) => (<PlanetCard
      key={ planet.name }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));
    return (
      <div id="planets-div">
        <Title headline="Planetas" />
        { cardOfPlanets }
      </div>
    );
  }
}

export default SolarSystem;
