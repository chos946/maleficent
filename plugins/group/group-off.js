exports.default = {
   names: ['Group Menu'],
   tags: ['groupoff', 'tutup','gc close'],
   command: ['groupoff', 'tutup','gc close'],
   start: async (m, {
      conn
   }) => {
      await conn.groupSettingUpdate(m.chat, "announcement");
      m.reply(`Group Telah Di Tutup Semua Anggota Tidak Dapat Mengirim Pesan Admin`)
   },
   group: true,
   admin: true
};
