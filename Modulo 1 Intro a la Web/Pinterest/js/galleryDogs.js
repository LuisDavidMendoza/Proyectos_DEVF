const goodImage = []

const chargeGalleryDogs = async() => {
    const answer = await fetch('https://dog.ceo/api/breeds/image/random/40')
    const data = await answer.json()

    await Promise.all(data.message.map(async imageUrl => {
        try{
            await new Promise((resolve, reject) => {
                const imgElement = new Image()
                imgElement.src = imageUrl
                imgElement.onload = () => {
                    goodImage.push(imageUrl)
                    resolve()
                }
                imgElement.onerror = () => {
                    resolve()
                }
            })
        } catch(error){
        }
    }))
    loadGallery();
}

const loadGallery = () => {
    let galleryDogs = '';

    goodImage.forEach(imageUrl => {
        galleryDogs += `
                <div class="card-image">
                    <img src="${imageUrl}" />
                    <div class="buttons"></div>
                </div>
            `;
    });

    document.getElementById('content').innerHTML = galleryDogs;
}

chargeGalleryDogs();