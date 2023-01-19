const question = document.querySelector("#question")
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What role did Sarah Michelle Gellar first audition for?",
        choice1: "Dru",
        choice2: "Buffy",
        choice3: "Willow",
        choice4: "Cordelia",
        answer: 4,
    },

    {
        question: "What season did Faith First appear on?",
        choice1: "Season 1",
        choice2: "Season 2",
        choice3: "Season 3",
        choice4: "Season 4",
        answer: 3,
    },

    {
        question: "What was the name of the Jamaican Slayer from Season 2?",
        choice1: "Kendra",
        choice2: "Kerri",
        choice3: "Glory",
        choice4: "Kelly",
        answer: 1,
    },

    {
        question: "What was Angels human name?",
        choice1: "Patrick",
        choice2: "Liam",
        choice3: "John",
        choice4: "Michael",
        answer: 1,
    },
    {
        question: "Who sired Spike?",
        choice1: "Dru",
        choice2: "Angel",
        choice3: "Daria",
        choice4: "The First",
        answer: 1,
    },
    {
        question: "What happens to everyone in the episode Once more with feeling?",
        choice1: "Everyone loses their voices",
        choice2: "Their lives turn into a musical",
        choice3: "Buffy tries to kill everyone",
        choice4: "They turn into their Hallowen costumes",
        answer: 2,
    },
    {
        question: "What happened top Xander in the final episode?",
        choice1: "He died",
        choice2: "Lost an eye",
        choice3: "Turned into a vampire",
        choice4: "He ran away",
        answer: 1,
    },
    {
        question: "Who got the very last line in the last episode",
        choice1: "Buffy",
        choice2: "Dawn",
        choice3: "Faith",
        choice4: "Giles",
        answer: 2,
    },
    {
        question: "What was the name of the lucky stake gifted to Buffy",
        choice1: "Mr.Pointy",
        choice2: "Mr. Stakey",
        choice3: "Mr.Sharpey",
        choice4: "Mr.Woody",
        answer: 1,
    },
    {
        question: "What was the name of the Human that Glory was trapped in?",
        choice1: "Finn",
        choice2: "Whiley",
        choice3: "Ben",
        choice4: "Giles",
        answer: 3,
    },
    {
        question: "What was the former demon Anya most afraid of?",
        choice1: "Horses",
        choice2: "Sunlight",
        choice3: "Bats",
        choice4: "Rabbits",
        answer: 4,
    },
    {
        question: "What was Buffy's father name?",
        choice1: "Kurt",
        choice2: "Hank",
        choice3: "Donald",
        choice4: "Brad",
        answer: 2,
    },
    {
        question: "What was Giles nickname as youth?",
        choice1: "Guzzler",
        choice2: "Ripper",
        choice3: "Ruffles",
        choice4: "Gizzler",
        answer: 2,
    },
    {
        question: "What made everyone fall in love with the quarterback RJ?",
        choice1: "Ring",
        choice2: "Locket",
        choice3: "Jacket",
        choice4: "He was a demon",
        answer: 3,
    },
    {
        question: "What was the name of the diner that Buffy worked in season 3?",
        choice1: "Helen's Kitchen",
        choice2: "Downtime Diner",
        choice3: "The Peach Pit",
        choice4: "Darcy's Diner",
        answer: 1,
    },
]





const SCORE_POINTS = 100
const MAX_QUESTIONS = 15

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer  == currentQuestion.answer ? "correct" :
        "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    

    })
    
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
