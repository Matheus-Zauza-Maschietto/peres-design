const accentClasses = {
  primary1: {
    icon: "text-primary1",
    border: "border-primary1",
    hover: "hover:bg-primary1",
  },
  primary2: {
    icon: "text-primary2",
    border: "border-primary2",
    hover: "hover:bg-primary2",
  },
};

export default function ContactCard({ id, icon, label, description, actionLabel, href, accent }) {
  const cls = accentClasses[accent];

  return (
    <a
      href={href}
      target={id !== "email" ? "_blank" : undefined}
      rel={id !== "email" ? "noopener noreferrer" : undefined}
      aria-label={actionLabel}
      className={[
        "group flex flex-col items-center text-center gap-5",
        "border border-[#e8e8e8] rounded-sm p-10",
        "transition-colors duration-300",
        cls.hover,
        "hover:border-transparent hover:text-white",
      ].join(" ")}
    >
      <span
        className={[
          "text-4xl transition-colors duration-300",
          cls.icon,
          "group-hover:text-white",
        ].join(" ")}
        aria-hidden="true"
      >
        <i className={icon}></i>
      </span>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] mb-2 font-medium">
          {label}
        </p>
        <p className="text-sm font-light leading-relaxed text-neutral group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      </div>

      <span
        className={[
          "mt-auto text-xs uppercase tracking-widest font-medium",
          "border-b pb-0.5 transition-colors duration-300",
          cls.border,
          "group-hover:border-white",
        ].join(" ")}
      >
        {actionLabel}
      </span>
    </a>
  );
}
