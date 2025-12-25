import avatarImage from './images/photo.jpeg';

export const Header: React.ComponentType = () => {
  return (
    <header
      className="header-clip-path mb-4 flex w-full flex-wrap items-center justify-center gap-2 bg-primary px-4 pt-8
        pb-16 md:gap-8 md:pb-12"
    >
      <img
        className="max-w-40 border-2 border-white rounded-full"
        src={avatarImage}
        alt="Profile image of Vadim Brodsky in a kimono"
      />
      <div className="text-white flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-1.2 tracking-[-0.1rem] font-weight-700 text-center">
          Vadim Brodsky
        </h1>
        <p className="text-xl font-light text-center">Tech lead for work, coder at heart, photographer for fun</p>
      </div>
    </header>
  );
};
