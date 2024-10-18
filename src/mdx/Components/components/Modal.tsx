import React, { useState, useEffect, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface ModalProps {
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const ModalComponent: React.FC<ModalProps & { visible: boolean }> = ({
  visible,
  title = "Modal",
  onClose,
  children,
}) => {
  return (
    <Dialog open={visible} onOpenChange={(open) => !open && onClose?.()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <Button onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
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
      visible={!!modalProps}
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
    showModalFn?.(props);
  },
  hide: () => {
    hideModalFn?.();
  },
};
