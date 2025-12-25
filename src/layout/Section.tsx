type SectionProps = React.PropsWithChildren & {
  title: string;
};

export const Section: React.ComponentType<SectionProps> = (props) => {
  const { children, title } = props;

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-normal text-primary uppercase">{title}</h2>
      <div className="mt-2 flex flex-col gap-8">{children}</div>
    </section>
  );
};
