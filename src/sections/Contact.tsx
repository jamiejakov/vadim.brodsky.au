import { Section } from '../layout/Section';

import globe from '../images/earth-americas-solid.svg';
import email from '../images/envelope-solid.svg';
import filePdf from '../images/file-pdf-solid.svg';
import github from '../images/github-brands.svg';
import linkedIn from '../images/linkedin-in-brands.svg';
import phone from '../images/phone-solid.svg';
import styles from './Contact.module.scss';

export const Contact: React.ComponentType = () => {
  return (
    <Section title="Contact Info">
      <ul className={styles.list}>
        <ContactItem icon={filePdf} link="VadimBrodskyResume.pdf" label="Resume download" />
        <ContactItem icon={email} link="mailto:vadim@brodsky.au" label="vadim@brodsky.au" />
        <ContactItem icon={phone} link="tel:+61456778660" label="0456 778 660" />
        <ContactItem icon={linkedIn} link="https://www.linkedin.com/in/vadimbro/" label="vadimbro" />
        <ContactItem icon={github} link="https://github.com/jamiejakov" label="jamiejakov" />
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
    <li className={styles.listItem}>
      <img src={icon} alt="" className={styles.icon} />
      <a href={link}>{label}</a>
    </li>
  );
};
