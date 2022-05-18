import './style.css';

export const leaderBoardWrapper = document.querySelector('.leaders');

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

export const displayLeaders = ({ user, score }) => {
  leaderBoardWrapper.innerHTML += `<li class="animated bounce"><span>${user}</span><span class="span">${score}</span></li>`;
};
