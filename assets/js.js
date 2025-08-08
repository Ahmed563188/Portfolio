let cardContainer = document.getElementById("cardContainer")

async function getCategories() {
    try {
        const res = await fetch("assets/data/cards.json")
        const finalRes = await res.json()
        console.log(finalRes);
        finalRes.forEach(card => {
            cardContainer.appendChild(renderCard(card))
        });
    } catch (error) {
        console.log(`error`, error)
    }
}
getCategories()

function renderCard(cardData) {
    const card = document.createElement("div")
    card.classList.add("main__cards")
    card.innerHTML = `
                <div class="main__cards__card">
                    <div class="main__cards__card__img display-v">
                        <img src=${cardData.image} alt="" >
                        <h6>${cardData.languages}</h6>
                    </div>
                    <div class="main__cards__card__description">
                        <h2>${cardData.title}</h2>
                        <div class="main__cards__card__button display-h">
                            <button class="main__button"><a href="${cardData.github}" target="_blank">Github</a></button>
                            <button class="main__button"><a href="${cardData.demo}" target="_blank">Demo</a></button>
                        </div>
                    </div>
                </div>
    `
    return card
}
