import React, { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

// Replace with your actual serverless function URL
const SEARCH_API_URL = process.env.NEXT_PUBLIC_SEARCH_API_URL || 'https://your-serverless-function-url.com/search';

interface WebflowSearchProps {
  collectionId: string;
  placeholder?: string;
  className?: string;
  searchDelay?: number; // Delay before triggering search (in ms)
  maxResults?: number; // Maximum number of results to show
  searchFields?: string[]; // Specific fields to search
  onError?: (error: Error) => void; // Error callback
}

const WebflowSearch = ({ 
  collectionId, 
  placeholder = 'Search...', 
  className = '',
  searchDelay = 300,
  maxResults = 10,
  searchFields = [],
  onError
}: WebflowSearchProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        // Make request to serverless function
        const params = {
          collectionId,
          query,
          limit: maxResults,
          fields: searchFields.join(',')
        };

        const response = await axios.post(SEARCH_API_URL, params);
        
        // Validate response
        if (!response.data || !Array.isArray(response.data.items)) {
          throw new Error('Invalid response format from Webflow API');
        }

        setResults(response.data.items);
      } catch (error) {
        console.error('Error fetching results:', error);
        if (onError) {
          onError(error as Error);
        }
      } finally {
        setLoading(false);
      }
    };

    // Add delay before triggering search
    const timer = setTimeout(fetchResults, searchDelay);
    
    // Cleanup
    return () => clearTimeout(timer);
  }, [query, searchDelay, maxResults, searchFields]);

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 outline-none text-sm"
        />
      </div>
      {query && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-auto z-50">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-0"
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WebflowSearch;
