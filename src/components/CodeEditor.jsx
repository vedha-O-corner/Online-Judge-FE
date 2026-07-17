import Editor from "@monaco-editor/react";

const CodeEditor = ({
    language,
    code,
    setCode,
}) => {

    return (

        <Editor
            height="68vh"
            language={language}
            value={code}
            theme="vs-dark"
            onChange={(value) => setCode(value || "")}
            options={{

                fontSize: 15,

                fontFamily: "JetBrains Mono",

                minimap: {
                    enabled: false,
                },

                automaticLayout: true,

                scrollBeyondLastLine: false,

                wordWrap: "on",

                smoothScrolling: true,

                cursorBlinking: "smooth",

                roundedSelection: true,

                padding: {
                    top: 20,
                },

                tabSize: 4,

                insertSpaces: true,

                renderWhitespace: "selection",

                bracketPairColorization: {
                    enabled: true,
                },

            }}
        />

    );

};

export default CodeEditor;