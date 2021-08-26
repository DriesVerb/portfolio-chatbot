const randomFacts = [
    "Dries has made over a 1000 breads in my life.",
    "Dries was once a high school dropout!",
    "Belgium is the country Dries grew up in.",
    "Dries studied Arts & Humanities in the Netherlands.",
    "Ham is the name of the village Dries grew up in.",
    "Dries was born in a city called 'Geel' that literally translates into the colour 'yellow'.",
    "Dries once got an award for a short film script he wrote",
    "Dries is both gluten and lactose intolerant.",
    "One of Dries' scary hobbies is doing improv comedy on stage in Berlin.",
    "Dries has a favorite color and it's blue.",
    "After doing a Udemy course in WordPress and php, Dries got bitten by the web development bug.",
    "Dries' favorite places he ever visited was Hong Kong.",
    "Dries is a morning person.",
    "Dries can speak three languages, but I don't remember which one.",
    "Dries likes to challenge himself by making silly apps.",
    "One of his favorite movies he saw recently was 'The Kid Detective'",
    "His currently most played band is 'The Durutti Column'"
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
                topMessage: `<p>Hello <span class="chatbot__query query__animation">${clientName}</span> Which of the following describes you best?</p>`,
                nextQuestion: "C",
                messages: [
                    {msg: "I'm a recruiter", nQ: "1A"},
                    {msg: "I'm a fellow software engineer", nQ: "1B"},
                    {msg: "I'm just browsing around", nQ: "1C"}
            ]
            })
        break;
        case "B":
            res.json({
                input: false,
                topMessage: `No Problem! Which of the following describes you best?`,
                nextQuestion: "C",
                messages: [
                    {msg: "I'm a recruiter", nQ: "1A"},
                    {msg: "I'm a fellow software engineer", nQ: "1B"},
                    {msg: "Just browsing around", nQ: "1C"}
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
        case "1B":
            res.json({
                input: true,
                inputValue: "companyName",
                topMessage: `Nice, welcome buddy what company do you work for?`,
                nextQuestion: "1B1",
                messages: [
                    {msg: "I rather not say", nQ: "1B2"},
            ]
            })
        break;
        case "1B1":
            res.json({
                input: false,
                topMessage: `Hi <span class="chatbot__query query__animation">${clientName}</span> from <span class="chatbot__query query__animation">${companyName}</span>. It's amazing to meet you. Are you hiring at the moment?`,
                messages: [
                    {msg: "Yes!", nQ: "1A1A"},
                    {msg: "Maybe", nQ: "1A1B"},
                    {msg: "No not really", nQ: "1A1C"}
            ]
            })
        break;
        case "1B2":
            res.json({
                input: false,
                topMessage: `Got it, you like your anonymity, I also don't give out my IP address to everyone. Is your companyName currently hiring?`,
                messages: [
                    {msg: "Yes!", nQ: "1A1A"},
                    {msg: "Maybe", nQ: "1A1B"},
                    {msg: "No not really", nQ: "1A1C"}
            ]
            })
        break;
        case "1A1":
            res.json({
                input: false,
                topMessage: `Hi <span class="chatbot__query query__animation">${clientName}</span> from <span class="chatbot__query query__animation">${companyName}</span>. It's amazing to meet you. Are you hiring at the moment?`,
                messages: [
                    {msg: "Yes!", nQ: "1A1A"},
                    {msg: "Maybe", nQ: "1A1B"},
                    {msg: "No not really", nQ: "1A1C"}
            ]
            })
        break;
        case "1A2":
            res.json({
                input: false,
                topMessage: `Got it, you like your anonymity, I also don't give out my IP address to everyone. Are you currently hiring?`,
                messages: [
                    {msg: "Yes!", nQ: "1A1A"},
                    {msg: "Maybe", nQ: "1A1B"},
                    {msg: "No not really", nQ: "1A1C"}
            ]
            })
        break;
        case "1A1A":
            res.json({
                input: false,
                topMessage: `Well, I'm pretty sure my creator would like to know more about this.`,
                messages: [
                    {msg: "I need more information about your creator for my company", nQ: "BIO"},
                    {msg: "Tell me a small fact about your creator, dear chatbot", nQ: "RANDOM"},
                    {msg: "I would like to know how you are made chatbot", nQ: "INSIDE"}
            ]
            })
        break;
        case "1A1B":
            res.json({
                input: false,
                topMessage: `I need to change your mind because, not only did my creator write everything I have to say, he is also a great developer!`,
                messages: [
                    {msg: "I think I do need more information about your creator", nQ: "BIO"},
                    {msg: "Tell me a small fact about your creator, dear chatbot", nQ: "RANDOM"},
                    {msg: "I'm more interested in you chatbot, how do you work?", nQ: "INSIDE"}
            ]
            })
        break;
        case "1A1C":
            res.json({
                input: false,
                topMessage: `Me neither, I think I can keep this chatbot thing solo.`,
                messages: [
                    {msg: "I need more info on your creator", nQ: "BIO"},
                    {msg: "Tell me a small fact about your creator, dear chatbot", nQ: "RANDOM"},
                    {msg: "I don't think you're so great chatbot", nQ: "DIE"}
            ]
            })
        break;
        case "1C":
            res.json({
                input: false,
                topMessage: `Sounds great, I live in a browser. What would you like to do?`,
                nextQuestion: "C",
                messages: [
                    {msg: "Give me a random fact about your creator!", nQ: "RANDOM"},
                    {msg: "Hey Robot, what does your inside look like?", nQ: "INSIDE"},
                    {msg: "I don't like you, chatbot!", nQ: "DIE"},
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
                🐙 you can find all my code <a target="_blank" href="https://github.com/DriesVerb/portfolio-chatbot" class="inside__link" rel="noreferrer">here!</a>
                </p>
                </div>`,
                nextQuestion: "C",
                messages: [
                    {msg: "I want to get to know this creator!", nQ: "BIO"},
                    {msg: "Give me a random fact about your creator!", nQ: "RANDOM"},
                    {msg: "I'm done, I get it now! Take me away", nQ: "DIE"}
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
                    {msg: "I need a random Dries fact", nQ: "RANDOM"},
                    {msg: "I'm done, I get it now! Take me away", nQ: "DIE"}
            ]
            })
        break;
        case "RANDOM":
            const randomNumber = Math.trunc(Math.random() * randomFacts.length);
            res.json({
                input: false,
                topMessage: randomFacts[randomNumber],
                messages: [
                    {msg: "I need more facts!!!", nQ: "RANDOM"},
                    {msg: "Who is this Dries really?", nQ: "BIO"},
                    {msg: "I'm done, I get it now! Take me away", nQ: "DIE"}
            ]
            })
        break;
        case "DIE":
            res.json({
                input: false,
                topMessage: "You have pulled the plug on chatbot may he rest in peace!",
                messages: []
            })
        break;
    }
}


