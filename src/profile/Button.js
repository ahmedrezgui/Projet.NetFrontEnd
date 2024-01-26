import React from "react";

function Button({ buttonName, active , handleClick }) {
    return (
        <>
            <button onClick={handleClick} style={{ background: active ? "#F7C159" : "#EBEBEB" }} className="w-1/3 h-10 capitalize" >{buttonName}</button>
        </>
    )

}

export default Button;