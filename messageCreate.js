module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm')
        return;

    const prefix = client.config.prefix;

    if (message.content.indexOf(prefix) !== 0)
        return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd && cmd.voiceChannel) {
        if (!message.member.voice.channel)
            return message.channel.send(`❌ | Haiya.. you not connected to a vc la`);

        if (message.guild.members.me.voice.channel && message.member.voice.channelId !== message.guild.members.me.voice.channelId)
            return message.channel.send(`❌ | Wrong vc, you must be in the same vc as me to be able to use me la.`);
    }

    if (cmd) {
        console.log(`${message.author.username} : ${message.content}`);
        cmd.execute(client, message, args);
    }
};
