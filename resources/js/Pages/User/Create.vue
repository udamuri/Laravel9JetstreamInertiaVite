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
    name: props?.model?.name,
    email: props?.model?.email,
    password: null,
    role: props?.model?.role,
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
				Add/Update User
            </h2>
        </template>
		 <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
				<JetFormCard @submitted="createModel" >
					<template #form>
						<div class="col-span-6 sm:col-span-4"> 
							<JetLabel for="name" value="Name" />
							<JetInput
								id="name"
								v-model="form.name"
								type="text"
								class="mt-1 block w-full"
								autocomplete="name"
							/>
							<JetInputError :message="form.errors.name" class="mt-2" />
						</div>

						<div class="col-span-6 sm:col-span-4">
							<JetLabel for="email" value="Username" />
							<JetInput
								id="email"
								v-model="form.email"
								type="text"
								class="mt-1 block w-full"
							/>
							<JetInputError :message="form.errors.email" class="mt-2" />
						</div>
			
						<div class="col-span-6 sm:col-span-4">
							<JetLabel for="role" value="Role" />
							<JetSelect
								id="role"
								v-model="form.role"
								class="mt-1 block w-full"
								:options="role"
							/>
							<JetInputError :message="form.errors.role" class="mt-2" />
						</div>
						
						<div class="col-span-6 sm:col-span-4">
							<JetLabel for="password" value="Password" />
							<JetInput
								id="password"
								v-model="form.password"
								type="text"
								class="mt-1 block w-full"
							/>
							<JetInputError :message="form.errors.password" class="mt-2" />
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