class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}

const questions = [
  // new Question(
  //   "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
  //   ["indexOf()", "map()", "filter()", "reduce()"],
  //   "filter()"
  // ),
  // new Question(
  //   "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
  //   ["isNaN()", "includes()", "findIndex()", "isOdd()"],
  //   "includes()"
  // ),
  // new Question(
  //   "Quelle méthode transforme du JSON en un objet Javascript ?",
  //   ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
  //   "JSON.parse()"
  // ),
  // new Question(
  //   "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
  //   ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
  //   "Math.round()"
  // ),
  new Question(
    "Quelle est la capitale de l'Australie ?",
    ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    "Canberra"
  ),
  new Question(
    "Qui a peint la Joconde ?",
    ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Léonard de Vinci"],
    "Léonard de Vinci"
  ),
  new Question(
    "Quel est le plus grand océan du monde ?",
    ["Océan Atlantique", "Océan Indien", "Océan Pacifique", "Océan Arctique"],
    "Océan Pacifique"
  ),
  new Question(
    "Quel est le symbole chimique de l'eau ?",
    ["O2", "H2O", "CO2", "H2"],
    "H2O"
  ),
  new Question(
    "Qui a écrit Les Misérables ?",
    ["Gustave Flaubert", "Victor Hugo", "Émile Zola", "Alexandre Dumas"],
    "Victor Hugo"
  ),
  new Question(
    "Dans quel pays se trouve la Tour Eiffel ?",
    ["Italie", "Allemagne", "Espagne", "France"],
    "France"
  ),
  new Question(
    "Quelle est la planète la plus proche du Soleil ?",
    ["Vénus", "Mars", "Mercure", "Jupiter"],
    "Mercure"
  ),
  new Question(
    "Quel est le plus long fleuve du monde ?",
    ["Amazone", "Nil", "Mississippi", "Yangtsé"],
    "Amazone"
  ),
  new Question(
    "Quel est le plus grand désert du monde ?",
    ["Sahara", "Désert de Gobi", "Désert d'Arabie", "Antarctique"],
    "Antarctique"
  ),
  new Question(
    "Qui est l'auteur de la théorie de la relativité générale ?",
    ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
    "Albert Einstein"
  ),
];

class Quizz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEndend() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}
// Quiz display
const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  question: function () {
    this.elementShown("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;
    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function () {
    this.elementShown(
      "progress",
      `Question ${quiz.currentQuestionIndex + 1} sur ${quiz.questions.length}`
    );
  },
  endQuiz: function () {
    let endQuizHTML = `
    <h1>Quiz terminé !</h1>
    <h3>Votre est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
    this.elementShown("quiz", endQuizHTML);
  },
};

// Game logic
quizApp = () => {
  if (quiz.hasEndend()) {
    display.endQuiz();
  } else {
    display.question();
    display.choices();
    display.progress();
    
  }
};

// Create Quiz
let quiz = new Quizz(questions);

quizApp();
