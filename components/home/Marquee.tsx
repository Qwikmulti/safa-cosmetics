const items = [
  'Afro Hair Care',
  'Wigs & Weaves',
  'Hair Extensions',
  'Braiding Hair',
  'Natural Products',
  'Skincare',
  'Makeup',
  'Hair Tools',
  'Body Care',
  'Premium Brands',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#e91e8c] py-3 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-white text-xs tracking-[0.3em] uppercase px-6"
          >
            {item}
            <span className="text-white/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
