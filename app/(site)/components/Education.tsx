export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="mb-6">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3>University of Central Missouri</h3>
            <p className="text-slate-300 mt-1">M.S. Computer Science · Aug 2023 – May 2025 · Missouri, USA</p>
          </div>
          <div className="card p-6">
            <h3>Certifications</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-200">
              <li>Azure Fundamentals (Udemy)</li>
              <li>Building Scalable Applications with AWS (Coursera)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
