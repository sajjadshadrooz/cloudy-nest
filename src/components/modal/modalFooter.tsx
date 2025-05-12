import { ReactNode } from "react";
import { Button } from "../button/button";

interface ModalFooterProps {
  action: () => void;
  actionTitle?: string;
  negative?: boolean;
  onClose?: () => void;
}

export const ModalFooter = ({
  action,
  actionTitle = "Confirm",
  negative = false,
  onClose,
}: ModalFooterProps) => (
  <div className="flex justify-end border-t px-6 py-4 border-neutral-default-3">
    <div className="flex items-center justify-center gap-2">
      {negative ? (
        <>
          <Button onClick={action} variant="danger">
            {actionTitle}
          </Button>
          <Button onClick={onClose} variant="info">
            Cancel
          </Button>
        </>
      ) : (
        <>
          <Button onClick={onClose} variant="info">
            Cancel
          </Button>
          <Button onClick={action} variant="primary">
            {actionTitle}
          </Button>
        </>
      )}
    </div>
  </div>
);
