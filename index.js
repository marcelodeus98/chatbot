const {NlpManager} = require("node-nlp");

console.log("Chatboot is starting...");

const manager = new NlpManager({
    languages: ["en"],
})

manager.load()

let readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);


console.log("Chatbot started!");
rl.setPrompt("> ");
rl.prompt();

rl.on("line", async function(line){
    const response = await manager.process("en", line);
    console.log(response.answer);
    rl.prompt();
}).on("close", function(){
    process.exit(0);
});
