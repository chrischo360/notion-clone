import { ReactEditor } from "slate-react";
import { Editor } from "slate/dist/interfaces/editor";

export const withMyPlugin = (editor: Editor ) => {
    const {insertText, insertData, normalizeNode, isVoid, isInline } = editor;
    editor.insertText = (text) => {
        if (text == "BEES") {
            insertText("BOOBS")

        }
        insertText(text)

    }

    editor.insertData = (data) => {
        // do something interesting!
        insertData(data);
      };

      editor.normalizeNode = (entry) => {
        // do something interesting!
        normalizeNode(entry);
      };

      editor.isVoid = (element) => {
        if (element.type === 'image') {
          return true;
        }
        return isVoid(element);
      };

      editor.isInline = (element) => {
        if (element.type === 'link') {
          return true;
        }
        return isInline(element);
      };

      return editor;
}