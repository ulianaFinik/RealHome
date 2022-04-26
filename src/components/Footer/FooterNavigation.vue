<template>
    <div class="col">
        <div class="footer__title">
            <h3 class="footer__title">{{ title }}</h3>
                <ul class="footer__list">
                <li v-for="item in menuList"> <!-- Делается проход по массиву footerMenu и на основании его содержимого генерируются теги Li -->
                <router-link :to="item.path" class="footer__link">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    // import {menuList} from '../constants/menuLinks' //можно заимпортить прямо тут
     export default {
    //     data() { //объявила дату и в ней menuList, чтобы можно было использовать в темплейт
    //         return {
    //              menuList: menuList,
    //         }
    //     },

        props: { // через props можно прокидывать данные снаружи. Содержит список свойств. РАЗРЕШИЛА ТОЛЬКО ПРОПИХИВАТЬ
             menuList: { //Свойство
                 type: Array, //типа подсказка. что надо передавать массив
                required: true,
            },
            title: {
                type: String, //объявила, что могу передавать строку
            }
         },
    }
</script>