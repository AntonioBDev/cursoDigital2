// import { useState, useEffect } from "react";
import Tarjeta from "./tarjeta";
import React from 'react';

const images = [
  "./src/assets/t1.jpg",
  "./src/assets/t2.jpg",
  "./src/assets/t3.jpg",
  "./src/assets/t2.jpg",
  "./src/assets/t1.jpg",
  "./src/assets/t3.jpg",
];

const carruselImg = [...images, ...images];

export default function carrusel() {
  return (
    <div className="overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll">
        {carruselImg.map((src) =>(
            <Tarjeta src = {src}/> 
        ))}

      </div>
    </div>
  )
}
