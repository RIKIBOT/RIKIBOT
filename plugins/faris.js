let handler = async m => m.reply(`AMIN
`.trim())

handler.customPrefix = /^(faris anak)$/i
handler.command = new RegExp

handler.help = ['faris anak']
handler.tags = ['main']

handler.mods = false 
handler.premium = false
handler.group = true
handler.private = true
module.exports = handler