var field = document.getElementById('card_number');
field.setCustomValidity('card number not entered');

function validatecardnumber(cardNumber) {
    cardNumber = cardNumber.replace(/[ -]/g, '');
    var match = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.exec(cardNumber);
    if (match) {
        field.setCustomValidity('');
    } else {
        field.setCustomValidity('invalid card number');
    }
}