////////PROPTYPES///////////

import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string    //we expect a prop-name that must be a string
};
PropTypes.array , .bool, .func, .number, object, string, symbol

///////Higher Order Functions/////////


// A higher-order component (HOC) is an advanced technique in React for reusing component
//  logic. HOCs are not part of the React API, per se. They are a pattern that emerges from
//   React’s compositional nature.
