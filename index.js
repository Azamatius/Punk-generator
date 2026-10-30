import express from "express";

const app = express();
const port = 3000;

const adjectives = [
  "Подвальный",
  "Недоваренный",
  "Прокисший",
  "Потрёпанный",
  "Заблёванный",
  "Вчерашний",
  "Тревожный",
  "Слегка тухлый",
  "Бесхозный",
  "Стыдный",
  "Потный",
  "Космически странный",
  "Полусонный",
  "Зубастый",
  "Неприкаянный",
  "Грустный",
  "Перекошенный",
  "Кишечный",
  "Уставший",
  "Культовый",
];

const nouns = [
  "пельмень",
  "унитаз",
  "тапок",
  "огурец",
  "желудок",
  "носок",
  "пакет",
  "борщ",
  "тазик",
  "батон",
  "пузырь",
  "шпрот",
  "кабачок",
  "пупок",
  "гараж",
  "дворник",
  "кишечник",
  "пылесос",
  "баян",
  "позвоночник",
];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  res.render("index.ejs", { adjective, noun });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
