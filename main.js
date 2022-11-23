'use script'

const menutray = document.querySelector('.fa-solid');
const menuContainer = document.querySelector('.menu-container');
const closebtn = document.querySelector('.close-btn');
const menuList = document.querySelector('.menuList')
const modalContainer = document.querySelector('.modal-container');
const projectName = document.querySelector('.title');
const sectionLink = document.querySelector('.menuList');
const projectImage = document.querySelector('.snapshoot');
const projectDescription = document.querySelector('.paragraph');
const modalOverlay = document.querySelector('.modal');
const projectSection = document.querySelector('.works-section');
//open menu
const openMenu = function() {
  menuContainer.style.display = "flex";
}
menutray.addEventListener('click',openMenu );

//close menu
const closeMenu = function() {
  menuContainer.style.display = "none";
}
closebtn.addEventListener('click',closeMenu );
menuList.addEventListener('click',closeMenu);

const projects = [
  {
    id: 1,
    title: 'Tonic',
    column: ['CANOPY', 'Back End Dev', '2015'],
    dot: 'images/point.jpg',
    Paragraph: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: `images/Snapshoot Portfolio.jpg`,
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
    Paragraph: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: `images/Snapshoot Portfolio 2.jpg`,
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
    Paragraph: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: `images/Snapshoot Portfolio 3.jpg`,
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
    Paragraph: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    image: `images/Snapshoot Portfolio 4.jpg`,
    technologies: ['html', 'JavaScript', 'css'],
    liveVersion: '#',
    source: '#',
    btnId: 'seeProject-4',
    contentDirection: 'reverseGrid',
  },
];

// create modal
const displayModal = (i) => {
  document.getElementById(`${projects[i].id}`).addEventListener('click', () => {
    menutray.style.display = 'none';
    modalContainer.style.display = 'flex';
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
    <div class="project-wrapper-${projects[i].id}">
    <ul class="column">
          <li><a href="#"><img src="images/point.jpg" alt="highlight"></a></li>
          <li>Back End Dev</li>
          <li><a href="#"><img src="images/point.jpg" alt="highlight"></a></li>
          <li>2015</li>
        </ul>
    <img id=project-pic class"pict project-picture-${projects[i].id}" src = ${projects[i].image} alt=${projects[i].title}
    <div class="project-card-details-${projects[i].id}" id=project-card-details>
      <h4 class="project-name>${projects[i].title}<h4>
      <p class="description-${projects[i].id}">${projects[i].Paragraph}</p>
      <ul class="card-tech">
        <li>${projects[i].technologies[0]}</li>
        <li>${projects[i].technologies[1]}</li>
        <li>${projects[i].technologies[2]}</li>
      </ul>
        <button class="btn-see-project" id="${projects[i].id}">See this project &#10132</button>
    </div>
    </div>`;
    projectSection.insertAdjacentHTML('afterbegin',html);
    displayModal(i);
});

const btnCLoseModal = document.querySelector('.close-modal');
const closeModal = function () {
  modalContainer.style.display = 'none';
  menutray.style.display = 'block';
  modalOverlay.style.display = 'none';
};

btnCLoseModal.addEventListener('click', closeModal);






/* const workSection = document.querySelector('#work-section');

function createProgrammingLanguage(x) {
  let list = '';
  for (let i = 0; i < projects[x].projectLanguages.length; i += 1) {
    list += `<li>${projects[x].projectLanguages[i]}</li>`;
  }
  return list;
}

for (let i = 0; i < projects.length; i += 1) {
  const projectCard = `
  <section class="project" id="project-1">
    <img class="snap ${projects[i].contentDirection}" src="${projects[i].image} alt="first card photo>
    <h2>${projects[i].name}</h2>
    <section>
      <ul class="columnJS">
        <li>CANOPY</li>
        <li><images src="${projects[i].point}" alt="dot icon"}></li>
        <li><span class="lightgray">${projects[i].columnli1}</span></li>
        <li><images src=${projects[i].point}" alt="dot icon"></li>
        <li><span class="lightgray">${projects[i].columnli2}</span></li>
      </ul>
    </section>
    <p>${projects[i].paragraph}</p>
    <ul class="programmingLanguages">
      ${createProgrammingLanguages(i)}
    </ul>
    <button class="buttonJS" id=${projects[i].btnId}">See Project</button>
  </section>
    `;
    workSection.innerHTML += projectCard;
}
 `*/

