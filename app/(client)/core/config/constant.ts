/**
 * An array of section objects used for navigation or categorization.
 * Each section contains a title and a URL.
 * 
 * @type {Array<{ title: string, url: string }>}
 */
export const SECTIONS = [
    { title: 'Travel Destinations', url: '/' },
    { title: 'Health', url: '/' },
    { title: 'Security', url: '/' },
    { title: 'Latest Visa Requirements', url: '/' },
];

/**
 * An object containing various path constants used for routing within the application.
 * 
 * @type {Object}
 * @property {string} list - The path to the list view of blog posts.
 * @property {string} create - The path to the create new blog post page.
 */
export const PATHS = {
    list: '/',
    create: 'blog/new',
};

/**
 * The number of items to display per page in pagination.
 * 
 * @type {number}
 */
export const ITEMS_PER_PAGE = 8;

/**
 * The maximum length of content to display before truncating with an ellipsis.
 * 
 * @type {number}
 */
export const CONTENT_LENGTH = 60;

const Base_Path = 'http://localhost:3000/api/';

export const API_ENDPOINTS = {
    blog: Base_Path + 'blog',
};
