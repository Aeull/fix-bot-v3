let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	await conn.sendContact(m.chat, global.owner, fgif)

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
