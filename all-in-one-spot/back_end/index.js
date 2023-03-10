import express from "express";
import { PORT } from "./config.js";
import { registerNewUser } from "./src/services/new_user.js";
import cors from "cors";
import { signIn } from "./src/services/sign_in_user.js";
import { getCosmetics } from "./src/products/cosmetics.js";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", registerNewUser);
app.post("/signin", signIn);
app.get("/cosmetics", getCosmetics);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
