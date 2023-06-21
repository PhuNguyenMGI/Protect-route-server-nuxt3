import { H3Event } from 'h3';

export default async (event:H3Event) => {
    const param = getQuery(event);
    const isAuthorized = await $fetch(`/api/authorized?id=${param.auth}`);
    
    if (!isAuthorized?.authorized) {
        throw createError({
            statusCode: 401,
            message: 'Unauthorized',
            fatal: true,
        })
    }
}