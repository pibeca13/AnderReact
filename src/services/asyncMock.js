import { useState } from "react";

const products = [

    {
        id: 1,
        nombre: "Laptop HP Pavilion",
        precio: 899.99,
        descripcion: "Laptop de 15.6 pulgadas, i5, 8GB RAM",
        stock: 10,
        imagen:"https://i.ibb.co/87nn8hX/1.png",
        categoria:"pantallas"
    },
    {
        id: 2,
        nombre: "Monitor Samsung",
        precio: 249.99,
        descripcion: "Monitor curvo de 27 pulgadas, 4K",
        stock: 5,
        imagen:"https://i.ibb.co/qn9dngt/2.png",
        categoria:"pantallas"
    },
    {
        id: 3,
        nombre: "Teclado mecánico RGB",
        precio: 99.99,
        descripcion: "Teclado mecánico con retroiluminación RGB",
        stock: 20,
        imagen:"https://i.ibb.co/Chsn5qq/jj.png",
        categoria:"teclados"
    },

    {
        id: 4,
        nombre: "Mouse inalámbrico",
        precio: 39.99,
        descripcion: "Mouse ergonómico inalámbrico",
        stock: 15,
        imagen:"https://i.ibb.co/KKqMcCB/4.png",
        categoria:"accesorios"
    },

    {
        id: 5,
        nombre: "Impresora multifuncional",
        precio: 149.99,
        descripcion: "Impresora todo en uno, escáner y copiadora",
        stock: 8,
        imagen:"https://i.ibb.co/Jk1qPZQ/5.png",
        categoria:"accesorios"
    },
    {
        id: 6,
        nombre: "Disco duro externo",
        precio: 79.99,
        descripcion: "Disco duro externo de 1TB, USB 3.0",
        stock: 12,
        imagen:"https://i.ibb.co/H7ft6Zm/6.png",
        categoria:"discos"
    },
    {
        id: 7,
        nombre: "Memoria USB",
        precio: 19.99,
        descripcion: "Memoria USB de 64GB, alta velocidad",
        stock: 25,
        imagen:"https://i.ibb.co/1fvgwRw/7.png",
        categoria:"memorias"
    },
    {
        id: 8,
        nombre: "Cámara web",
        precio: 59.99,
        descripcion: "Cámara web HD con micrófono incorporado",
        stock: 6,
        imagen:"https://i.ibb.co/6mbwm4Z/8.png",
        categoria:"accesorios"
    },
    {
        id: 9,
        nombre: "Auriculares Bluetooth",
        precio: 49.99,
        descripcion: "Auriculares inalámbricos con cancelación de ruido",
        stock: 18,
        imagen:"https://i.ibb.co/2srQTx8/9.png",
        categoria:"accesorios"
    },
    {
        id: 10,
        nombre: "Monitor LG",
        precio: 299.99,
        descripcion: "Monitor de 32 pulgadas, resolución 2K",
        stock: 3,
        imagen:"https://i.ibb.co/rwL2SqH/10.png",
        categoria:"pantallas"
    },
    {
        id: 11,
        nombre: "Teclado y mouse inalámbricos",
        precio: 69.99,
        descripcion: "Set de teclado y mouse inalámbricos",
        stock: 9,
        imagen:"https://i.ibb.co/vXdPypz/11.png",
        categoria:"teclados"
    },
    {
        id: 12,
        nombre: "Altavoces Bluetooth",
        precio: 89.99,
        descripcion: "Altavoces portátiles Bluetooth, batería de larga duración",
        stock: 14,
        imagen:"https://i.ibb.co/fdk6TMt/22.png",
        categoria:"accesorios"
    },
    {
        id: 13,
        nombre: "Router Wi-Fi",
        precio: 79.99,
        descripcion: "Router inalámbrico de alta velocidad",
        stock: 7,
        imagen:"https://i.ibb.co/wYMfZqD/13.png",
        categoria:"precesadores"
    },
    {
        id: 14,
        nombre: "Tarjeta gráfica NVIDIA",
        precio: 399.99,
        descripcion: "Tarjeta gráfica para gaming, 8GB GDDR6",
        stock: 2,
        imagen:"https://i.ibb.co/SntRJJF/14.png",
        categoria:"procesadores"
    },
    {
        id: 15,
        nombre: "Procesador Intel Core i7",
        precio: 349.99,
        descripcion: "Procesador de 8 núcleos, frecuencia base de 3.6GHz",
        stock: 4,
        imagen:"https://i.ibb.co/5xH81sB/image.jpg",
        categoria:"procesadores"
    },
    {
        id: 16,
        nombre: "Memoria RAM DDR4",
        precio: 79.99,
        descripcion: "Memoria RAM de 16GB, frecuencia 3200MHz",
        stock: 11,
        imagen:"https://i.ibb.co/rtmmHq0/15.png",
        categoria:"memorias"
    },
    {
        id: 17,
        nombre: "Disco SSD",
        precio: 129.99,
        descripcion: "Disco SSD de 500GB, interfaz SATA III",
        stock: 16,
        imagen:"https://i.ibb.co/9rpynpT/16.png",
        categoria:"discos"
    },
    {
        id: 18,
        nombre: "Fuente de poder",
        precio: 89.99,
        descripcion: "Fuente de poder de 650W, certificación 80 Plus Bronze",
        stock: 9,
        imagen:"https://i.ibb.co/QdzW7gR/17.png",
        categoria:"accesorios"
    },
    {
        id: 19,
        nombre: "Gabinete ATX",
        precio: 59.99,
        descripcion: "Gabinete para computadora ATX, ventilación óptima",
        stock: 13,
        imagen:"https://i.ibb.co/BB1Bp87/18.png",
        categoria:"procesadores"
    },
    {
        id: 20,
        nombre: "Placa base ASUS",
        precio: 199.99,
        descripcion: "Placa base con socket AM4, compatible con procesadores AMD",
        stock: 6,
        imagen:"https://i.ibb.co/JHMnGsk/19.png",
        categoria:"discos"
      }
];

function getData () {
    return new Promise((resolve, reject) => {
      
        setTimeout(() => {
           resolve(products);
        }, 2000);
 });
}

export function getProductData (idURL) {
    return new Promise((resolve, reject) => {
       
        const productRequested = products.find(
            (item) => item.id === parseInt(idURL)
        );

        setTimeout(() => {
           resolve(productRequested);
        }, 2000);
 });
}

export function getCategoryData(categoriaURL) {
    return new Promise((resolve, reject) => {
     const categoryRequested = products.filter((item ) => {
            return item.categoria.toLowerCase() === categoriaURL.toLowerCase();
        });

        setTimeout(() => {
            resolve(categoryRequested);
        }, 2000);
    });
}

export default getData;



