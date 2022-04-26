<template>
    <div class="properties"> <!-- Компонент HOME  -->
        <div class="container">

            <div class="row">
                <div class="col">
                    <h2 class="properties__h2">
                        Featured
                        <b>Properties</b>
                    </h2>
                    <p class="properties__subtitle">Quisque diam lorem interdum vitaapibus vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar.</p>
                </div>
            </div>
            <div class="row">
                <template
                    v-for="(property, index) in propertiesData"
                    :key="property.id" >
                    <property-item :property="property" v-if="index < 6" class="property-item--3"/>
                </template>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary properties__more">All Property</button>
            </div>
        </div>
    </div>

</template>

<script>
import PropertyItem from "./PropertyItem.vue"
export default {
    components: {
        "property-item": PropertyItem
    },
    props: {
        propertiesData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>