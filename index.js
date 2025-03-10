const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} đã online!`);

    // Thay đổi status của bot BotGhost
    client.user.setActivity("🎮 Đang chơi game!", { type: "PLAYING" });

    // Hoặc đặt trạng thái "dnd" (Không làm phiền)
    client.user.setStatus("dnd"); 
});

client.login(process.env.TOKEN);
