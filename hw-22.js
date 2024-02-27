const smiles = [{
    smile: '😍',
    vote_count: 0
}, {
    smile:'😡',
    vote_count: 0
}, {
    smile:'😤',
    vote_count: 0
}, {
    smile:'😭',
    vote_count: 0
}, {
    smile:'😴',
    vote_count: 0
}];

function voteCount() {
    const feedback = document.querySelector('#feedback');

    smiles.forEach((smile, index) => {
        const container = document.createElement('div');
        container.classList.add('reactions-container');

        const reactions = document.createElement('div');
        reactions.classList.add('reactions');
        reactions.textContent = smile.smile;
        container.appendChild(reactions);

        const vote = document.createElement('div');
        vote.classList.add('vote');
        vote.textContent = smile.vote_count;

        reactions.addEventListener('click', () => {
            smile.vote_count++;
            vote.textContent = smile.vote_count;
        });

        container.appendChild(vote);
        feedback.appendChild(container);
    });
}

voteCount();