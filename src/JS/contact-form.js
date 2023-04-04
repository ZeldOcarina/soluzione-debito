import axios from "axios";

const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Invio in corso...";

    const formData = new FormData(form);

    for (const key of formData.keys()) {
        console.log(key, formData.get(key));
    }

    const salesJetPayload = {
        "event_name": "soluzione_tasse_form",
        "contact": {
            "email": formData.get('email'),
            "first_name": formData.get('first_name'),
            "last_name": formData.get('last_name'),
            "phone_number": formData.get('phone'),
            "custom_attributes": {
                "Message": formData.get('message'),
            }
        }
    }

    try {
        const response = await axios.post("/api/submit-form", salesJetPayload);
        console.log(response.data);
        window.location.assign("https://i-professionisti-del-debito.salesjet.io/gc0bpq");
    } catch (error) {
        console.error(error);
        submitBtn.disabled = false;
        submitBtn.innerText = "Invia";
        alert("È avvenuto un errore nell'invio del form. Riprova più tardi.")
    }
})