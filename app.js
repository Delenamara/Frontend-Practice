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

$(document).ready(function () { /*как только сайт отрендарится, выполнится function*/
    hideLoader();
});

/*$(document).load();*/ // выполнит функцию когда начнёт загружаться страница

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
        /*const card = $('.chosen:first-child').get(); позволит получить объект типа HTMLElement*!/*/
        let startIndex = cards.findIndex(card => $(card).hasClass('chosen')); //первая
        let endIndex = cards.findIndex(c => c == element); //выбранная
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
    /*стрелочная функция - замена function*/
    /*        cards[i].onclick = function () { аналог
                cardClick(cards[i]);
            }*/
}