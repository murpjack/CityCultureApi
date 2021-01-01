
export const OK_ORIGINS = !!process.env.OK_ORIGINS ? JSON.parse(process.env.OK_ORIGINS) : false
console.log({OK_ORIGINS, urls: process.env.OK_ORIGINS})

export default {
    OK_ORIGINS 
}