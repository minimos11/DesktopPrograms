const programFileList = [
    'ExampleProgram/MyProgram.js',
    
    //'path/to/your/program2.js',
    // Add here the address to your programs js file (Relative).
];

const programInfoList = [
    ['myprogram', 'My program', '/resources/code-sub-pages/window.ico'],
    
    //['function name', 'common name', 'icon']
    // Add here your programs function name, its call/common name (like taskmgr becomes Task Manager), and icon is optional.
];

// Function to load scripts
function loadPrograms() {
    programFileList.forEach(src => {
        const script = document.createElement('script');
        script.src = 'https://minimos11.github.io/DesktopPrograms/ProgramFiles/' + src; //Makes the adress absolute and adds it to src of the script tag. 
        document.head.appendChild(script);
    });

    programInfoList.forEach(Info => {
        document.getElementById("programList").insertAdjacentHTML("beforeend", `<li><button onclick="` + Info[0] + `(); DisplayWindow('` + Info[0] + `')"><img width="16px" height="16px" src="` + Info[2] + `">` + Info[0] + `.exe` + `</button></li>`)
    });
}
document.addEventListener("DOMContentLoaded", function() {
    loadPrograms();
});
