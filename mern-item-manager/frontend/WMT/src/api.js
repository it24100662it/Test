const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export async function getItems() {
	const res = await fetch(`${BASE}/items`);
	const data = await res.json();
	return { data };
}

export async function createItem(item) {
	const res = await fetch(`${BASE}/items`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(item),
	});
	return await res.json();
}

export async function deleteItem(id) {
	const res = await fetch(`${BASE}/items/${id}`, {
		method: 'DELETE',
	});
	return await res.json();
}

export async function updateItem(id, body) {
	const res = await fetch(`${BASE}/items/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body),
	});
	return await res.json();
}
