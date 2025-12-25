import { Header } from './Header';
import { Contact } from './sections/Contact';
import { Education } from './sections/Education';
import { Experience } from './sections/Experience';
import { Volunteering } from './sections/Volunteering';

export const App: React.ComponentType = () => {
  return (
    <>
      <Header />
      <main className="w-full flex justify-center px-8 mb-20">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-[7fr_5fr] md:gap-8 max-w-6xl">
          <div>
            <Experience />
          </div>
          <div className="flex flex-col gap-12">
            <Contact />
            <Volunteering />
            <Education />
          </div>
        </div>
      </main>
    </>
  );
};
