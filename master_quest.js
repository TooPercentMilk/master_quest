document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const paragraph = document.getElementById('myParagraph');

    button.addEventListener('click', () => {
        paragraph.textContent = 'Button was clicked!';
    });
});