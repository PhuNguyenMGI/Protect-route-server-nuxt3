<template>
    <div class="grid grid-cols-3 gap-3 px-[30px]">
        <div v-for="data, index in productsData" class="flex rounded border gap-5 overflow-hidden" :key="`product_#${index}`">
            <img class="aspect-square h-28" :src="data.image" alt="">
            <div>
                <p>name: {{ data.name }}</p>
                <p>created at: {{ data.createdAt }}</p>
                <p>description: {{ data.description }}</p>
                <a :href="`/products/${data.id}`" class="underline text-lime-600">More details</a>
            </div>
        </div>
        <div class="flex rounded border gap-5 overflow-hidden" :key="`product_#${index}`">
            <img class="aspect-square h-28" src="https://img.freepik.com/premium-vector/pixel-8-bit-cat-animal-game-assets-vector-illustration_614713-161.jpg" alt="">
            <div>
                <p>name: error item</p>
                <p>created at: </p>
                <p>description: </p>
                <a :href="`/products/11`" class="underline text-lime-600">More details</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface listData {
    createdAt: Number,
    description: string,
    id: string,
    image: string,
    name: string,
}
const productsData = ref<listData[]>();

const {data} = await useFetch<listData[]>(`/api/data/`);
if (data.value)
    productsData.value = data.value; 
</script>