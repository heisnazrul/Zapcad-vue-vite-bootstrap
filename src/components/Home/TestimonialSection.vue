<script setup>
    import { reactive, ref } from 'vue';
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide } from 'vue3-carousel';
    import testimonial1 from '@/assets/images/testimonial/AAS.png';
    import testimonial2 from '@/assets/images/testimonial/Accenture.png';
    import testimonial3 from '@/assets/images/testimonial/Adepture.png';
    import testimonial4 from '@/assets/images/testimonial/ARCHETYPE.png';
    import testimonial5 from '@/assets/images/testimonial/BEYOND MEDICAL.png';
    import testimonial6 from '@/assets/images/testimonial/BLAIR.png';
    import testimonial7 from '@/assets/images/testimonial/CARITAS.png';

    import testimonial8 from '@/assets/images/testimonial/EATON.png';
    import testimonial9 from '@/assets/images/testimonial/EPSON.png';
    import testimonial10 from '@/assets/images/testimonial/FRASERS.png';
    import testimonial11 from '@/assets/images/testimonial/HEINEMANN.png';
    import testimonial12 from '@/assets/images/testimonial/HOST.png';
    import testimonial13 from '@/assets/images/testimonial/IMC.png';
    import testimonial14 from '@/assets/images/testimonial/IMDA.png';

    import testimonial15 from '@/assets/images/testimonial/Infinitum.png';
    import testimonial16 from '@/assets/images/testimonial/ISUZU.png';
    import testimonial17 from '@/assets/images/testimonial/LAGARDERE.png';
    import testimonial18 from '@/assets/images/testimonial/LECO.png';
    import testimonial19 from '@/assets/images/testimonial/LESMILLS.png';
    import testimonial20 from '@/assets/images/testimonial/MCCY.png';
    import testimonial21 from '@/assets/images/testimonial/MOHH.png';

    import testimonial22 from '@/assets/images/testimonial/MONTFORT.png';
    import testimonial23 from '@/assets/images/testimonial/NIDEC.png';
    import testimonial24 from '@/assets/images/testimonial/NTUCLHUB.png';
    import testimonial25 from '@/assets/images/testimonial/NXGEN.png';
    import testimonial26 from '@/assets/images/testimonial/OCTOGRAM.png';
    import testimonial27 from '@/assets/images/testimonial/SANDVINE.png';
    import testimonial28 from '@/assets/images/testimonial/SEATRIUM.png';

    const testimonials1 = [testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial1];
    const testimonials2 = [testimonial9, testimonial10, testimonial11, testimonial12, testimonial13, testimonial14, testimonial8];
    const testimonials3 = [testimonial16, testimonial17, testimonial18, testimonial19,testimonial20, testimonial21, testimonial15];
    const testimonials4 = [testimonial23, testimonial24, testimonial25, testimonial26, testimonial27, testimonial28, testimonial22]; 
    
    const testCarousel = ref(null);
    const testCarousel2 = ref(null);
    const testCarousel3 = ref(null);
    const testCarousel4 = ref(null);

    const data = reactive({
        settings: {
            itemsToShow: 7,
            snapAlign: 'center',
        },
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            576: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        //testimonials: [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5]
       
    })

</script>

<template>
    <section class="section testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="title">Organisations Using Zapkad Everyday</h2>
                </div>
            </div>
            <div class="row align-items-center mt-5">
                <div class="col-1 text-end">
                    <a href="javascript:void(0)" @click="testCarousel.prev()">
                        <img src="@/assets/images/testimonial/prev.png" alt="Previews" class="arrow__img" />
                    </a>
                </div>
                <div class="col-9 mx-auto">
                    <Carousel ref="testCarousel" v-bind="data.settings" :breakpoints="data.breakpoints" :autoplay="2000" :wrap-around="true">
                        <Slide v-for="testimonial in testimonials1" :key="testimonial">
                            <div class="carousel__item">
                                <img :src="testimonial" class="img-fluid tlsk" alt="" />    
                            </div>
                        </Slide>
                    </Carousel>
                    <Carousel class="my-5" ref="testCarousel2" v-bind="data.settings" :breakpoints="data.breakpoints" :autoplay="2000" :wrap-around="true">
                        <Slide v-for="testimonial in testimonials2" :key="testimonial">
                            <div class="carousel__item">
                                <img :src="testimonial" class="img-fluid tlsk" alt="" />    
                            </div>
                        </Slide>
                    </Carousel>
                    <Carousel class="my-5" ref="testCarousel3" v-bind="data.settings" :breakpoints="data.breakpoints" :autoplay="2000" :wrap-around="true">
                        <Slide v-for="testimonial in testimonials3" :key="testimonial">
                            <div class="carousel__item">
                                <img :src="testimonial" class="img-fluid tlsk" alt="" />    
                            </div>
                        </Slide>
                    </Carousel>
                    <Carousel class="my-5" ref="testCarousel4" v-bind="data.settings" :breakpoints="data.breakpoints" :autoplay="2000" :wrap-around="true">
                        <Slide v-for="testimonial in testimonials4" :key="testimonial">
                            <div class="carousel__item">
                                <img :src="testimonial" class="img-fluid tlsk" alt="" />    
                            </div>
                        </Slide>
                    </Carousel>
                </div>
                <div class="col-1">
                    <a href="javascript:void(0)" @click="testCarousel.next()">
                        <img src="@/assets/images/testimonial/next.png" alt="Next" class="arrow__img" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.tlsk{
    padding-left: 10%;
    padding-right: 10%;
}
</style>