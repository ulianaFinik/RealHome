<template>
<div class="container">

 <div class="about__breadcrumbs">
     <Breadcrumbs />
    </div>

    <div class="blog">

            <div class="blog__inner">
                <div class="blog__items">
                    <div class="blog__item  blog__border">
                         <h3 class="blog__item-title">
                            Point of Architecture
                        </h3>
                        <img class="blog__item-img" src="../assets/img/blog-1.png" alt="">
                        <p class="blog__item-text">
                            Vitapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem sitamet, consetetur sadipscing elitr.
                        </p>
                        <button class="blog__item-button  btn btn-primary btn-more">Read more</button>
                    </div>

                     <div class="blog__item  blog__border">
                         <h3 class="blog__item-title">
                            Point of Architecture
                        </h3>
                        <img class="blog__item-img" src="../assets/img/blog-2.png" alt="">
                        <p class="blog__item-text">
                            Vitapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem sitamet, consetetur sadipscing elitr.
                        </p>
                        <button class="blog__item-button  btn btn-primary btn-more">Read more</button>
                    </div>

                      <div class="blog__item  blog__border">
                         <h3 class="blog__item-title">
                            Point of Architecture
                        </h3>
                        <img class="blog__item-img" src="../assets/img/blog-3.png" alt="">
                        <p class="blog__item-text">
                            Vitapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem sitamet, consetetur sadipscing elitr.
                        </p>
                        <button class="blog__item-button  btn btn-primary btn-more">Read more</button>
                    </div>


                    <div class="pagination">  <!-- 10:32 про pagination и задавание активных классов-->
                        <ul class="pagination__list">
                            <li class="pagination__list-item">
                                <a class="pagination__list-num  pagination__list-num--active" href="">1</a>
                            </li>
                            <li class="pagination__list-item">
                                <a class="pagination__list-num" href="">2</a>
                            </li>
                        </ul>
                    </div>

                </div>

        <aside class="aside">
            
                <div class="blog__category">
                    <h6 class="blog__category-title">
                        Categories
                    </h6>
                    <ul class="blog__category-list">
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                Dining room (1)
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                Office furniture (12)
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                Simple interiror design (2)
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                Design (4)
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                Bedroom Furniture (1)
                            </a>
                        </li>
                    </ul>
                </div>

                 <div class="blog__archive">
                    <h6 class="blog__category-title">
                        Archive
                    </h6>
                    <ul class="blog__category-list">
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                January 2021
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                February 2021
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                April 2021
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                September 2021
                            </a>
                        </li>
                        <li class="blog__category-item">
                            <a href="" class="blog__category-link">
                                August 2021
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="recent-posts">  
                    <h6 class="recent-posts__title">
                        Recent Posts
                    </h6>
                    <ul class="recent-posts__list">
                        <li class="recent-posts__item">
                            <a class="recent-posts__item-title" href="">
                               Aliquam erat volutpat
                            </a>
                            <p class="recent-posts__text">
                                Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Proin dictum elem entum velit fusce.
                            </p>
                            <span class="recent-posts__date">May 27, 2014</span> 
                        </li>
                        <li class="recent-posts__item">
                            <a class="recent-posts__item-title" href="">
                               Aliquam erat volutpat
                            </a>
                            <p class="recent-posts__text">
                                Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Proin dictum elem entum velit fusce.
                            </p>
                            <span class="recent-posts__date">May 27, 2014</span> 
                        </li>
                    </ul>
                </div>

            </aside>
            </div>
        </div>
    </div>
</template>