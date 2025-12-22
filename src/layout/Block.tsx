import styles from './Block.module.scss';

type LocationBlockProps = React.PropsWithChildren & {
  url?: string;
  title: string;
  description?: string;
};

export const LocationBlock: React.ComponentType<LocationBlockProps> = (props) => {
  const { children, url, title, description } = props;

  const titleNode = url ? <a href={url}>{title}</a> : title;

  return (
    <div className={styles.block}>
      <h3 className={styles.title}>
        <span className={styles.mainTitle}>{titleNode}</span>
      </h3>
      <div>{description}</div>
      <div className={styles.experiences}>{children}</div>
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
    <div className={styles.experience}>
      <span className={styles.title}>{title}</span>
      <span className={styles.dates}>
        {startDate} - {endDate}
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
