import React, { useState, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";

interface ModalProps {
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps> = ({
  title = "Modal",
  onClose,
  children,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold">{title}</h2>
        <div>{children}</div>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

let modalRoot: HTMLElement | null = null;
let showModalFn: ((props: ModalProps) => void) | null = null;
let hideModalFn: (() => void) | null = null;

const ModalContainer: React.FC = () => {
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const showModal = useCallback((props: ModalProps) => {
    setModalProps(props);
  }, []);

  const hideModal = useCallback(() => {
    setModalProps(null);
  }, []);

  useEffect(() => {
    showModalFn = showModal;
    hideModalFn = hideModal;

    return () => {
      showModalFn = null;
      hideModalFn = null;
    };
  }, [showModal, hideModal]);

  if (!modalProps) return null;

  return (
    <ModalComponent
      {...modalProps}
      onClose={() => {
        hideModal();
        modalProps.onClose?.();
      }}
    />
  );
};

const initializeModal = () => {
  if (!modalRoot) {
    modalRoot = document.createElement("div");
    document.body.appendChild(modalRoot);
    const root = createRoot(modalRoot);
    root.render(<ModalContainer />);
  }
};

export const Modal = {
  show: (props: ModalProps) => {
    initializeModal();
    if (showModalFn) {
      showModalFn(props);
    } else {
      // 如果showModalFn还没有被设置,我们可以使用一个小的延迟
      setTimeout(() => showModalFn?.(props), 0);
    }
  },
  hide: () => {
    hideModalFn?.();
  },
};
