import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { collectionId, query, limit, fields } = req.body;

    // Get Webflow API credentials from environment variables
    const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;
    const WEBFLOW_SITE_ID = process.env.WEBFLOW_SITE_ID;

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

    const response = await axios.get(apiUrl, { params });

    if (!response.data || !Array.isArray(response.data.items)) {
      throw new Error('Invalid response format from Webflow API');
    }

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: error instanceof Error ? error.message : 'Internal server error' });
  }
}
