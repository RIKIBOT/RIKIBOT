let handler = async m => m.reply(`
⃝▣──「 𝐒𝐎𝐔𝐍𝐃」───⬣
│ ○ .sound1
│ ○ .sound2
│ ○ .sound3
│ ○ .sound4
│ ○ .sound5
▣────────────⬣
`.trim())

handler.customPrefix = /^(.kumpulan sound)$/i
handler.command = new RegExp

handler.help = ['.kumpulan sound']
handler.tags = ['sound']

handler.mods = false 
handler.premium = false
handler.group = true
handler.private = true
module.exports = handler