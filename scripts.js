var cards = [
    '<img src="animal-kingdom-01.jpg">',
    '<img src="animal-kingdom-04.jpg">',
    '<img src="animal-kingdom-night-06.jpg">',
    '<img src="animal-kingdom-07.jpg">',
    '<img src="animal-kingdom-night-14.jpg">',
    '<img src="animal-kingdom.jpg">'
];

function shuffleImages(){
	for(let i = 0; i < 9001; i++){
		var card1ToSwitch = Math.floor(Math.random() * cards.length);
		var card2ToSwitch = Math.floor(Math.random() * cards.length);
		var temp = cards[card1ToSwitch];
		cards[card1ToSwitch] = cards[card2ToSwitch];
		cards[card2ToSwitch] = temp;
	}
}

// All code will wait until the DOM is ready!
$(document).ready(function(){
	shuffleImages();
	var gridSize = 12;
	var cardLocation = [];

	var card = '';

	for(let i = 0; i < gridSize; i++){
		cardLocation.push([i]);
	}

	for(let i = 0; i < 9000; i++){
		var random1 = Math.floor(Math.random() * cardLocation.length);
		var random2 = Math.floor(Math.random() * cardLocation.length);
		var temp = cardLocation[random1];
		cardLocation[random1] = cardLocation[random2];
		cardLocation[random2] = temp;
	}


	var mgHTML = '';
	for(let i = 0; i < gridSize; i++){
		card = cards[Math.floor(cardLocation[i]/2)];
		// if(i < 2){
		// 	card = cards[0];
		// }
		// else if(i < 4){
		// 	card = cards[1];
		// }
		// else if(i < 6){
		// 	card = cards[2];
		// }
		// else if(i < 8){
		// 	card = cards[3];
		// }
		// else if(i < 10){
		// 	card = cards[4];
		// }
		// else{
		// 	card = cards[5];
		// }

		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

    $('.mg-contents').html(mgHTML);

    $('.mg-tile-inner').click(function(){
    	$(this).toggleClass('flip');

    	var cardsUp = $('.flip');
    	if(cardsUp.length == 2){
    		// Check to see if they are the same
    		var cardsUpImages = cardsUp.find('.mg-front img');
    		if(cardsUpImages[0].src == cardsUpImages[1].src){
    			// THIS IS A MATCH!!!!
    			cardsUp.addClass('matched');
    			cardsUp.removeClass('flip');
    		}
    		else{
    			// The user has flipped 2 cards. they don't match. Flip them back over
    			setTimeout(function(){
    				cardsUp.removeClass('flip');
    			}, 1000);
    		}
    	}
    	else{
    		// do nothing
    	}
    });



});