import { Component } from 'react';
import Credits from './Credits';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Credits name="Leonardo Santos" date="Março de 2023" />
      </footer>
    );
  }
}

export default Footer;
