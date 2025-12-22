import { ExperienceBlock, LocationBlock } from '../layout/Block';
import { Section } from '../layout/Section';

export const Volunteering: React.ComponentType = () => (
  <Section title="Volunteering">
    <LocationBlock title="Anime@UTS" url="https://utsanime.net">
      <ExperienceBlock title="web master" startDate="September 2011" endDate="September 2017">
        Was part of the executive team running the Japanese pop-culture society of UTS Active Clubs. Responsible for
        managing and maintaining the website with over 1000 yearly visits, supported the organisation GSuite services
        with over 300 users.
      </ExperienceBlock>
    </LocationBlock>
    <LocationBlock title="Kagoshima university vision research lab">
      <ExperienceBlock title="iOS application developer" startDate="June 2014" endDate="February 2015">
        Developed an App which allowed colourblind people to distinguish colours, by changing the shading of the red and
        green parts of the video captured on camera.
      </ExperienceBlock>
    </LocationBlock>
  </Section>
);
