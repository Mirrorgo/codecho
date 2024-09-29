import { Button } from "@/components/ui/button";
import { useState, FC } from "react";

type WithToggleProps = {
  isToggled: boolean;
  toggle: () => void;
};

// Higher-order component that adds toggle functionality
const withToggle = (WrappedComponent: FC<WithToggleProps>) => {
  return (initialState: boolean) => {
    return () => {
      const [isToggled, setToggle] = useState(initialState);

      const toggle = () => setToggle((prev) => !prev);

      return <WrappedComponent isToggled={isToggled} toggle={toggle} />;
    };
  };
};

// A simple button component
type ToggleButtonProps = {
  isToggled: boolean;
  toggle: () => void;
};

const ToggleButton: FC<ToggleButtonProps> = ({ isToggled, toggle }) => (
  <Button className="w-16" onClick={toggle}>
    {isToggled ? "ON" : "OFF"}
  </Button>
);

// Using the higher-order component with an initial state of false
const EnhancedToggleButton = withToggle(ToggleButton)(false);

const Hoc: FC = () => (
  <div>
    <EnhancedToggleButton />
  </div>
);

export default Hoc;
