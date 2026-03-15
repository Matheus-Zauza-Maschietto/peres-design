function ChevronLeft() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <polyline points="15,18 9,12 15,6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <polyline points="9,18 15,12 9,6" />
    </svg>
  );
}

export default function CarouselNavButton({ direction, onClick }) {
  const isPrev = direction === 'prev';

  return (
    <button
      onClick={onClick}
      aria-label={isPrev ? 'Slide anterior' : 'Próximo slide'}
      className={`
        absolute ${isPrev ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 z-10
        w-10 h-10 flex items-center justify-center rounded-full
        bg-white/90 backdrop-blur-sm border border-[#969696]/20 shadow-sm
        text-black hover:bg-[#82B2BE] hover:text-white hover:border-[#82B2BE]
        transition-all duration-300 ease-out
      `}
    >
      {isPrev ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}
