const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/search', async (req, res) => {
  try {
    const { q, formType, count, start } = req.query;

    const url = `https://edgar-api.dev/api/search?q=${encodeURIComponent(q)}${
      formType ? `&formType=${formType}` : ''
    }${count ? `&count=${count}` : ''}${start ? `&start=${start}` : ''}`;

    const response = await axios.get(url, {
      headers: { 'User-Agent': 'GPT-EDGAR-Proxy' },
    });

    // Wrap array response into GPT-compatible object
    res.json({ results: response.data });
  } catch (error) {
    console.error('[Proxy Error]', error.message);
    res.status(500).json({ error: 'Proxy error', message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ GPT proxy running on port ${PORT}`));
