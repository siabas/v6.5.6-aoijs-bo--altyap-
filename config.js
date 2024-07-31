module.exports = {
  token: "TOKEN",
  prefix: ["?"],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildMembers"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        securityKey: "key value",
    }
}
