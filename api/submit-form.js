import axios from "axios";

export default async function handler(request, response) {
    const res = await axios.post("https://sj-api.com/externalapp/track", request.body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: process.env.SALESJET_API_KEY
        },
    })

    response.status(200).json({ status: 'success', data: res.data })
}