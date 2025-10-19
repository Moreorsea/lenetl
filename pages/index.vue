<template>
  <h1>lenetl</h1>
  <button class="button" @click="handleClick">click here</button>
  <button class="new-button" @click="handleClick2">click!</button>
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
  trackUniversalEvent('button_click', {
    button_name: 'cta',
    section: 'header'
  })
}

const handleClick2 = () => {
  trackUniversalEvent('button_click_second', {
    button_name: 'cta',
    section: 'header'
  })
}
</script>