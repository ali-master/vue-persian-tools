import { createLocalVue, shallow } from "vue-test-utils";

import App from "../App.vue";
import vuePersianTools from "../vuePersianTools";

describe("Test Vue Persian Tools and Filters", () => {
	it("Test change config", () => {
		let localVue = createLocalVue();
		localVue.use(vuePersianTools);

		let wrapper = shallow(App, {
			localVue,
		});

		wrapper.setData({ isPersianInput: "سلام" });

		let result = wrapper.find("#persian-tools-isPersian");
		expect(Boolen(result.text())).toEqual(true);
	});
});
