<template>
    <div class="contacts">
        <div class="container">
            <div class="about__breadcrumbs">
                <Breadcrumbs />
            </div>

            <h1 class="contacts__h1">
                Our
                <b>Contacts</b>
            </h1>

            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24089.30363156339!2d29.066614508974574!3d40.999806407882595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7d50a73fd75%3A0xf76c2ba1ed1c1354!2zQcWfxLFrIFZleXNlbCwgMzA1NS4gU2suLCAzNDcwNyBBdGHFn2VoaXIvxLBzdGFuYnVsLCDQotGD0YDRhtC40Y8!5e0!3m2!1sru!2sru!4v1627633765464!5m2!1sru!2sru"
                    width="100%"
                    height="445px"
                    style="border:0;"
                    loading="lazy"
                ></iframe>
            </div>

            <div class="contacts__box">
                <div class="contacts__inner">
                    <div class="contacts__info">
                        <h1 class="contacts__info-h1">Contact Info</h1>
                        <p
                            class="contacts__info-text"
                        >Etiam commodo consequat egestas. Morbi at ligula nulla. Mauris bibendum mi vitae condimentum mollis. Sed sollicitudin enim vehicula, varius sapien id, consectetur posuere sem commodo.</p>
                        <div class="contacts__info-adress">
                            <b>
                                Real Home INC.
                                ST STEPHEN'S HOUSE, COLSTON AVE, BRISTOL, BRISTOL BS1 4ST, UK
                            </b>
                        </div>
                        <div class="contacts__info-numbers">
                            <div class="contacts__info-phone">
                                Telephone:
                                <b>+1 800 603 6035</b>
                            </div>
                            <div class="contacts__info-fax">
                                FAX:
                                <b>+1 800 889 9898</b>
                            </div>
                            <div class="contacts__info-email">
                                E-mail:
                                <b>mail@demolink.org</b>
                            </div>
                        </div>
                    </div>

                    <form class="contacts__form">
                        <h1 class="contacts__form-h1">Leave a Comment</h1>
                        <div class="contacts__form-inner">
                            <div class="contacts__row">
                                <input
                                    class="contacts__form-input"
                                    placeholder="Your name"
                                    type="text"
                                />
                                <input
                                    class="contacts__form-input"
                                    placeholder="Your e-mail"
                                    type="email"
                                />
                            </div>
                            <textarea
                                class="contacts__form-textarea"
                                placeholder="Your comment"
                                type="text"
                            ></textarea>
                            <div class="contacts__row">
                                <button class="contacts__form-btn" type="submit">Send</button>
                                <button class="contacts__form-btn" type="submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- ФАК -->
            <div class="faq">
                <h1 class="faq__h1">FAQ</h1>
                <div class="faq__item">
                    <div class="faq__question">
                        <p class="faq__question-icon">Q</p>
                        <p class="faq__question-text">
                            <b>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura?</b>
                        </p>
                    </div>
                    <div class="faq__answer">
                        <p class="faq__answer-icon">A</p>
                        <p
                            class="faq__answer-text"
                        >Diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et?</p>
                    </div>
                </div>

                <div class="faq__item">
                    <div class="faq__question">
                        <p class="faq__question-icon">Q</p>
                        <p class="faq__question-text">
                            <b>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura?</b>
                        </p>
                    </div>
                    <div class="faq__answer">
                        <p class="faq__answer-icon">A</p>
                        <p
                            class="faq__answer-text"
                        >Diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et?</p>
                    </div>
                </div>

                <div class="faq__item">
                    <div class="faq__question">
                        <p class="faq__question-icon">Q</p>
                        <p class="faq__question-text">
                            <b>Quisque diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura?</b>
                        </p>
                    </div>
                    <div class="faq__answer">
                        <p class="faq__answer-icon">A</p>
                        <p
                            class="faq__answer-text"
                        >Diam lorem interdum vitaapibus ac scelerisque vitae pede. Donec eget tellus non erat lacinia fertum. Donec in velit vel ipsum auctovinar. Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura. Lorem ipsum dolor sitamet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et?</p>
                    </div>
                </div>
            </div>

            <!-- testimonials -->
            <div class="testimonials-object">
                <h1 class="testimonials-object__h1">Testimonials</h1>
                <div class="testimonials-object__inner testimonials-object__border">
                    <div class="testimonials-object__items">
                        <div class="testimonials-object__item">
                            <img
                                class="testimonials-object__avatar"
                                src="../assets/img/testimonials-avatar.png"
                            />
                            <div class="testimonials-object__text">
                                <p
                                    class="testimonials-object__text-p1"
                                >Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio morbi.</p>
                                <p
                                    class="testimonials-object__text-p2"
                                >Ut viverra mauris justo, quis auctor nisi. Suspendisse sit amet diam diam, eget volutpat lacus. Vestibulum faucibus scelerisque nisl vitae scelerisque. Sed tristique metus eu quam viverra malesuada. Cras porta eros nec libero bibendum sed faucibus felis fringilla. Quisque sed odio neque. Mauris at nisl ac eros pretium hendrerit vitae et velit. Aliquam erat volutpat. Proin sit amet erat vel nisl consectetur auctor et at quam.</p>
                                <p class="testimonials-object__text-name">
                                    <b>Tim Barkley</b>, Manager
                                </p>
                                <a class="testimonials-object__text-link">https//testlink.com</a>
                            </div>
                        </div>

                        <div class="testimonials-object__item">
                            <img
                                class="testimonials-object__avatar"
                                src="../assets/img/testimonials-avatar.png"
                            />
                            <div class="testimonials-object__text">
                                <p
                                    class="testimonials-object__text-p1"
                                >Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio morbi.</p>
                                <p
                                    class="testimonials-object__text-p2"
                                >Ut viverra mauris justo, quis auctor nisi. Suspendisse sit amet diam diam, eget volutpat lacus. Vestibulum faucibus scelerisque nisl vitae scelerisque. Sed tristique metus eu quam viverra malesuada. Cras porta eros nec libero bibendum sed faucibus felis fringilla. Quisque sed odio neque. Mauris at nisl ac eros pretium hendrerit vitae et velit. Aliquam erat volutpat. Proin sit amet erat vel nisl consectetur auctor et at quam.</p>
                                <p class="testimonials-object__text-name">
                                    <b>Tim Barkley</b>, Manager
                                </p>
                                <a class="testimonials-object__text-link">https//testlink.com</a>
                            </div>
                        </div>

                        <div class="testimonials-object__item">
                            <img
                                class="testimonials-object__avatar"
                                src="../assets/img/testimonials-avatar.png"
                            />
                            <div class="testimonials-object__text">
                                <p
                                    class="testimonials-object__text-p1"
                                >Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio morbi.</p>
                                <p
                                    class="testimonials-object__text-p2"
                                >Ut viverra mauris justo, quis auctor nisi. Suspendisse sit amet diam diam, eget volutpat lacus. Vestibulum faucibus scelerisque nisl vitae scelerisque. Sed tristique metus eu quam viverra malesuada. Cras porta eros nec libero bibendum sed faucibus felis fringilla. Quisque sed odio neque. Mauris at nisl ac eros pretium hendrerit vitae et velit. Aliquam erat volutpat. Proin sit amet erat vel nisl consectetur auctor et at quam.</p>
                                <p class="testimonials-object__text-name">
                                    <b>Tim Barkley</b>, Manager
                                </p>
                                <a class="testimonials-object__text-link">https//testlink.com</a>
                            </div>
                        </div>
                    </div>

                    <aside class="aside">
                        <div class="blog__category">
                            <h6 class="blog__category-title">Categories</h6>
                            <ul class="blog__category-list">
                                <li class="blog__category-item">
                                    <a class="blog__category-link">Dining room (1)</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">Office furniture (12)</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">Simple interiror design (2)</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">Design (4)</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">Bedroom Furniture (1)</a>
                                </li>
                            </ul>
                        </div>

                        <div class="blog__archive">
                            <h6 class="blog__category-title">Archive</h6>
                            <ul class="blog__category-list">
                                <li class="blog__category-item">
                                    <a class="blog__category-link">January 2021</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">February 2021</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">April 2021</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">September 2021</a>
                                </li>
                                <li class="blog__category-item">
                                    <a class="blog__category-link">August 2021</a>
                                </li>
                            </ul>
                        </div>

                        <div class="recent-posts">
                            <h6 class="recent-posts__title">Recent Posts</h6>
                            <ul class="recent-posts__list">
                                <li class="recent-posts__item">
                                    <a class="recent-posts__item-title">Aliquam erat volutpat</a>
                                    <p
                                        class="recent-posts__text"
                                    >Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Proin dictum elem entum velit fusce.</p>
                                    <span class="recent-posts__date">May 27, 2014</span>
                                </li>
                                <li class="recent-posts__item">
                                    <a class="recent-posts__item-title">Aliquam erat volutpat</a>
                                    <p
                                        class="recent-posts__text"
                                    >Proin umcorper urna et felisstibulum iaculis lacinia est. Proin dictum elem entum velit fusce euismod. Aenean commodo ligula eget dolor. Proin dictum elem entum velit fusce.</p>
                                    <span class="recent-posts__date">May 27, 2014</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</template>