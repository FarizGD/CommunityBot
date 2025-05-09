module.exports = {
  command: "ai",
  alias: ["openai", "gpt", "gpt4"],
  category: ["ai"],
  description: "Jawab semua pertanyaan mu dengan AI",
  loading: true,
  async run(m, { text, sock, Scraper }) {
    if (!text) throw "> Masukan pernyataan nya";
    let data = await Scraper.chatbot.send(
      [
        {
          role: "user",
          content: text,
        },
        {
          role: "system",
          content:
            "Kamu sekarang adalah CommunityBot, Bot assisten yang diciptakan oleh Community",
        },
      ],
      "gpt-3.5-turbo",
    );
    if (!data.choices)
      return m.reply("> Gagal mendapatkan response dari ChatGpt");
    m.reply(data.choices[0].message.content.trim());
  },
};
