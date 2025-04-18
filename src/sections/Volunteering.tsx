import { Block } from '../layout/Block';
import { Section } from '../layout/Section';

export const Volunteering: React.ComponentType = () => (
  <Section title="Volunteering">
    <Block
      title="Anime@UTS"
      url="https://utsanime.net"
      subtitle="web master"
      startDate="September 2011"
      endDate="September 2017"
    >
      Was part of the executive team running the Japanese pop-culture society of UTS Active Clubs. Responsible for
      managing and maintaining the website, supporting the organisation GSuite services with over 300 users.
    </Block>
    <Block
      title="Kagoshima university vision research lab"
      subtitle="iOS application developer"
      startDate="June 2014"
      endDate="February 2015"
    >
      Developed an App which allowed colourblind people to distinguish colours, by changing the shading of the red and
      green parts of the video captured on camera.
    </Block>
  </Section>
);
