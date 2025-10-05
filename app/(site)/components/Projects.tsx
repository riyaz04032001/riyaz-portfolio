type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: "Kafka → Snowflake Streaming Demo",
    description:
      "End-to-end streaming pipeline with Kafka producers/consumers, schema registry, and Snowpipe loading to Snowflake for near real-time analytics.",
    tags: ["Kafka", "Snowflake", "Python", "Docker"]
  },
  {
    name: "Airflow Orchestrated ELT",
    description:
      "DAGs orchestrating batch ingestion from APIs & SQL Server to Databricks for transformations, then publishing to Synapse/Redshift marts.",
    tags: ["Airflow", "Databricks", "Synapse", "Redshift"]
  },
  {
    name: "Multi-Cloud Data Lake",
    description:
      "Data landing zone across S3/ADLS/GCS with governance, partition strategy, and cost‑optimized lifecycle policies.",
    tags: ["S3", "ADLS", "GCS", "IaC"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="card p-6">
              <header className="flex items-center justify-between">
                <h3>{p.name}</h3>
                {p.link && <a className="badge" href={p.link} target="_blank" rel="noreferrer">View</a>}
              </header>
              <p className="mt-2 text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (<span key={t} className="badge">{t}</span>))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
