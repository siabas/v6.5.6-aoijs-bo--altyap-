const { AoiClient, Util } = require("aoi.js");
const { setup } = require("aoi.parser");

const config = require("./config.js")

const client = new AoiClient(config);
client.loadCommands("./Commands/", false);

client.status({
  name: "Diamond Code Share",
  type: "CUSTOM",
  time: 12,
})

setup(Util);
