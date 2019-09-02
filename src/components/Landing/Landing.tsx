import React, { Fragment } from "react"
import "../../common/assets/styles/styles.scss"
import food from "../../common/assets/images/food.jpg"
import books from "../../common/assets/images/books.jpg"
import tech from "../../common/assets/images/tech.jpg"
import Book from "./Book"
const Landing = () => {
  return (
    // <Book></Book>

    <section className="landing">
      <div className="landing-grid">
        <div className="landing-food">
          <img src={food} alt="Cooking" />
        </div>
        <div className="landing-books">
          <img src={books} alt="books" />
        </div>
        <div className="landing-tech">
          <img src={tech} alt="tech" />
        </div>
      </div>
    </section>
  )
}

export default Landing
