import React from "react";


function Clock() {
    return (
        <div>
            Time is: {new Date().toLocaleTimeString()}
        </div>
    )
}

export default Clock;