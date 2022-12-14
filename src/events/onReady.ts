import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";
import { Client } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onReady = async (client: Client) => {
  const rest = new REST({ version: "10" }).setToken(
    process.env.DISCORD_BOT_TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  /* await rest.put(
    Routes.applicationGuildCommands(
      client.user?.id || "missing id",
      process.env.GUILD_ID as string
    ),
    { body: commandData }
  ); */

  /* await rest.put(Routes.applicationCommands(client.user?.id || "missing id), {
    body: commandData
  });
  */
  await client.application?.commands.set(commandData);

  console.log(`${client?.user?.username} is connected to Discord!`)
};