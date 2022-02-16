import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sections: [
      { id: 0, title: "Home", path: "/" },
      { id: 1, title: "Products", path: "/products" },
      { id: 2, title: "Hiring", path: "/hiring" },
      { id: 3, title: "About", path: "/about" },
      { id: 4, title: "Contact", path: "/contact" },
      { id: 5, title: "Register", path: "/register" },
    ],
    features: [
      {
        title: "Web and app development",
        description:
          "Let us help you grow with the development of a custom solution tailored to your needs.",
        link: require("@/assets/icon1.svg"),
        alt: "icon 1",
      },
      {
        title: "SEM positioning",
        description:
          "Ingenuity, innovation and experience united in the use of all available channels.",
        link: require("@/assets/icon2.svg"),
        alt: "icon 2",
      },
      {
        title: "SEO positioning",
        description:
          "We are your ally if you are looking for technical capabilities, strategy and experience in web positioning.",
        link: require("@/assets/icon3.svg"),
        alt: "icon 3",
      },
      {
        title: "Digital identity and design",
        description:
          "Trust one of the digital agencies with the most years of experience in the industry to meet your goals",
        link: require("@/assets/icon4.svg"),
        alt: "icon 4",
      },
    ],
    ourWork: [
      {
        number: "01",
        title: "Analysis and strategy",
        description:
          "We create solutions that combine your objectives with the needs of your clients. We understand your business and your users. We use different design and research methodologies to ensure that you and your clients speak the same language.",
        class: "ourWork__card-01",
        src: require("@/assets/01.png"),
        alt: "01",
      },
      {
        number: "02",
        title: "Design",
        description:
          "We optimize the user experience by acting on the behavior of your customers. We approach the designs taking into account the strategic objectives and discoveries found in the analysis phase. We apply behavioral design techniques and carry out tests for their validation.",
        class: "ourWork__card-02",
        src: require("@/assets/02.png"),
        alt: "02",
      },
      {
        number: "03",
        title: "custom development",
        description:
          "We build everything you need to achieve your digital business goals. We create custom software solutions from the ground up, designed for each business. We develop them with the latest technologies and apply agile work methodologies that allow us to guarantee quality in each project.",
        class: "ourWork__card-03",
        src: require("@/assets/03.png"),
        alt: "03",
      },
      {
        number: "04",
        title: "SEM campaigns and SEO positioning",
        description:
          "We promote the launch of your business We implement advertising campaigns on social networks to improve the positioning of your company in search engines, anticipate the competition and the needs of your target audience.",
        class: "ourWork__card-04",
        src: require("@/assets/04.png"),
        alt: "04",
      },
    ],
    inNumbers: [
      {
        number: "+150",
        description: "Proyectos",
      },
      {
        number: "+60",
        description: "Clientes",
      },
      {
        number: "+85",
        description: "Dominios en primera línea",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
