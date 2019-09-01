import React from "react"
import "../../common/assets/styles/styles.scss"
const Book = () => {
  return (
    <div class="scene">
      <div class="book-wrap">
        <div class="left-side">
          <div class="book-cover-left"></div>
          <div class="layer1">
            <div class="page-left"></div>
          </div>
          <div class="layer2">
            <div class="page-left"></div>
          </div>
          <div class="layer3">
            <div class="page-left"></div>
          </div>
          <div class="layer4">
            <div class="page-left"></div>
          </div>
          <div class="layer-text">
            <div class="page-left-2">
              <div class="corner"></div>
              <div class="corner2"></div>
              <div class="corner-fold"></div>
              <div class="page-text w-richtext">
                <h3>
                  <strong>Cookin n Chillin</strong>
                </h3>
                {/* <h6>You can enter some text here later</h6> */}
                <p>‍</p>
                <img src="https://i.imgur.com/eldJ85d.jpg" alt="food" />
              </div>
            </div>
          </div>
        </div>
        <div class="center"></div>
        <div class="right-side">
          <div class="book-cover-right"></div>
          <div class="layer1">
            <div class="page-right"></div>
          </div>
          <div class="layer2 right">
            <div class="page-right"></div>
          </div>
          <div class="layer3 right">
            <div class="page-right"></div>
          </div>
          <div class="layer4 right">
            <div class="page-right"></div>
          </div>
          <div class="layer-text right">
            <div class="page-right-2">
              <div class="page-text w-richtext">
                <h3>
                  <strong>Reading n Codin</strong>
                </h3>
                <h6></h6>
                <a href="google.com" className="">
                  <img src="https://i.imgur.com/Ym21ng5.jpg" alt="books" />
                </a>

                <img
                  src="https://i.imgur.com/aEP9W69.jpg"
                  alt="tech"
                  class="tech"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Book
