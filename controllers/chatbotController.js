const randomFacts = [
    "Dries has made over a 1000 breads in my life.",
    "Dries was once a high school dropout!",
    "Belgium is the country Dries grew up in.",
    "Dries studied Arts & Humanities in the Netherlands.",
    "Ham is the name of the village Dries grew up in.",
    "Dries was born in a city that literally translates into the colour 'yellow'.",
    "Dries once got an award for a short film script I wrote",
    "Dries is both gluten and lactose intolerant.",
    "One of Dries' scary hobbies is doing improv comedy on stage in Berlin",
    "Dries has a favorite color and it's blue",
    "After doing a Udemy course in WordPress and php, Dries got bitten by the web development bug."
]

exports.botIntro = async (req, res)=>{
    await res.json({
        nextQuestion: "A",
        topMessage: "<p>Hello welcome, what is your name?</p>",
        input: true,
        inputValue: "clientName",
        messages: [{msg: "Rather not say", nQ: "B"}]
    })
}

exports.botInput = (req, res) => {
    if (req.body.input.clientName) {
        clientName = req.body.input.clientName;
        req.session.clientName = { clientName };
    }
    if (req.body.input.companyName) {
        companyName = req.body.input.companyName;
        req.session.companyName = { companyName };
    }
  };

exports.botReply = async (req, res)=>{
    const { id } = req.params;

    switch (id) {
        case "A":
            res.json({
                input: false,
                topMessage: `<p>Hello ${clientName} Which of the following describes you best?</p>`,
                nextQuestion: "C",
                messages: [
                    {msg: "I'm a recruiter.", nQ: "1A"},
                    {msg: "I'm a fellow software engineer.", nQ: "1B"},
                    {msg: "I'm just browsing around.", nQ: "1C"}
            ]
            })
        break;
        case "B":
            res.json({
                input: false,
                topMessage: `No Problem! Which of the following describes you best?`,
                nextQuestion: "C",
                messages: [
                    {msg: "I'm a recruiter.", nQ: "1A"},
                    {msg: "I'm a fellow software engineer.", nQ: "1B"},
                    {msg: "Just browsing around.", nQ: "1C"}
            ]
            })
        break;
        case "1A":
            res.json({
                input: true,
                inputValue: "companyName",
                topMessage: `Cool what company do you work for?`,
                nextQuestion: "1A1",
                messages: [
                    {msg: "I rather not say", nQ: "1A2"},
            ]
            })
        break;
        case "1A1":
            res.json({
                input: false,
                topMessage: `Hi ${clientName} from ${companyName}. It's amazing to meet you.`,
                nextQuestion: "1A1",
                messages: [
                    {msg: "I rather not say", nQ: "1A2"},
            ]
            })
        break;
        case "1A2":
            res.json({
                input: false,
                topMessage: `Got it, you like your anonymity, I also don't give out my IP address to everyone`,
                nextQuestion: "C",
                messages: [
                    {msg: "Who is the created you, chatbot?", nQ: "BIO"},
                    {msg: "How were you made, chatbot?", nQ: "INSIDE"},
                    {msg: "Give me a random fact about your creator!", nQ: "RANDOM"},
            ]
            })
        break;
        case "1C":
            res.json({
                input: false,
                topMessage: `Sounds great, I live in a browser. What would you like to do?`,
                nextQuestion: "C",
                messages: [
                    {msg: "I want to procrastinate more!", nQ: "2C1"},
                    {msg: "Give me a random Dries fact.", nQ: "RANDOM"},
                    {msg: "Hey Robot, what does your inside look like?", nQ: "INSIDE"}
            ]
            })
        break;
        case "INSIDE":
            res.json({
                input: false,
                topMessage: `<div class="inside">
                <p class="inside__text">
                👨‍💻 My <a target="_blank" href="https://www.linkedin.com/in/verbovendries/" class="inside__link" rel="noreferrer">creator</a> wanted to see if he could make a rules based chatbot from scratch. Without any pre-build npm packages.
                </p>
                <p class="inside__text">
                ✍ So he wrote me in simple Javascript using React and Node.js! For styling he used Sass 💅!
                </p>
                <p class="inside__text">
                🐙 you can find all my code <a target="_blank" href="https://github.com/DriesVerb" class="inside__link" rel="noreferrer">here!</a>
                </p>
                </div>`,
                nextQuestion: "C",
                messages: [
                    {msg: "I want to get to know this creator!", nQ: "BIO"},
                    {msg: "Give me a random fact about your creator!", nQ: "RANDOM"}
            ]
            })
        break;
        case "BIO":
            res.json({
                input: false,
                topMessage: `<div class="bio">
                <img src="https://avatars.githubusercontent.com/u/66780094?v=4" alt="developer talking to audience" class="bio__avatar" />
                <p class="bio__text">
                 Hello my name is Dries. I have a background in communication but I am now a fulltime developer. I finished <a href="https://digitalcareerinstitute.org/courses/web-development-course" class="bio__link">an intensive one year course in web development</a> and I'm now pursuing a new passion.
                 </p>
                 <p class="bio__text">
                 Connect with me on <a target="_blank" href="https://github.com/DriesVerb" class="bio__link" rel="noreferrer">Github</a> or <a target="_blank" href="https://www.linkedin.com/in/verbovendries/" class="bio__link" rel="noreferrer">LinkedIn!</a>
                 </p>
            </div>`,
                nextQuestion: "C",
                messages: [
                    {msg: "Chatbot, how are you made?", nQ: "INSIDE"},
                    {msg: "I need a random Dries fact", nQ: "RANDOM"}
            ]
            })
        break;
        case "RANDOM":
            const randomNumber = Math.trunc(Math.random() * randomFacts.length) + 1; 
            res.json({
                input: false,
                topMessage: randomFacts[randomNumber],
                messages: [
                    {msg: "I need more facts!!!", nQ: "RANDOM"},
                    {msg: "Who is this Dries really?", nQ: "BIO"},
            ]
            })
        break;
    }
}


