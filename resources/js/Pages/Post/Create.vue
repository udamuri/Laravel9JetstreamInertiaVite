<script setup>
import { computed } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import JetFormCard from '@/Jetstream/FormCard.vue';
import { useForm } from '@inertiajs/inertia-vue3';

import JetInput from '@/Jetstream/Input.vue';
import JetSelect from '@/Jetstream/Select.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetButton from '@/Jetstream/Button.vue';


const props = defineProps({
	form_type: {
        type: String,
        default: 'add',
    },
	route_url: {
        type: String,
        default: null,
    },
	title: {
        type: String,
        default: null,
    },
    breadcrumb: {
        type: Object,
        default: {},
    },
	role: {
        type: Object,
        default: {},
    },
	model: {
        type: Object,
        default: {},
    },
});

const formMethod = computed(() => {
    if(props.form_type == 'add') {
		return "POST";
	} 
	
	if(props.form_type == 'edit') {
		return "PUT";
	}
});

const form = useForm({
    _method: formMethod,
    title: props?.model?.title,
    content: props?.model?.content,
});

const createModel = () => {
    form.post(props.route_url, {
        errorBag: 'createModel',
        preserveScroll: true,
        onSuccess: () => true,
    });
};
</script>


<template>
    <AppLayout :title="title" >
		<template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
				Add/Update POST
            </h2>
        </template>
		 <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
				<JetFormCard @submitted="createModel" >
					<template #form>
						<div class="col-span-6 sm:col-span-4"> 
							<JetLabel for="name" value="Title" />
							<JetInput
								id="title"
								v-model="form.title"
								type="text"
								class="mt-1 block w-full"
								autocomplete="title"
							/>
							<JetInputError :message="form.errors.name" class="mt-2" />
						</div>

						<div class="col-span-6 sm:col-span-4">
							<JetLabel for="content" value="Content" />
							<JetInput
								id="content"
								v-model="form.content"
								type="text"
								class="mt-1 block w-full"
							/>
							<JetInputError :message="form.errors.content" class="mt-2" />
						</div>
					</template>

					<template #actions>
						<JetButton type="submit" >
							Save
						</JetButton>
					</template>
				</JetFormCard>
			</div>
		</div>
	</AppLayout>
</template>