const zoneHeader = document.querySelector('#header-portals')
const zoneArrow = document.querySelector('#zone-arrow')
const portalList = document.querySelector('#portal-list')
const userHeader = document.querySelector('#user-header')
const userDropdown = document.querySelector('#user-dropdown')
const postDropdown = document.querySelector('#post-button')
const postMenu = document.querySelector('#post-menu')

let zoneDropdownOpen = false
let userDropdownOpen = false
let postDropdownOpen = false

document.addEventListener('click', function(event) {
    if (postDropdown.contains(event.target)) {
        setUserDropdown(false)
        setPostDropdown(!postDropdownOpen)
    } else if (userHeader.contains(event.target)) {
        setPostDropdown(false)
        setUserDropdown(!userDropdownOpen)
    } else if (zoneHeader.contains(event.target)) {
        setZoneDropdown(!zoneDropdownOpen)
    } else {
        setUserDropdown(false)
        setPostDropdown(false)
    }
})

function setZoneDropdown(value) {
    zoneDropdownOpen = value
    if (zoneDropdownOpen) {
        zoneArrow.classList.add('open')
        portalList.classList.add('open')
    } else {
        zoneArrow.classList.remove('open')
        portalList.classList.remove('open')
    }
}

function setUserDropdown(value) {
    userDropdownOpen = value
    if (userDropdownOpen) {
        userDropdown.classList.add('open')
    } else {
        userDropdown.classList.remove('open')
    }
}

function setPostDropdown(value) {
    postDropdownOpen = value
    if (postDropdownOpen) {
        postMenu.classList.add('open')
    } else {
        postMenu.classList.remove('open')
    }
}