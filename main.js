const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

//Select tab content item

function selectItem(e) {
    removeBorder();
    removeShow();
    //add border to curent tab
    this.classList.add('tab-border');
    //grab content item from DOM
    const itid = '#' + this.id + '-content';
    const tabContentItems = document.querySelector(itid);
    tabContentItems.classList.add('show');


}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItem.forEach(item => item.classList.remove('show'));
}

//listen for click
tabItems.forEach(item => item.addEventListener('click', selectItem));