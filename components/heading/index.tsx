const Heading = ({ children, ...props }) => {
  return (
    <h1 className="text-3xl font-bold" {...props}>
      {children}
    </h1>
  );
};

export default Heading;
