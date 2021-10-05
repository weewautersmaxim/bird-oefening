import cors from "cors"
import { createApp } from "vue"
import App from "./App.vue"

import "./assets/style/screen.css"
import router from "./bootstrap/router"

const app = createApp(App)

app.use(router)

app.mount("#app")
