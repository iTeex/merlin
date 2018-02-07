import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';
import { updateAnswerFull } from '../../../actions';
import { connect } from "react-redux";

import Mouth from '../../Mouth/Mouth';

const mapDispatchToProps = dispatch => {
    return {
        updateAnswer: answer => dispatch(updateAnswerFull(answer)),
    };
};

class TimeConnected extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateNow: new Date(),
            loading: true,
        };
    }

    componentDidMount() {
        this.props.updateAnswer({answer: this.state.dateNow.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }), tone: 'descriptive'});
        this.setState({loading: false});
    }

    render() {
      const loading = this.state.loading;

      return (
        <div>
          { loading ? <Loading /> : <Mouth /> }
        </div>
      );
    }
}
const Time = connect(() => {} , mapDispatchToProps)(TimeConnected)

export default Time;

TimeConnected.propTypes = {
    props: PropTypes.object
};

TimeConnected.defaultProps = {
    props: undefined
};