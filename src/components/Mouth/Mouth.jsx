import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

import { connect } from 'react-redux';

import { updateLoadingStatus } from '../../actions';

import { apologetic, descriptive, negative, positive } from './Tones';
import { randomElement } from "../../utils";

const mapStateToProps = state => {
  return {
    loading: state.loading.loading,
    answer: state.answer.answer,
    tone: state.answer.tone,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoadingStatus: loading => dispatch(updateLoadingStatus(loading)),
  };
};

class ConnectedMouth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: ''
        };
    }


    componentDidMount() {
        switch (this.props.tone) {
          case 'apologetic': this.setState({answer: randomElement(apologetic) + this.props.answer});
            break;
          case 'descriptive': this.setState({answer: randomElement(descriptive) + this.props.answer});
            break;
          case 'negative': this.setState({answer: randomElement(negative) + this.props.answer});
            break;
          case 'positive': this.setState({answer: randomElement(positive) + this.props.answer});
            break;
          default: this.setState({answer: this.props.answer});
        }
      this.props.updateLoadingStatus(false);
    }

    render() {
      const responsiveVoice = window.responsiveVoice;
      responsiveVoice.speak(this.state.answer, "UK English Male", {pitch: 1, rate: 1.2});

      const loading = this.props.loading;

      return (
            <div>
              { loading ? <Loading /> : this.state.answer }
            </div>
        );
    }
}

const Mouth = connect(mapStateToProps, mapDispatchToProps)(ConnectedMouth);

export default Mouth;

ConnectedMouth.propTypes = {
    answer: PropTypes.string,
    tone: PropTypes.string
};

ConnectedMouth.defaultProps = {
    answer: '',
    tone: undefined
};