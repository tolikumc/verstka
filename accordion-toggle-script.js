$(document).ready(function () {
    var bodyEl = document.getElementsByTagName('body')[0];
    var accordionIndex,
            accordionSubIndex;
    var accordion = null;
    var questionAccordion = null;
    var block = null;

    questionAccordion = document.getElementsByClassName("pricing-title-panel");

    for (accordionIndex = 0; accordionIndex < questionAccordion.length; accordionIndex++) {
        questionAccordion[accordionIndex].addEventListener("click", function () {

            var panel = this.nextElementSibling;
            var borderBottom = panel.nextElementSibling;
            var toggleButton = this.getElementsByClassName('pricing-img-toggle')[0];
            var isOpen = false;

            if (panel.style.maxHeight) {
                isOpen = true;
            }

            for (accordionSubIndex = 0; accordionSubIndex < questionAccordion.length; accordionSubIndex++) {
                block = questionAccordion[accordionSubIndex];
                block.nextElementSibling.style.maxHeight = null;
                block.borderBottom.style.display = 'none';
            }

            if (!panel.style.maxHeight && !isOpen) {
                toggleButton.style.transform = 'rotate(180deg)';
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
