import { Section } from '../layout/Section';

import globe from '../images/earth-americas-solid.svg';
import email from '../images/envelope-solid.svg';
import github from '../images/github-brands.svg';
import linkedIn from '../images/linkedin-in-brands.svg';

export const Contact: React.ComponentType = () => {
  return (
    <Section title="Contact Info">
      <ul role="list" className="ml-1">
        {/* <ContactItem icon={filePdf} link="VadimBrodskyResume.pdf" label="Resume download" /> */}
        <ContactItem icon={email} link="mailto:v@brodsky.au" label="Email" />
        {/* <ContactItem icon={phone} link="tel:+61456778660" label="0456 778 660" /> */}
        <ContactItem icon={linkedIn} link="https://www.linkedin.com/in/vadimbro/" label="LinkedIn" />
        <ContactItem icon={github} link="https://github.com/jamiejakov" label="GitHub" />
        <ContactItem icon={globe} link="https://jamiejakov.lv" label="Personal Blog" />
      </ul>
    </Section>
  );
};

type ContactItemProps = {
  icon: string;
  link: string;
  label: string;
};

const ContactItem: React.ComponentType<ContactItemProps> = (props) => {
  const { icon, link, label } = props;

  return (
    <li className="flex flex-row items-center gap-2 mb-2">
      <img src={icon} alt="" className="max-w-3" />
      <a href={link}>{label}</a>
    </li>
  );
};
