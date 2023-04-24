import altavoz from "../assets/img/shop/altavoces.jpg";
import applew from "../assets/img/shop/applewatch.jpg";
import iphone from "../assets/img/shop/iphone13.jpg";
import galaxy from "../assets/img/shop/galaxys21.webp";
import ipad from "../assets/img/shop/ipadpro.jpg";
import nvidia from "../assets/img/shop/nvidia.jpg";
import sony from "../assets/img/shop/sony.jpg";
import samsung from "../assets/img/shop/odissey.webp";
import dron from "../assets/img/shop/dron.png";
import bici from "../assets/img/shop/bicileta.jpeg";
import laptop from "../assets/img/shop/laptop.webp"
import Smartphone from "../assets/img/shop/smartphone.jpg"
import tv from "../assets/img/shop/tv.webp"
import tablet from "../assets/img/shop/tablet.webp"
import silla from "../assets/img/shop/silla de oficina.webp"
import camara from "../assets/img/shop/camara.webp"
import mac from "../assets/img/shop/macbook.jpg"
import Reloj from "../assets/img/shop/reloj.jpg"
import gafas from "../assets/img/shop/gafas.webp"
import teclado from "../assets/img/shop/teclado.jpg"

const products = [
    {
        id: 1,
        title: "MacBook Pro",
        image: mac,
        description: "The MacBook Pro is a high-performance laptop designed for professionals and power users. It features a sleek design, powerful processors, fast storage, and a high-resolution Retina display, making it perfect for demanding tasks like video editing, graphic design, and music production.",
        brand: "Apple",
        price: "$1,299.00",
      },
      {
        id: 2,
        title: "iPhone 13",
        image: iphone,
        description: "The iPhone 13 is a flagship smartphone from Apple that offers a stunning design, powerful A15 Bionic chip, 5G connectivity, and an advanced dual-camera system that delivers stunning photos and videos. It also features a long-lasting battery, water and dust resistance, and a range of new colors to choose from.",
        brand: "Apple",
        price: "$799.00",
      },
      {
        id: 3,
        title: "Samsung Galaxy S21 Ultra",
        image: galaxy,
        description: "The Samsung Galaxy S21 Ultra is a premium smartphone that features a large 6.8-inch Dynamic AMOLED 2X display, powerful Exynos 2100 chipset, 5G connectivity, and a versatile quad-camera system that delivers stunning photos and videos. It also features a long-lasting battery, water and dust resistance, and support for Samsung's S Pen stylus.",
        brand: "Samsung",
        price: "$1,199.00",
      },
      {
        id: 4,
        title: "iPad Pro",
        image: ipad,
        description: "The iPad Pro is a powerful and versatile tablet that features a stunning Liquid Retina XDR display, powerful M1 chip, 5G connectivity, and a range of advanced camera and audio features. It's perfect for productivity tasks like editing photos and videos, drawing, and note-taking, and can also be used as a powerful gaming device.",
        brand: "Apple",
        price: "$1,099.00",
      },
      {
        id: 5,
        title: "Apple Watch Series 7",
        image: applew,
        description: "The Apple Watch Series 7 is a smartwatch that offers a larger display, faster charging, and a range of health and fitness features. It also features a durable design, water resistance, and support for a range of apps and watch faces.",
        brand: "Apple",
        price: "$399.00",
      },
      {
        id: 6,
        title: "Sony WH-1000XM4",
        image: sony,
        description: "The Sony WH-1000XM4 is a premium pair of noise-canceling headphones that offer excellent sound quality, long battery life, and a comfortable and stylish design. They also feature advanced noise-canceling technology that adapts to your environment and a range of smart features like voice control and touch controls.",
        brand: "Sony",
        price: "$349.99",
      },
      {
        id: 7,
        title: "Nvidia GeForce RTX 3080 Ti",
        image: nvidia,
        description: "The Nvidia GeForce RTX 3080 Ti is a high-end graphics card designed for gamers and content creators. It features a powerful Ampere architecture, 12GB of GDDR6X memory, and advanced ray tracing technology that delivers stunning visuals and performance.",
        brand: "Nvidia",
        price: "$1,199.00",
      },
      {
        id: 8,
        title: "Samsung Odyssey G9",
        image: samsung,
        description: "The Samsung Odyssey G9 is a high-end gaming monitor that features a massive 49-inch curved display, a fast 240Hz refresh rate, and a range of advanced gaming features like G-Sync and FreeSync compatibility. It also features a unique and stylish design that makes it a standout addition to any gaming setup.",
        brand: "Samsung",
        price: "$1,499.99",
      },
      {
        id: 9,
        title: "DJI Mavic Air 2S",
        image: dron,
        description: "The DJI Mavic Air 2S is a powerful drone that features a 1-inch CMOS sensor, 5.4K video recording, and a range of advanced flight and safety features. It also features a compact and portable design that makes it perfect for travel and outdoor adventures.",
        brand: "DJI",
        price: "$999.00",
      },
      {
        id: 10,
        title: "Bicicleta",
        image: bici,
        description: "A bicycle is a human-powered vehicle that consists of a frame, pedals, wheels, and handlebars. They come in a variety of styles and sizes, from road bikes and mountain bikes to city bikes and folding bikes. Bicycles are a great way to get exercise, commute, or explore the outdoors.",
        brand: "Lorem ipsum",
        price: "$299.99",
      },
      {
        id: 11,
        title: "Laptop",
        image: laptop,
        description: "A laptop is a portable computing device that offers a wide range of computing functions and applications. They are designed to be lightweight and easy to transport, making them a popular choice for people who need to work or study while on the go. ",
        brand: "Lenovo",
        price: "$1399.99",
      },
      {
        id: 12,
        title: "Smartphone",
        image: Smartphone,
        description: "A smartphone is a handheld mobile device that combines a phone, camera, computer, and other features into one convenient package. They typically feature a touch screen display, powerful processor, high-quality camera, and access to a range of apps and online services. They are essential tools for communication, productivity, and entertainment.",
        brand: "Samsung",
        price: "$799.99",
      },
      {
        id: 13,
        title: "TV",
        image: tv,
        description: "A TV, or television, is an electronic device that displays images and sound to provide entertainment and information. They come in a range of sizes and styles, from compact models for small spaces to large, high-end models with advanced features like 4K resolution, HDR, and smart functionality. TVs are a staple of modern entertainment, providing access to a wide range of movies, TV shows, and other media.",
        brand: "LG",
        price: "$499.99",
      },
      {
        id: 14,
        title: "Tablet",
        image: tablet,
        description: "A tablet is a portable device that combines the functionality of a computer with the convenience of a mobile device. They typically feature a touch screen display, long battery life, and access to a range of apps and online services. Tablets are perfect for on-the-go productivity, entertainment, and communication.",
        brand: "Lenovo",
        price: "$399.99",
      },
      {
        id: 15,
        title: "Silla de oficina",
        image: silla,
        description: "An office chair is a type of chair designed for use in an office or work setting. They are typically designed to provide comfort and support for long periods of sitting, with features like adjustable height, lumbar support, and armrests. A good office chair is essential for maintaining good posture, reducing back pain, and increasing productivity.",
        brand: "Lorem ipsum",
        price: "$199.99",
      },
      {
        id: 16,
        title: "Cámara",
        image: camara,
        description: "A camera is a device used to capture images and record video. They come in a range of styles and formats, from compact point-and-shoot models to professional-grade DSLRs. Cameras are essential tools for capturing memories, documenting events, and creating art.",
        brand: "Sony",
        price: "$899.99",
      },
      {
        id: 17,
        title: "Altavoces",
        image: altavoz,
        description: "Speakers, or altavoces in Spanish, are devices used to produce sound for music, movies, and other forms of entertainment. They come in a range of sizes and styles, from compact Bluetooth models to large, high-end home theater systems. Good speakers are essential for getting the most out of your media, providing clear, high-quality sound.",
        brand: "Panasonic",
        price: "$299.99",
      },
      {
        id: 18,
        title: "Reloj inteligente",
        image: Reloj,
        description: "A smartwatch is a wearable device that combines the features of a watch with the functionality of a smartphone. They typically feature a touch screen display, fitness tracking features, and access to a range of apps and online services. Smartwatches are essential tools for staying connected, tracking your fitness goals, and managing your day-to-day life.",
        brand: "Casio",
        price: "$149.99",
      },
      {
        id: 19,
        title: "Gafas de sol",
        image: gafas,
        description: "Sunglasses are a type of eyewear designed to protect your eyes from the sun's harmful rays. They come in a range of styles and designs, from classic aviator frames to modern wraparound models. Sunglasses are essential for protecting your eyes and maintaining good eye health.",
        brand: "Rayband",
        price: "$49.99",
      },
      {
        id: 20,
        title: "Teclado HyperX Alloy Core RGB",
        image: teclado,
        description: "The HyperX Alloy Core keyboard is a high-performance gaming keyboard designed for gamers and power users. It features a durable, stylish design with RGB lighting, responsive keys, and customizable settings. The HyperX Alloy Core keyboard is an essential tool for gamers and anyone looking for a high-quality keyboard for productivity and everyday use.",
        brand: "HyperX",
        price: "$99.99",
      },
     
  ];
  
  export default products;


