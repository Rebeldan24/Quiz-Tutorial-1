const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

finalScore.innerText = mostRecentScore

const score = {
    score: mostRecentScore
}