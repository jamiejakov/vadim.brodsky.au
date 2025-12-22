import { ExperienceBlock, LocationBlock } from '../layout/Block';
import { Section } from '../layout/Section';

export const Experience: React.ComponentType = () => (
  <Section title="Work">
    <LocationBlock
      title="Canva"
      url="https://canva.com"
      description="Empowering the world to design. Canva is an online design and publishing tool with a mission to empower everyone in the world to design anything and publish anywhere."
    >
      <ExperienceBlock
        title="Principal Software Engineer (Frontend)"
        startDate="September 2025"
        endDate="Today"
      ></ExperienceBlock>
      <ExperienceBlock
        title="Staff Software Engineer (Frontend)"
        startDate="August 2024"
        endDate="September 2025"
      ></ExperienceBlock>
      <ExperienceBlock
        title="Senior Software Engineering Manager"
        startDate="September 2022"
        endDate="August 2024"
      ></ExperienceBlock>
      <ExperienceBlock
        title="Software Engineering Manager"
        startDate="November 2020"
        endDate="September 2022"
      ></ExperienceBlock>
      <ExperienceBlock
        title="Software Engineer (Frontend)"
        startDate="November 2019"
        endDate="November 2020"
      ></ExperienceBlock>
    </LocationBlock>
    <LocationBlock
      title="SMASH Inc"
      url="https://smash.org.au"
      description="SMASH! is a non-profit organisation that runs an annual Japanese pop culture convention that is devoted to artists, creators and fans alike."
    >
      <ExperienceBlock title="Technical Lead" startDate="September 2017" endDate="Today">
        Architected and maintained an in-house ticketing system. Set the foundations and evolutions of the tech stack
        and strategy. Built the system in React Typescript FE & ExpressJS, MySQL BE with GitHub Actions CI, CD & Azure
        hosting.
      </ExperienceBlock>
      <ExperienceBlock title="IT Director" startDate="September 2017" endDate="December 2025">
        Managing a team of 15 software developers to develop our website, component library and in-house ticketing
        system. Coordinating with leads of teams across the org for collaboration and planning for the annual event.
        Liaised with the venue for hardware and networking requirements.
      </ExperienceBlock>
    </LocationBlock>
    <LocationBlock title="WiseTech Global" url="https://wisetechglobal.com">
      <ExperienceBlock title="Software Developer" startDate="November 2015" endDate="November 2019">
        CargoWise One is the operating system for the logistics industry. In my role, I work on one of the modules of
        CargoWise One, focusing on productivity and behaviour shaping. Developing in C# with TDD and on the web
        front-end with React and KnockoutJS. Mentor for new starters and interns.
      </ExperienceBlock>
    </LocationBlock>
    <LocationBlock
      title="urbanest student accommodation"
      description="urbanest is a leading contemporary student accommodation provider, focused on delivering the highest quality accommodation and sector-leading service to students."
    >
      <ExperienceBlock title="Customer Service Assistant" startDate="November 2011" endDate="November 2015">
        Coordinate and deliver the community building and sales activity at the site ensuring high levels of customer
        retention and acquisition.
      </ExperienceBlock>
    </LocationBlock>
  </Section>
);
