import { Client, GatewayIntentBits } from "discord.js";
import keys from "../keys";
import { registerEvents } from "../utils"
import events from '../events'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
    ],
})

registerEvents(client, events)

client.login(keys.clientToken).catch(err => {
    console.error(`[Log-in Error ${err}]`)
    process.exit(1)
})

