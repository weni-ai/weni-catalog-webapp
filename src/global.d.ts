/// <reference types="vite/client" />

import '@vtex/shoreline/css';

declare global {
    const t: typeof import('./locales/index').t;
}

export { };
