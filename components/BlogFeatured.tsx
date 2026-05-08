export default function BlogFeatured() {
  return (
    /* Mobile: single column. md+: 2-col side-by-side */
    <div className="grid grid-cols-1 md:grid-cols-2-even md:h-95 border border-line-strong bg-bg-soft mx-5 md:mx-8 my-10">
      <div className="p-6 md:p-9 flex flex-col justify-between gap-4 md:gap-0">
        <div>
          <div className="text-11 tracking-016 uppercase text-accent mb-2">
            ★ FEATURED · AI · 11 min
          </div>
          <h3 className="font-display italic text-32 md:text-48 leading-none tracking-tighter text-ink my-[14px]">
            Building agent loops without losing the plot.
          </h3>
          <p className="font-display italic text-18 text-ink-mute">
            Patterns I keep reaching for when the model plans, acts, then plans again.
          </p>
        </div>
        <div className="text-11 uppercase tracking-014 text-ink-mute">
          <b className="text-ink">FEB 2026</b> · architecture · agents · diagrams
        </div>
      </div>
      <div className="border-t md:border-t-0 md:border-l border-line bg-bg flex items-center justify-center text-ink-mute text-11 tracking-012 h-40 md:h-auto">
        [ cover visual ]
      </div>
    </div>
  )
}
