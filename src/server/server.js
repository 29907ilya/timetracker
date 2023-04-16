const app = require("./app")
app.listen(process.env.PORT, () => console.log(`Server is running on localhost ${process.env.PORT}`))
// app.listen(8989)