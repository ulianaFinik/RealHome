<template>
  <div class="home">
    <Carousel />
    <div class="container  home__offering">
      <div class="row">
        <div class="col-md-4  home_border">
          <h3 class="home__offering-title">We are Offering the Best Estate Deals</h3>
        </div>
        <div class="col-md-8">
          <p class="home__offering-text">
            Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
          </p>
        </div>
      </div>
    </div>
    <Features :data="featureData" /> 

    <Properties :propertiesData="propertiesData" /> 

    <div class="home__slider">
      <CarouselPictureContent />
    </div>

    <div class="home__banner">
      <Banner />
    </div>

    <div class="home__testimonials testimonials">
			<Testimonials />
		</div>

    <div class="home__partners">
			<Partners />
		</div>
    
  </div>
</template>

<script>
  import { featureData, propertiesData } from "./data/data.alldata";

  import Features from '../components/Features.vue';
  import Carousel from '../components/Carousel.vue';
  import Properties from '../components/Properties.vue';
  import CarouselPictureContent from '../components/CarouselPictureContent.vue';
  import Banner from './Banner.vue';
  import Testimonials from './Testimonials.vue';
  import Partners  from './Partners.vue';

  export default {
    name: 'Home',
    components: {
      Carousel,
      Features,
      Properties,
      CarouselPictureContent,
      Banner,
      Testimonials,
      Partners,
    },
  data() {
    return {
      featureData: featureData,
      propertiesData: propertiesData,
    }
  },
}
</script>

 