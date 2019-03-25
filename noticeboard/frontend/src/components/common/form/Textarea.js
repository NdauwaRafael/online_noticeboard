import React, { Component } from 'react';
import PropTypes from "prop-types";

class Textarea extends Component {

    render() {
        const { name, value, label, error, onChange, rows } = this.props;
        let validatorClass = '';
        let parentValidator = '';
        let errorMessageValidator = ''
        if (error.length > 0) {
            validatorClass = 'is-invalid';
            parentValidator = 'has-danger';
            errorMessageValidator = 'invalid-feedback';
        } else {
            validatorClass = '';
            parentValidator = '';
            errorMessageValidator = 'text-muted';
        }

        return (
            <div className={"form-group " + parentValidator}>
                <label htmlFor={name}>{label}</label>
                <textarea
                    value={value}
                    rows={rows}
                    id={name}
                    name={name}
                    onChange={onChange}
                    className={"form-control " + validatorClass}
                    ref={name}
                    placeholder={label} />
                <small className={"form-text " + errorMessageValidator}>{error}</small>
            </div>
        );

    }
}

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    // error: PropTypes.string,
    onChange: PropTypes.func.isRequired

};

Textarea.defaultProps = {
    error: '',
    value: ''
};
export default Textarea;