
// Función que crea el carrito en localstorage
const create_cart = (object) => {
  localStorage.setItem("cart", JSON.stringify({items: [{...object, quantity: 1}]}));
}

// Función que añade un item al carrito, si no existe se añade, si ya existe se suma 1 a quantity
const add_item = (cart, object) => {
  if(cart.items.some((item) => item.id === object.id)) { // if element already exists in cart, add 1 to quantity
    cart.items.find((item) => item.id === object.id).quantity += 1;
  }
  else{ // if element does not exist in cart, add it to cart
    cart.items.push({...object, quantity: 1});
  }
}

// Función que añade y por siguiente añade el objeto al carrito
// object: objeto a añadir al carrito
export default function add_to_cart(object) {
  if(!localStorage.getItem("cart")) { // si el carrito no existe lo crea en localstorage
    create_cart(object);
  }
  else { // sino añade el item al carrito
    const cart = JSON.parse(localStorage.getItem("cart"));
    add_item(cart, object)
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return JSON.parse(localStorage.getItem("cart"));
}