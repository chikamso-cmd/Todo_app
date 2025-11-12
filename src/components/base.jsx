const baseUrl = 'https://simple-todo-enpoints.onrender.com/api';

export async function globalGet(url) {
    const token = localStorage.getItem("token"); // read token here

    const resp = await fetch(`${BASE_URL}/${url}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
    });

    if (!resp.ok) {
        // you can parse error body if your API returns JSON errors
        const errText = await resp.text();
        throw new Error(`HTTP ${resp.status} - ${errText}`);
    }

    // handle 204 No Content (or empty body)
    if (resp.status === 204) return null;

    const data = await resp.json();
    return data;
}

export async function globalPost(url, payload) {
    const token = localStorage.getItem("token"); // read token here

    const resp = await fetch(`${baseUrl}/${url}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(payload)
    });

    if (!resp.ok) {
        // you can parse error body if your API returns JSON errors
        const errText = await resp.text();
        throw new Error(`HTTP ${resp.status} - ${errText}`);
    }

    // handle 204 No Content (or empty body)
    if (resp.status === 204) return null;

    const data = await resp.json();
    return data;
}