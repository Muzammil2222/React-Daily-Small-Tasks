import React from 'react'
import { useState, useEffect } from 'react';

function Button({item, bgColor, text, onClick}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div style={{
        border: 'none',
        width: '100%',
    }}>
        <button style={{
                padding: '10px 20px',
                border: 'none',
                backgroundColor: bgColor || 'blue',
                color: 'white',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize:'20px',
                fontFamily:'Poppins'
              }}  onClick={onClick}
              > {text}</button>
    </div>
  )
}

export default Button
