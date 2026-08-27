export default function CycleDiagram() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square">
      <svg
        viewBox="0 0 600 600"
        className="absolute inset-0 w-full h-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <marker id="arrow-rust" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#A6512E" />
          </marker>
          <marker id="arrow-teal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#0E3B36" />
          </marker>
          <marker id="arrow-gold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#B8842B" />
          </marker>
          <marker id="arrow-paddy" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#4C7A3D" />
          </marker>
        </defs>

        {/* feed & vet -> aqua */}
        <path
          d="M270,95 Q150,150 100,285"
          stroke="#A6512E"
          strokeWidth="2.5"
          markerEnd="url(#arrow-rust)"
          className="draw-path"
        />
        {/* feed & vet -> poultry */}
        <path
          d="M330,95 Q450,150 500,285"
          stroke="#A6512E"
          strokeWidth="2.5"
          markerEnd="url(#arrow-rust)"
          className="draw-path d2"
        />
        {/* aqua -> market */}
        <path
          d="M100,325 Q150,460 270,510"
          stroke="#0E3B36"
          strokeWidth="2.5"
          markerEnd="url(#arrow-teal)"
          className="draw-path d3"
        />
        {/* poultry -> market */}
        <path
          d="M500,325 Q450,460 330,510"
          stroke="#B8842B"
          strokeWidth="2.5"
          markerEnd="url(#arrow-gold)"
          className="draw-path d4"
        />
        {/* market -> feed & vet (reinvestment loop) */}
        <path
          d="M305,555 Q580,300 305,45"
          stroke="#4C7A3D"
          strokeWidth="2"
          strokeDasharray="6 7"
          markerEnd="url(#arrow-paddy)"
          opacity="0.85"
        />
      </svg>

      {/* Top: Feed & Vet */}
      <div className="absolute left-1/2 top-[6%] -translate-x-1/2 text-center fade-up" style={{ animationDelay: "0.1s" }}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-rust text-cream flex items-center justify-center font-mono text-[11px] mx-auto shadow-md">
          FEED
        </div>
        <p className="mt-2 font-display font-semibold text-sm md:text-base text-ink">ফিড ও ঔষধ</p>
      </div>

      {/* Left: Aqua */}
      <div className="absolute left-[2%] top-1/2 -translate-y-1/2 text-center fade-up" style={{ animationDelay: "0.4s" }}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-teal text-cream flex items-center justify-center font-mono text-[11px] mx-auto shadow-md">
          AQUA
        </div>
        <p className="mt-2 font-display font-semibold text-sm md:text-base text-ink">পুকুর</p>
      </div>

      {/* Right: Poultry */}
      <div className="absolute right-[2%] top-1/2 -translate-y-1/2 text-center fade-up" style={{ animationDelay: "0.4s" }}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold-dim text-cream flex items-center justify-center font-mono text-[11px] mx-auto shadow-md">
          EGGS
        </div>
        <p className="mt-2 font-display font-semibold text-sm md:text-base text-ink">পোল্ট্রি</p>
      </div>

      {/* Bottom: Market */}
      <div className="absolute left-1/2 bottom-[4%] -translate-x-1/2 text-center fade-up" style={{ animationDelay: "0.7s" }}>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-paddy text-cream flex items-center justify-center font-mono text-[10px] mx-auto shadow-md text-center leading-tight px-1">
          DHAKA
        </div>
        <p className="mt-2 font-display font-semibold text-sm md:text-base text-ink">বাজার</p>
      </div>
    </div>
  );
}
