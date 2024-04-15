

const Banner = () => {
    return (
        <div className=" mt-10">
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    
    <img src="https://i.ibb.co/k1hdz0m/jason-dent-w3e-Fhq-Xjk-ZE-unsplash-1.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/rpJbsb7/r-architecture-2g-Dwl-Iim3-Uw-unsplash.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/Sf27k74/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/Jn3C5cB/sean-pollock-Ph-Yq704ffd-A-unsplash.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;