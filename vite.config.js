import {defineConfig} from 'vite'

export default defineConfig((env)=>{
    const mode=env.mode==='development'
    return {
        server: { // 开发设置
            host: true,
            port: 8080,
            open: true,
        }
    }
})
