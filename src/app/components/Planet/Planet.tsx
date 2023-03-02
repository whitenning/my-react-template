import React, { useRef, useEffect, useState } from 'react';


import './Planet.scss'


function Planet() {
 
  // Planet attract function
  const [isHovering, setIsHovering] = useState(false);
  const movePlanet = (event:any) => {
    const planet:any = document.querySelector('.planet img');
    const planetRect = planet.getBoundingClientRect();
    const animationEntry:any = document.querySelector('.animation-entry');
    const animationEntryRect = animationEntry.getBoundingClientRect();
  
    const x = event.clientX;
    const y = event.clientY;
  
    const maxX = animationEntryRect.right - planetRect.width / 2;
    const maxY = animationEntryRect.bottom - planetRect.height / 2;
    const minX = animationEntryRect.left + planetRect.width / 2;
    const minY = animationEntryRect.top + planetRect.height / 2;
  
    const planetX = Math.min(maxX, Math.max(minX, x));
    const planetY = Math.min(maxY, Math.max(minY, y));
  
    const deltaX = planetX - planetRect.x - planetRect.width / 2;
    const deltaY = planetY - planetRect.y - planetRect.height / 2;
  
    planet.style.transition = 'transform 1s ease-out';
    planet.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }

  const resetPlanet = () => {
    const planet:any = document.querySelector('.planet img');
    planet.style.transition = 'transform 0.5s ease-out';
    planet.style.transform = 'translate(0, 0)';
  }
 
    return (
      <div className="planet">
      <div
        className="animation-entry"
        onMouseEnter={() => setIsHovering(true)}
        onMouseMove={movePlanet}
        onMouseLeave={() => {
          setIsHovering(false);
          resetPlanet();
        }}
      ></div>
      <span className="mask st"></span>
      <span className="mask nd"></span>
      <span className="mask rd"></span>
      <span className="mask th"></span>
    
      <span className="mask fifth">
        <div className="st">
          Q1 2022{" "}
          <button>
            <p></p>
          </button>
        </div>
        <div className="nd"></div>
        <div className="rd"></div>
      </span>
    
      <img src="/assets/images/planet.png" alt="" />
    </div>
    
    );
  }


export default Planet;