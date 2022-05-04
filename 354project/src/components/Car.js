import React from 'react'

const Car = () => {
  return (
    <div>

<div class="container" 

style={{
      marginTop: '24px',
    
    }}
>
         <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>


            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                  <img src="./images/r6.jpg" class="d-block w-100" alt="Image"/>
               </div>
               <div class="carousel-item">
                  <img src="./images/r1.jpg" class="d-block w-100" alt="Image"/>
               </div>
               <div class="carousel-item">
                  <img src="./images/r2.jpg"class="d-block w-100" alt="Image"/>
               </div>
               <div class="carousel-item">
                  <img src="./images/r3.jpg" class="d-block w-100" alt="Image"/>
               </div>
               <div class="carousel-item">
                  <img src="./images/r4.jpg"class="d-block w-100" alt="Image"/>
               </div>
               <div class="carousel-item">
                  <img src="./images/r5.jpg" class="d-block w-100" alt="Image"/>
               </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
         </div>
      </div>



    </div>
  )
}

export default Car