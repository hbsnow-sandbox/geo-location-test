if ('geolocation' in navigator) {
  console.info('geolocation is available')

  navigator.geolocation.getCurrentPosition(
    position => {
      console.log(position.coords.latitude, position.coords.longitude)
    },
    error => {
      console.error(error)
    },
    {
      timeout: 5000
    }
  )
} else {
  console.error('geolocation IS NOT available')
}