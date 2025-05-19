export default function Titolo({ heading, tabs, activeIndex }) {
    return (
      <section className="flex flex-col items-start bg-[#f5f5f5] rounded-2xl p-6 min-h-[120px]">
        <nav className="flex items-center gap-8">
          {tabs.map((label, i) => (
            <span
              key={i}
              className={`text-[#2e2e2e] font-bold underline decoration-2 decoration-current ${
                i === activeIndex ? '' : 'opacity-50'
              }`}
            >
              {label}
            </span>
          ))}
        </nav>
      </section>
    );
  }
  
  