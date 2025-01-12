const HomeCover = () => {
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="img/Home-Banner-1.jpg"
            alt="Home-Banner"
            className="img-fluid bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <div className="carousel-item">
          <img
            src="img/Home-Banner-2.png"
            alt="Home-Banner"
            className="img-fluid bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <div className="carousel-item">
          <img
            src="img/Home-Banner-3.jpg"
            alt="Home-Banner"
            className="img-fluid bd-placeholder-img"
            width="100%"
            height="100%"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default HomeCover
