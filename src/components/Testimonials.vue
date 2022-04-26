<template>

<div id="carouselTestimonials" class="carouselTestimonials carousel slide">
  <div class="carouselTestimonials__dots carousel-indicators">
    <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="0" class="carouselTestimonials__dot  active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="1" class="carouselTestimonials__dot" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselTestimonials" data-bs-slide-to="2" class="carouselTestimonials__dot"  aria-label="Slide 3"></button>
  </div>

  <div class="carouselTestimonials__inner">

    <div class="carousel-item active" data-bs-interval="10000">
      <img src="../assets/img/testimonials-slider.png" class="d-block w-100" alt="...">
      <div class="carousel-caption testimonials__slide d-none d-md-block">
        <h1 class="carouselTestimonials__h1">Testimonials</h1>
        <p class="carouselTestimonials__text">Liber tempor cum soluta eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum</p>
        <h3 class="carouselTestimonials__h3">Amanda Newton <b>Apple</b></h3>
      </div>
    </div>

    <div class="carousel-item" data-bs-interval="10000">
      <img src="../assets/img/testimonials-slider.png" class="d-block w-100" alt="...">
      <div class="carousel-caption testimonials__slide d-none d-md-block">
        <h1 class="carouselTestimonials__h1">Testimonials</h1>
        <p class="carouselTestimonials__text">facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem.</p>
        <h3 class="carouselTestimonials__h3">Amanda Newton <b>Apple</b></h3>
      </div>
    </div>

    <div class="carousel-item" data-bs-interval="10000">
      <img src="../assets/img/testimonials-slider.png" class="d-block w-100" alt="...">
      <div class="carousel-caption testimonials__slide d-none d-md-block">
        <h1 class="carouselTestimonials__h1">Testimonials</h1>
        <p class="carouselTestimonials__text">imperdiet doming id quod mazim placerat facer possim assum, typin no habent claritatem insitam legentis qui facit eorum claritatem. </p>
        <h3 class="carouselTestimonials__h3">Amanda Newton <b>Apple</b></h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style lang="scss">
	.home {
		&__carousel-indicators {
			bottom: 200px;
		}
	}
</style>