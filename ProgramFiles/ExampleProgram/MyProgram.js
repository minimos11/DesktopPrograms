function myprogram$dex(){
    generateWindow(null, "myprogram", "My program", "resources/window.ico", "");
    document.querySelector('#myprogram .window-body').innerHTML = "<h3>My sweet program</h3>";
    let window = document.getElementById('myprogram');
    window.style.height = "170px";
    window.style.width = "180px";
}
