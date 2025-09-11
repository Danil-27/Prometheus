export default defineNuxtPlugin(() => {
  // Предзагрузка критических ресурсов
  if (process.client) {
    // Предзагрузка критических изображений
    const criticalImages = [
      '/images/obverse/obverse.webp',
      '/images/mission/apartment.webp'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Отложенная загрузка некритических скриптов
    const loadNonCriticalScripts = () => {
      // Загружаем дополнительные скрипты после загрузки основного контента
      setTimeout(() => {
        // Здесь можно добавить загрузку аналитики, чатов и других некритических скриптов
      }, 2000);
    };

    // Запускаем отложенную загрузку после загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadNonCriticalScripts);
    } else {
      loadNonCriticalScripts();
    }
  }
});
