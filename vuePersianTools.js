import { isPersian } from "persian-tools";
import { verifyCardNumber } from "persian-tools";
import { verifyIranianNationalId } from "persian-tools";

const VuePersianTools = {
	install(Vue, options) {
		Vue.filter("isPersian", value => (value ? isPersian(value) : value));
		Vue.filter("verifyCardNumber", value => (value ? verifyCardNumber(value) : value));
		Vue.filter("verifyIranianNationalId", value => (value ? verifyIranianNationalId(value) : value));
	},
};

export default VuePersianTools;
