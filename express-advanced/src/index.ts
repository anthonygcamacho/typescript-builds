import express from "express"
import { router } from "./routes/loginRoutes"
import cookieSession from "cookie-session"
import { AppRouter } from "./appRouter"
import "./controllers//Login.controller"

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(cookieSession({ keys: ["asdfqwer"] }))
app.use(router)
app.use(AppRouter.getInstance())

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
