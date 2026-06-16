const ITEMS = [
  "OpenStack",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Ansible",
  "Prometheus",
  "Grafana",
  "Linux",
  "Java",
  "Symfony",
  "Angular",
  "MySQL",
]

export function Marquee() {
  const line = [...ITEMS, ...ITEMS]
  return (
    <section className="border-y border-border bg-card/40 py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center whitespace-nowrap">
          {line.map((item, i) => (
            <span
              key={i}
              className="flex items-center font-heading text-xl font-semibold uppercase tracking-wide text-foreground sm:text-3xl"
            >
              {item}
              <span className="mx-6 h-2 w-2 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
