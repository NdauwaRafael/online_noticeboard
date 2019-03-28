import React, {Component, Fragment} from 'react';
import TextInput from '../../common/form/Input';
import Textarea from '../../common/form/Textarea';
import SelectInput from '../../common/form/Select'
import {connect} from 'react-redux';
import {addPost} from '../../../Redux/actions/posts';
import {bindActionCreators} from 'redux';
import {Link} from "react-router-dom";

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            category: '',
            errors: {
                title: '',
                description: '',
                category: '',
                department: ''
            },
            isAdmin: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        this.updateUser(this.props.user);
    }

    componentDidUpdate(prevProps) {
        const {errors, posts, user} = this.props;
        if (prevProps.errors !== errors) {
            this.setState({
                errors
            })
        }

        if (prevProps.posts !== posts) this.setState({
            title: '',
            description: ''
        });

        if (prevProps.user !== user) {
            this.updateUser(user);
        }

    }

    updateUser(user) {
        if (user.role === 'Administrator' || user.role === 'HOD') {
            this.setState({
                isAdmin: true
            })
        } else {
            this.setState({
                isAdmin: false
            })
        }
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        return this.setState({[field]: value});
    };

    postIsValid() {
        let {title, description, category, errors} = this.state;
        let isValid = true;

        if (title.length <= 3) {
            errors.title = 'Post title must be at least 3 characters';
            isValid = false;
        } else {
            errors.title = ''
        }

        if (category.length <= 3) {
            errors.category = 'Post category must not be empty';
            isValid = false;
        } else {
            errors.category = ''
        }

        if (description.length <= 20) {
            errors.description = 'Description is too short. Provide at least 20 characters';
            isValid = false;
        } else {
            errors.description = ''
        }


        this.setState({errors});

        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.postIsValid()) {
            return;
        }
        let post = {
            title: this.state.title,
            category: this.state.category,
            description: this.state.description
        };

        this.props.savePost(post);
    }

    render() {
        const {title, description, errors, category, isAdmin, department} = this.state;
        const {departments} = this.props;
        const categoryOptions = [
            {
                value: 'public',
                text: 'Public Posts'
            },
            {
                value: 'departmental',
                text: 'Department Posts'
            }];

        return (
            <Fragment>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Add Post</li>
                </ol>

                <h1>Add Post</h1>
                <form onSubmit={this.onSave}>
                    <TextInput name='title'
                               label="Post Title"
                               value={title}
                               error={errors.title}
                               onChange={this.handleChange}/>
                    {
                        isAdmin ?

                            <SelectInput
                                name='category'
                                label="Post Category"
                                value={category}
                                error={errors.category}
                                options={categoryOptions}
                                defaultOption="Select a Category"
                                onChange={this.handleChange}/>
                            : null
                    }
                    {
                        category === 'departmental' ?

                            <SelectInput
                                name='department'
                                label="Post Department"
                                value={department}
                                error={errors.department}
                                options={departments}
                                defaultOption="Select a Department"
                                onChange={this.handleChange}/>
                            : null
                    }

                    <Textarea name="description"
                              label="Post Description"
                              value={description}
                              error={errors.description}
                              onChange={this.handleChange}/>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePost: bindActionCreators(addPost, dispatch)
    }
}

const mapStateToProps = ({posts: {errors}, posts, auth: {user}, departments: {departments}}) => {
        const departmentFormattedForDropdown = departments.map(department => {
        return {
            value: department.id,
            text: department.title
        };
    });
    return {
        errors,
        posts,
        user,
        departments: departmentFormattedForDropdown
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);