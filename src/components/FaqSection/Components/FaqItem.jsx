export default function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(150,150,150,0.25)' }}>

      {/* Botão da pergunta */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-6 py-6 text-left transition-colors duration-200 ${
          isOpen ? 'text-primary1' : 'text-black hover:text-primary1'
        }`}
      >
        <span className="text-sm font-medium tracking-wide leading-snug">
          {faq.question}
        </span>

        {/* Ícone chevron — rotaciona quando aberto */}
        <span
          className={`flex-shrink-0 w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary1' : 'text-neutral'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Resposta expansível */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-neutral leading-relaxed pr-10">
          {faq.answer}
        </p>
        {faq.steps && (
          <ol className="mt-3 pr-10 space-y-1 list-none">
            {faq.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-neutral leading-relaxed">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center text-xs font-medium"
                  style={{ borderColor: 'rgba(150,150,150,0.4)', color: '#82B2BE' }}
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        )}
      </div>

    </div>
  );
}
