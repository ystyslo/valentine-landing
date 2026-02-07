import { useState } from "react";

export function ValentineButtons({ onYesClick }: { onYesClick?: () => void }) {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const getTooltipText = () => {
    if (noClickCount === 0) return "Are you crazy?";
    if (noClickCount === 1) return "You wanna break up?";
    if (noClickCount === 2)
      return "We're definitely going to have serious conversation...";
    if (noClickCount === 3) return "Forget my number!";
    if (noClickCount === 4) return "NEXT CLICK WILL BREAK YOUR COMPUTER";
    return "😒 Seriously you better click other button...";
  };

  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-6 z-20">
      <button
        onClick={onYesClick}
        className="text-4xl bg-gray-200/60 backdrop-blur-sm text-gray-500 px-20 py-4 rounded-2xl hover:bg-gray-300/60 transition-all shadow-lg border border-gray-300"
      >
        Yes! 💕
      </button>

      <div className="relative">
        <button
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setNoClickCount((prev) => prev + 1)}
          className="text-4xl bg-gray-200/60 backdrop-blur-sm text-gray-500 px-10 py-4 rounded-2xl hover:bg-gray-300/60 transition-all shadow-lg border border-gray-300"
        >
          No 🥺
        </button>

        {showTooltip && (
          <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-6 py-3 bg-gray-200/60 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-red-300">
            <p className="text-red-600 font-semibold text-lg whitespace-nowrap">
              {getTooltipText()}
            </p>
            <div className="absolute top-full left-1/2 -translate-x-1/2">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-300"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
