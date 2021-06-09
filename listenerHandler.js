/*
    How to set up
    1. Create a folder called "listeners"
    2. Export the client as "bot" (ex.: if your client is called "client", you have to type "exports.bot = client" (without double quotes))
    3. Insert the following code into the bot's main file (typically index.js or bot.js), replacing "client" with your client's name (like bot)
    4. Create a file for every listener you want and write the template into
*/

client.on("ready", () => {
    startListeners()
})

function startListeners() {
    for (file of require("fs").readdirSync("listeners")) {
        require("./listeners/" + file)
    }
}
