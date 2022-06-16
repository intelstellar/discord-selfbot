const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("project đang chạy vui lòng chờ trong giây lát :>");
})

app.get("/", (req, res) => {
  res.send("bot đã chạy :>");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if (message.content === "_taiai") {
    message.channel.send("tại cộng sả-")
  }
  if (message.content === "_angang") {
    message.channel.send("segs")
  }
  if (message.content === "_fact") {
    message.channel.send("`Why kronieo#0001 is the best ww?: - gei,- gei, - gei, - gei, - super gei, - he is gei, - gei everyday, - gEI`")
  }
    if (message.content === "_top") {
    let _top = new Discord.MessageEmbed()
    .setTitle("tOp lÍ dO vÌ sAo bẠn nÊn cHơI AstralSMP :")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription("click vào tiêu đề bên trên đi :>")
    .setFooter("AstralSMP", "https://c.tenor.com/LLbF8cYdN3AAAAAC/fast-catjam.gif")
    .setColor("RANDOM")
    .addField("Top 1", "Kronieo trùm :smirk:")
    .addField("Top 2", (message.author.username, "AmongUS"))
    .addField("Top 3", "Ko bt nói j lun :flame:")
    .addField("Top 4", "Segs")
    .addField("Top 5", "Ur mom ga-", true)
    .addField("Top 6", "who care", true)
    .addField("Top 7", "Wysi", true)
    .addField("Top 8", "Ai hoi", true)
    .addField("Top 9", "gke v s", true)
    .addField("Top 10", "oắt đờ phắc ", true)
    .addField("jk", "jkjkjkjkjkjkjk :penguin:")
    .setThumbnail(message.author.displayAvatarURL())
    .setImage("https://libredd.it/img/2gjsyz4cb2081.jpg")
    .setTimestamp(new Date('July 27, 2727'))

    message.channel.send( { content: "***||ai nhìn làm chóa =)))||***", embeds : [ _top ] } )
  }
  if (message.content === "_secret") {
    let _secret = new Discord.MessageEmbed()
    .setTitle("tổng hợp fact siêu thú vị về **kevin73091** ;-;")
    .setDescription("dành tặng bạn Khôi gei :)))")
    .setFooter("AstralSMP", "https://c.tenor.com/LLbF8cYdN3AAAAAC/fast-catjam.gif")
    .setColor("RANDOM")
    .addField("fact 1:", "Kevin ỉa chảy")
    .addField("fact 2:", "đai đen karate nhưng thích sẽ gầy âe :OOOOOO")
    .addField("Kevin gay vcl", "need proof ?, nhìn xuống dưới:3")
    .setImage("https://cdn.discordapp.com/attachments/852732629635956756/931537410007924826/a.PNG")

    message.channel.send( { content: "***||ai nhìn làm chóa =)))||***", embeds : [ _secret ] } )
  }
  if (message.content === "_punch") {
    let _punch = new Discord.MessageEmbed()
    .setTitle("Cú đấm sấm sex !!!!!!!!!", message.author.username)
    .setImage("https://c.tenor.com/XBL6JcrXXHwAAAAC/heroes-of-the-storm-punch.gif")

    message.channel.send( { embeds : [ _punch ] } )
  }
  if (message.content === "_ip") {
    let _ip = new Discord.MessageEmbed()
    .setTitle("**hey, đây là địa chỉ ip của server smp :D :**", message.author.username)
    .setDescription("*premium account only:*")
    .addField("ip address:", "13.213.35.217", true)
    .addField("version:", "1.16.5", true)
    .setImage("https://i.gifer.com/embedded/download/CK5.gif")

    message.channel.send( { embeds : [ _ip ] } )
  }
  if (message.content === "_sua") {
    message.channel.send("https://www.youtube.com/watch?v=csfSnprNxBw")
  }
  if (message.content === "_gaugau") {
    message.channel.send("kevin sủa gâu gâu")
  }
  if (message.content === "_bark") {
    let _ip = new Discord.MessageEmbed()
    .setTitle("**no title...**", message.author.username)
    .setDescription("*sech*")
    .addField("ip address:", "bark", true)
    .setImage("https://i.gifer.com/embedded/download/CK5.gif")

    message.channel.send( { embeds : [ _ip ] } )
  }
  if (message.content === "_now") {
    message.channel.send("dead bot ._.")
  }
})

client.login(process.env.token)