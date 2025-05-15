import img1 from './images/casas/1.jpg'
import img2 from './images/casas/2.jpg'
import img3 from './images/casas/3.jpg'
// import img4 from './images/casas/4.jpg'
// import img5 from './images/casas/5.jpg'
// import img6 from './images/casas/6.jpg'
// import img7 from './images/casas/7.jpg'
// import img8 from './images/casas/8.jpg'
// import img9 from './images/casas/9.jpg'
// import img10 from './images/casas/10.jpg'
import "./Components.css"


const Banner = () => {
    

    return <>
        <div id="carouselExampleCaptions" className="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active img-banner">
                    <img src={img1} class="img-banner"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item img-banner">
                <img src={img2} class="d-block w-100"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item img-banner">
                <img src={img3} class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>
}

export default Banner