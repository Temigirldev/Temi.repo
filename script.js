const toggleButton = document.getElementsByClassName('.toggle-button')[0]
const navlist = document.getElementsByClassName('.navlist')[0]

toggleButton.addEventListener('click' , () => {
    navlist.classlist.toggle('.active')
})