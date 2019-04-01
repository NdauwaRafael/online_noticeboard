import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

DepartmentsTable.propTypes = {};

function DepartmentsTable({user, departments, deleteDepartment}) {
    return (
        <Fragment>
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    {
                        user.role === "Administrator" ?
                            <th>Actions</th>
                            : null
                    }

                </tr>
                </thead>
                <tbody>
                {
                    departments.map((department, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{department.title}</td>
                            {
                                user.role === 'Administrator' ?
                                    <td style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Link to={"/department/" + department.id} type="button" style={{marginRight: 20}}
                                              className="btn btn-outline-success">Edit
                                        </Link>
                                        <button type="button" className="btn btn-outline-danger"
                                                onClick={() => deleteDepartment(department.id)}>Delete
                                        </button>
                                    </td>
                                    : null
                            }

                        </tr>
                    ))
                }

                </tbody>
            </table>
        </Fragment>
    );
}

export default DepartmentsTable;