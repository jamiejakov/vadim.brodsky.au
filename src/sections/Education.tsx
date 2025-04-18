import { Block } from '../layout/Block';
import { Section } from '../layout/Section';

export const Education: React.ComponentType = () => (
  <Section title="Education">
    <Block
      title="University of Technology Sydney"
      url="https://www.uts.edu.au"
      subtitle="Bachelor of Science in Information Technology & Bachelor of Arts in International Studies"
      startDate="August 2010"
      endDate="August 2016"
    >
      <p>
        Bachelor of Science in Information Technology Bachelor of Arts in International Studies, majoring in software
        engineering and applications development.
      </p>
      <p>
        <strong>Commendation</strong> - Membership of the Dean's List 2012.
      </p>
      <p>
        <strong>Electives</strong> - Software Development Project, iOS Development, Android Development, Cloud Computing
        SaaS, Webmedia, Mobile Networking.
      </p>
    </Block>
    <Block
      title="Kagoshima University"
      url="https://www.kagoshima-u.ac.jp"
      subtitle="In-country study exchange"
      startDate="April 2014"
      endDate="February 2015"
    >
      <p>
        Japanese language and culture study. Studied advanced academic reading, professional writing, and unique
        cultural differences.
      </p>
      <p>
        <strong>Scholarship</strong> - JASSO Scholarship.
      </p>
      <p>
        <strong>Electives</strong> - Data Structures and Algorithms, Programming in C++
      </p>
    </Block>
  </Section>
);
