<script setup>
import { ref, reactive } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';

import { Link } from '@inertiajs/inertia-vue3';

const props = defineProps({
	models: {
        type: Object,
        default: {},
    },
	add_link: {
        type: String,
        default: null,
    },
	search: {
        default: null,
    },
	route_name: {
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
});


</script>

<template>
    <AppLayout :title="title" >
		<template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
				<Link :href="route(route_name + 'create')" class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition" href="javascript:;">
					Add 
				</Link>
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
				<table class="table-auto w-full">
					<thead>
						<tr>
							<th>TITLE</th>
							<th>ACTIONS</th>
						</tr>
					</thead>

					<tbody>
						<tr class="bg-white my-2" v-for="(item, index) in models.data" :key="index">
							<td>
								<Link :href="route(route_name + 'edit', item?.id)"  class="font-medium whitespace-nowrap">{{item?.title}}</Link>
							</td>
							<td class="table-report__action w-56">
								<div class="flex justify-center items-center">
									<Link :href="route(route_name + 'edit', item?.id)" class="flex items-center mr-3" href="javascript:;">
										Edit 
									</Link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
	</AppLayout>
</template>
