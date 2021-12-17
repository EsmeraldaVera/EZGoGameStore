console.log("Here 2");

if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', ready)

} else {

    ready()

}


function ready() {

    var removeCartItemButtons = document.getElementByClassName('btn-danger')

    //console.log(removeCartItemButtons)

    for (var i = 0; i < removeCartItemButtons.length; i++) {

        var button = removeCartItemButtons[i]

        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementByClassName('cart-quantity-input')

    for (var i = 0; i < quantityInputs.length; i++) {

        var input = quantityInputs[i]

        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')

    for (var i = 0; i < addToCarButtons.length; i++) {

        var button = addToCartButtons[i]

        button.addEventListener('click', addToCartClicked)

    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {

    alert('Thank you for your purchase')

    var cartItems = document.getElementsByClassName('cart-items')[0]

    while (cartItems.hasChildNodes()) {

        cartItems.removeChild(cartItems.firstChild)

    }

    updateCartTotal()
}


function removeCartItem(event) {

    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {

    var input = event.target

    if (isNan(input.value) || input.value <= 0) {

        input.value = 1
    }

    updateCartTotal()
}

//Adds items to cart.
function addtoCartClicked(event) {

    var button = event.target

    var shopItem = button.parentElement.parentElement

    //var title = shoptItem.getElementsByClassName('shop-item-title')[0].innerText

    var title = shopItem.product.name[0].innerText

    //var price = shopItem.getElementByClassName('shop-item-price')[0].innerText

    var price = shopItem.product.price[0].innerText

    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src

    console.log(title, price, imageSrc)

    addItemToCart(title, price, imageSrc)

    updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {

    var cartRow = document.createElement('div')

    cartRow.classList.add('cart-row')

    //cartRow.innerText = title;

    var cartItems = document.getElementsByClassName('cart-items')[0]

    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

    for (var i = 0; i < cartItemNames.length; i++) {

        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')

            return

        }
    }

    var cartRowContents = `  `;

    cartRow.innerHTML = cartRowContents;

    cartItems.append(cartRow);

    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)

    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

function updateCartTotal() {

    var cartItemContainer = document.getElementsByClassName('cart-items')[0]

    var cartRows = cartItemContainer.getElementsByClassName('cart-row')

    var total = 0

    for (var i = 0; i < cartRows.length; i++) {

        var cartRow = cartRow[i]

        var priceElement = cartRow.getElementsByClassName('cart-price')[0]

        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]

        var price = parseFloat(priceElement.innerText.replace('$', ''))

        var quantity = quantityElement.value

        total = total + (price * quantity)

    }

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

}




