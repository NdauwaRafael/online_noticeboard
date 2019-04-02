import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Radio extends Component {
    render() {
        const {name, value, label, error, onChange} = this.props;
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
                <div className="form-check custom-checkbox">
                    <input
                        type="radio"
                        className={"form-check-input" + validatorClass}
                        id={name}
                        value={value}
                        name={name}
                        ref={name}
                        onChange={onChange}/>
                    <label className="form-check-label" htmlFor={name}>{label}</label>
                </div>
                <small className={"form-text " + errorMessageValidator}>{error}</small>
            </div>
        );
    }


};
Radio.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
export default Radio;