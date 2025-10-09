// app/(site)/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section relative">
      {/* soft background accent */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="mx-auto h-64 w-64 blur-3xl rounded-full bg-cyan-500/20 translate-y-6"></div>
      </div>

      <div className="container grid gap-10 md:grid-cols-1 items-center">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/40 to-sky-500/20 blur-md"></div>
            <Image
              src="/profile.jpg"
              alt="Riyaz Dudekula headshot"
              width={320}
              height={320}
              className="relative rounded-full ring-2 ring-slate-700"
              priority
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-3 badge mb-2">
              Open to Opportunities
            </div>
            <h1>Data Engineer · AWS · Azure · GCP</h1>
            <p className="mt-2 text-slate-300">
              I design and ship end-to-end data pipelines, real-time streaming,
              and analytics platforms. 4+ years across cloud & on-prem: Spark,
              Airflow, Kafka, Snowflake, Databricks.
            </p>

            <div className="mt-6 flex gap-3">
              <a className="badge" href="#projects">
                View Projects
              </a>
              <a className="badge" href="mailto:riyaz.d1604@gmail.com">
                Contact Me
              </a>
              <a
                className="badge"
                target="_blank"
                href="https://www.linkedin.com/in/DudekulaRiyaz4"
              >
                LinkedIn
              </a>
              <a
                className="badge"
                href="/Riyaz_Dudekula_Resume.pdf"
                download="Riyaz_Dudekula_Resume.pdf"
              >
                Download Resume
              </a>
            </div>

            
          </div>
          
        </div>
        <div className="card p-6">
          <ul className="grid grid-cols-4 gap-5 text-slate-200">
            <li className="badge">ETL & Orchestration</li>
            <li className="badge">Apache Spark</li>
            <li className="badge">Airflow & ADF</li>
            <li className="badge">Snowflake</li>
            <li className="badge">Kafka Streaming</li>
            <li className="badge">Databricks</li>
            <li className="badge">AWS · Azure · GCP</li>
            <li className="badge">CI/CD · Docker · K8s</li>
          </ul>
        </div>
      </div>
    </section>
  );
}