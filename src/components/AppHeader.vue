<template>
	<div>
		<!--Our Output.-->
			<button v-show="loggedIn">Logout</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// Out input.
			loggedIn: false
		}
	}
}
</script>