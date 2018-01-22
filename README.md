# notes-node
Simple node app that takes and stores notes through the console. It will take your notes down by running a single command at the command line. 
Notes are stored in a .json file in your directory called "notes-data.json." Commands are add, remove, list, and read. Each is specified 
below. 

## Instalation

Download this repository and navigate in terminal to directory. 
Run npm install in directory to download dependancies.

```root@localhost:npm install```
## Running the Program
Notes Node utilizes command line arguments to facilitate the storage of notes. Add flags after the execution of the app.js file to controlwhat you want done.

### Add Note
If you want to add a note to your file system, use the following command.
```root@localhost:node app.js add --title="Insert note title here" --body="Insert note body here"```

or

```root@localhost:node app.js add -t="Insert note title here" -b="Insert note body here"```

### Remove Note
If you wish to remove a note from your file system, execute this command.
```root@localhost:node app.js remove --title="Insert note title here you wish to remove"```

or

```root@localhost:node app.js remove -t="Insert note title here you wish to remove"```

### Read Note

If you wish to read a note from your file system, execute this command.
```root@localhost:node app.js read --title="Insert note title here you wish to read"```

or

```root@localhost:node app.js remove -t="Insert note title here you wish to read"```

### List Notes
If you wish to list your notes that are in your file system, execute this command.
```root@localhost:node app.js list```

## Key
### Commands: 
```
add - Add a note
remove - Remove a note
list - List all notes in system
read - Read a specific note
```
### Flags
```
--title, -t - Title of note
--body, -b - Body of note
--help - Help with a command
```

If you find any errors please report them. This project was made for learning purposes only.

