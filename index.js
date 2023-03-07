import {Bloc,BlocBuilder} from "./js/bloc-them/index.js";
import {html} from "./js/lit-html/lit-html.js";


class MyAppBloc extends Bloc{
    constructor(){
        super(0);
    }
}


customElements.define("my-app",class MyAppWidget extends BlocBuilder{
    constructor(){
        super("MyAppBloc",{
            blocs_map:{
                MyAppBloc: new MyAppBloc()
            }
        })
    }


    builder(state){
        return html`<header class="u-clearfix u-header u-header" id="sec-2830">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <a href="#" class="u-image u-logo u-image-1">
            <img src="./index_files/default-logo.png" class="u-logo-image u-logo-image-1">
          </a>
          <nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1" data-responsive-from="MD">
            <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0px; font-weight: 700;">
              <a class="u-button-style u-custom-active-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                href="about.html?version=03486873-7428-4072-82ec-49ad39c0538c#">
                <svg class="u-svg-link" viewBox="0 0 24 24">
                  <use xlink:href="#menu-hamburger"></use>
                </svg>
                <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px"
                  xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <rect y="1" width="16" height="2"></rect>
                    <rect y="7" width="16" height="2"></rect>
                    <rect y="13" width="16" height="2"></rect>
                  </g>
                </svg>
              </a>
            </div>
            <div class="u-custom-menu u-nav-container">
              <ul class="u-nav u-spacing-20 u-unstyled u-nav-1">
                <li class="u-nav-item"><a
                    class="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-palette-1-base u-text-grey-90 u-text-hover-palette-2-base active"
                    href="about.html" style="padding: 10px;">About</a>
                </li>
              </ul>
            </div>
            <div class="u-custom-menu u-nav-container-collapse">
              <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div class="u-inner-container-layout u-sidenav-overflow">
                  <div class="u-menu-close"></div>
                  <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li class="u-nav-item"><a class="u-button-style u-nav-link active"
                        href="about.html">About</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
            <style class="offcanvas-style">
              .u-offcanvas .u-sidenav {
                flex-basis: 250px !important;
              }
    
              .u-offcanvas:not(.u-menu-open-right) .u-sidenav {
                margin-left: -250px;
              }
    
              .u-offcanvas.u-menu-open-right .u-sidenav {
                margin-right: -250px;
              }
    
              @keyframes menu-shift-left {
                from {
                  left: 0;
                }
    
                to {
                  left: 250px;
                }
              }
    
              @keyframes menu-unshift-left {
                from {
                  left: 250px;
                }
    
                to {
                  left: 0;
                }
              }
    
              @keyframes menu-shift-right {
                from {
                  right: 0;
                }
    
                to {
                  right: 250px;
                }
              }
    
              @keyframes menu-unshift-right {
                from {
                  right: 250px;
                }
    
                to {
                  right: 0;
                }
              }
            </style>
          </nav>
        </div>
      </header>
      <section class="u-align-center u-clearfix u-image u-shading u-section-1" id="sec-c595" data-image-width="1600"
        data-image-height="1067">
        <div class="u-clearfix u-sheet u-sheet-1">
          <img src="./index_files/h.png" alt="" class="u-image u-image-contain u-image-default u-image-1"
            data-image-width="230" data-image-height="365">
          <h1 class="u-custom-font u-font-lato u-text u-text-body-alt-color u-text-1">We believe in God</h1>
          <h3 class="u-text u-text-body-alt-color u-text-2"> Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </h3>
          <p class="u-text u-text-body-alt-color u-text-3">Logo from <a href="https://fhttps//www.freepik.com/vectors/logo"
              class="u-active-none u-border-1 u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-button-link u-button-style u-hover-none u-none u-text-body-alt-color u-btn-1"
              target="_blank">Freepik</a>
          </p>
          <a href="#"
            class="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-none u-btn-2">read
            more</a>
        </div>
      </section>
      <section class="u-align-center u-clearfix u-section-2" id="sec-5def">
        <div class="u-clearfix u-sheet u-valign-top u-sheet-1">
          <div class="u-expanded-width u-list u-list-1">
            <div class="u-repeater u-repeater-1">
              <div class="u-align-center u-container-style u-list-item u-repeater-item">
                <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1"><span
                    class="u-icon u-icon-rectangle u-palette-1-base u-icon-1"><svg class="u-svg-link"
                      preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="">
                      <use xlink:href="#svg-68c7"></use>
                    </svg><svg class="u-svg-content" viewBox="0 0 512 512" id="svg-68c7">
                      <g>
                        <path
                          d="m387.891 279.819v-36.946l52.329 32.966 15.887-25.22-186.072-117.219v-71.441h32.538v-29.808h-32.538v-32.151h-29.807v32.151h-30.892v29.807h30.892v72.477l-184.43 116.183 15.887 25.22 52.332-32.967v36.951l-124.017 73.617v158.561h512v-158.564zm-358.084 202.374v-111.784l94.211-55.924v167.708zm211.244 0v-102.586c0-8.218 6.685-14.904 14.904-14.904 8.218 0 14.904 6.686 14.904 14.904v102.586zm59.614 0v-102.586c0-24.653-20.057-44.711-44.711-44.711s-44.711 20.057-44.711 44.711v102.586h-57.418v-258.099l102.128-64.337 102.13 64.338v258.098zm181.528 0h-94.302v-167.718l94.302 55.937z">
                        </path>
                        <path d="m241.051 232.662h29.807v59.614h-29.807z"></path>
                        <path d="m62.87 388.727h29.807v56.213h-29.807z"></path>
                        <path d="m419.315 388.727h29.807v56.213h-29.807z"></path>
                      </g>
                    </svg></span>
                  <h3 class="u-text u-text-1">Our mission</h3>
                  <p class="u-text u-text-2">Sample text. Click to select the text box. Click again or double click to start
                    editing the text.</p>
                  <a href="#"
                    class="u-active-none u-align-center u-border-1 u-border-active-palette-2-base u-border-black u-border-hover-palette-2-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-1">more</a>
                </div>
              </div>
              <div class="u-align-center u-container-style u-list-item u-repeater-item">
                <div class="u-container-layout u-similar-container u-valign-top u-container-layout-2"><span
                    class="u-icon u-icon-rectangle u-palette-1-base u-icon-2"><svg class="u-svg-link"
                      preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="">
                      <use xlink:href="#svg-0206"></use>
                    </svg><svg class="u-svg-content" viewBox="0 0 512 512" id="svg-0206">
                      <g>
                        <path
                          d="m431.6 0h-351.2c-8.284 0-15 6.716-15 15v451c0 8.284 6.716 15 15 15h76.271v16c0 8.284 6.716 15 15 15s15-6.716 15-15v-16h244.929c8.284 0 15-6.716 15-15v-451c0-8.284-6.716-15-15-15zm-336.2 30h31.271v421h-31.271zm321.2 421h-259.929v-421h259.929z">
                        </path>
                        <path
                          d="m217.718 229.215h23.338v61.006c0 8.284 6.716 15 15 15h61.158c8.284 0 15-6.716 15-15v-61.006h23.338c8.284 0 15-6.716 15-15v-61.157c0-8.284-6.716-15-15-15h-23.338v-25.431c0-8.284-6.716-15-15-15h-61.158c-8.284 0-15 6.716-15 15v25.431h-23.338c-8.284 0-15 6.716-15 15v61.157c0 8.285 6.716 15 15 15zm15-61.157h23.338c8.284 0 15-6.716 15-15v-25.431h31.158v25.431c0 8.284 6.716 15 15 15h23.338v31.157h-23.338c-8.284 0-15 6.716-15 15v61.006h-31.158v-61.006c0-8.284-6.716-15-15-15h-23.338z">
                        </path>
                      </g>
                    </svg></span>
                  <h3 class="u-text u-text-3">Our community</h3>
                  <p class="u-text u-text-4">Sample text. Click to select the text box. Click again or double click to start
                    editing the text.</p>
                  <a href="#"
                    class="u-active-none u-align-center u-border-1 u-border-active-palette-2-base u-border-black u-border-hover-palette-2-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-2">more</a>
                </div>
              </div>
              <div class="u-align-center u-container-style u-list-item u-repeater-item">
                <div class="u-container-layout u-similar-container u-valign-top u-container-layout-3"><span
                    class="u-icon u-icon-rectangle u-palette-1-base u-icon-3"><svg class="u-svg-link"
                      preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="">
                      <use xlink:href="#svg-3748"></use>
                    </svg><svg class="u-svg-content" viewBox="0 0 512 512" id="svg-3748">
                      <g>
                        <path
                          d="m256 0c-91.532 0-166 74.467-166 166 0 38.555 13.517 76.12 38.062 105.774 21.563 26.053 50.673 44.943 82.938 54.039v36.187h-60v90h60v60h90v-60h60v-90h-60v-36.187c32.266-9.096 61.376-27.986 82.938-54.039 24.545-29.654 38.062-67.219 38.062-105.774 0-91.533-74.468-166-166-166zm27.036 299.311-12.036 2.426v90.263h60v30h-60v60h-30v-60h-60v-30h60v-90.263l-12.036-2.426c-63.138-12.728-108.964-68.793-108.964-133.311 0-74.991 61.01-136 136-136s136 61.009 136 136c0 64.518-45.826 120.583-108.964 133.311z">
                        </path>
                        <path
                          d="m256 60c-58.448 0-106 47.551-106 106s47.552 106 106 106 106-47.551 106-106-47.552-106-106-106zm74.506 91h-29.555c-.956-18.596-3.72-36.606-8.437-51.631 19.304 10.621 33.52 29.382 37.992 51.631zm-89.416 30h29.819c-1.928 33.37-9.989 53.66-14.91 59.728-4.92-6.068-12.98-26.358-14.909-59.728zm0-30c1.928-33.37 9.989-53.66 14.91-59.728 4.921 6.068 12.981 26.358 14.91 59.728zm-21.604-51.631c-4.717 15.024-7.481 33.035-8.437 51.631h-29.555c4.472-22.249 18.688-41.01 37.992-51.631zm-37.992 81.631h29.555c.956 18.596 3.72 36.606 8.437 51.631-19.304-10.621-33.52-29.382-37.992-51.631zm111.02 51.631c4.717-15.024 7.481-33.035 8.437-51.631h29.555c-4.472 22.249-18.688 41.01-37.992 51.631z">
                        </path>
                      </g>
                    </svg></span>
                  <h3 class="u-text u-text-5">Join a group</h3>
                  <p class="u-text u-text-6">Sample text. Click to select the text box. Click again or double click to start
                    editing the text.</p>
                  <a href="#"
                    class="u-active-none u-align-center u-border-1 u-border-active-palette-2-base u-border-black u-border-hover-palette-2-base u-border-no-left u-border-no-right u-border-no-top u-btn u-button-style u-hover-none u-none u-text-body-color u-btn-3">more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="u-clearfix u-image u-section-3" id="carousel_1970" data-image-width="1980" data-image-height="1114">
        <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div
                class="u-align-left u-container-style u-layout-cell u-left-cell u-size-26-lg u-size-28-xl u-size-29-md u-size-29-sm u-size-29-xs u-layout-cell-1">
                <div class="u-container-layout u-valign-middle u-container-layout-1">
                  <h1 class="u-custom-font u-font-lato u-text u-text-body-alt-color u-text-1">Can't make it in-person? Join
                    Us Online<br>
                  </h1>
                  <p class="u-text u-text-body-alt-color u-text-2">Image by <a href="https://www.freepik.com/photos/people"
                      class="u-border-1 u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-button-link u-button-style u-none u-text-body-alt-color u-btn-1"
                      target="_blank">Freepik</a>
                  </p>
                  <a href="#"
                    class="u-active-white u-align-center u-border-2 u-border-active-white u-border-hover-white u-border-white u-btn u-button-style u-hover-white u-none u-btn-2">Contact
                    us</a>
                </div>
              </div>
              <div
                class="u-container-style u-image u-layout-cell u-right-cell u-shape-rectangle u-size-31-md u-size-31-sm u-size-31-xs u-size-32-xl u-size-34-lg u-image-1"
                data-image-width="1200" data-image-height="949">
                <div class="u-container-layout u-container-layout-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="u-align-left u-clearfix u-section-4" id="carousel_b84f">
        <div class="u-clearfix u-sheet u-valign-middle-xs u-sheet-1">
          <p class="u-text u-text-1">Nisl purus in mollis nunc sed id. Aenean vel elit scelerisque mauris pellentesque
            pulvinar pellentesque. Turpis egestas sed tempus urna et pharetra. Id aliquet risus feugiat in ante metus
            dictum. Aliquet nec ullamcorper sit amet risus nullam. Lectus nulla at volutpat diam ut. </p>
          <p class="u-custom-font u-font-pt-sans u-text u-text-2">Image from <a href="https://freepik.com/photos/people"
              class="u-active-none u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1">Freepik</a>
          </p>
          <a href="#"
            class="u-active-palette-1-light-1 u-align-center u-btn u-button-style u-hover-palette-1-light-1 u-palette-1-base u-btn-2">Learn
            more</a>
          <div class="u-palette-5-light-2 u-preserve-proportions u-shape u-shape-circle u-shape-1"></div>
          <div class="u-shape u-shape-svg u-text-palette-1-base u-shape-2">
            <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" style="">
              <use xlink:href="#svg-30e5"></use>
            </svg>
            <svg class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-30e5"
              style="enable-background:new 0 0 160 160;">
              <path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
        s80-35.8,80-80S124.2,0,80,0L80,0z"></path>
            </svg>
          </div>
          <div class="u-align-left u-image u-image-circle u-image-1" data-image-width="800" data-image-height="807"></div>
          <h3 class="u-text u-text-3">The Bible is best experienced in community</h3>
          <div class="u-palette-1-base u-shape u-shape-circle u-shape-3"></div>
        </div>
      </section>
      <section class="u-clearfix u-image u-section-5" id="sec-f6d9" data-image-width="1600" data-image-height="1067">
        <div class="u-clearfix u-sheet u-valign-middle-xl u-valign-middle-xs u-sheet-1">
          <div class="u-container-style u-group u-palette-1-base u-group-1">
            <div class="u-container-layout u-valign-middle u-container-layout-1">
              <h6 class="u-text u-text-body-alt-color u-text-1">Welcome to Home<br>
              </h6>
              <h2 class="u-text u-text-body-alt-color u-text-2">Meetings in the Church</h2>
            </div>
          </div>
          <p class="u-text u-text-body-alt-color u-text-3">Dictum sit amet justo donec enim diam vulputate. Sociis natoque
            penatibus et magnis dis parturient. Molestie ac feugiat sed lectus vestibulum mattis. Vitae congue mauris
            rhoncus aenean vel elit scelerisque.&nbsp;</p>
          <a href="#"
            class="u-active-palette-1-light-1 u-align-center u-btn u-button-style u-hover-palette-1-light-1 u-palette-1-base u-btn-1">Learn
            more</a>
        </div>
      </section>
      <section class="u-clearfix u-white u-section-6" id="sec-d143">
        <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div class="u-gutter-0 u-layout">
              <div class="u-layout-col">
                <div class="u-size-60">
                  <div class="u-layout-row">
                    <div class="u-container-style u-layout-cell u-size-30 u-layout-cell-1">
                      <div class="u-container-layout u-container-layout-1">
                        <img src="./index_files/ret4.jpg" alt="" class="u-expanded-width u-image u-image-default u-image-1"
                          data-image-width="800" data-image-height="712">
                        <p class="u-align-left u-text u-text-1">Image from <a href="https://www.freepik.com/photos/boy"
                            class="u-active-none u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-1"
                            target="_blank">Freepik</a>
                        </p>
                      </div>
                    </div>
                    <div class="u-align-left u-container-style u-layout-cell u-size-30 u-layout-cell-2">
                      <div
                        class="u-container-layout u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-valign-top-lg u-valign-top-xl u-container-layout-2">
                        <div class="u-palette-1-base u-shape u-shape-circle u-shape-1"></div>
                        <h1 class="u-text u-text-2">Weekly meetings of 8-10 people to connect in a biblical community.</h1>
                        <p class="u-text u-text-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque.
                          Arcu dictum varius duis at consectetur lorem donec massa. Tempus imperdiet nulla malesuada
                          pellentesque . </p>
                        <a href="#"
                          class="u-active-palette-1-light-1 u-btn u-button-style u-hover-palette-1-light-1 u-palette-1-base u-btn-2">Learn
                          more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="u-clearfix u-palette-1-light-1 u-section-7" id="carousel_1d68">
        <div class="u-clearfix u-sheet u-sheet-1">
          <div class="u-align-center u-container-style u-expanded-width-xs u-group u-white u-group-1">
            <div class="u-container-layout u-valign-top u-container-layout-1">
              <h1 class="u-text u-text-1">Contact Us</h1>
              <div
                class="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-expanded-width-lg u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-form u-form-1">
                <form action="https://forms.nicepagesrv.com/v2/form/process"
                  class="u-clearfix u-form-spacing-28 u-form-vertical u-inner-form" style="padding: 10px" source="email"
                  name="form">
                  <input type="hidden" id="siteId" name="siteId" value="378349" wfd-invisible="true">
                  <input type="hidden" id="pageId" name="pageId" value="378350" wfd-invisible="true">
                  <div class="u-form-group u-form-name">
                    <label for="name-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Name</label>
                    <input type="text" placeholder="Enter your Name" id="name-5a14" name="name"
                      class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
                      required="">
                  </div>
                  <div class="u-form-email u-form-group">
                    <label for="email-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Email</label>
                    <input type="email" placeholder="Enter a valid email address" id="email-5a14" name="email"
                      class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
                      required="">
                  </div>
                  <div class="u-form-group u-form-message">
                    <label for="message-5a14" class="u-form-control-hidden u-label" wfd-invisible="true">Message</label>
                    <textarea placeholder="Enter your message" rows="4" cols="50" id="message-5a14" name="message"
                      class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-white"
                      required=""></textarea>
                  </div>
                  <div class="u-align-center u-form-group u-form-submit">
                    <a href="about.html?version=03486873-7428-4072-82ec-49ad39c0538c#"
                      class="u-border-2 u-border-black u-btn u-btn-submit u-button-style u-hover-black u-none u-text-black u-text-hover-white u-btn-1">Submit</a>
                    <input type="submit" value="submit" class="u-form-control-hidden" wfd-invisible="true">
                  </div>
                  <div class="u-form-send-message u-form-send-success" wfd-invisible="true"> Thank you! Your message has
                    been sent. </div>
                  <div class="u-form-send-error u-form-send-message" wfd-invisible="true"> Unable to send your message.
                    Please fix errors then try again. </div>
                  <input type="hidden" name="formServices" value="0fa3409eda50a7e32a96ac3aef0a256d">
                  <input type="hidden" name="siteKey" value="6LetPRgiAAAAAGX121nVdkYGTN-RfCXh4wAlbDFh">
                </form>
              </div>
              <p class="u-text u-text-2">Image from <a href="https://freepik.com/photos/people"
                  class="u-active-none u-border-1 u-border-grey-75 u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-hover-none u-none u-text-body-color u-btn-2">Freepik</a>
              </p>
            </div>
          </div>
          <img src="./index_files/ser-min.jpg" alt="" class="u-expanded-width-xs u-image u-image-default u-image-1"
            data-image-width="900" data-image-height="846">
          <div class="u-list u-list-1">
            <div class="u-repeater u-repeater-1">
              <div class="u-container-style u-list-item u-palette-5-dark-3 u-repeater-item u-list-item-1">
                <div class="u-container-layout u-similar-container u-valign-top-xl u-container-layout-2"><span
                    class="u-icon u-icon-circle u-text-white u-icon-1"><svg class="u-svg-link"
                      preserveAspectRatio="xMidYMin slice" viewBox="0 0 513.64 513.64" style="">
                      <use xlink:href="#svg-d61f"></use>
                    </svg><svg class="u-svg-content" viewBox="0 0 513.64 513.64" x="0px" y="0px" id="svg-d61f"
                      style="enable-background:new 0 0 513.64 513.64;">
                      <g>
                        <g>
                          <path
                            d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72    c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68    c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44    l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z">
                          </path>
                        </g>
                      </g>
                    </svg></span>
                  <h5 class="u-text u-text-3">Call Us</h5>
                  <p class="u-text u-text-4">1 (234) 567-891, 1 (234) 987-654</p>
                </div>
              </div>
              <div class="u-container-style u-list-item u-palette-5-dark-3 u-repeater-item u-list-item-2">
                <div class="u-container-layout u-similar-container u-valign-top-xl u-container-layout-3"><span
                    class="u-icon u-icon-circle u-text-white u-icon-2"><svg class="u-svg-link"
                      preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="">
                      <use xlink:href="#svg-597a"></use>
                    </svg><svg class="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-597a"
                      style="enable-background:new 0 0 512 512;">
                      <g>
                        <g>
                          <path
                            d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5    c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021    C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333    s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z">
                          </path>
                        </g>
                      </g>
                    </svg></span>
                  <h5 class="u-text u-text-5">Location</h5>
                  <p class="u-text u-text-6">121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
              </div>
              <div class="u-container-style u-list-item u-palette-5-dark-3 u-repeater-item u-list-item-3">
                <div class="u-container-layout u-similar-container u-valign-top-xl u-container-layout-4"><span
                    class="u-icon u-icon-circle u-text-white u-icon-3"><svg class="u-svg-link"
                      preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" style="">
                      <use xlink:href="#svg-e16c"></use>
                    </svg><svg class="u-svg-content" viewBox="0 0 512 512" id="svg-e16c">
                      <g>
                        <path
                          d="m386.058 256c0-8.284 6.716-15 15-15h31.587c-7.224-85.814-75.831-154.421-161.645-161.645v31.588c0 8.284-6.716 15-15 15s-15-6.716-15-15v-31.588c-85.814 7.224-154.421 75.831-161.645 161.645h31.587c8.284 0 15 6.716 15 15s-6.716 15-15 15h-31.587c7.224 85.814 75.831 154.421 161.645 161.645v-31.588c0-8.284 6.716-15 15-15s15 6.716 15 15v31.588c85.814-7.224 154.421-75.831 161.645-161.645h-31.587c-8.284 0-15-6.716-15-15zm-39.467-71.629-79.838 82.087c-5.558 5.714-14.618 6.086-20.625.835l-59.598-52.101c-6.237-5.452-6.873-14.929-1.42-21.165 5.452-6.237 14.928-6.875 21.166-1.421l48.889 42.739 69.921-71.891c5.776-5.938 15.273-6.069 21.211-.295 5.938 5.778 6.07 15.274.294 21.212z">
                        </path>
                        <path
                          d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 463.286c-114.298 0-207.286-92.988-207.286-207.286s92.988-207.286 207.286-207.286 207.286 92.988 207.286 207.286-92.988 207.286-207.286 207.286z">
                        </path>
                      </g>
                    </svg></span>
                  <h5 class="u-text u-text-7">Working Hours</h5>
                  <p class="u-text u-text-8">Mon – Fri …… 11 am – 8 pm, Sat, Sun&nbsp;&nbsp;…… 6 am – 8 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    
      <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-b8b6">
        <div class="u-clearfix u-sheet u-sheet-1">
          <p class="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click again or
            double click to start editing the text.</p>
        </div>
      </footer>
      <section class="u-backlink u-clearfix u-grey-80">
        <a class="u-link" href="#">
          <span>Demo App</span>
        </a>
        <p class="u-text">
          <span>For Church</span>
        </p>
      </section>`
    }
});