const steps = [
  {
    step: '01', total: '03',
    title: 'Listening before drawing.',
    body: 'Twelve interviews with backend engineers across three companies. The pattern: fewer tabs, not a new IDE.',
    callout: '"I just want my queries to remember me." — #07',
  },
  {
    step: '02', total: '03',
    title: 'Finding the spine.',
    body: 'Thirty-plus prototypes thrown away to land on a command-bar-first model. The interface became one generous surface.',
    callout: null,
  },
  {
    step: '03', total: '03',
    title: 'Engineering the calm.',
    body: 'A query orchestrator that hides retries, surfaces errors as suggestions, routes NL through schema-aware RAG.',
    callout: null,
  },
]

export default function ProcessGrid() {
  return (
    /* Mobile: 1 col. md+: 3-col */
    <div className="grid grid-cols-1 md:grid-cols-3-even gap-px bg-line border border-line">
      {steps.map((s) => (
        <div key={s.step} className="bg-bg p-6 md:p-8 flex flex-col gap-[18px]">
          <div className="flex justify-between text-11 tracking-018 uppercase text-ink-mute">
            <span>{'// step'} {s.step}</span>
            <span className="text-accent">{s.step} / {s.total}</span>
          </div>
          <h3 className="font-display italic text-28 md:text-32 leading-105 tracking-tight text-ink">{s.title}</h3>
          <p className="text-13 text-ink-mute leading-16">{s.body}</p>
          {s.callout && (
            <div className="border-l-2 border-accent pl-3 text-12 text-ink">{s.callout}</div>
          )}
          <div className="h-35 bg-bg-soft border border-line flex items-center justify-center text-10 text-ink-mute tracking-01">
            [ visual ]
          </div>
        </div>
      ))}
    </div>
  )
}
