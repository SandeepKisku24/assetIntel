import React from "react";
import { useRef, useEffect } from "react";
import { Editor } from "draft-js";
import { headingTextHandler } from "./headingTextHandler";
import { redTextHandler } from "./redTextHandler";
import { boldTextHandler } from "./boldTextHandler";
import { underlineTextHandler } from "./underlineTextHandler";
import { handleNormalText } from "./handleNormalText";

const TextEditor = ({editorState, handleEditorState})=>{
    
    // focus control 
    const inputRef = useRef(null);
    useEffect(()=>{
      inputRef.current.focus();
    })

    // handleOnChange
    const onChangeHandler= (editorState)=>{
    const selection = editorState.getSelection();
        const content = editorState.getCurrentContent();
        const block = content.getBlockForKey(selection.getStartKey());
        const text = block.getText();
        const contentState = editorState.getCurrentContent();
        const selectionState = editorState.getSelection();
        const blockKey = block.getKey();

        
        if (text.startsWith("# ")) {
          const newEditorState = headingTextHandler(
            selectionState,
            contentState,
            block,
            text,
            blockKey,
            editorState
          );
          handleEditorState(newEditorState);
          return true;
            } 
          else if (text.startsWith("*** ")) {
            const newEditorState = underlineTextHandler(
            selectionState,
            contentState,
            block,
            text,
            blockKey,
            editorState
          );
          handleEditorState(newEditorState);
          return true;
           } 
           else if (text.startsWith("** ")) {
          const newEditorState = redTextHandler(
            selectionState,
            contentState,
            block,
            text,
            blockKey,
            editorState
          );
          handleEditorState(newEditorState);
          return true;
        } else if (text.startsWith("* ")) {
          const newEditorState = boldTextHandler(
            selectionState,
            contentState,
            block,
            text,
            blockKey,
            editorState
          );
          handleEditorState(newEditorState);
          return true;
        }
        else if(text.startsWith("! "))
        {
          const newEditorState = handleNormalText(
            selectionState,
            contentState,
            block,
            text,
            blockKey,
            editorState
          );
          handleEditorState(newEditorState);
          return true;   
        }
        else{
          handleEditorState(editorState);
          return false; 
        }
      };

    // type of block and style

    const styleFunction = (contentBlock)=>{
        const type = contentBlock.getType();
        if (type === "block-bold") {
          return "BoldBlock";
        }
        if (type === "block-red") {
          return "RedBlock";
        }
        if (type === "block-underline") {
          return "UnderlineBlock";
        }
        if (type === "header-one") {
          return "headerOne";
        }
        if(type === "none"){
          return "noStyle"
        }
    }
    return(
        <div className="editor" >
            <Editor ref={inputRef} placeholder=" start writing here " 
            editorState={editorState} 
            onChange={onChangeHandler}
            blockStyleFn={styleFunction} />
        </div>
    )
}

export default TextEditor;