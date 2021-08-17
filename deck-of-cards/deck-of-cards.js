$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    // part 1
    async function part1() {
      let data = await $.getJSON(`${baseURL}/new/draw/`);
      let { suit, value } = data.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
  
    // part 2
    async function part2() {
      let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
      let deckId = firstCardData.deck_id;
      let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
      [firstCardData, secondCardData].forEach(card => {
        let { suit, value } = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
      });
    }
  
    // part 3
    async function setup() {
      let $button = $('button');
      let $cards = $('#cards');
  
      let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
      $button.show().on('click', async function() {
        let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
        let cardImage = cardData.cards[0].image;
        $cards.append(
          $('<img>', {
            src: cardImage
          })
        );
        if (cardData.remaining === 0) $btn.remove();
      });
    }
    setup();
  });
  