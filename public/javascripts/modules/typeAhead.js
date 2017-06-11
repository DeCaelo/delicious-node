const axios = require('axios');

function searchResultsHTML(stores) {
  return stores
    .map(store => {
      return `
      <a href="/stores/${store.slug}" class="search__result">
        <strong>${store.name}</strong>
        <p>${store.description}</p>
      </a>
    `;
    })
    .join('');
}

function typeAhead(search) {
  if (!search) return;

  const searchInput = search.querySelector('input[name="search"]');
  const searchResults = search.querySelector('.search__results');

  searchInput.on('input', function() {
    // if there is no value, quit it!
    if (!this.value) {
      searchResults.style.display = 'none';
      return; // stop
    }

    // show the search results!
    searchResults.style.display = 'block';

    axios.get(`/api/search?q=${this.value}`).then(res => {
      if (res.data.length) {
        console.log('There is something to show!');
        const html = searchResultsHTML(res.data);
        console.log(html);
      }
    });
  });
}

export default typeAhead;
