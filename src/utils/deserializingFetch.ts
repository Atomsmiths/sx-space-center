function deserializingFetch<T>(endpoint: string): Promise<T> {
  return fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export { deserializingFetch };
