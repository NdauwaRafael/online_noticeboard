import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

export class Alerts extends Component {
    componentDidUpdate(prevProps) {
        const { error, alert, messages } = this.props;

        if (prevProps.error !== error) {
            alert.error(error.msg);
        }

        if (prevProps.messages !== messages) {
            if (messages.status === 'success') {
                alert.success(messages.msg);
            }
            else {
                alert.show(messages.msg);
            }
        }
    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    messages: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
