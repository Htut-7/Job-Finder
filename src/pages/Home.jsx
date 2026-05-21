import "../css/Home.css";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedJobs from "../components/FeaturedJobs";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <Hero/>
      <Categories/>
      <FeaturedJobs/>
      </div>
    </main>
  )
}
