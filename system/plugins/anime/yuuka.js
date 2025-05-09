const axios = require("axios");

const cmd = {
  command: "yuuka",
  category: ["anime"],
  alias: ["yuuka"],
  description: "Gambar Random Yuuka",
  loading: true,
  async run(m, { sock, config }) {
    try {
      let json = await axios.get("https://farizgd-api.vercel.app/random/yuuka/");
      let cap = `*– 乂 **Yuuka Random**:*\n> 💫 *Gambar Yuuka yang Baru* \n> *Ketik ${m.prefix + m.command} lagi untuk mendapatkan gambar baru!*`;

      m.reply({
        image: json.data.url,
        caption: cap,
      });
    } catch (err) {
      m.reply("> ❌ Terjadi kesalahan, coba lagi nanti.");
    }
  },
};

module.exports = cmd;
