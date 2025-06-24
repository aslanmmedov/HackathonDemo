import React from 'react'
import "./style.scss"
const Home = () => {
  return (
   <>
    <section id="OurPortfolio">
      <div className="container">
        <div className="head">
          <p>Devoted to wonderful beauty</p>
          <h1>Our Portfolio</h1>
          <div className="cardsContainer">
            <div className="row">
              <div className="col-4">
                <div className="pCard">
                  <div className="icnheart">

                  </div>
                  <h3>Shop Flowers</h3>
                  <p>summer sale under 50%</p>
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home