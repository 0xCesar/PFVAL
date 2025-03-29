import Link from "next/link";

const projects = [
  { title: "Moontain", slug: "Moontain" },
  { title: "Web Marmottes agency", slug: "WebMarmotte" },
  { title: "Projet J.O. 2024", slug: "JO2024" },
  { title: "Visuels / Posters", slug: "Visuels" },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1>Mes Projets</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
