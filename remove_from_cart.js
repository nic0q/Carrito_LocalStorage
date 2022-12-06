// id: id del objeto a borrar
// deletion: parámetro opcional de borrar todo el item o 1: deletion:true -> Borrar el item entero | false: Borrar solo una unidad
export default function remove_from_cart(id, deletion = false) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cart.items.forEach((item) => { if(item.id === id) { // Si el id del item es igual al id del item a borrar
    if(deletion){
      cart.items.splice(cart.items.indexOf(item), 1);
    }
    else if(item.quantity > 1) { // si la cantidad es mayor a 1, restar 1
      item.quantity -= 1;
    }
    else{ // Si la cantidad es 1, borrar el item
      cart.items.splice(cart.items.indexOf(item), 1);
    }
  }})
  localStorage.setItem("cart", JSON.stringify(cart))
  if(cart.items.length === 0) {localStorage.removeItem("cart"); return []} else{return cart}; // Si el carrito está vacío, eliminar el carrito del localStorage
}