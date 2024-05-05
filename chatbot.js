const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY = "sk-proj-h3arU9BbIzjQ3ETOC57VT3BlbkFJgGJ8yeQZIpeYN0o7QcPy";
const inputInHeight = chatInput.scrollHeight;

const createChatLi = (message, classname) =>
{
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", classname);
    let chatContent = classname === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) =>
{
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = 
    {
        method: "POST", 
        headers: 
        {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${API_KEY}`
        },
        body: JSON.stringify(
        {
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}]
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = "data.choices[0].message.content";
        //messageElement.textContent = "Hi there nice to meet you!";
    }).catch((error) =>
    {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () =>
{
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInHeight}px`

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() =>
    {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 1000);
}

chatInput.addEventListener("input", () => 
{
    chatInput.style.height = `${inputInHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => 
{
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800)
    {
        e.preventDefault();
        handleChat();
    }
});

chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat);
