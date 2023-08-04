import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
    routes: (_routes) => [
        {
            name: "home",
            path: "/",
            component: () =>
                import("~/pages/index.vue").then((r) => r.default || r),
        },
        {
            name: "404",
            path: "/404",
            component: () =>
                import("~/pages/404.vue").then((r) => r.default || r),
        },
    ],
};
