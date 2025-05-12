import { applicationName } from "@/configs/setting";

export default function LoadingPage({}) {
  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center z-50 relative">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[32px] font-bold">{applicationName}</div>
        <div className="text-[18px]">Preparing application...</div>
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 mt-10 border-primary-hover-bg-2"></div>
      </div>
    </div>
  );
}
