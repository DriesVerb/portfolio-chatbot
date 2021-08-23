const express = require(`express`);
const app = express();
app.use(express.json({ extended: false }));
const path = require('path')

const session = require("express-session");

app.use(
  session({
    secret: "test-test-test",
    cookie: {
      maxAge: 3000 * 60 * 60,
    },
  })
);

const PORT = process.env.PORT || 5000;

app.use("/api/bot", require("./routes/api/chatbotRouter"));
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})