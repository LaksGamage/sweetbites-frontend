import profile_icon from "./navbar-user.png";
import nav_cart_icon from "./shopping-cart.png";
import search_icon from "./search.png";
import logo from "./main-logo.png";
import main_banner_bg from "./main-banner.png"
import main_banner_bg_s from "./main-banner-s.png"
import wedding_cake_image from "./wedding-cake.png"
import cake_image from "./cake.jpg"
import donut_image from "./donut.png"
import fruitsalad_image from "./fsalad.png"

export const assets = {
   profile_icon,
   nav_cart_icon, 
   search_icon,
   logo,
   main_banner_bg,
   main_banner_bg_s,
   wedding_cake_image,
};


export const categories =[
   {
      text: "Wedding Cakes",
      path: "Cake",
      image: wedding_cake_image,
      bgColor: "#EAE1DF",
   },
   {
      text: "Cakes",
      path: "Cake",
      image: cake_image,
      bgColor: "#e5e5e0",
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

]