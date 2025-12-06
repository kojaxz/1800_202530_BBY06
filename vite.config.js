import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                login: resolve(__dirname, "login.html"),
                main: resolve(__dirname, "main.html"),
                create: resolve(__dirname, "create.html"),
                join: resolve(__dirname, "join.html"),
                profile: resolve(__dirname, "profile.html"),
                thanks: resolve(__dirname, "thanks.html"),
                vote: resolve(__dirname, "vote.html")
            }
        }
    }
});
