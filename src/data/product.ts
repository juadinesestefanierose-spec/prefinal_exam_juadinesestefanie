import type { Product } from "../types/Product";
// Bags
import backpackOne from "../assets/bags/backpackone.png";
import backpackTwo from "../assets/bags/backacktwo.png";
import backpackThree from "../assets/bags/backpackthree.png";

import pantsOne from "../assets/bags/pantsone.png";
import pantsTwo from "../assets/bags/pantstwo.png";
import pantsThree from "../assets/bags/pantsthree.png";

import shoulderBagOne from "../assets/bags/shoulderbagone.png";
import shoulderBagTwo from "../assets/bags/shoulderbagtwo.png";
import shoulderBagThree from "../assets/bags/shoulderbagthree.png";

import sunglassesOne from "../assets/bags/sunglassone.png";
import sunglassesTwo from "../assets/bags/sunglasstwo.png";
import sunglassesThree from "../assets/bags/sunglassthree.png";

import toteBagOne from "../assets/bags/totebagone.png";
import toteBagTwo from "../assets/bags/totebagtwo.png";
import toteBagThree from "../assets/bags/totebagthree.png";

import walletOne from "../assets/bags/walletone.png";
import walletTwo from "../assets/bags/wallettwo.png";
import walletThree from "../assets/bags/walletthree.png";

// Beauty
import eyeshadowOne from "../assets/beauty/eyeshadowone.png";
import eyeshadowTwo from "../assets/beauty/eyeshadowtwo.png";
import eyeshadowThree from "../assets/beauty/eyeshadowthree.png";

import foundationOne from "../assets/beauty/foundationone.png";
import foundationTwo from "../assets/beauty/foundationtwo.png";
import foundationThree from "../assets/beauty/foundationthree.png";

import lipTintOne from "../assets/beauty/liptintone.png";
import lipTintTwo from "../assets/beauty/liptinttwo.png";

// Clothing
import hoodieOne from "../assets/clothing/hoodieone.png";
import hoodieTwo from "../assets/clothing/hoodietwo.png";
import hoodieThree from "../assets/clothing/hoodiethree.png";

import shirtOne from "../assets/clothing/shirtone.png";
import shirtTwo from "../assets/clothing/shirttwo.png";
import shirtThree from "../assets/clothing/shirtthree.png";

// Daily essentials
import lampOne from "../assets/daily/lampone.png";
import lampTwo from "../assets/daily/lamptwo.png";
import lampThree from "../assets/daily/lammpthree.png";

import mugOne from "../assets/daily/mugone.png";
import mugTwo from "../assets/daily/mugtwo.png";
import mugThree from "../assets/daily/mugthree.png";

import organizerOne from "../assets/daily/organizerone.png";
import organizerTwo from "../assets/daily/organizertwo.png";
import organizerThree from "../assets/daily/organizerthree.png";

import pillowOne from "../assets/daily/pillowone.png";
import pillowTwo from "../assets/daily/pillowtwo.png";
import pillowThree from "../assets/daily/pillowthree.png";

// School supplies
import notebookOne from "../assets/school/notebookone.png";
import notebookTwo from "../assets/school/notebooktwo.png";
import notebookThree from "../assets/school/notebookthree.png";

import penOne from "../assets/school/penone.png";
import penTwo from "../assets/school/pentwo.png";
import penThree from "../assets/school/penthree.png";

import pouchOne from "../assets/school/pouchone.png";
import pouchTwo from "../assets/school/pouchtwo.png";
import pouchThree from "../assets/school/pouchthree.png";
import earbudOne from "../assets/electronics/earbudone.png";
import earbudTwo from "../assets/electronics/earbudtwo.png";
import earbudThree from "../assets/electronics/earbudthree.png";

import headphoneOne from "../assets/electronics/headphoneone.png";
import headphoneTwo from "../assets/electronics/headphonetwo.png";
import headphoneThree from "../assets/electronics/headphonethree.png";

import powerbankOne from "../assets/electronics/powerbankone.png";
import powerbankTwo from "../assets/electronics/powerbanktwo.png";
import powerbankThree from "../assets/electronics/powerbankthree.png";

import smartwatchOne from "../assets/electronics/smartwatchone.png";
import smartwatchTwo from "../assets/electronics/smartwatchtwo.png";
import smartwatchThree from "../assets/electronics/smartwatchthree.png";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    description:
      "Enjoy your favorite music with these stylish wireless earbuds. Perfect for studying, traveling, and everyday listening.",
    price: 599,
    stock: 15,
    rating: 4.8,
    images: [earbudOne, earbudTwo, earbudThree],
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    description:
      "Comfortable headphones with a modern design for music, online classes, and entertainment.",
    price: 899,
    stock: 12,
    rating: 4.7,
    images: [headphoneOne, headphoneTwo, headphoneThree],
  },
  {
    id: 3,
    name: "Portable Power Bank",
    category: "Electronics",
    description:
      "Keep your devices charged while on the go with this convenient portable power bank.",
    price: 699,
    stock: 4,
    rating: 4.6,
    images: [powerbankOne, powerbankTwo, powerbankThree],
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    description:
      "A versatile smartwatch-style accessory for checking notifications and tracking everyday activities.",
    price: 1299,
    stock: 8,
    rating: 4.9,
    images: [smartwatchOne, smartwatchTwo, smartwatchThree],
  },
    // BAGS AND ACCESSORIES
  {
    id: 5,
    name: "Everyday Backpack",
    category: "Bags",
    description: "A practical backpack for school, travel, and daily essentials.",
    price: 799,
    stock: 12,
    rating: 4.8,
    images: [backpackOne, backpackTwo, backpackThree],
  },
  {
    id: 6,
    name: "Casual Pants",
    category: "Bags",
    description: "Comfortable everyday pants with a versatile casual style.",
    price: 599,
    stock: 8,
    rating: 4.5,
    images: [pantsOne, pantsTwo, pantsThree],
  },
  {
    id: 7,
    name: "Shoulder Bag",
    category: "Bags",
    description: "A stylish shoulder bag for carrying everyday essentials.",
    price: 499,
    stock: 3,
    rating: 4.7,
    images: [shoulderBagOne, shoulderBagTwo, shoulderBagThree],
  },
  {
    id: 8,
    name: "Classic Sunglasses",
    category: "Bags",
    description: "A fashionable accessory for sunny days and casual outfits.",
    price: 299,
    stock: 15,
    rating: 4.4,
    images: [sunglassesOne, sunglassesTwo, sunglassesThree],
  },
  {
    id: 9,
    name: "Canvas Tote Bag",
    category: "Bags",
    description: "A lightweight reusable tote bag for shopping and daily use.",
    price: 249,
    stock: 20,
    rating: 4.6,
    images: [toteBagOne, toteBagTwo, toteBagThree],
  },
  {
    id: 10,
    name: "Classic Wallet",
    category: "Bags",
    description: "A compact wallet for keeping cards and cash organized.",
    price: 199,
    stock: 4,
    rating: 4.5,
    images: [walletOne, walletTwo, walletThree],
  },

  // BEAUTY
  {
    id: 11,
    name: "Eyeshadow Palette",
    category: "Beauty",
    description: "A versatile eyeshadow palette for creative everyday looks.",
    price: 349,
    stock: 10,
    rating: 4.8,
    images: [eyeshadowOne, eyeshadowTwo, eyeshadowThree],
  },
  {
    id: 12,
    name: "Liquid Foundation",
    category: "Beauty",
    description: "A liquid foundation for a smooth, even-looking makeup finish.",
    price: 399,
    stock: 8,
    rating: 4.6,
    images: [foundationOne, foundationTwo, foundationThree],
  },
  {
    id: 13,
    name: "Lip Tint",
    category: "Beauty",
    description: "A convenient lip tint for adding a touch of color to your look.",
    price: 179,
    stock: 15,
    rating: 4.7,
    images: [lipTintOne, lipTintTwo],
  },

  // CLOTHING
  {
    id: 14,
    name: "Cozy Hoodie",
    category: "Clothing",
    description: "A cozy casual hoodie for relaxed days and cool weather.",
    price: 699,
    stock: 9,
    rating: 4.8,
    images: [hoodieOne, hoodieTwo, hoodieThree],
  },
  {
    id: 15,
    name: "Basic Shirt",
    category: "Clothing",
    description: "A simple everyday shirt that pairs easily with casual outfits.",
    price: 299,
    stock: 14,
    rating: 4.5,
    images: [shirtOne, shirtTwo, shirtThree],
  },

  // DAILY ESSENTIALS
  {
    id: 16,
    name: "Desk Lamp",
    category: "Daily",
    description: "A practical desk lamp for reading, studying, and working.",
    price: 449,
    stock: 4,
    rating: 4.7,
    images: [lampOne, lampTwo, lampThree],
  },
  {
    id: 17,
    name: "Cute Mug",
    category: "Daily",
    description: "A reusable mug for your favorite hot or cold beverages.",
    price: 199,
    stock: 18,
    rating: 4.6,
    images: [mugOne, mugTwo, mugThree],
  },
  {
    id: 18,
    name: "Desk Organizer",
    category: "Daily",
    description: "Keep your desk neat with a convenient organizer for small items.",
    price: 279,
    stock: 7,
    rating: 4.5,
    images: [organizerOne, organizerTwo, organizerThree],
  },
  {
    id: 19,
    name: "Soft Pillow",
    category: "Daily",
    description: "A soft pillow designed to add comfort to your resting space.",
    price: 399,
    stock: 11,
    rating: 4.8,
    images: [pillowOne, pillowTwo, pillowThree],
  },

  // SCHOOL SUPPLIES
  {
    id: 20,
    name: "Study Notebook",
    category: "School",
    description: "A notebook for class notes, assignments, and personal reminders.",
    price: 89,
    stock: 25,
    rating: 4.7,
    images: [notebookOne, notebookTwo, notebookThree],
  },
  {
    id: 21,
    name: "Pen Set",
    category: "School",
    description: "A handy set of pens for writing notes and completing schoolwork.",
    price: 59,
    stock: 30,
    rating: 4.6,
    images: [penOne, penTwo, penThree],
  },
  {
    id: 22,
    name: "School Pencil Pouch",
    category: "School",
    description: "A convenient pouch for keeping pens, pencils, and small supplies together.",
    price: 149,
    stock: 4,
    rating: 4.8,
    images: [pouchOne, pouchTwo, pouchThree],
  },
];
