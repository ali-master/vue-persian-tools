<template>
	<div id="application">
		<div class="ui one column centered grid">
			<div class="one column">
				<div class="ui raised very padded text container segment">
					<h2 class="ui header">Vue Persian Tools and Filters</h2>

					<br>
					<br>

					<div class="ui form success">
						<div class="field">
							<label>isPersian</label>
							<input type="text" placeholder="Write here..." v-model="isPersianInput" />

							<div class="ui yellow message mini">
								<p>Result is: <span id="persian-tools-isPersian">{{isPersianInput | isPersian}}</span></p>
							</div>
						</div>

						<div class="field">
							<label>Validate CardNumber</label>
							<input type="number" placeholder="Example: 6037701689095443" v-model="isValidCardNumber" />

							<div class="ui yellow message mini">
								<p>Result is: <span id="persian-tools-verifyCardNumber">{{isValidCardNumber | verifyCardNumber}}</span></p>
							</div>
						</div>

						<div class="field">
							<label>Verify Iranian National-id</label>
							<input type="number" placeholder="Example: 0499370899" v-model="isValidIranianNationalId" />

							<div class="ui yellow message mini">
								<p>Result is: <span id="persian-tools-isValidIranianNationalId">{{isValidIranianNationalId | verifyIranianNationalId}}</span></p>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="ui raised very padded text container segment">
				<div class="column"><p> Copyright © 2017 <a href="https://github.com/ali-master">Ali Torki</a>, All Rights Reserved.</p></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "application",
	data: () => ({
		isPersianInput: "",
		isValidCardNumber: "",
		isValidIranianNationalId: "",
	}),
};
</script>

<style lang="scss">
#application{
	margin-top: 20px;
}
</style>
