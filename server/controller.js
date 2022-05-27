let coolPeople = ["Thai Tran"];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar."
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air.",
      "A fresh start will put you on your way."
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getAnswer: (req, res) => {
    const responses = [
      "As I see it, yes.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don’t count on it.",
      "It is certain.",
      "It is decidedly so.",
      "Most likely.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Outlook good.",
      "Reply hazy, try again.",
      "Signs point to yes.",
      "Very doubtful.",
      "Without a doubt.",
      "Yes.",
      "Yes – definitely.",
      "You may rely on it."
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * responses.length);
    let randomResponse = responses[randomIndex];

    res.status(200).send(randomResponse);
  },

  getCoolPeople: (req, res) => {
    res.status(200).send(coolPeople);
    console.log("cool");
  },

  addCoolPerson: (req, res) => {
    console.log("hit");
    coolPeople.push(req.body.name);
    res.status(200).send(coolPeople);
  },

//   changeName: (req, res) => {
//       for(let i = 0; i < coolPeople.length; i++) 
//   }
};
