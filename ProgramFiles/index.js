const programList = [
    'ExampleProgram/MyProgram.js',
    
    //'path/to/your/program2.js',
    // Add here the address to your programs js file (Relative).
];

// Function to load scripts
function loadPrograms(programs) {
    programs.forEach(src => {
        const script = document.createElement('script');
        script.src = 'https://minimos11.github.io/DesktopPrograms/ProgramFiles/' + src; //Makes the adress absolute and adds it to src of the script tag. 
        document.head.appendChild(script);
    });
}
loadPrograms(programsList);
