import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateNow: new Date(),
            result: ''
        };
    }

    componentWillMount() {
        this.setState({result: this.state.dateNow.toTimeString()});
    }

    render() {
        return (
          <div>
              It is { this.state.result }
          </div>
        );
    }
}
export default Time;


Time.propTypes = {
    props: PropTypes.object
};

Time.defaultProps = {
    props: undefined
};