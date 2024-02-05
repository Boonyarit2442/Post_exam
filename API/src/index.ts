import express, { Request, Response } from "express";
import { Query } from "express-serve-static-core";

const app = express();

app.get("/", (req, res) => {
    res.json({ result: 'fuck' });
});
app.get("/no", (req, res) => {
    res.json({ result: 'Good' });
});
app.get("*", (req, res) => {
    res.json({ result: 'Not fund' });
});
app.listen(3000, () => console.log("server running..."));