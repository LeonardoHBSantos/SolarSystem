import { Component } from 'react';
import PropTypes from 'prop-types';

class Credits extends Component {
  render() {
    const { name, date } = this.props;
    return (
      <p>
        Criado por
        {' '}
        { name }
        {' '}
        em
        {' '}
        {date}
      </p>
    );
  }
}

Credits.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Credits;
