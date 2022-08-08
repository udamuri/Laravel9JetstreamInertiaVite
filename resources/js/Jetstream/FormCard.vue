<script setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
    form_length: {
		type: String,
		default: 'sm',
	},
});

const form_style = computed(() => {
	if(props.form_length == 'sm') {
		return "grid lg:grid-cols-2 mt-6";
	} else if(props.form_length == 'md') {
		return "grid lg:grid-cols-2 mt-6";
	} else if(props.form_length == 'lg') {
		return "grid lg:grid-cols-[900px_minmax(1024px,_1fr)_100px] mt-6";
	} else if(props.form_length == 'full') {
		return "mt-6";
	} else {
		return "grid lg:grid-cols-2 mt-6"
	}
});

defineEmits(['submitted']);

const hasActions = computed(() => !! useSlots().actions);
</script>

<template>
    <form :class="form_style" @submit.prevent="$emit('submitted')">
		<div class="bg-white rounded-lg shadow w-full">
			<!---->
			<div class="px-4 py-5 sm:px-8 sm:py-8">
				<div class="grid gap-y-6 gap-x-4 grid-cols-1">
					<slot name="form" />

					<div class="mt-4">
						<slot name="actions" />
					</div>
				</div>
			</div>
		</div>

	</form>
</template>
