const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    for (const key of formData.keys()) {
        console.log(key, formData.get(key));
    }

    const salesJetPayload = JSON.stringify({
        "event_name": "ferlin_form_submission",
        "contact": {
            "email": formData.get('email'),
            "first_name": formData.get('first_name'),
            "last_name": formData.get('last_name'),
            "phone_number": formData.get('phone'),
            "custom_attributes": {
                "message": formData.get('message'),
            }
        }
    })

    const response = await fetch("/f/1610-7032", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: api_key // YOUR API KEY GOES HERE
        },
        body: salesJetPayload
    });

    console.log(response);
})