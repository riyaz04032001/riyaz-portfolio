import Image from "next/image";

const logos = [
  { src: "/icons/aws.svg", alt: "AWS" },
  { src: "/icons/azure.svg", alt: "Azure" },
  { src: "/icons/gcp.svg", alt: "GCP" },
  { src: "/icons/spark.svg", alt: "Apache Spark" },
  { src: "/icons/airflow.svg", alt: "Apache Airflow" },
  { src: "/icons/kafka.svg", alt: "Apache Kafka" },
  { src: "/icons/snowflake.svg", alt: "Snowflake" },
  { src: "/icons/databricks.svg", alt: "Databricks" },
  { src: "/icons/docker.svg", alt: "Docker" },
  { src: "/icons/kubernetes.svg", alt: "Kubernetes" },
  { src: "/icons/python.svg", alt: "Python" },
  { src: "/icons/sql.svg", alt: "SQL" },
];

export default function Logos() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-6">Tools & Platforms</h2>
        <div className="card p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
            {logos.map((l) => (
              <div key={l.alt} className="opacity-80 hover:opacity-100 transition">
                <Image src={l.src} alt={l.alt} width={140} height={48} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
