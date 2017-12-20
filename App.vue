<template>
	<div id="application">
		<div class="ui one column centered grid">
			<div class="one column">
				<div class="ui raised very padded text container segment">
					<h2 class="ui header">Vue Persian Tools and Filters</h2>

					<br>
					<br>

					<div class="ui form success">
						<div class="inline field">
							<label>isPersian</label>
							<input type="text" placeholder="Write here..." v-model="isPersianInput" />

							<div class="ui compact blue message mini">
								<p>Result is: <span id="persian-tools-isPersian">{{isPersianInput | isPersian}}</span></p>
							</div>
						</div>

						<div class="inline field">
							<label>Validate CardNumber</label>
							<input type="number" placeholder="Example: 6037701689095443" v-model="isValidCardNumber" />

							<div class="ui compact blue message mini">
								<p>Result is: <span id="persian-tools-verifyCardNumber">{{isValidCardNumber | verifyCardNumber}}</span></p>
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
	}),
};
</script>

<style lang="scss">
#application{
	margin-top: 20px;
}
</style>
