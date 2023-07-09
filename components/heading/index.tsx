import { orbitron } from "@/app/fonts";

const Heading = ({ children, ...props }) => {
  return (
    <h1 className={`text-3xl font-bold ${orbitron.className}`} {...props}>
      {children}
    </h1>
  );
};

export default Heading;
