type LocationBlockProps = React.PropsWithChildren & {
  url?: string;
  title: string;
  description?: string;
};

export const LocationBlock: React.ComponentType<LocationBlockProps> = (props) => {
  const { children, url, title, description } = props;

  const titleNode = url ? <a href={url}>{title}</a> : title;

  return (
    <div>
      <h3 className="uppercase font-semibold text-2xl mb-1">{titleNode}</h3>
      <div>{description}</div>
      <div className="flex flex-col gap-3 mt-4 pl-4 border-l border-primary">{children}</div>
    </div>
  );
};

type ExperienceBlockProps = React.PropsWithChildren & {
  title: string;
  startDate: string;
  endDate: string;
};

export const ExperienceBlock: React.ComponentType<ExperienceBlockProps> = (props) => {
  const { children, title, startDate, endDate } = props;

  return (
    <div className="flex flex-col">
      <span className="uppercase text-xl">{title}</span>
      <span className="-mt-1 text-gray-500 italic">
        {startDate} - {endDate}
      </span>
      <div className="mt-2">{children}</div>
    </div>
  );
};
