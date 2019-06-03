/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { RichTextEditor } from "@arneson/react-native-rich-text-editor";

type Props = {};
export default class App extends Component<Props> {
  onEditorInitialized = () => {};
  render() {
    return (
      <RichTextEditor
        ref={r => (this.richtext = r)}
        initialTitleHTML={"Title!!"}
        initialContentHTML={
          "Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>"
        }
        editorInitializedCallback={() => this.onEditorInitialized()}
      />
    );
  }
}
