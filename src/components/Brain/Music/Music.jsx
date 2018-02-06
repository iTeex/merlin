import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'react-simple-chatbot';

import Mouth from '../../Mouth/Mouth';

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      answer: '',
      tone: ''
    };
  }

  componentWillMount() {
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
export default Music;

Music.propTypes = {
  props: PropTypes.object
};

Music.defaultProps = {
  props: undefined
};