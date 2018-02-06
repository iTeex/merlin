import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

import Mouth from '../../Mouth/Mouth';

class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateNow: new Date(),
            loading: true,
            answer: '',
            tone: 'descriptive'
        };
    }

    componentWillMount() {
        this.setState({answer: this.state.dateNow.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), loading: false});
    }

    render() {
      const loading = this.state.loading;

      return (
        <div>
          { loading ? <Loading /> : <Mouth tone={this.state.tone} answer={this.state.answer} /> }
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