export default class FetchApi {
	static post(path, body) {
		return fetch(path, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		}).then(response => response.json());
	}

	static get(path) {
		return fetch(path, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}).then(response => response.json());
	}

	static delete(path) {
		return fetch(path, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		});
	}

	static put(path) {
    const req = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' }
    }
    
		return fetch(path, req)
        .then(data => data.json())
        .catch(err => err)
	}
}
