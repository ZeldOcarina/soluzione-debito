import type { VercelRequest,  VercelResponse } from '@vercel/node';
import axios from "axios";

export default async function handler(request: VercelRequest, response: VercelResponse) {
    console.log(request);
    const res = await axios.post("https://sj-api.com/externalapp/track", request.body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: process.env.SALESJET_API_KEY
        },
    })

    response.status(200).json({ status: 'success', data: res.data })
}