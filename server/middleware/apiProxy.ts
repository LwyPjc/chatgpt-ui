import { createProxyMiddleware } from 'http-proxy-middleware'
export default defineEventHandler(async (event) => {
    console.log("process.env..",process.env.SERVER_DOMAIN);
    
    await new Promise((resolve, reject) => {
        // createProxyMiddleware({
        //     // target: process.env.SERVER_DOMAIN,
        //     target: "http://localhost:8026",
        //     pathFilter: '/api',
        // })(event.node.req, event.node.res, (err) => {
        //     if (err){
        //         console.log('proxy--err--',err);
        //         reject(err)
        //     }
        //     else
        //         resolve(true)
        // })
    })
})
