'use script'

const menutray = document.querySelector('.fa-solid');
const menuContainer = document.querySelector('.menu-container');
const closebtn = document.querySelector('.close-btn');
const menuList = document.querySelector('.menuList');
const modalContainer = document.querySelector('.modal-out');
const projectName = document.querySelector('.title');
const projectImage = document.querySelector('.snapshoot');
const projectDescription = document.querySelector('.paragraph');
const modalOverlay = document.querySelector('.modal');
const projectSection = document.querySelector('.works-section');
const column = document.querySelector('.column');

//  open menu
const openMenu = function () {
  menuContainer.style.display = 'flex';
};
menutray.addEventListener('click', openMenu);

//  close menu
const closeMenu = function () {
  menuContainer.style.display = 'none';
};
closebtn.addEventListener('click', closeMenu);
menuList.addEventListener('click', closeMenu);

const projects = [
  {
    id: 1,
    title: 'Tonic',
    column: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'images/point.jpg',
    Paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Snapshoot Portfolio.jpg',
    technologies: ['html', 'JavaScript', 'css'],
    liveVersion: '#',
    source: '#',
    btnId: 'seeProject-1',
    contentDirection: '',
  },

  {
    id: 2,
    title: 'Multi-Post Stories',
    column: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'images/point.jpg',
    Paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Snapshoot Portfolio 2.jpg',
    technologies: ['html', 'JavaScript', 'css'],
    liveVersion: '#',
    source: '#',
    btnId: 'seeProject-2',
    contentDirection: 'reverseGrid',
  },

  {
    id: 3,
    title: 'Tonic',
    column: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'images/point.jpg',
    Paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Snapshoot Portfolio 3.jpg',
    technologies: ['html', 'JavaScript', 'css'],
    liveVersion: '#',
    source: '#',
    btnId: 'seeProject-3',
    contentDirection: '',
  },

  {
    id: 4,
    title: 'Multi-Post Stories',
    column: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'images/point.jpg',
    Paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'images/Snapshoot Portfolio 4.jpg',
    technologies: ['html', 'JavaScript', 'css'],
    liveVersion: '#',
    source: '#',
    btnId: 'seeProject-4',
    contentDirection: 'reverseGrid',
  },
];

//  create modal
const displayModal = (i) => {
  document.getElementById(`${projects[i].btnId}`).addEventListener('click', () => {
    menutray.style.display = 'none';
    modalContainer.style.display = 'flex';
    column.innerHTML = `<li>
    ${projects[i].column[0]}</li>
    <li><img src="images/point.jpg" alt="highlight"></li>
    <li>${projects[i].column[1]}</li>
    <li><img src="images/point.jpg" alt="highlight"></li>
    <li>${projects[i].column[2]}</li>`;
    projectName.innerText = projects[i].title;
    projectImage.src = projects[i].image;
    projectDescription.innerText = projects[i].description;
  });
};

// Display projects
projects.forEach((e, i) => {
  const projectCard = document.createElement('div');
  projectCard.className = `project-card-${projects[i].id}`;
  const html = `
    <div id=project-pages class="project-wrapper-${projects[i].id}">
    <img class="snapshoot ${projects[i].contentDirection}" src="${projects[i].image}" alt="first project card picture">
    <h2>${projects[i].title}</h2>
    <section>
        <ul class="column">
          <li>CANOPY<li>
          <li><a href="#"><img src="images/point.jpg" alt="highlight"></a></li>
          <li>Back End Dev</li>
          <li><a href="#"><img src="images/point.jpg" alt="highlight"></a></li>
          <li>2015</li>
        </ul>
    </section>
      <p>${projects[i].Paragraph}</p>
      <ul class="works">
        <li>${projects[i].technologies[0]}</li>
        <li>${projects[i].technologies[1]}</li>
        <li>${projects[i].technologies[2]}</li>
      </ul>
        <button class="buttons" id="${projects[i].btnId}">See Project</button>
    </div>
    </div>`;
  projectSection.insertAdjacentHTML('afterbegin', html); displayModal(i);
});

const btnCLoseModal = document.querySelector('.close-modal');
const closeModal = function () {
  modalContainer.style.display = 'none';
  menutray.style.display = 'block';
  modalOverlay.style.display = 'none';
};

btnCLoseModal.addEventListener('click', closeModal);

const form = document.getElementById('contact-box');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit',(e) => {
  if(!emailRegex.test(email.value));
  
}
