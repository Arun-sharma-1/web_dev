const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = () => {
    modal?.classList.add("active")
    overlay?.classList.add('overlayActive')
}

const closeModal = () => {
    console.log('model is closed')
    modal?.classList.remove('active')
    overlay?.classList.remove('overlayActive')
}

document.querySelector('.overlay')?.addEventListener('click', closeModal)

