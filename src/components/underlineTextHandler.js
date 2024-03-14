import {EditorState} from "draft-js";

  
  export const underlineTextHandler = (
    selectionState,
    contentState,
    block,
    text,
    blockKey,
    editorState
  )=> {
    const newSelection = selectionState.merge({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: text.indexOf(" ") + 1,
    });
    const newContentState = contentState.merge({
      blockMap: contentState.getBlockMap().merge({
        [blockKey]: block.merge({
          type: "block-underline",
          text: text.slice(4),
        }),
      }),
    });
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      "change-block-data"
    );
    return EditorState.forceSelection(newEditorState, newSelection);
  };
  