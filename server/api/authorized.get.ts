export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const query = getQuery(event); 

    try {
        const data = await $fetch(`${config.public.apiBase}/authorized-data/${query.id}`);
        return data;
    } catch (error) {
        console.error(error);
    }
})