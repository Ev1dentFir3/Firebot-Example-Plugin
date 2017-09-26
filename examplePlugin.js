module.exports = {
    // The loading function is where you put all of your code that needs to run before the bot connects to your discord server. For example you would create a database schema here, or load veriables from the database or config.
	// Be careful not to put any actual bot functions here because this loads before connection. All bot functions that you need to start on connection go into the ready function found below.
    loading: function () {
        console.debug('Loading the example plugin!!!')
    },
    // Emmitted when a new channel is created.
    channelCreate: function (channel) {

    },
	// Emmitted when a channel is deleted.
    channelDelete: function (channel) {

    },
	// Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event, not much information can be provided easily here - you need to manually check the pins yourself.
    channelPinsUpdate: function (channel, time) {

    },
	// Emitted whenever a channel is updated - e.g. name change, topic change.
    channelUpdate: function (oldChannel, newChannel) {

    },
	// Emitted whenever the client user's settings update.
    clientUserGuildSettingsUpdate: function (clientUserGuildSettings) {

    },
	// Emitted when the client user's settings update.
    clientUserSettingsUpdate: function (clientUserSettings) {

    },
	// Emitted for general debugging info.
    debug: function (info) {

    },
	// Emitted when the client's WebSocket disconnects and will no longer attempt to reconnect.
    disconnect: function (event) {

    },
	// Emitted whenever a custom emoji is created in a guild.
    emojiCreate: function (emoji) {

    },
	// Emitted whenever a custom guild emoji is deleted.
    emojiDelete: function (emoji) {

    },
	// Emitted whenever a custom guild emoji is updated.
    emojiUpdate: function (emoji) {

    },
	// Emitted whenever the client's WebSocket encounters a connection error.
    error: function (emoji) {

    },
	// Emitted whenever a member is banned from a guild.
    guildBanAdd: function (guild, user) {

    },
	// Emitted whenever a member is unbanned from a guild.
    guildBanRemove: function (guild, user) {

    },
	// Emitted whenever the client joins a guild.
    guildCreate: function (guild) {

    },
	// Emitted whenever a guild is deleted/left.
    guildDelete: function (guild) {

    },
	// Emitted whenever a user joins a guild.
    guildMemberAdd: function (member) {

    },
	// Emitted whenever a member becomes available in a large guild.
    guildMemberAvailible: function (member) {

    },
	// Emitted whenever a member leaves a guild, or is kicked.
    guildMemberRemove: function (member) {

    },
	// Emitted whenever a chunk of guild members is received (all members come from the same guild).
    guildMemberChunk: function (members, guild) {

    },
	// Emitted once a guild member starts/stops speaking.
    guildMemberSpeaking: function (member, speaking) {

    },
	// Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
    guildMemberUpdate: function (oldMember, newMember) {

    },
	// Emitted whenever a guild becomes unavailable, likely due to a server outage.
    guildUnavailable: function (guild) {

    },
	// Emitted whenever a guild is updated - e.g. name change.
    guildUpdate: function (oldGuild, newGuild) {

    },
	// Emitted whenever a message is created.
    message: function (args, command, message) {
        // sends bot version
        if (command === "test") {
            message.channel.send("Yep that worked!")
            message.react(client.commandPass) // Use this to let users know the commands was successfully processed.
            // When you write your if statmenst to check command formatting, if it fails you can use `message.react(client.commandFail) to mark the bad command message with an X as an indicator.
        }
    },
	// Emitted whenever a message is deleted.
    messageDelete: function (message) {

    },
	// Emitted whenever messages are deleted in bulk.
    messageBulkDelete: function (messages) {

    },
	// Emitted whenever a reaction is added to a message.
    messageReactionAdd: function (messageReaction, user) {

    },
	// Emitted whenever a reaction is removed from a message.
    messageReactionRemove: function (messageReaction, user) {

    },
	// Emitted whenever all reactions are removed from a message.
    messageReactionRemoveAll: function (message) {

    },
	// Emitted whenever a message is updated - e.g. embed or content change.
    messageUpdate: function (oldMessage, newMessage) {

    },
	// Emitted whenever a guild member's presence changes, or they change one of their details.
    presenceUpdate: function (oldMember, newMember) {

    },
	// Emitted when the client becomes ready to start working.
    ready: function () {

    },
	// Emitted whenever the client tries to reconnect to the WebSocket.
	reconnecting: function () {
		
	},
	// Emitted whenever a WebSocket resumes.
    resume: function (replayed) {

    },
	// Emitted whenever a role is created.
    roleCreate: function (role) {

    },
	// Emitted whenever a guild role is deleted.
    roleDelete: function (role) {

    },
	// Emitted whenever a guild role is updated.
    roleUpdate: function (oleRole, newRole) {

    },
	// Emitted whenever a user starts typing in a channel.
    typingStart: function (channel, user) {

    },
	// Emitted whenever a user stops typing in a channel.
    typingStop: function (channel, user) {

    },
	// Emitted whenever a note is updated.
    userNoteUpdate: function (user, oldNote, newNote) {

    },
	// Emitted whenever a user's details (e.g. username) are changed.
    userUpdate: function (oldUser, newUser) {

    },
	// Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
    voiceStateUpdate: function (oldMember, newMember) {

    },
	// Emitted for general warnings.
    warn: function (info) {

    },
	// This section below will be included within the !help command, you can skip this if you really want to, but this is also a good time to advert your plugin. Below is an example, but for a full guide check out https://anidiotsguide.gitbooks.io/discord-js-bot-guide/examples/using-embeds-in-messages.html
    help: {
        embed: {
            color: 3447003,
            author: {
                name: ["Example Plugin"],
                icon_url: 'http://i.imgur.com/aDiphof.png'
            },
            title: "Example Plugin Commands and Info",
            description: "This is the help text for the example plugins that shows you how to create your help and info embeded text, this will show up when someone uses the !help command!",
            fields: [{
                name: "Command",
                value: "Command [arg1] [arg2] is how you use this command!"
            },
            {
                name: "Ping",
                value: "You say Ping and I say Pong!"
            },
            {
                name: "Links",
                value: "You can put [Links](http://google.com) leading back to your plugin page on the firebot website."
            },
            {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
            },
			{
                name: "More Info",
                value: "For more info on creating an embed you can check out this [guide!] (https://anidiotsguide.gitbooks.io/discord-js-bot-guide/examples/using-embeds-in-messages.html) "
            }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: 'http://i.imgur.com/aDiphof.png',
                text: "© Firebot | Example Plugin"
            }
        }

    }
};
