import React, {Fragment} from 'react';
import TextInput from '../../common/form/Input';
import PropTypes from "prop-types";
import Textarea from "../../common/form/Textarea";
import Select from "../../common/form/Select";

DepartmentsForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    department: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

function DepartmentsForm({onSave, onChange, department, department: {title, description, hod_id}, errors, userList}) {
    return (
        <Fragment>
            <form onSubmit={onSave}>

                <TextInput
                    name='title'
                    label="Title"
                    value={title}
                    error={errors.title}
                    onChange={onChange}/>

                {department.id ?
                    <Select
                     label="Assign a HOD"
                     name="hod_id"
                     value={hod_id}
                     error={errors.hod_id}
                     defaultOption="Select A User"
                     options={userList}
                     onChange={onChange}/>
                    :null
                }

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