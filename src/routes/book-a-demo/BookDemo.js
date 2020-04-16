import React from 'react';


const BookaDemo = () => {
    return (
        <form>
            <h5>Schedule a video chat with our Sales officer</h5>
            <div>
                <label>When is the best time to reach you?</label>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="number" />
            </div>
            <div>
                <label>Email Id</label>
                <input type="text" />
            </div>
        </form>
    )
}

export default BookaDemo;