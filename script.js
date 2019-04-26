function toggleElement(id) {
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'flex' : 'none';
}

function toggle() {
    toggleElement("feedbackPopup");
    toggleElement("popupWrapper");
}
