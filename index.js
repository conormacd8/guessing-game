const cardContainer = document.querySelector('#card-container')
let previousCard;
let failureCount = 0
let successCount = 0

for (let i = cardContainer.children.length; i >= 0; i--) {
    cardContainer.appendChild(cardContainer.children[Math.random() * i | 0]);
}

Array.from(cardContainer.children).forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('cursor-not-allowed')){
        if (previousCard === undefined){
          previousCard = card.dataset.card
          card.classList.add('cursor-not-allowed')
          console.log(previousCard)
        }
        else {
          let currentCard = card.dataset.card
          if (currentCard == previousCard){
            alert("Matching Pair, well done!")
            Array.from(document.querySelectorAll(`[data-card="${currentCard}"]`)).forEach(card => {
              card.classList.add('cursor-not-allowed')
            })
            successCount += 1
              if (successCount === cardContainer.children.length /2){
                alert("Congratulations! You matched all the cards!")
              }
          }
          else{
            alert("Not a match")
            failureCount += 1
            Array.from(document.querySelectorAll(`[data-card="${previousCard}"]`)).forEach(card => {
              card.classList.remove('cursor-not-allowed')
            })
          }
          previousCard = undefined
          currentCard = undefined
        }
        console.log(successCount)

      }
      }
      )

})
