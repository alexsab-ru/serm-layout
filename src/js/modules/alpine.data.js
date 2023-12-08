import Alpine from 'alpinejs'
 
// window.Alpine = Alpine

import icons from './icons';

document.addEventListener('alpine:init', () => {
	Alpine.data('social', () => ({
        icons: {
            vk: icons.vk,
            odnk: icons.odnk,
            fb: icons.fb,
            inst: icons.inst,
            youtube: icons.youtube,
            tiktok: icons.tiktok,
            telegram: icons.telegram,
        }
    }))
})
 
// Alpine.start()