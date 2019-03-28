import { combineReducers } from 'redux';
import posts from './posts';
import errors from './errors';
import messages from './messages';
import auth from './auth'
import departments from './departments';
import roles from './roles';
import users from './users';

export default combineReducers({
    posts,
    errors,
    messages,
    auth,
    departments,
    roles,
    users
})