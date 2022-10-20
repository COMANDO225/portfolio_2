import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { useTypewriter } from 'react-simple-typewriter';

const Hero = (props) => {

  const [ text, count ] = useTypewriter({
    words: ["Anderson Almeyda","<ReactDeveloper />", "<FullStackDeveloper />", "<PassionateDeveloper />",],
    loop: true,
    delaySpeed: 1000,
})

  const handleReprobar = () => {
    alert('Toca ser senatino :(, lamento no ser suficiente');
  }

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle center main>
            {`| ${text}`}
          </SectionTitle>
          <SectionText>
            I am a tecsup student and, currently working on my skills and learning new technologies to become a better developer.          
          </SectionText>
          <Button onClick={handleReprobar}>Reprobar</Button>
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;