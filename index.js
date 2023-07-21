const axios = require('axios');

const url = "https://fakestoreapi.com/products";

axios.get(url).then((response) => {
    if(response.status === 200){
        const characters = response.data;

        characters.forEach((character) => {
            console.log(`Id: ${character.id}`);
            console.log(`Nombre: ${character.title}`);
            console.log(`Precio: ${character.price}`);
            console.log(`Descripcion: ${character.decription}`);
            console.log(`Categoria: ${character.category}`);
            console.log(`Imagen: ${character.image}`);
            console.log(`__________`);
        });
        //console.log(data);
    }else{
        throw new Error("Error al extraer datos"+ response.status);
    }
})
.catch((error)=>{
    console.error("Error: "+ error.message);
});
