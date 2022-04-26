<template>
    <div class="about">
        <div class="container">
            <div class="about__breadcrumbs">
                <Breadcrumbs />
            </div>

            <div class="about__company">
                <h1 class="about__h1">
                    About
                    <b>Our Company</b>
                </h1>
                <div class="about__inner">
                    <img class="about__img" src="../assets/img/about-1.png" alt />
                    <div class="about__text">
                        <p>Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat nostrud tation ullamcorper nonummy nibh.</p>
                        <p>Agent info ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>
                    </div>
                </div>
            </div>
        </div>

            <Features :data="featureData" />
        
        <div class="container">

            <div class="about__team">
                <div class="about__info">
                    <h2 class="about__h2">
                        Our
                        <b>Team</b>
                    </h2>
                    <a class="about__link" href>Want to be a part of this team?</a>
                </div>
                <div class="about__team-inner">
                    <div class="about__team-item">
                        <img class="about__team-img" src="../assets/img/team-1.png" alt />
                        <div class="about__team-info">
                            <h5 class="about__team-name">Julia Roberts</h5>
                            <p class="about__team-position">Produsser</p>
                        </div>
                    </div>
                    <div class="about__team-item">
                        <img class="about__team-img" src="../assets/img/team-2.png" alt />
                        <div class="about__team-info">
                            <h5 class="about__team-name">Oleg Malachov</h5>
                            <p class="about__team-position">Designer</p>
                        </div>
                    </div>
                    <div class="about__team-item">
                        <img class="about__team-img" src="../assets/img/team-3.png" alt />
                        <div class="about__team-info">
                            <h5 class="about__team-name">Vitalya Vasin</h5>
                            <p class="about__team-position">Director</p>
                        </div>
                    </div>
                    <div class="about__team-item">
                        <img class="about__team-img" src="../assets/img/team-4.png" alt />
                        <div class="about__team-info">
                            <h5 class="about__team-name">Misha Ebonov</h5>
                            <p class="about__team-position">Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about__subdcribe">
            <div class="container">
                <div class="about__subdcribe-inner">
                    <h1 class="about__subdcribe-h1">
                        Subscribe To
                        <b>Our Newsletter</b>
                    </h1>
                    <div class="about__subdcribe-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email..."
                            class="about__subdcribe-input"
                        />
                        <button class="about__subdcribe-button btn btn-lg">SUDSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { featureData, propertiesData } from "./data/data.alldata";
import Features from '../components/Features.vue';
export default {
    name: 'about',
    components: {
        Features,
    },
    data() {
        return {
            featureData: featureData,
        }
    },
}
</script>
