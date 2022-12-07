# Carrito_LocalStorage
Repositorio de un carrito de compras usando localStorage

* Estas funciones fueron usadas en React

### Instrucciones de uso

1) Colocar estas funciones en una carpeta en el proyecto por ejemplo utilities

![image](https://user-images.githubusercontent.com/91075814/206051709-3dbe793f-501d-47a1-82b7-7f3a2b09841f.png)

2) Importar las funciones en el Componente que se quieran usar, por ejemplo en este componente Menu

![image](https://user-images.githubusercontent.com/91075814/206051972-46d3ca56-da1f-4fad-bae6-a3a6b7fa9e67.png)


### Modo de uso en React
Nota: El carrito tiene la forma { items: [ ] }
Donde items es la lista donde se añaden los items

* Crear un Hook useState (cart) donde se encuentre el carrito del tipo lista ubicado en localstorage
![image](https://user-images.githubusercontent.com/91075814/206051147-8bdaa85f-be2c-4fa4-8122-eda5b031e96f.png)

```
const [cart, setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);
```
* En el mismo componente crear funciones para añadir items, donde los atributos se pasan como parametro (Puede hacerse de otra forma, pero personalmente prefiero esta)

Por ejemplo aquí se tiene un objeto pizza {name, id, img, price} que se utiliza para otro componente FoodCart, la funcion add se pasa como parametro

![image](https://user-images.githubusercontent.com/91075814/206053090-4a6555d0-aee0-4cab-893f-6419d1c1a50f.png)

Componente foodcart

![image](https://user-images.githubusercontent.com/91075814/206053391-87e9957f-d3aa-4cb4-a98a-2d2b6cf2801f.png)


Y la función add crea el objeto del tipo { } con los atributos y simplemente la pasa a la función importada en utilities y además se setea el Hook Cart para tenerlo actualizado en el componente

![image](https://user-images.githubusercontent.com/91075814/206050815-09070be1-8d6d-4f79-a3bf-d2fe61069021.png)

* Lo mismo para remove item

![image](https://user-images.githubusercontent.com/91075814/206052455-c614f082-be51-4714-88da-d970c23fb85c.png)

![image](https://user-images.githubusercontent.com/91075814/206052471-c307c9c5-20d7-4de3-b6f9-d3478f27734d.png)
