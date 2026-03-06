// import { useState, useEffect } from "react";
import Card from "./card";
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
        {carruselImg.map((src, i) =>(
          <Card src = {src} key = {i}/>
        ))}

      </div>
    </div>
  )
}



