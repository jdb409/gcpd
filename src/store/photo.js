import axios from 'axios';

// Action types

const UPLOAD_PHOTO = 'UPLOAD_PHOTO'

// Action creators

const uploadPhoto = (matchInfo) => {
    return {
        type: UPLOAD_PHOTO,
        matchInfo
    }
}

//Thunk

export const uploadPhotoToServer = (photo) => {
    return (dispatch) => {
        
        axios.post('https://www.headlightlabs.com/api/gcpd_lookup', photo)
            .then(res => res.data)
            .then(matchInfo => {
                dispatch(uploadPhoto(matchInfo));
            })
    }
}


export const reportGCPD = (photo) => {
    return (dispatch) => {
        
        axios.post('https://www.headlightlabs.com/api/gcpd_report', photo)
            .then(res => res.data)
            .then(status => {
                dispatch(uploadPhoto(status));
            })
    }
}

// Reducer

export default function (state = {}, action) {
    switch (action.type) {
        case UPLOAD_PHOTO:
            return Object.assign({}, state, action.matchInfo);
        default:
            return state;
    }
}