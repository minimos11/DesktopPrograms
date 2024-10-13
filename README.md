# Welcome to the Desktop programs github repository
Here you can add your own custom programs to the [minimos11 Desktop](http://minimos11.net/code/Desktop/) also accesable with code `Desktop`.

Note: This feature will be available in the next version of the minimos11 website.

## Documentation

### How to create a program.

First create a function with your program name keep it all lowercase so it can be run by the run dialog and should be unique from any other program.
I also recommend for concistancy to also use it as the window ID and keep it short like on or two short words.

Then you have too create a window.

### How to create a window
Here is a basic template to create a window:
```
function myprogram(){
    generateWindow("", "myprogram", "My program", "/resources/code-sub-pages/window.ico", "");
    document.querySelector('#myprogram .window-body').innerHTML = "<h3>My sweet program</h3>";
    let window = document.getElementById('myprogram');
    window.style.height = "170px";
    window.style.width = "180px";
}
```

To create a window the first thing your gone have to call is the generate window API/function.

`generateWindow("1.", "2. The window ID", "3. The window Title", " 4. The window icon source", "5. window ctrl buttons");`

1. Leave blank this is only used for system programs to not have a window body generated.
2. The window ID should be unique from any other program and is required. (I would recommend to have it be the same as you function name)
3. The window title can be any amount of character just don't make it to long.
4. Use any url but best if it is in base64 and around 32px in width and height.
5. Specify the window control buttons like close, leave blank for default. (`0` = no controls. `1` = only close button.)

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

## That's all for now....
