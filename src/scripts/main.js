const isDarkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches
const html_label = document.querySelector('html')
const dark_icon = document.querySelector("#dark-icon")
const light_icon = document.querySelector("#light-icon")

if (isDarkModeOn) {
    html_label.classList.add("dark")
    dark_icon.classList.remove("hidden")
} else {
    html_label.classList.remove("dark")
    light_icon.classList.remove("hidden")
}
document.querySelector('body').classList.remove('hidden')
