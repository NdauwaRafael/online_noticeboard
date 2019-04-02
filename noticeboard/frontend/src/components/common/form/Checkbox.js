import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Checkbox extends Component {
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
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        className={"custom-control-input" + validatorClass}
                        id={name}
                        value={value}
                        name={name}
                        ref={name}
                        onChange={onChange}/>
                    <label className="custom-control-label" htmlFor={name}>{label}</label>
                </div>
                <small className={"form-text " + errorMessageValidator}>{error}</small>
            </div>
        );
    }


};
Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
export default Checkbox;