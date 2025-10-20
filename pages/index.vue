<template>
  <h1>lenetl</h1>
  <button class="button" @click="handleClick">click here</button>
  <button class="button" @click="handleClick">click!</button>
  <button class="new-button" @click="testGTM">click 3</button>
</template>

<script setup>
const { trackPageView, trackEvent } = useGtm()

const handleClick = () => {
  trackEvent('button_click', {
    button_name: 'cta',
    section: 'header'
  })
}

const handleClick2 = () => {
  trackEvent('button_click_second', {
    button_name: 'cta',
    section: 'header'
  })
}


const testGTM = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'test_event',
      category: 'test',
      action: 'click'
    });
    console.log('GTM event sent');
  } else {
    console.log('GTM not loaded');
  }
}

</script>