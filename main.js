/*
function appetizers()
{
  document.getElementById("demo").innerHTML="hello";
}
*/

/*
function toCart(n)
{
  // add item to Cart
  alert(item);

  // jump to cart page
  window.location.href = "http://127.0.0.1:65109/cart.html";
}
*/


function addToCart(n,p){
    //add item

    console.log("add "+ n + " with price: " + p + " to cart");

    // create new item in json format
        var item = {
            name: n,
            price:p,
            quantity: 1
        };

        // check out local storage for cart
        if (localStorage.getItem('cart') == null) {
            // if the cart is empty / doesn't exist
            let cart = [];
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            // if cart exist
            let cart = JSON.parse(localStorage.getItem('cart'));
            let index = -1;

            // when through the cart
            // and find out if the item we are adding is in the cart
            // if so get the index
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                    //item.name = n
                  if (item.name == n) {
                      index = i;
                      break;
                  }
                }

              if (index == -1) {
                  // if you are adding a new item to the cart
                  console.log(item);
                  cart.push(JSON.stringify(item));
                  localStorage.setItem('cart', JSON.stringify(cart));
              } else {
                  // if that item is in there but you wanted more
                  let item = JSON.parse(cart[index]);
                  item.quantity += 1;
                  cart[index] = JSON.stringify(item);
                  localStorage.setItem("cart", JSON.stringify(cart));
              }
          }
   //alert
   alert(localStorage.getItem('cart'));
    // jump
    //window.loacation.href="www.google.com";
}


function loadCart(){
    let total = 0;
    let items = [];
    // check local storage to load cart data
    let cart = JSON.parse(localStorage.getItem('cart'));

    for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);

        // push zo list
        items.push({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        });

        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(item.name + ". Quanity: " + item.quantity +". Price: " + item.price);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>

        // create a ul element with id myCart
        document.getElementById("myCart").appendChild(node);

        total += parseFloat(item.price) * parseFloat(item.quantity);

    }

    var node = document.createElement("h3");                 // Create a <li> node
    var textnode = document.createTextNode( "Total: " + total +".");         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>

    // create a div element with id myCart
    document.getElementById("total").appendChild(node);

    console.log(items);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function checkout()
{
    // clear the list when hit checkout
    let cart = JSON.parse(localStorage.getItem('cart'));
		alert("Your order has been processed. " +cart.length + " item(s) is coming your way!");
		console.log(cart);

    // jump to check out page
    window.location.href = "checkout.html";




}

function printanddelete()
{
  loadCart();
  // Order confirm
  var status = document.getElementById("status");
  status.innerHTML = "Order Comfirmed. Order #: " + getRandomInt(1000) + " .Total";
  // empty cart
  cart =[];
  // save
  localStorage.setItem("cart", JSON.stringify(cart));
}
