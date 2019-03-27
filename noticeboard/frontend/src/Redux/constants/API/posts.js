import axios from 'axios';

// export const addPostApi = async (post) => {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(post)
//     };

//     return await (await (await (fetch('api/posts/', options)))).json();
// }

// export const getPosts = async () => {
//     return await (await (await (fetch('api/posts')))).json();
// };

// export const DELETE_POST = async (postId) => {
//     return await fetch('api/posts/' + postId, { method: 'delete' });
// }



export const addPostApi = async (post, config) => {
return axios.post('api/posts/', post, config);
};

export const getPosts = async (category, config) => {
    if(category === 'public'){
        return axios.get('api/posts', config)
    }else{
        return axios.get('api/posts', config)
    }
};

export const DELETE_POST = async ({id, category}, config) => {
    if(category === 'public'){

    }else{
        return axios.delete('api/posts/' + id, config)
    }
};