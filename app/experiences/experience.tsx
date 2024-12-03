interface ExperienceProps {
  title: string;
  subtitle: string;
  descr: string;
  bulletPoints?: string[];
  dateStart: string;
  dateEnd?: string;
}

export default function Experience({
  title,
  subtitle,
  descr,
  bulletPoints,
  dateStart,
  dateEnd,
}: ExperienceProps) {
  return (
    <div className="grid grid-cols-2 mb-10">
      <div className="ml-10 relative">
        <h3>{dateStart}</h3>
        <div className="ml-10 border-l-8 border-dashed border-[#677D6A] h-full"></div>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{descr}</p>
        {bulletPoints !== null ? (
          <ul className="ml-5 list-disc">
            {bulletPoints?.map((element) => {
              return <li key={element}>{element}</li>;
            })}
          </ul>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
