import protectRoute from "../utils/protectRoute"

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const {id} = getQuery(event);
    
    if (id) {
      await protectRoute(event);
    }

    const url = `${config.public.apiBase}/products/${id ? id : ''}`;
    try {
        const data = await $fetch(url);
        if (!data) {
          throw createError({
            statusCode: 404,
            statusMessage: 'Not found!',
          });
        }
        return data;
    } catch (error) {
        throw createError({
          statusCode: 404,
          statusMessage: 'Not found!',
        })
    }
})