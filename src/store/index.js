// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      characters: [
        {
          id: 1,
          name: "Homer Simpson",
          image: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
          description: "Гомер Симпсон — неуклюжий муж Мардж и отец Барта, Лизы и Мэгги. Он известен своей любовью к пиву, пончикам и крылатой фразой «Ох!»'"
        },
        {
          id: 2,
          name: "Marge Simpson",
          image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
          description: "Мардж Симпсон — терпеливая и любящая жена Гомера и мать Барта, Лизы и Мэгги. Она известна своими высокими синими волосами и милым нравом."
        },
        {
          id: 3,
          name: "Bart Simpson",
          image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
          description: "Барт Симпсон — озорной сын Гомера и Мардж. Он известен своими розыгрышами, навыками катания на скейтборде и крылатой фразой «Съешь мои шорты!»'"
        },
        {
          id: 4,
          name: "Lisa Simpson",
          image: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
          description: "Лиза Симпсон — умная и социально сознательная дочь Гомера и Мардж. Она известна своей игрой на саксофоне и страстью к защите окружающей среды."
        }
      ],
    };
  },
  mutations: {},
  actions: {},
  modules: {},
});
