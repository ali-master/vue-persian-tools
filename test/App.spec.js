import { createLocalVue, shallow } from "vue-test-utils";

import App from "../App.vue";
import vuePersianTools from "../vuePersianTools";

describe("test App.vue", () => {
	it("Test with all default config", () => {
		let localVue = createLocalVue();

		localVue.use(vuePersianTools);

		let wrapper = shallow(App, {
			localVue,
		});

		let result = wrapper.find("#persian-tools-isPersian");
		expect(result.text()).to.be.false;
	});
});
