import { ReactNode } from "react";
import clsx from "clsx";
import { ModalHeader } from "./modalHeader";
import { ModalBody } from "./modalBody";
import { ModalFooter } from "./modalFooter";

interface ModalProps {
  title: string;
  description?: string;
  action: () => void;
  actionTitle?: string;
  negative?: boolean;
  onClose: () => void;
  children?: ReactNode;
  isOpen: boolean;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "max-w-md",
  medium: "max-w-lg",
  large: "max-w-3xl",
};

export const Modal = ({
  size = "medium",
  title,
  description,
  action,
  actionTitle = "confirm",
  negative = false,
  isOpen,
  onClose,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        className={clsx(
          "w-full rounded-xl bg-white shadow-xl",
          sizeClasses[size]
        )}
      >
        <ModalHeader title={title} description={description} />
        <ModalBody>{children}</ModalBody>
        <ModalFooter
          action={action}
          actionTitle={actionTitle}
          negative={negative}
          onClose={onClose}
        />
      </div>
    </div>
  );
};
