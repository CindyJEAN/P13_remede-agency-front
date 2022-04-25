const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

let server = "";

/**
 * @param {("GET"|"POST"|"PUT"|"PATCH"|"DELETE")} method
 * @param {String} url
 * @param {Object} [body]
 */
async function fetcher(method, url, body = {}) {
  try {
    const res = await fetch(server + url, {
      method: method,
      headers,
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (err) {
    console.error("error:", err);
    throw err;
  }
}

function setServerBaseUrl(url) {
  server = url;
}

function setBearer(token) {
  headers.Authorization = "Bearer " + token;
}

export { fetcher, setServerBaseUrl, setBearer };
