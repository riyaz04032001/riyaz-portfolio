import "./(site)/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riyaz Dudekula — Data Engineer",
  description: "Data Engineer specializing in ETL, Spark, Airflow, and multi-cloud data platforms (AWS, Azure, GCP).",
  keywords: ["Data Engineer","ETL","Spark","Airflow","AWS","Azure","GCP","Kafka","Snowflake","Databricks","SQL"],
  openGraph: {
    title: "Riyaz Dudekula — Data Engineer",
    description: "End-to-end pipelines, streaming (Kafka), and warehousing on AWS, Azure, GCP.",
    type: "website",
    url: "https://your-domain.example/",
    images: [{ url: "/og-cover.png" }]
  },
  metadataBase: new URL("https://your-domain.example/")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
