# nodejs-cli-notes-app
A ***command-line application*** built using ***nodejs***.  
It's a notes-taking app.  
It allows the user to:
- Add new notes.  
    `node app.js add --title "new note title" --body "new note body"`
- Remove existing notes.  
    `node app.js remove --title "note title"`
- List all existing notes.  
    `node app.js list`
- Read a specific note.  
    `node app.js read --title "note title"`

npm packages used in this app are:
- **[yargs](https://www.npmjs.com/package/yargs "yargs package on npm pages")** helps build interactive command line tools, by parsing arguments and generating an elegant user interface.
- **[chalk](https://www.npmjs.com/package/chalk "chalk package on npm pages")** for terminal string styling.
