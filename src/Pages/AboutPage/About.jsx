import { AboutPageContainer } from './AboutPage.style'
import React from 'react';

const About = () => {
  return (
    <AboutPageContainer>
      <h2>Om os</h2>
      <div className="ContentWrapper">
        <div className="Text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /> <br />Vi er en gruppe af studenter fra Danmarks Tekniske Universitet, som
            For nylig væltede en nyhed rundt på internettet om, at selv samme internet snart vil være fyldt. Ja, stopfyldt. Ikke flere babyer, der kan spille tuba. Slut med lister over 10 ting, du bør vide. Og fra lige om lidt, kaptajn, skal du vide, ikke google. Det er ikke mig, I skal gå til for at få de tekniske detaljer, men det var noget med færdselsårer. Jeg tror ikke, at der var mange, der fik urolige nætter. Vi har en enorm tillid til teknologien, og en endnu større til de kapitalinteresser, der skubber den overbevisende. Internettet er uendeligt. Resten er teknikaliteter. Sådan er det – fastslår jeg ganske uden vidensgrundlag.

            Men hvorfor opfører så mange folk sig så, som om vi bevæger os på begrænset plads, når vi er på nettet?
          </p>
          {/* Add more Lorem Ipsum text as needed */}
        </div>
        <div className="Image">
          {/* Replace the src attribute with the actual path to your image */}
          <img src="src/Assets/img/Star.jpg" alt="About Us" />
        </div>
      </div>
    </AboutPageContainer>
  );
};

export default About;