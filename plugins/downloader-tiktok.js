import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = '*ArullBotz*'
  conn.sendButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, 'Thanks', 'bilek', m)
    }

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true,
handler.register = true,
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
