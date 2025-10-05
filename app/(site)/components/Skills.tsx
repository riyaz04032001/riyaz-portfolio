type Group = { title: string; items: string[] };

const groups: Group[] = [
  { title: "Cloud", items: ["AWS (S3, Redshift, EMR, Lambda)", "Azure (ADLS, ADF, Databricks, Synapse)", "GCP (BigQuery, Dataflow, Dataproc)"] },
  { title: "Big Data & Processing", items: ["Hadoop", "Apache Spark (PySpark, Spark-SQL)", "Kafka", "Airflow", "Oozie"] },
  { title: "ETL & Integration", items: ["Informatica PowerCenter", "ADF", "AWS Glue"] },
  { title: "Databases & Warehousing", items: ["SQL Server", "Snowflake", "Redshift", "Azure Synapse", "BigQuery", "Data Modeling (Star/Snowflake)"] },
  { title: "Programming & Scripting", items: ["Python", "Advanced SQL", "PowerShell", "Shell"] },
  { title: "DevOps & CI/CD", items: ["Jenkins", "Docker", "Kubernetes", "Git"] },
  { title: "Visualization", items: ["Tableau", "Power BI", "Matplotlib"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div key={g.title} className="card p-6">
              <h3 className="mb-3">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((i) => (<li key={i} className="text-slate-300">• {i}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
