# GPT EDGAR Proxy

This lightweight proxy server allows ChatGPT to safely query [edgar-api.dev](https://edgar-api.dev), bypassing format and CORS issues.

---

## 🧪 Endpoint

### GET `/search`

**Query parameters:**

- `q` – Free-text search term (required)
- `formType` – SEC filing type (e.g., 10-K, 8-K) (optional)
- `count` – Max number of results (optional)
- `start` – Offset for pagination (optional)

---

### Example Request

    /search?q=apple&formType=10-K

---

### Example Response

    {
      "results": [
        {
          "company": "Apple Inc.",
          "formType": "10-K",
          "filingDate": "2024-02-02",
          "url": "https://www.sec.gov/Archives/..."
        }
      ]
    }

---

## 🌍 Deployment

You can deploy this proxy on:

- [Render.com](https://render.com)
- [Railway.app](https://railway.app)
- [Glitch.com](https://glitch.com)
- [Fly.io](https://fly.io)

Once deployed, use your public URL in a GPT OpenAPI spec and connect it to your GPT via `/search`.

---

## 👤 Author

Created for Custom GPT integration by **ActionsGPT**
