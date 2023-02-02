import { useEffect, useRef } from "react";
import './App.css';
import './libs/sunbird-generic-editor';

function App() {
  const sunbirdGenericEditorRef = useRef(null);
  const editorConfig = {
    mode: 'read'
  }
  useEffect(() => {

    const handleEditorEvent = (event) => {
      console.log("Editor Event", event);
    };

    const editorElement = sunbirdGenericEditorRef.current;
    editorElement.addEventListener("loadComp", handleEditorEvent);
    console.log("Hello");
    
    return () => {
      editorElement.removeEventListener("loadComp", handleEditorEvent);
    };

  }, []);
  return (
    <div className="App">
      <sunbird-generic-editor
        config={JSON.stringify(editorConfig)}
        ref={sunbirdGenericEditorRef}
      ></sunbird-generic-editor>
    </div>
  );
}

export default App;
