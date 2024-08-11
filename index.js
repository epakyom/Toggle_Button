document.addEventListener('DOMContentLoaded', function () {
    const egoButton = document.querySelector('.toggle-btn-wrapper:nth-child(6) input');
    const otherButtons = document.querySelectorAll('.toggle-btn-wrapper:nth-child(-n+5) input');

    egoButton.addEventListener('change', function() {
        if (this.checked) {
            otherButtons.forEach(button => {
                button.checked = false;
                button.disabled = true;
            });
        } else {
            otherButtons.forEach(button => {
                button.disabled = false;
            });
        }
    });

    otherButtons.forEach(button => {
        button.addEventListener('change', function() {
            if (this.checked) {
                egoButton.checked = false;
                egoButton.disabled = false;
            }
        });
    });
});
