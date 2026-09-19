export default function SectionHeading({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={light ? "text-white" : ""}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="display-title max-w-2xl text-4xl sm:text-5xl">{title}</h2>
      {copy && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-lg leading-8 text-white/70"
              : "text-ink/65 mt-5 max-w-xl text-lg leading-8"
          }
        >
          {copy}
        </p>
      )}
    </div>
  );
}
