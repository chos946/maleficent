exports.default = {
   names: ['Group Menu'],
   tags: ['groupon', 'buka','gc open'],
   command: ['groupon', 'buka','gc open'],
   start: async (m, {
      conn
   }) => {
      await conn.groupSettingUpdate(m.chat, "not_announcement");
      m.reply(`Group Telah Di Buka Semua Anggota Dapat Mengirim Pesan`)
   },
   group: true,
   admin: true
};
