import React from 'react';
import './about.css';

export function About() {
  return (
    <main>
        <div className="picture-box">
            <img src="mother.avif" width ="100%" alt="random" />
        </div>
        <div id="pregnancy-tip">
            <h1>Tip of the Day</h1>
            <p>Stay hydrated throughout your pregnancy! Drinking enough water supports amniotic fluid levels, 
            helps nutrients circulate, and reduces swelling. - Dr. Suchandsuch</p>
        </div>
        <div id="about-us">
            <h1>About Us</h1>
            <p>Bumptalk is a community platform specifically designed for expecting women to connect, 
            share experiences, and support one another. It aims to provide a safe and engaging 
            space for conversations and resource sharing during pregnancy.</p>
        </div>
    </main> 
  );
}