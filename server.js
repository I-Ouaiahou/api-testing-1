import express from "express"

const PORT = 9000
const app = express()

app.get("/", (req, res) => {
    const number = Math.floor(Math.random() * 100)
    res.send({value: number})
})
app.get("/randome-number", (req, res) => {

    res.json({value: number})
})
app.get("/greeting", (req, res) => {
    const greetings = ["hey", "hi", "hola", "ciao"];
    const greetingIndex = Math.floor(MAth.random() * greetings.length);
    res.json({value: greetings[greetingIndex]})
})

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});
