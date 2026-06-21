import profile_icon from "./navbar-user.png";
import nav_cart_icon from "./shopping-cart.png";
import search_icon from "./search.png";
import logo from "./main-logo.png";
import main_banner_bg from "./main-banner.png"
import main_banner_bg_s from "./main-banner-s.png"
import cake_image from "./cake.png"
import donut_image from "./donut.png"
import fruitsalad_image from "./fsalad.png"

export const assets = {
   profile_icon,
   nav_cart_icon, 
   search_icon,
   logo,
   main_banner_bg,
   main_banner_bg_s,
   
};


export const categories =[
   
   {
      text: "Cakes",
      path: "Cake",
      image: cake_image,
      bgColor: "#f6dbf9",
   },
   {
      text: "Donuts",
      path: "donut",
      image: donut_image,
      bgColor: "#ffefcd",
   },
   {
      text: "Fruit Salad",
      path: "salad",
      image: fruitsalad_image,
      bgColor: "#ffefcd",
   }

];

export const dummyProducts = [
   {
      id:"gd46",
      name: "choco cake",
      category: "cake",
      price:20,
      offerprice:25.


   }
]