/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ImportMetaEnv {
    VITE_API: string
}