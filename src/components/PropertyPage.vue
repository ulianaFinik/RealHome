<template>
 <!-- Страница, открывающаяся по клику на карточку  -->
<div class="div">

<Breadcrumbs />

<div class="property-page">
    <h1 class="property-page__title">{{ `${propertyItem.desc.sqft} ${propertyItem.title}` }}</h1> <!--синтаксис шаблонных строк -->

    <div class="property-page__box">

        <div class="property-page__left">
                        <img
                :src="`../assets/img/${propertyItem.image}.png`"
                :alt="propertyItem.desc.aqft"
                class="property-page__img"
            />
            <div class="property-page__buttons"></div>
        </div>

        <div class="property-page__right">
            <div class="property-page__links">
                <div class="property-page__links-1">In Category 1</div>
                <div class="property-page__links-2">Gallery Format</div>
            </div>
            <div class="property-page__client-info">
                <div class="property-page__client"></div>
                <div class="property-page__client"></div>
                <div class="property-page__client"></div>
            </div>
            <div class="property-page__text">
                Etiam commodo consequat egestas. Morbi at ligula nulla. Mauris bibendum mi vitae condimentum mollis. Sed sollicitudin enim vehicula, varius sapien id, consectetur sem. Pellentesque posuere maximus lorem, sed pellentesque leo gravida a. Sed vitae eros ac enim laoreet commodo eget eu lorem. Aliquam ac metus convallis, accumsan lacus eget, volutpat ligula. Suspendisse tincidunt, arcu et sagittis hendrerit, felis risus varius diam, a posuere leo dui sit amet lorem. Integer et leo sit amet tortor condimentum mollis. Vestibulum non ligula sit amet orci sagittis pulvinar. Aliquet tellus ac euismod euismod. Donec no interdum arcu. Vivamus sit amet auctor nisl, ornare sodales justo. Integer egestas, diam ac mattis aliquet, ex ante ornare mi, ac rutrum justo tortor sed tellus.
            </div>
            <button class="property-page__button"> </button>
        </div>

    </div>
</div>

</div>
</template>

<script>
import { propertiesData } from "./data/data.alldata";
    export default {
        data() {
            return {
                propertiesData: propertiesData,
                propertyItem: null,
            }
        },
        props: {

        },
        created() { //будет выполняться когда я буду переходить по ссылке. Created - функция, которая выполняется, когда создаётся компонент
            this.propertyItem = this.propertiesData.find( //осуществялется поиск по массиву
                item => item.id == this.$route.params.id // ищется элемент с id $route.params.id
            ); //знак доллара это внутренние вьюшные штуки
        }
    }
</script>