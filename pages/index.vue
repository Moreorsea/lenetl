<template>
  <h1>lenetl</h1>
  <button class="button" @click="handleClick">click here</button>
</template>

<script setup>
const { gtag } = useGtag()

const trackUniversalEvent = (eventName, params) => {
  // Отправка в GA4 через gtag
  gtag('event', eventName, params)

  // Отправка в GTM (если нужно)
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    })
  }
}

const handleClick = () => {
  console.log('HANDLE CLICK')
  trackUniversalEvent('button_click', {
    button_name: 'cta',
    section: 'header'
  })
}
</script>