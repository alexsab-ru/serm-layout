import Alpine from 'alpinejs'
 
window.Alpine = Alpine

document.addEventListener('alpine:init', (data) => {
	Alpine.data('test', () => ({
        open: false
    }))
})
 
Alpine.start()