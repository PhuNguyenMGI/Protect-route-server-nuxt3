<template>
    <div v-if="isAuth">
        Product details page
    </div>
    <!-- Auth = true code: 3123 -->
    <!-- Auth = false code: 3124 -->
    <Popup v-else>
        <div class="p-8">
            <label for="auth">Authorization:</label>
            <input type="text" id="auth" class="w-full border rounded" v-model="authKey">
            <button class="mt-3 border p-2 rounded bg-orange-500 text-white" @click="callback">Access products page</button>
            <NuxtLink class="block" to="/products">Back to products</NuxtLink>
        </div>
    </Popup>
</template>

<script setup lang="ts">
const isAuth = ref(false);
const authKey = ref('');
const route = useRoute();

const callback = async () => {
    const data = await $fetch(`/api/data?id=${route.params.id}&auth=${authKey.value}`);
    if (data) {
        isAuth.value = true;
    }
}
</script>