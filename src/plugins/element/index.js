import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
import lang from "element-ui/lib/locale/lang/en";
import locale from "element-ui/lib/locale";
import { Menu, MenuItem, Card } from "element-ui";

locale.use(lang);

Vue.use(Menu, { locale });
Vue.use(MenuItem, { locale });
Vue.use(Card, { locale });
