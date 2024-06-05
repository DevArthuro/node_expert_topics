// Factory Function to create an HTTP client
function createHttpClient(privateUrls, publicUrls, globalHeaders = {}) {
  const urls = {
    private: privateUrls,
    public: publicUrls,
  };

  // Set global headers
  let headers = { ...globalHeaders };

  function setHeaders(newHeaders) {
    headers = { ...headers, ...newHeaders };
  }

  async function makeRequest(reference, options = {}) {
    let url;
    if (urls.private[reference]) {
      url = urls.private[reference];
    } else if (urls.public[reference]) {
      url = urls.public[reference];
    } else {
      throw new Error(
        `Reference '${reference}' not found in either private or public URLs.`
      );
    }

    // Combine global headers with specific request headers
    options.headers = { ...headers, ...options.headers };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(
          `HTTP error! Status: ${response.status}, Message: ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch ${url}:`, error);
      throw error;
    }
  }

  return {
    makeRequest,
    setHeaders,
  };
}

// Define your URLs (this should be dynamic based on your use case)
const privateUrls = {
  privateEndpoint1: "https://private.example.com/endpoint1",
  privateEndpoint2: "https://private.example.com/endpoint2",
};

const publicUrls = {
  publicEndpoint1: "https://public.example.com/endpoint1",
  publicEndpoint2: "https://public.example.com/endpoint2",
};

// Create an HTTP client instance
const httpClient = createHttpClient(privateUrls, publicUrls, {
  Authorization: "Bearer YOUR_INITIAL_ACCESS_TOKEN",
  "Content-Type": "application/json",
});

// Set additional headers or update existing ones
httpClient.setHeaders({
  "Another-Header": "HeaderValue",
});

// Example usage: GET request
httpClient
  .makeRequest("publicEndpoint1")
  .then((data) => {
    console.log("Response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Example usage: POST request with additional headers
httpClient
  .makeRequest("privateEndpoint1", {
    method: "POST",
    headers: {
      "Custom-Header": "CustomValue",
    },
    body: JSON.stringify({ key: "value" }),
  })
  .then((data) => {
    console.log("Response:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
