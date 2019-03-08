import React from 'react';

const EditDayPage = (props) => {
    return (
        <div>
            <p>Editing Day Page with id of {props.match.params.id}</p>
        </div>
    )
}

export default EditDayPage;