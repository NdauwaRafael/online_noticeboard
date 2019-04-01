import React, {Fragment} from 'react';
import TextInput from '../../common/form/Input';
import PropTypes from "prop-types";
import Textarea from "../../common/form/Textarea";

DepartmentsForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    department: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

function DepartmentsForm({onSave, onChange, department: {title}, description, errors}) {
    return (
        <Fragment>
            <form onSubmit={onSave}>

                <TextInput
                    name='title'
                    label="Title"
                    value={title}
                    error={errors.title}
                    onChange={onChange}/>

                <Textarea
                    name="description"
                    label="Description (Optional)"
                    value={description}
                    error={errors.description}
                    onChange={onChange}/>

                <button type="submit" className="btn btn-success">Submit User Data</button>
            </form>
        </Fragment>
    );
}

export default DepartmentsForm;