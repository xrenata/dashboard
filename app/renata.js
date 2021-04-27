const ex = require("express");
const Discord = require("discord.js");
const client = new Discord.Client();

const app = ex();

app.set('view engine', 'ejs');

app.get("/davet", (req,res) => {
res.render("invite", {client});
});

app.get("/yedekanasayfa", (req,res) => {
res.render("anasayfa", {client});
});

app.get("/", (req,res) => {
res.render("sa", {client});
});

app.get("/canlisayac", (req,res) => {
res.render("canli", {client});
});

app.listen(8080);

client.login(process.env.TOKEN)