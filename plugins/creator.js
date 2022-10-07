const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	conn.p[id] = [
	await conn.sendKontak(m.chat, `${nomorown.split`@`[0]}`, fgif, { contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: 'https://Instagram.com/sahrulwara_____',
    mediaType: 2,
    body: 'Owner Saya Ganteng Loh Kak',
    title: 'Nih My Owner',
    sourceUrl: sgc,
    thumbnail: await(await fetch('https://telegra.ph/file/8b8dfb14adc5ccc25d4ae.jpg')).buffer(),
     }}
  })
	]
	await delay(100)
  return conn.sendMessage(m.chat, { text: `Hay kak @${m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^`, mentions: [m.sender] }, { quoted: conn.p[id][0]
  })
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
