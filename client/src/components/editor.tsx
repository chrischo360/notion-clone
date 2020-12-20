import * as React from "react";
import { EditorContext } from "./EditorContext";
import {
  Box,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import { Title, AddAPhoto, Link, Check } from "@material-ui/icons";
import {
  Editor,
  EditorState,
  Modifier,
  getVisibleSelectionRect,
  CompositeDecorator,
  convertToRaw,
  AtomicBlockUtils,
  ContentBlock,
} from "draft-js";
import draftUtils from "draft-js-plugins-utils";
import { linkStrategy } from "./linkStrategy";
import { DecoratedLink } from "./DecoratedLink";
import { MediaComponent } from "./MediaComponent";

<Box onClick={focusEditor} p={4}>
  <EditorContext.Provider value={editorState}>
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Click here to start typing in the editor..."
      blockRendererFn={renderBlock}
      ref={editor}
    />
  </EditorContext.Provider>
</Box>;
