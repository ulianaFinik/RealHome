<template>
    <div class="col">
        <div class="footer__title">
            <h3 class="footer__title">Contact Us</h3>
                <ul class="footer__list">
                    <li>
                        <p>240 Лондон Централ парк 6000008</p>
                    </li>
                    <li>
                        <p>240 Лондон Централ парк 6000008</p>
                        <p>240 Лондон Централ парк 6000008</p>
                        <p>240 Лондон Централ парк 6000008</p>
                    </li>
                    <li>
                        <a class="footer__link  footer__link_red  footer__link_underline" href="mailto:info@realhome.com" target="_blank">
                            <p>mailto:info@realhome.com</p>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            footerMenuClient: {
                type: Array,
                required: true,
            },
        },
    }
</script>