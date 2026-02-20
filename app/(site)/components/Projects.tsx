"use client";

import { useState } from "react";

type Category = "AI" | "Cloud" | "AI/ML" | "Web Development" | "Power BI";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: Category;
};

const projects: Project[] = [
  {
    id: "covid-19",
    title: "Covid-19 Data engineering pipeline",
    description:
      "End-to-end cloud data engineering pipeline that ingests COVID-19 data, processes it using Azure Data Factory and Databricks, and delivers analytics-ready data to Azure SQL for reporting.",
    image: "/projects/covid-19.png",
    tags: [
      "Azure Data Factory (ADF)",
      "Azure Data Lake Storage Gen2 / Blob Storage",
      "SQL",
      "Databricks / ADF Data Flows",
      "HiveQL & TSQL SQL queries",
    ],
    category: "Cloud",
  },
  {
    id: "Intrusion Detection",
    title: "Intrusion detection in data using ML models",
    description:
      "Implemented an end-to-end ML workflow in Python to preprocess network data, train multiple machine learning models, and evaluate them for detecting intrusions in network traffic.",
    image: "/projects/Intrusion-detection.png",
    tags: [
      "Python",
      "Jupyter Notebook",
      "Pandas & numpy",
      "matplotlib / seaborn",
      "scikit-learn",
    ],
    category: "AI/ML",
  },
  {
    id: "order_checking_power_bi",
    title: "Order Checking power bi",
    description:
      "Overview This Power BI project provides insights into customer orders and product tracking using interactive dashboards. It visualizes order status, sales trends, shipping details, and warehouse assignments.",
    image: "/projects/order_tracking.png",
    tags: ["Power BI Desktop", "DAX", "Power Query"],
    category: "Power BI",
  },
  {
    id: "Sales_Operations_PowerBi-Dashboards",
    title: "Sales Operations PowerBi Dashboards",
    description:
      "A Power BI dashboard analyzing BlinkIT grocery sales and outlet performance. It visualizes key KPIs such as Total Sales, Avg Sales, No. of Items, and Avg Rating, with interactive insights by outlet type, size, location, and product categories.",
    image: "/projects/dashboard.png",
    tags: [
      "Power BI Desktop",
      "DAX Measures & Field Parameters",
      "Data Modeling & Interactive Visual Design",
    ],
    category: "Power BI",
  },
  {
    id: "hospital-system",
    title: "Doctor Management System",
    description:
      "Role-based healthcare management system that streamlines doctor scheduling, patient appointments, medical records, and payments using a centralized, secure database architecture",
    image: "/projects/Doctor-management.png",
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    category: "Web Development",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("AI");

  const filteredProjects =
    activeCategory === "AI"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-center mb-8">Featured Projects</h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="card overflow-hidden hover:translate-y-[-4px] transition"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
