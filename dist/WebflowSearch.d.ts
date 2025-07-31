import React from 'react';
interface WebflowSearchProps {
    collectionId: string;
    placeholder?: string;
    className?: string;
    searchDelay?: number;
    maxResults?: number;
    searchFields?: string[];
    onError?: (error: Error) => void;
}
declare const WebflowSearch: ({ collectionId, placeholder, className, searchDelay, maxResults, searchFields, onError }: WebflowSearchProps) => React.JSX.Element;
export default WebflowSearch;
