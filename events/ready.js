global.viper.on("ready", () => {
  console.log("---------------------------------------------------");
  console.log(`Logged in as ${global.viper.user.username} - ${OS.platform()}`);
  console.log("---------------------------------------------------");

  global.viper.user.setActivity('an impending mass cas', { type: 'WATCHING',url : "https://github.com/Skullfox/discord-viper" })
    .catch(console.error);
});
