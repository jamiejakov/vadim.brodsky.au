import styles from './Section.module.scss';

type SectionProps = React.PropsWithChildren & {
  title: string;
};

export const Section: React.ComponentType<SectionProps> = (props) => {
  const { children, title } = props;

  return (
    <section>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
