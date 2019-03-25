import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {

    render() {
        const { name, value, label, error, onChange, options, defaultOption } = this.props;
        let validatorClass = '';
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
                <select
                    className={"custom-select" + validatorClass}
                    id={name}
                    value={value}
                    name={name}
                    ref={name}
                    onChange={onChange}>
                    <option value="">{defaultOption}</option>
                    {
                        options.map(option =>
                            <option value={option.value} key={option.value}>
                                {option.text}
                            </option>)
                    }
                </select>
                <small className={"form-text " + errorMessageValidator}>{error}</small>
            </div>
        );

    }
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    // error: PropTypes.string,
    onChange: PropTypes.func.isRequired

};

Select.defaultProps = {
    error: '',
    value: ''
};
export default Select;