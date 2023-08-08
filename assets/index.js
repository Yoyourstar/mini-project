const portfolioData = [
    {title: 'proyek1', description: 'deskripsi proyek 1.'},
    {title: 'proyek2', description: 'deskripsi proyek 2.'},
    {title: 'proyek3', description: 'deskripsi proyek 3.'}
    // komentar
];

const portfoloContainer = document.getElementById('portfolioContainer');

portfolioData.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.className = 'item';
    projectItem.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    `;
    portfoloContainer.appendChild(projectItem);
});

//section from
const form = document.querySelector('form');
const items = document.querySelectorAll('.item');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const searchTerm = form.search.value.toLowerCase();
    items.forEach(item => {
        const projectTitle = item.querySelector('h2').textContent.toLocaleLowerCase();
        const projectDescription = item.querySelector('p').textContent.toLocaleLowerCase();

        if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
            item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
});