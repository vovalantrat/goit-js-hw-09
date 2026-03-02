const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const formData = {
    email: "",
    message: ""
};

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    const parsedData = JSON.parse(savedData);

    form.elements.email.value = parsedData.email || "";
    form.elements.message.value = parsedData.message || "";
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
}

form.addEventListener("input", (evt) => {
    const { name, value } = evt.target;

    if (name === "email" || name === "message") {
        formData[name] = value;
        localStorage.setItem(localStorageKey, JSON.stringify(formData));
    }
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (formData.email.trim() === "" || formData.message.trim() === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    form.reset();
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
});