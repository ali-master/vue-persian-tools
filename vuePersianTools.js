import { isPersian } from "persian-tools";

const VuePersianTools = {
	install(Vue, options) {
		Vue.filter("isPersian", value => (value ? isPersian(value) : value));
	},
};

export default VuePersianTools;
