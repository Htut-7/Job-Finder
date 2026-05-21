import "../css/Categories.css";

import {
  FiCode,
  FiMic,
  FiMonitor,
  FiBriefcase,
  FiDollarSign,
  FiUsers
} from "react-icons/fi";

const categories = [
  {
    icon: <FiCode />,
    title: "Design & Development",
    jobs: "250 jobs available"
  },

  {
    icon: <FiMic />,
    title: "Marketing & Communication",
    jobs: "180 jobs available"
  },

  {
    icon: <FiMonitor />,
    title: "Digital Marketing",
    jobs: "120 jobs available"
  },

  {
    icon: <FiBriefcase />,
    title: "Business & Consulting",
    jobs: "95 jobs available"
  },

  {
    icon: <FiDollarSign />,
    title: "Finance Management",
    jobs: "150 jobs available"
  },

  {
    icon: <FiUsers />,
    title: "Customer Service",
    jobs: "210 jobs available"
  }
];

export default function Categories() {
  return (
    <section className="categories-section">

      <div className="categories-header">

        <div>
          <h2>Explore jobs by category</h2>

          <p>
            Discover opportunities from top industries
            and companies around the world.
          </p>
        </div>

        <button className="category-view-btn">
          All Category
        </button>

      </div>

      <div className="categories-grid">

        {categories.map((category, index) => (
          <div className="category-card" key={index}>

            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <span>{category.jobs}</span>

          </div>
        ))}

      </div>

    </section>
  );
}