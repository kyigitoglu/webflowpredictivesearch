import type { NextApiRequest, NextApiResponse } from 'next';

// Get environment variables from Vercel
const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;
const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { collectionId, query, limit, fields } = req.body;

    // Use environment variables from the top of the file
    if (!WEBFLOW_API_TOKEN || !WEBFLOW_SITE_ID) {
      throw new Error('Webflow API credentials not found');
    }

    if (!WEBFLOW_API_TOKEN || !WEBFLOW_SITE_ID) {
      throw new Error('Webflow API credentials not found');
    }

    // Build the Webflow API URL
    const apiUrl = `https://api.webflow.com/collections/${collectionId}/items`;
    
    // Add query parameters for search
    const params = {
      access_token: WEBFLOW_API_TOKEN,
      site_id: WEBFLOW_SITE_ID,
      q: query,
      limit: limit || 10,
      fields: fields || ''
    };

    // Build query string
    const queryString = new URLSearchParams({
      access_token: WEBFLOW_API_TOKEN,
      site_id: WEBFLOW_SITE_ID,
      q: query,
      limit: limit || 10,
      fields: fields || ''
    });

    const fullUrl = `${apiUrl}?${queryString.toString()}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error('Webflow API request failed');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
