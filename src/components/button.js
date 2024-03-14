import React from "react";

const button = ({handleClick, saveStatus})=>{
   
    return (
        <div className="button">
            <button onClick={handleClick} type="submit"> {saveStatus ? <div>Saved</div> :<div>Save</div> } </button>
        </div>
    )
}

export default button;