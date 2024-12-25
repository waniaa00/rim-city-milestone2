import React from 'react'
import Image from 'next/image'

const Rims = () => {
  const rimsData = [
    {
      id: 1,
      name: "Alpine",
      price: 8000,
      description: "Superior rims",
      image: '/alpine.webp'
    },
    {
      id: 2,
      name: "Garrison",
      price: 500,
      description: "Rugged rims",
      image: '/garrison.jpg'
    },
    {
      id: 3,
      name: "Arsenal",
      price: 400,
      description: "Tactical rims",
      image: '/arsenal.webp'
    },
    {
      id: 4,
      name: "Kunene",
      price: 500,
      description: "Intricate rims",
      image: '/kunene.webp'
    },
    {
      id: 5,
      name: "Swerve",
      price: 548,
      description: "Dynamic rims",
      image: '/swerve.jpg'
    },
    {
      id: 6,
      name: "Zion 5",
      price: 364.65,
      description: "Bold rims",
      image: '/zion5.jpg'
    },
  ];

  return (
    <div>
      <div className="rims">
        {rimsData.map((item) => (
          <div key={item.id} className="rim-card">
            <Image 
              src={item.image} 
              alt={item.name} 
              width={300} 
              height={300} 
              priority
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="price">${item.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rims;

