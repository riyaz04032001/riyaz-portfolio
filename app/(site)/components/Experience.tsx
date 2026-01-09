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
    title: "Data Engineer",
    period: "Jul 2022 – Jul 2023",
    bullets: [
      "Designed and created Hive, HBase, and HBase-integrated Hive tables using ORC format and Snappy compression for optimized storage and query performance.",
      "	Developed scalable data ingestion frameworks using ADF Mapping Data Flows, DataFlow, and Dataproc, improving pipeline throughput and reliability",
"Developed end-to-end ETL and streaming pipelines using Dataproc, Dataflow, PySpark, Spark-Scala, and Python DAGs in Airflow for batch and real-time analytics",
"	Migrated datasets between Azure and GCP using Azure Data Factory, enabling multi-cloud analytics and cost-efficient data processing",
"	Integrated Cassandra (NoSQL) using DataStax Spark Connector, accelerating low-latency reads/writes for high-volume operational systems.",
"Performed data modeling (Star/Snowflake) and query optimization across Hive, Spark SQL, and Azure SQL/Synapse, improving query execution times"


    ]
  },
  {
    company: "Merck Group",
    location: "Hyderabad, India",
    title: "Data Engineer",
    period: "Jan 2021 – Jul 2022",
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
