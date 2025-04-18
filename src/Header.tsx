import styles from './Header.module.scss';
import avatarImage from './images/photo.jpeg';

export const Header: React.ComponentType = () => {
  return (
    <header className={styles.header}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatarImage} src={avatarImage} alt="Profile image of Vadim Brodsky in a kimono" />
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Vadim Brodsky</h1>
        <p className={styles.subtitle}>Tech lead for work, coder at heart, photographer for fun</p>
      </div>
    </header>
  );
};
