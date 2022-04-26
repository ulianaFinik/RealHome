<template>
    <div class="property"> <!-- Страница c Property по ссылке в хедере -->
        <div class="container">

            <div class="about__breadcrumbs about__breadcrumbs-property">
                <Breadcrumbs />
            </div>

            <h1 class="property__h1">Property <b>Catalog</b></h1>

            <div class="property__catalog">

                <div class="gallery__catalog-buttons">
                    <a class="property__catalog-btn" data-filter=".chikago">CHIKAGO</a>
                    <a class="property__catalog-btn" data-filter=".kansas">KANSAS CITY</a>
                    <a class="property__catalog-btn" data-filter=".denver">DENVER</a>
                    <a class="property__catalog-btn" data-filter=".new-york">NEW-YORK</a>
                    <a class="property__catalog-btn" data-filter=".london">LONDON</a>
                </div>

                <div class="property__row"> <!-- делает обход по массиву propertiesData. Элементы сохраняются поочередно в property, порядковый номер элемента от ) - в индекс
                :key="property.id"  нужно для v-for-->
                    <template
                        v-for="(property, index) in propertiesData"  
                        :key="property.id" >

                        <template v-if="index < 2"> <!-- индекс начинается с 0 -->
                            <property-item :property="property" class="property-item--2" />
                        </template>

                         <template v-if="index >= 2 && index < 5"> <!-- индекс начинается с 0. && - логическая "И". Т.е.  -->
                            <property-item :property="property" class="property-item--3" />
                        </template>

                        <template v-if="index >= 5 && index < 9"> <!-- индекс начинается с 0 -->
                            <property-item :property="property" class="property-item--4" />
                        </template>
                    </template>
                </div>

            </div>

        </div>

        
    <div class="pagination">
        <!-- 10:32 про pagination и задавание активных классов-->
        <ul class="pagination__list">
            <li class="pagination__list-item">
                <a class="pagination__list-num pagination__list-num--active" href>1</a>
            </li>
            <li class="pagination__list-item">
                <a class="pagination__list-num" href>2</a>
            </li>
        </ul>
    </div>

    </div>
</template>

<script>
import { featureData, propertiesData } from "./data/data.alldata"; // фигурные скобки нужны для импорта чего-то со своим названием
import PropertyItem from "./PropertyItem.vue" // из export default импорт без фигурных скобок
    export default {
        components: {
            "property-item":PropertyItem //локальная регистрация компонента
        },
        data() {  //функция DATA возвращает объект, специально для вью
            return {
                propertiesData: propertiesData, //чтобы можно было использовать в темплейте
            }
        },
        props: {

        },
    }
</script>