import { Header } from './Header';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Volunteering } from './sections/Volunteering';

import styles from './App.module.scss';

export const App: React.ComponentType = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.column}>
            <Experience />
            <Education />
          </div>
          <div className={styles.column}>
            <Contact />
            <Volunteering />
          </div>
        </div>
      </main>
    </>
  );
};
