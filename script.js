const chatBody = document.querySelector(".chat-body")
const messageInput = document.querySelector(".message-input")
const sendMessageButton = document.querySelector("#send-message")

const userData = {
    message : null
}

//Create message element with dynamic classes and return it
const createMessageElement = (content, className) => {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = content;
    return div;
}
//Handle outgoing user messages
const handleOutgoingMessage = () => {
    const userMessage = messageInput.value.trim();
    if (!userMessage) return;
    userData.message = userMessage;
    messageInput.value = "";

    //Create and display user message
    const messageContent = `<div class="message-text"></div>`;

    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
    messageInput.value = "";
}

//Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleOutgoingMessage();
    }
}); 

sendMessageButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleOutgoingMessage();
});