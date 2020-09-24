const discord = require("discord.js")
const client = new discord.Client()

client.on("ready" , () => {
    console.log("Boni has appeared")
});


client.on("message", message => {
    if(message.content === "!ping") {
        return message.channel.send("pon " + client.ws.ping)
    }
})

client.login(NzU3OTI0NjMzMjg1NDkyNzU2.X2neUg.f1lmbttcfB9LQd5eW2wKlJ7fUXc)
