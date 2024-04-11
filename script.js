document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById("messages-general");
    const sendBtnUser1 = document.getElementById("send-btn-user1");
    const sendBtnUser2 = document.getElementById("send-btn-user2");

    sendBtnUser1.addEventListener("click", sendMessage);
    sendBtnUser2.addEventListener("click", sendMessage);

    function sendMessage(event) {
        event.preventDefault();
        const input = event.target.parentElement.querySelector(".message-input");
        const message = input.value.trim();
        const user = input.dataset.user;

        if (message !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.classList.add(user);
            messageElement.textContent = message;
            messagesContainer.appendChild(messageElement);
            input.value = "";
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
});
