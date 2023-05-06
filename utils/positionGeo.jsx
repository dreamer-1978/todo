

const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude

        const pos = {
            lat,
            lon
        }
        return pos
    })
}



