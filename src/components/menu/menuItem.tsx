type MenuBoxItemProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export default function MenuItem({
  label,
  onClick,
  disabled,
}: MenuBoxItemProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full text-sm cursor-pointer text-left p-2 rounded-lg hover:bg-background hover:text-neutral-hover-fg-1 active:bg-neutral-press-bg-1 active:text-black disabled:text-neutral-disable-fg-1 disabled:bg-white disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}
