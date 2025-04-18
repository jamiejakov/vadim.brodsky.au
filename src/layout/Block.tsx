import styles from './Block.module.scss';

type BlockProps = React.PropsWithChildren & {
  url?: string;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
};

export const Block: React.ComponentType<BlockProps> = (props) => {
  const { children, url, title, subtitle, startDate, endDate } = props;

  const titleNode = url ? <a href={url}>{title}</a> : title;

  return (
    <div className={styles.block}>
      <h3 className={styles.title}>
        <span className={styles.mainTitle}>{titleNode}</span> - {subtitle}
      </h3>
      <span className={styles.dates}>
        {startDate} - {endDate}
      </span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
