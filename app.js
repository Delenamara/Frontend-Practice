/*$ это JQuery*/
function hideLoader() {
    setTimeout(() => {
        $('#loader').addClass('d-none');
        $('#loader').removeClass('d-flex');
        /*      $('#loader').toggleClass('d-flex');
                $('#loader').hide();
                $('#loader').show();*/
    }, 1000);
}

$(document).ready(function () {
    hideLoader();
});

// select cards with holded shift button and click to them
var cards = document.getElementsByClassName('card');

function cardClick(event, element) {
    const isShiftPressed = event.shiftKey;

    if (!isShiftPressed) {
        for (const card of cards) {
            if (card != element) {
                $(card).removeClass('chosen');
            }
        }
    } else {
        let startIndex = cards.findIndex(card => $(card).hasClass('chosen'));
        let endIndex = cards.findIndex(c => c == element);
        if (startIndex > endIndex) {
            const temp = startIndex;
            startIndex = endIndex;
            endIndex = temp;
        }
        for (let i = startIndex; i < endIndex; i++) {
            $(cards[i]).addClass('chosen');
        }

    }
    $(element).toggleClass('chosen');
}

for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = () => cardClick(event, cards[i]);
}
