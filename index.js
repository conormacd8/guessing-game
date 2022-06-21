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
          card.querySelector('.card-img').classList.remove('hidden')
          card.classList.add('cursor-not-allowed')
          console.log(previousCard)
        }
        else {
          let currentCard = card.dataset.card
          if (currentCard == previousCard){
            card.querySelector('.card-img').classList.remove('hidden')
            setTimeout(() => {
              alert("Matching Pair, well done!")
              previousCard = undefined
              if (successCount === cardContainer.children.length /2){
                alert("Congratulations! You matched all the cards!")
              }
            }, 0); 
            Array.from(document.querySelectorAll(`[data-card="${currentCard}"]`)).forEach(card => {
              card.classList.add('cursor-not-allowed')
            })
            successCount += 1
          }
          else{
            let canHideImg;
            card.querySelector('.card-img').classList.remove('hidden')
            failureCount += 1
            setTimeout(() => {
              card.querySelector('.card-img').classList.add('hidden')
              alert("not a match")
              canHideImg = true
              if (canHideImg){
                console.log('this is runnign')
                Array.from(cardContainer.querySelectorAll(`[data-card="${previousCard}"]`)).forEach(card => {
                  Array.from(card.children).forEach(img => {
                    img.classList.add('hidden')
                    previousCard = undefined
                  })
                })

              }
            }, 0);
            Array.from(document.querySelectorAll(`[data-card="${previousCard}"]`)).forEach(card => {
              card.classList.remove('cursor-not-allowed')
            })
            
            
          }
          currentCard = undefined
        }
        console.log(successCount)
      }
      })
})


