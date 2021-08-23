import axios from "axios";
const chatbotSlice = (set) => ({
    loading: true,
    topMessage: "",
    input: false,
    inputValue: "",
    messages: [],
    path: [],
    nextQuestion: undefined,
    getBotIntro: async ()=>{
        set(() => ({ loading: true }));
        const randomLoad = Math.trunc(Math.random() + 1500) + 500
        const res = await axios.get("/api/bot/intro");
        setTimeout(()=>{
            set(()=> (res.data))
            set(() => ({ loading: false }));
        }, randomLoad)    
    },
    getAnswer: async (id)=>{
        set(() => ({ loading: true }));
        const randomLoad = Math.trunc(Math.random() + 800) + 100
        const res = await axios.get(`/api/bot/reply/${id}`)
        set(()=> (res.data))
        setTimeout(()=>{
            set(() => ({ loading: false }));
        }, randomLoad)
    },
    getInput: async (input) => {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const body = JSON.stringify({ input });
        await axios.post("/api/bot/input", body, config)     
    }
});

export default chatbotSlice;