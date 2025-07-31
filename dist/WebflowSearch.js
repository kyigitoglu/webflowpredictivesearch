"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const outline_1 = require("@heroicons/react/24/outline");
const axios_1 = __importDefault(require("axios"));
// Replace with your actual serverless function URL
const SEARCH_API_URL = process.env.NEXT_PUBLIC_SEARCH_API_URL || 'https://your-serverless-function-url.com/search';
const WebflowSearch = ({ collectionId, placeholder = 'Search...', className = '', searchDelay = 300, maxResults = 10, searchFields = [], onError }) => {
    const [query, setQuery] = (0, react_1.useState)('');
    const [results, setResults] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
                const response = await axios_1.default.post(SEARCH_API_URL, params);
                // Validate response
                if (!response.data || !Array.isArray(response.data.items)) {
                    throw new Error('Invalid response format from Webflow API');
                }
                setResults(response.data.items);
            }
            catch (error) {
                console.error('Error fetching results:', error);
                if (onError) {
                    onError(error);
                }
            }
            finally {
                setLoading(false);
            }
        };
        // Add delay before triggering search
        const timer = setTimeout(fetchResults, searchDelay);
        // Cleanup
        return () => clearTimeout(timer);
    }, [query, searchDelay, maxResults, searchFields]);
    return (react_1.default.createElement("div", { className: `relative ${className}` },
        react_1.default.createElement("div", { className: "flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm" },
            react_1.default.createElement(outline_1.MagnifyingGlassIcon, { className: "h-5 w-5 text-gray-400" }),
            react_1.default.createElement("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), placeholder: placeholder, className: "flex-1 outline-none text-sm" })),
        query && results.length > 0 && (react_1.default.createElement("div", { className: "absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-60 overflow-auto z-50" }, results.map((result) => (react_1.default.createElement("div", { key: result.id, className: "p-3 hover:bg-gray-50 cursor-pointer border-b last:border-0" }, result.title)))))));
};
exports.default = WebflowSearch;
//# sourceMappingURL=WebflowSearch.js.map