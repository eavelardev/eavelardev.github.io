#  VS Code ext to paste one line

This extension helps you to paste multiline text copied from an html paragraph for example, concatenating the content in one line, removing extra space characters and parsing the content to a JSON/Python compatible string, adding `\` to `"` character for example, saving time trying to format strings.

**Download**

[pasteoneline-0.0.1.vsix](https://eavelardev.github.io/files/pasteoneline-0.0.1.vsix)

**Install**
```
code --install-extension pasteoneline-0.0.1.vsix
```

**Command**

Ctrl + Shift + v

**Source code**

`extension.js`
```js
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('pasteoneline.paste', () => {

        vscode.env.clipboard.readText().then((text) => {
            
            let oneline = text.replace(/\s+/g, ' ');
            let jsformat = JSON.stringify(oneline)

            vscode.env.clipboard.writeText(jsformat.slice(1, -1)).then(() => {
                vscode.commands.executeCommand('editor.action.clipboardPasteAction');
                vscode.env.clipboard.writeText(text);
            });
        });
    });

    context.subscriptions.push(disposable);
}
```

`package.json`
```json
"contributes": {
    "commands": [
        {
        "command": "pasteoneline.paste",
        "title": "Paste one line"
        }
    ],
    "keybindings": [
        {
        "command": "pasteoneline.paste",
        "key": "ctrl+shift+v"
        }  
    ]
}
```