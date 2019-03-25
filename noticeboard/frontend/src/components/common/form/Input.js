import React, { Component } from 'react';
import PropTypes from "prop-types";

class TextInput extends Component {

    render() {
        const { name, value, label, error, onChange, type } = this.props;
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
                <input type={type ? type : "text"}
                    value={value}
                    id={name}
                    name={name}
                    onChange={onChange}
                    className={"form-control " + validatorClass}
                    ref={name}
                    placeholder={label}
                    style={{
                        backgroundImage: "url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=&quot;)",
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'scroll',
                        backgroundSize: "16px 18px",
                        backgroundPosition: "98% 50%",
                        cursor: "auto"
                    }} />
                <small className={"form-text " + errorMessageValidator}>{error}</small>
            </div>
        );

    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    // error: PropTypes.string,
    onChange: PropTypes.func.isRequired

};

TextInput.defaultProps = {
    error: '',
    value: ''
};
export default TextInput;