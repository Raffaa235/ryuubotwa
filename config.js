const fs = require("fs")
const chalk = require("chalk")

//Others
global.owner = ['6282230196826','6285789004732']
global.nomerowner = "6282230196826"
global.ownername = "Raffa Official"
global.namebot = "NeoBase-MD"
global.sessionName = "session"
global.log0 = fs.readFileSync("./media/image/thumb.jpg")
global.qris = fs.readFileSync("./media/image/qris.jpg")
global.fonts = "© Created By Raffa Official"

//Exif
global.packname = "NeoBase"
global.author = "By Raffa"

//Message
global.mess = {
success: '*berhasil*',
admin: '*hanya untuk di group saja !*',
botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
owner: '*Fitur Khusus Owner Bot*',
group: '*Fitur Digunakan Hanya Untuk Group!*',
private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
bot: '*Fitur Khusus Pengguna Nomor Bot*',
wait: '*tunggu bang 🗿!*',
ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}

//Pengguna
global.rkyt = []

//Limit
global.limitawal = {
premium: "Infinity",
free: "infinity"
}

//Pembatas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})