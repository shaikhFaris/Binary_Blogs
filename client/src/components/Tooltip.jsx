const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className="tooltip-text font-mono text-teal-500 dark:text-teal-400">
        {text}
      </div>
    </div>
  );
};
export default Tooltip;
