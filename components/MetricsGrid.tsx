const metrics = [
  { num: '−74',  unit: '%',  label: 'Time to first query',    desc: 'From signup to first executed statement.' },
  { num: '3.2',  unit: '×',  label: 'Daily active engineers', desc: 'QoQ post-launch.' },
  { num: '99.9', unit: '',   label: 'Uptime, %',              desc: 'Edge + workers, full year.' },
  { num: '<80',  unit: 'ms', label: 'P95 latency',            desc: 'Query roundtrip, US-East.' },
]

export default function MetricsGrid() {
  return (
    /* Mobile: 2×2. lg+: 4 across */
    <div className="grid grid-cols-2 lg:grid-cols-4-even gap-px bg-line border border-line">
      {metrics.map((m) => (
        <div key={m.label} className="bg-bg p-6 md:p-8">
          <div className="font-display italic text-48 md:text-64 tracking-tighter leading-none text-ink">
            {m.num}<em className="text-accent italic">{m.unit}</em>
          </div>
          <div className="text-10 uppercase tracking-018 text-ink-mute mt-[10px]">{m.label}</div>
          <div className="text-12 text-ink mt-2">{m.desc}</div>
        </div>
      ))}
    </div>
  )
}
