import { SlashCommandBuilder } from '@discordjs/builders';
import { EmbedBuilder, CommandInteractionOptionResolver } from 'discord.js';
import { ICommand } from '../interfaces/Command';

export const Hello: ICommand = {
    data: new SlashCommandBuilder().setName('hello')
    .setDescription('Say Hello! Returns a greeting with a gif')
    .addStringOption(
        (option) => option.setName('message')
            .setDescription('A message to say')
            .setRequired(true)),
    run: async (interaction) => {
        //await interaction.deferReply();
        const { user } = interaction;
        let text: string = '';
        if (interaction.isChatInputCommand()){
            text = interaction.options.getString('message', true);
        }

        const embed = new EmbedBuilder().setColor('#C0FFEE')
            .setTitle('Hello there!')
            .setDescription('How are you?')
            .addFields(
                { name: 'Regular field title', value: text },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .setImage('https://i.imgur.com/CCa3VKi.gif')
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        await interaction.reply({embeds: [embed]})
            .then(() => console.log('Reply sent'))
            .catch(console.error);
      },
};