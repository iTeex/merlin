import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Open extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 'Voila'
        };
    }

    render() {
        //window.open('http://' + this.props.props, '_blank');

        return (
            <div>
                { this.state.result }
            </div>
        );
    }
}
export default Open;


Open.propTypes = {
    props: PropTypes.string
};

Open.defaultProps = {
    props: undefined
};