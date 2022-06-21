const cardContainer = document.querySelector('#card-container')
let previousCard;
let failureCount = 0
let successCount = 0

for (let i = cardContainer.children.length; i >= 0; i--) {
    cardContainer.appendChild(cardContainer.children[Math.random() * i | 0]);
}

Array.from(cardContainer.children).forEach(card => {
  card.addEventListener('click', () => {
      if (previousCard === undefined){
        previousCard = card.dataset.card
        console.log(previousCard)
      }
      else {
        let currentCard = card.dataset.card
        if (currentCard == previousCard){
          alert("Matching Pair, well done!")
        }
        else{
          previousCard = ''
          currentCard = ''
          alert("Not a match")
          failureCount += 1
        }
      }
    })
})
