import { useEffect } from "react";
import ListItem from "../components/ListItem";
import Layout from "../Layout/Layout";

const List = () => {
  const numbers = Array.from(Array(100).keys());

  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  }, []);
  return (
    <Layout>
      <div className="list-animation-container">
        {numbers.map((number) => (
          <div key={number} className="card">
            <ListItem />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default List;
