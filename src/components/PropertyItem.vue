<template> <!-- Карточка с квартирой  -->

    <div class="property__col">
        <router-link :to="`/property/${property.id}`"> <!-- косые кавычки нужны для использования строковых литералов (шаблонные строки, т.е. строки, в которые подставляется значение из переменных) -->
            <img
                :src="`../assets/img/${property.image}.png`"
                :alt="property.desc.aqft"
                class="property__img"
            />
            <h4 class="propery__h4">{{ `${property.desc.sqft} ${property.title}` }}</h4> <!--синтаксис шаблонных строк -->
            <p class="property__sub">{{ property.subtitle }}</p>
            <p class="property__price">{{ property.price }}</p>
            <ul class="property__desc">
                <li class="property__item">{{ property.desc.sqft }} Sq Ft</li>
                <li class="property__item">{{ property.rooms }} Bedrooms</li>
                <li class="property__item">{{ property.bath }} Bathroom</li>
            </ul>
        </router-link>
    </div> 
</template>

<script>
export default { // разрешает импорт, default - значит, что при импорте можно указывать любое название
    props: [ //содержит список дырок с названиями для передачи данных снаружи извне
        "property",
    ],
}
</script>