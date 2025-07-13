const seasonSelect = document.getElementById('season');
const episodesContainer = document.getElementById('episodes');
const playButton = document.querySelector('.play-button');

// Sample episode metadata by season
const episodeData = {
    1: [
        { title: 'The DVD', desc: 'Gumball and Darwin race to return a late rental.', episode: 1 },
        { title: 'The Responsible', desc: 'The boys are left home alone for the first time.', episode: 2 },
    ],
    2: [
        { title: 'The Remote', desc: 'A battle for control of the TV remote.', episode: 1 },
        { title: 'The Job', desc: 'Richard gets a job at the Rainbow Factory.', episode: 2 },
    ],
    3: [
        { title: 'The Third', desc: 'Gumball and Darwin try to find a new best friend.', episode: 1 },
        { title: 'The Debt', desc: 'Darwin owes Gumball a favor—and it gets complicated.', episode: 2 },
    ]
};

// Load user state from localStorage
const watchState = JSON.parse(localStorage.getItem('gumballWatchState')) || {
    season: 1,
    episode: 1,
    status: 'Continue Watching'
};

// Update play button
playButton.textContent = `${watchState.status} • Season ${watchState.season}, Episode ${watchState.episode}`;

// Render episodes for selected season
function renderEpisodes(season) {
    episodesContainer.innerHTML = '';
    const list = episodeData[season] || [];

    list.forEach(ep => {
        const card = document.createElement('div');
        card.className = 'episode-card';

        card.innerHTML = `
            <img src="/img/s/1/${season}-${ep.episode}.jpg" alt="Episode Thumbnail" />
            <h3>Episode ${ep.episode}: ${ep.title}</h3>
            <p>${ep.desc}</p>
        `;

        episodesContainer.appendChild(card);
    });
}

// Initial render
renderEpisodes(watchState.season);
seasonSelect.value = watchState.season;

// Season change handler
seasonSelect.addEventListener('change', (e) => {
    const selected = parseInt(e.target.value);
    renderEpisodes(selected);
});
