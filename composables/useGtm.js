export const useGtm = () => {
  const trackEvent = (eventName, parameters) => {
    // Проверяем что dataLayer существует
    if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...parameters
      })
    } else {
      console.warn('GTM dataLayer not available')
    }
  }

  const trackPageView = (page) => {
    trackEvent('page_view', { page })
  }

  return {
    trackEvent,
    trackPageView
  }
}