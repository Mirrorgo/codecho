import { Button } from "@/components/ui/button";
import { Modal } from "./components/Modal";

function ModalTest() {
  const showLogin = () => {
    Modal.show({
      title: "Login Modal",
      children: <div>This is login modal content</div>,
    });
  };
  const showMessage = () => {
    Modal.show({
      title: "Message",
      children: <div>This is message modal content</div>,
    });
  };

  return (
    <div className="flex gap-5">
      <Button onClick={showLogin}>Open Login</Button>
      <Button onClick={showMessage}>Open Message</Button>
    </div>
  );
}

export { ModalTest };
