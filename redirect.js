// Preserve useful navigation on the new portfolio; send retired pages home.
const path = location.pathname.replace(/\/+$/, '') || '/';
const currentPath = /^\/(?:about|work|vault)(?:\/|$)/.test(path) && !/\.html$/i.test(path);
const destination = new URL(currentPath ? path + '/' : '/', 'https://abeeshan.studio');
destination.search = location.search;
destination.hash = location.hash;
location.replace(destination.href);
