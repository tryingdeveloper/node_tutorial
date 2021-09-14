const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = result;
    console.log(first);
    readFile('./content/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        const second = result;
        console.log(second);
        writeFile('./content/result-sync.txt', `Here is the result ${first}, ${second}`, (error, result) => {
            if(error){
                console.log(error)
                return;
            }
            console.log(result);
        });
    })
});