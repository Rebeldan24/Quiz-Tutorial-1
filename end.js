const username = document.querySelector("#username")
const saveScoredBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = document.querySelector("#mostRecentSCore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || ()

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener("keyup", () => {
    saveScoredBtn.disabled = !username,value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highscores))
    window.location.assign("/")
}