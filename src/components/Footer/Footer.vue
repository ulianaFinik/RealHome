<template>
    <footer class="footer  footer__bg">
        <div class="container">
            <div class="row">
                <FooterIcons />
                <FooterNavigation title="Navigation" :menuList="menuList"/> <!-- двоеточие - значит, что переменная (краткая запись). Пропихивание строки Navigation в property title-->
                <FooterNavigation title="For Clients" :menuList="menuClient"/>
                <FooterContacts />
            </div>
        </div>
    </footer>
</template>

<script>
import { menuList, menuClient } from './../constants/menuLinks'

import FooterNavigation from './FooterNavigation.vue'



export default {
    data() {//то, что прописывается в data, будет доступно через this в javaScript, например, this.footerMenu. Также это будет доступно в темплайте. Но в темплейте не нужно писать this, т.е. просто foterMenu. ПОЧИТАЙ ДОКУМЕНТАЦИЮ НА РУССКОМ ЯЗЫКЕ
        return {
            menuList: menuList,
            menuClient: menuClient,
        }
    },
    components: { 
        FooterNavigation,
    },
}
</script>
