import React from "react";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { useState,useEffect } from "react";
import Title from "./components/title";
import Button from "./components/button";
import TextEditor from "./components/editor";
import Info from "./components/info";
import './App.css'

function App() {
  const [editorState,handleEditorState] = useState(() =>EditorState.createEmpty());
  const [saveStatus, setSave] = useState(false);

  useEffect(() => {
    let localItem = localStorage.getItem("contentOfEditor");
    if (localItem) {
      const context = convertFromRaw(JSON.parse(localItem));
      handleEditorState(EditorState.createWithContent(context));
    }
    
  }, []);

  useEffect(()=>{
    setSave(false);
  },[editorState])
  const handleClick = ()=>{
    console.log(editorState);
    localStorage.setItem(
      "contentOfEditor",
      JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    );
    setSave(true);
  }
  return (
    <div className="App">
      <div className="titleAndSave">
        <Title/>
        <Button handleClick={handleClick} saveStatus ={saveStatus}/>
      </div>
      <TextEditor editorState={editorState} handleEditorState = {handleEditorState}/>
      <Info/>
    </div>
  );
}

export default App;
