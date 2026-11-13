const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 930 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="EasyType"
    >
      <text
        x="465"
        y="215"
        textAnchor="middle"
        fontSize="210"
        fontWeight="800"
        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
        letterSpacing="-6"
        className="logo-primary"
        fill="currentColor"
      >
        {"EasyType"}
      </text>
    </svg>
  );
};

export default HandyTextLogo;
