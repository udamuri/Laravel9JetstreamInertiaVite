<script setup >
import { onMounted, ref } from 'vue';

const props = defineProps({
    modelValue: String,
    options: {
		type: Object,
		default: {},
	},
});

defineEmits(['update:modelValue']);

const select = ref(null);

onMounted(() => {
    if (select.value.hasAttribute('autofocus')) {
        select.value.focus();
    }
});
</script>

<template>
  <select
    class="bg-gray-50 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
    @change="$emit('update:modelValue', String($event.target.value))"
    ref="select"
  >
    <option
      v-for="(data, key) in options"
      :key="key"
      :value="String(data.id)"
      :selected="String(data.id) == modelValue"
    >
      {{ data.name }}
    </option>
  </select>
</template>
