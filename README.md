# Welcome to the Desktop programs github repository
Here you can add your own custom programs to the [minimos11 Desktop](http://minimos11.net/code/Desktop/) also accesable with code `Desktop`.

## Documentation

### How to create a program.

First create a function with your program's name + $dex keep it all lowercase so it can be run by the run dialog and should be unique from any other program.
I also recommend for concistancy to also use it as the window ID and keep it short like on or two short words.
Add a pass through variable where different events/parameters are passed through like close.

Then you have to create a window.

### How to create a window
Here is a basic template to create a window:
```
function myprogram$dex(call){
    if(call == null){
        generateWindow(null, "myprogram", "My program", "/resources/code-sub-pages/window.ico", "");
        document.querySelector('#myprogram .window-body').innerHTML = "<h3>My sweet program</h3>";
        let window = document.getElementById('myprogram');
        window.style.height = "170px";
        window.style.width = "180px";
    }
    if(call == "_CLOSE"){
        //clean up
        console.log('My program closed');
    }
}
```

To create a window the first thing your gone have to call is the generate window API/function.

`generateWindow("1.", "2. The window ID", "3. The window Title", " 4. The window icon source", "5. window ctrl buttons", "6. specify parent window");`

1. Type a null here because this is only used for system programs to not have a window body generated.
2. The window ID should be unique from any other program and is required. (I would recommend to have it be the same as your function's name)
3. The window title can be any amount of character just don't make it to long.
4. Use any url but best if it is a image in base64 and around 32px in width and height.
5. Specify the window control buttons like close, leave blank for default. (`0` = no controls. `1` = only close button. `2` = Default with Maximize disabled.)
6. This is usefull if you want to create a sub window but have the programs function receive the close message intead of a function with the dialogs id and can also be used if your functions name is different from the window id.

To set the height and width use:
```
let window = document.getElementById('myprogram');
window.style.height = "170px";
window.style.width = "180px";
```
You can also add any other styles if necessary.
And don't forget to replace 'myprogram'

### Add your content

To access your window's content and add more use: `document.querySelector('#myprogram .window-body')`
And replace the #myprogram with your window ID.
You can use `.inerHTML` or `.insertAdjacentHTML` depending on how you want to do it.
Make sure it is all in a if statment that checks if the pasthrough variable is = to null.
Like this:
```
if(call == null){
    //Your window creation and adding content
}
```

### Adding closing actions

When the close button or the icon is dubble clicked it first calls the windowID as a function with variable of `"_CLOSE"`.
```
function myprogram$dex(call){
    if(call == "_CLOSE"){
        //Actions
    }
}
```
For sub windows make sure you specify the 6th "parent window" parameter in generate window with your programs function name.
This is so the _CLOSE calls are sent to your main function so you can preform actions based on them.
Close messages from windows with a specified parent follow this structure `"_CLOSE_" + windowID`.

### How it runs

When it gets added to the main branch you can access the program by typing the function name of the program in the run dialog.
And it will run the function if it exists.

### How to test

Open dev tools and add:
```
<script>
// Your function here.
</script>
```
Some where in the Desktop's page document.
And type you functions name in the run dialog.

### Extra functions you can call

Message box:

`messageBox(1. parent, 2. message, 3. title, 4. type);`

1. Specify the parent function.
2. Error message string (What every you like).
3. Title of the message box.
4. The type. Currently available: `error`,.

## That's all for now....
