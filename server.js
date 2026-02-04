import app from "./app.js";

const PORT = 3000 || process.env.port;

app.listen(PORT, (err,data) => {
    console.log(`Server running at http://localhost:${PORT}`);
});