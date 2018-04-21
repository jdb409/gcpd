import React from 'react';
import ReportMatch from './ReportMatch';


const DisplayResult = (props) => {
    const matchInfo = props.photo;
    return (
        <div>
            {matchInfo.closest_match ?
                <div>
                    <h1>Results</h1>
                    <p>{matchInfo.closest_match}</p>
                    {props.photo.status ?
                        <p>{props.photo.status}</p>
                        :
                        <ReportMatch />
                    }
                </div>
                :
                null
            }
        </div>
    )
}

export default DisplayResult;
