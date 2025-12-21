import { Block } from '../layout/Block';
import { Section } from '../layout/Section';

export const Experience: React.ComponentType = () => (
  <Section title="Experience">
    <Block
      title="Canva"
      url="https://canva.com"
      subtitle="Principal Software Engineer (Frontend)"
      startDate="November 2019"
      endDate="Today"
    >
      Canva is a graphic-design tool used by non-designers as well as professionals for both web and print media design
      and graphics.
    </Block>
    <Block
      title="SMASH Inc"
      url="https://smash.org.au"
      subtitle="IT Director, Technical Lead, Software Engineer"
      startDate="September 2017"
      endDate="today"
    >
      Managing a team of 15 software developers to develop our website, component library and in-house ticketing system
      built in React Typescript frontend & Express MySQL backend. Coordinating with the venue for hardware and
      networking requirements.
    </Block>
    <Block
      title="WiseTech Global"
      url="https://wisetechglobal.com"
      subtitle="Software Developer"
      startDate="November 2015"
      endDate="November 2019"
    >
      CargoWise One is the operating system for the logistics industry. In my role, I work on one of the modules of
      CargoWise One, focusing on productivity and behaviour shaping. Developing in C# with TDD and on the web front-end
      with React and KnockoutJS. Mentor for new starters and interns.
    </Block>
    <Block title="urbanest" subtitle="Customer Service Assistant" startDate="November 2011" endDate="November 2015">
      Coordinate and deliver the community building and sales activity at the site ensuring high levels of customer
      retention and acquisition.
    </Block>
  </Section>
);
