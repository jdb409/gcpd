import React, { Component } from 'react';
import axios from 'axios';

class UploadPhoto extends Component {
    constructor() {
        super();
        this.state = {
            dataUri: '',
            photo: ''
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // let promise = new Promise((resolve) => {
        //     this.setState({
        //         photo: this.state.dataUri
        //     });
        //     resolve(this.state);
        // })
        let payload = {
            api_key: 'ZcWnM_2Gs8s2xWFB-p-hhw',
            image_contents: this.state.dataUri
        };
        
        axios.post('https://www.headlightlabs.com/api/gcpd_lookup', payload)
        .then(res => res.data)
        .then(info => {
            console.log(info);
        })
        console.log(this.state);
    }   

    handleFile(e) {
        const reader = new FileReader();
        const file = e.target.files[0]

        reader.onload = (upload) => {
            this.setState({
                dataUri: upload.target.result
            });
        }
        reader.readAsDataURL(file);
    }

    render() {

        return (
            <div>
                <div className='card-body'>
                    <label>Upload an image</label>
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <input onChange={this.handleFile} type="file" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UploadPhoto;