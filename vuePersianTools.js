import { isPersian } from "persian-tools";
import { verifyCardNumber } from "persian-tools";

const VuePersianTools = {
	install(Vue, options) {
		Vue.filter("isPersian", value => (value ? isPersian(value) : value));
		Vue.filter("verifyCardNumber", value => (value ? verifyCardNumber(value) : value));
	},
};

export default VuePersianTools;
