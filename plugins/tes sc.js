let handler = async m => m.reply(`『waalaikumsalam』`.trim())

handler.customPrefix = /^(assalamualaikum|ass|ASSALAMUALAIKUM|Assalamu'alaikum)$/i
handler.command = new RegExp

handler.help = ['Assalamualaikum']
handler.tags = ['fun']

handler.mods = false 
handler.premium = false
handler.group = true
handler.private = false
module.exports = handler