import * as dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits } from "discord.js";
import { validateEnv } from "./utils/validateEnv";
import { connectDatabase } from "./database/connect";
import { onInteraction } from './events/onInteraction';
import { onReady } from './events/onReady';

console.log("Bot is starting...");

if (!validateEnv()) {
    console.error('Something is misconfigured, please check your environment settings');
    process.exit(1);
};

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers]
});

client.on("ready", async () => await onReady(client));

client.on('interactionCreate', async (interaction) => await onInteraction(interaction));

client.login(process.env.DISCORD_BOT_TOKEN);