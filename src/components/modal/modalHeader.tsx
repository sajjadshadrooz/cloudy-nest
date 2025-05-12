export const ModalHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="w-full flex flex-col justify-start gap-2 border-b px-6 py-4 border-neutral-default-3">
    <div className="font-bold text-lg">{title}</div>
    {description && <p className="text-sm">{description}</p>}
  </div>
);
