//__dirname  - path to current directory
//__filename - current filename
// require   - function to use modules
// module    -  info about current module(file)
//process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);
//console.log(module);
//console.log(process);
setInterval(() => {
    console.log('Hello');
}, 10000);