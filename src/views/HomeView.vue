<script setup lang="ts">
import Monets from "@/components/Monets/Monets.vue"
import Nav from "@/components/Nav/Nav.vue"
import Person from "@/components/Person/Person.vue"
import Stats from "@/components/Stats/Stats.vue"
import { WebApp } from '@grammyjs/web-app'


WebApp.ready()
WebApp.expand();

</script>

<template>

	<div class="container">
		<Stats />
		<div>
			<Monets />
		</div>

		<div>
			<Person />
		</div>

		<div>
			<Nav />
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
