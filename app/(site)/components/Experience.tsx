type Role = {
  company: string;
  location: string;
  title: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    company: "Bank of America",
    location: "USA",
    title: "Azure Data Engineer",
    period: "May 2025 – Present",
    bullets: [
      "Designed and implemented scalable ETL pipelines using Azure Data Factory and Databricks to process TB-scale financial data.",
      "Architected Medallion (Bronze/Silver/Gold) data model, improving data quality by 30% and enabling reliable analytics.",
      "Optimized Apache Spark jobs and Azure Synapse SQL queries, reducing pipeline runtime by 40% and lowering cloud costs.",
      "Developed real-time and batch data ingestion pipelines using ADLS and Stream Analytics, reducing data latency from hours to minutes.",
      "Migrated legacy SQL Server workloads to Snowflake using Python and SnowSQL, improving query performance by 35% and scalability.",
      "Implemented CI/CD pipelines with Terraform, Docker, and Jenkins, and established data quality frameworks, improving deployment efficiency and system reliability.",
    ],
  },
  {
    company: "McKesson",
    location: "USA",
    title: "AWS Data Engineer",
    period: "May 2024 – Apr 2025",
    bullets: [
      "Developed and optimized Spark-based ETL pipelines on AWS S3, improving data processing efficiency by 25% for large-scale datasets.",
      "Built serverless data ingestion and validation workflows using AWS Lambda, improving data accuracy and reducing manual effort.",
      "Implemented data quality frameworks and validation checks, reducing data inconsistencies by 30% and improving reliability.",
      "Designed monitoring and alerting systems using Amazon CloudWatch, enhancing pipeline reliability and reducing failures.",
      "Optimized EMR cluster configurations, achieving 70% faster startup and 60% faster job execution performance.",
      "Automated infrastructure provisioning using Terraform and CI/CD pipelines with Jenkins and Docker; improved Snowflake query performance through clustering and optimization, reducing latency and compute costs.",
    ],
  },
  {
    company: "State Street (Accenture)",
    location: "Hyderabad, India",
    title: "Data Engineer",
    period: "Jan 2020 – Jul 2023",
    bullets: [
      "Developed and maintained ETL pipelines using PySpark and Apache Airflow for batch and real-time data processing.",
      "Built scalable data ingestion pipelines using Azure Data Factory and Databricks for structured and semi-structured data.",
      "Designed and optimized data models (Star/Snowflake), improving query performance and reporting efficiency.",
      "Worked with Hive, HBase, Cassandra, and ORC formats to enhance storage efficiency and support high-throughput workloads.",
      "Supported migration of on-prem SQL Server systems to Azure Synapse and Azure SQL, improving scalability and performance.",
      "Implemented workflow orchestration, CI/CD pipelines, and monitoring using Airflow, Jenkins, Git, Kibana, and Elasticsearch to ensure reliability and system stability.",
    ],
  },
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
                <h3>
                  {r.title} —{" "}
                  <span className="text-slate-300">{r.company}</span>
                </h3>
                <div className="text-slate-400">{r.period}</div>
              </header>
              <div className="text-slate-400">{r.location}</div>
              <ul className="mt-4 space-y-2 list-disc pl-5 marker:text-slate-400">
                {r.bullets.map((b, i) => (
                  <li key={i} className="text-slate-200">
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
