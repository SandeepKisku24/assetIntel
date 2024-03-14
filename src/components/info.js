import React from "react";
 const info = ()=>{
    return(
        <div className="info">
            <div className="infoTitle"> <span class="material-symbols-outlined">info</span> Info</div>
            <ul>
                <li>Press '#' followed by 'space' for following text to be in Heading 1</li>
                <li>Press '*' followed by 'space' for following text to be in bold </li>
                <li>Press '**' followed by 'space' for following text to be in red color</li>
                <li>Press '***' followed by 'space' for following text to be underlined</li>
                <li>Press '!' followed by 'space' for following text to be normal text</li>
            </ul>
        </div>
    )
 }
 export default info;