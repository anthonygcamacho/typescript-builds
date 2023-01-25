import express from "express"
import cookieSession from "cookie-session"
import { AppRouter } from "./appRouter"
import "./controllers//Login.controller"
import "./controllers/Root.controller"

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(cookieSession({ keys: ["asdfqwer"] }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
    console.log("Listening on port 3000")
})
