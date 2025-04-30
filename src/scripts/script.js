document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    // let the page load then grab the stuff in the div

    function loadPage(url, direction = 'left') {
        content.classList.add(`hidden-${direction}`);
        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    parser = new DOMParser();
                    doc = parser.parseFromString(html, 'text/html');
                    newContent = doc.getElementById('content');
                    if (newContent){
                        content.innerHTML = newContent.innerHTML;
                        content.className= '';
                    }
                });
        }, 500);
    }

    document.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', event => {
            url = link.getAttribute('href');
            if (!url.startsWith('/')){
                return;
            }

            event.preventDefault();
            direction = link.dataset.direction || 'left';
            loadPage(url, direction);
        });
    });
});