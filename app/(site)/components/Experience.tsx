type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "C2FO",
    location: "Leawood, Kansas, USA",
    title: "Azure Data Engineer",
    period: "May 2025 – Present",
    bullets: [
      "Designed end-to-end ETL with Azure Data Factory, Databricks, Synapse.",
      "Built Spark apps (Python/Scala) for large-scale transformation & analytics.",
      "Improved pipeline performance via ADF/Synapse/SQL tuning and caching.",
      "Automated orchestration on VMs using Airflow & Control‑M for reliability.",
      "Deployed infra via Terraform & Docker integrated with Jenkins CI/CD.",
      "Executed SQL Server → Snowflake migration; ingested API & Kafka JSON streams.",
      "Enabled near real‑time sync using GCP Dataflow & Pub/Sub (multi‑cloud)."
    ]
  },
  {
    company: "AMC Theatres",
    location: "Leawood, Kansas, USA",
    title: "AWS Data Engineer",
    period: "May 2024 – Apr 2025",
    bullets: [
      "Built ETL with Hive, Pig, Spark on S3; streamlined ingest & pre‑aggregation.",
      "Created Lambda functions for real‑time validation & transform into S3.",
      "Optimized EMR launches (+70%) & Hadoop jobs (+60%) via configs + Boto3.",
      "Automated CI/CD with Jenkins, Docker, Kubernetes; infra via Terraform.",
      "Processed streaming data using Kafka, PySpark, and Storm for insights.",
      "Tuned SQL & Snowflake (indexing, clustering) to cut query cost/latency."
    ]
  },
  {
    company: "State Street (Accenture)",
    location: "Hyderabad, India",
    title: "GCP Data Engineer",
    period: "Jul 2022 – Jul 2023",
    bullets: [
      "Built batch & streaming pipelines using Dataproc, Dataflow, Airflow DAGs.",
      "Created HBase/Hive schemas with ORC+Snappy for storage & speed.",
      "Published BigQuery marts & views powering consistent dashboards.",
      "Autoscaled Dataproc clusters to reduce idle cost; improved reliability.",
      "Integrated Cassandra via DataStax connector; bridged GCP ↔ Azure via ADF."
    ]
  },
  {
    company: "Merck Group",
    location: "Hyderabad, India",
    title: "Data Engineer",
    period: "Jan 2021 – Aug 2022",
    bullets: [
      "Developed PySpark ETL into HDFS/Snowflake/cloud storage.",
      "Orchestrated ADF + Databricks workflows for SQL Server ingestion.",
      "Automated DAGs in Airflow for batch/stream scheduling and monitoring.",
      "Migrated SQL Server → Azure Synapse; optimized performance.",
      "Maintained Spark clusters, Elasticsearch; observability via Kibana/Log Analytics."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="mb-6">Experience</h2>
        <div className="space-y-6">
          {roles.map((r) => (
            <article key={r.company} className="card p-6">
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3>{r.title} — <span className="text-slate-300">{r.company}</span></h3>
                <div className="text-slate-400">{r.period}</div>
              </header>
              <div className="text-slate-400">{r.location}</div>
              <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-slate-400">
                {r.bullets.map((b, i) => (<li key={i} className="text-slate-200">{b}</li>))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
