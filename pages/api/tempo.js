async function tempo(request, response) {
    const apiSecret = process.env.JP_API_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}`);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;