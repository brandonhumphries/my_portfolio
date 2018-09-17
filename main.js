const technologies = {
    javascript: {caption: 'JavaScript', url: 'img/technologies_icons/javascript-plain.svg'},
    html: {caption: 'HTML5', url: 'img/technologies_icons/html5-original.svg'},
    css: {caption: 'CSS3', url: 'img/technologies_icons/css3-original.svg'},
    node: {caption: 'Node.js', url: 'img/technologies_icons/nodejs-original.svg'},
    express: {caption: 'Express.js', url: 'img/technologies_icons/express-original.svg'},
    postgres: {caption: 'PostgreSQL', url: 'img/technologies_icons/postgresql-original.svg'},
    react: {caption: 'React', url: 'img/technologies_icons/react-original.svg'},
    python: {caption: 'Python', url: 'img/technologies_icons/python-original.svg'},
    jquery: {caption: 'jQuery', url: 'img/technologies_icons/jquery-original.svg'},
    git: {caption: 'git', url: 'img/technologies_icons/git-original.svg'},
    aws: {caption: 'Amazon Web Services', url: 'img/technologies_icons/amazonwebservices-original.svg'},
};

const projects = [
    {
        caption: 'Coffeeology', 
        imageUrl: 'img/coffeeology/coffee 2.PNG', 
        demoUrl: 'https://www.coffeeology.club',
        githubUrl: 'https://github.com/brandonhumphries/coffeeology',
        description: 'Web app targeting users looking to learn about the craft of coffee and replace their expensive coffeeshop coffee.',
        details: [
            'Utilized the Blogger API to retrieve coffee-related blog posts.',
            'The EventBrite API retrieves coffee events around the Atlanta area.'
        ],
        projectTechnologies: [technologies.javascript, technologies.html, technologies.css]
    },
    {
        caption: 'in your fridge', 
        imageUrl: 'img/inyourfridge/In Your Fridge 3.PNG', 
        demoUrl: 'http://ec2-18-222-193-161.us-east-2.compute.amazonaws.com/?',
        githubUrl: 'https://github.com/hglasser/In-Your-Fridge',
        description: 'Web application that allows users to search for recipes based on the limited ingredients they have on hand.',
        details: [
            'Spoonacular API retrieves ingredients that utilize the entered/saved ingredients.',
            'Database stores user email and password, staple ingredients that the user usually has on hand, and recipes that are favorited by the user.'
        ],
        projectTechnologies: [technologies.javascript, technologies.html, technologies.css, technologies.node, technologies.express, technologies.postgres, technologies.aws]
    }
];

const gardenImages = [
    {caption: 'Zucchini', url: 'img/garden_photos/zucchini.jpg'},
    {caption: 'Tomatoes', url: 'img/garden_photos/tomatoessquare.jpg'},
    {caption: 'Squash', url: 'img/garden_photos/squashsquare.jpg'},
    {caption: 'Eggplant', url: 'img/garden_photos/eggplantsquare.jpg'},
    {caption: 'Cantaloupe', url: 'img/garden_photos/cantaloupesquare.jpg'},
    {caption: 'Cucumber', url: 'img/garden_photos/cucumber1square.jpg'},
    {caption: 'Cucumber', url: 'img/garden_photos/cucumber2square.jpg'},
    {caption: 'Mini Bell Peppers', url: 'img/garden_photos/minibellpepperssquare.jpg'},
    {caption: 'Jalapeno', url: 'img/garden_photos/jalapenosquare.jpg'},
    {caption: 'Okra', url: 'img/garden_photos/okrasquare.jpg'},
    {caption: 'Watermelon', url: 'img/garden_photos/watermelon1square.jpg'},
    {caption: 'Watermelon', url: 'img/garden_photos/watermelon2square.jpg'},
    {caption: 'Vegetable Harvest', url: 'img/garden_photos/vegetableharvestsquare.jpg'}
];

let projectI;
let gardenI;

// images.forEach((image, i) => {
//     let gardenImage = document.createElement('img');
//     gardenImage.setAttribute('src', image.url);
//     gardenImage.classList.add('garden-photo');
//     let gardenImageCaption = document.createElement('p');
//     gardenImageCaption.textContent = image.caption;
//     gardenImageCaption.classList.add('garden-photo-caption');
//     let gardenItem = document.createElement('li');
//     gardenItem.appendChild(gardenImage);
//     gardenItem.appendChild(gardenImageCaption);
//     gardenItem.classList.add('garden-item');

// });

let closeProjectModalButton = (event) => {
    event.preventDefault();
    let projectModalBackground = document.querySelector('.project-modal-background');
    let projectModal = document.querySelector('.project-modal-container');
    let projectItemContainer = document.querySelector('.project-item-container-modal');
    let projectItem = document.querySelector('.project-item-modal');
    projectModal.classList.add('hidden');
    projectModalBackground.classList.add('hidden');
    projectModal.removeChild(projectItem);
};

let projectModalCloseButton = document.querySelector('.project-modal-close-button');
projectModalCloseButton.addEventListener('click', closeProjectModalButton);

let closeProjectModalBackground = (event) => {
    event.preventDefault();
    let projectModal = document.querySelector('.project-modal-container');
    let projectModalBackground = document.querySelector('.project-modal-background');
    let projectItemContainer = document.querySelector('.project-item-container-modal');
    let projectItem = document.querySelector('.project-item-modal');
    if (event.target === projectModalBackground) {
        projectModal.classList.add('hidden');
        projectModalBackground.classList.add('hidden');
        projectModal.removeChild(projectItem);
    }
};

let projectModalBackgroundClose = document.querySelector('.project-modal-background');
projectModalBackgroundClose.addEventListener('click', closeProjectModalBackground);

let createHeader = (headerElement, className, headerContent) => {
    let header = document.createElement(headerElement);
    header.classList.add(className);
    header.textContent = headerContent;
    return header;
};

let createImage = (className, imageUrl, imageAlt) => {
    let imageElement = document.createElement('img');
    imageElement.classList.add(className);
    imageElement.setAttribute('src', imageUrl);
    imageElement.setAttribute('alt', imageAlt);
    return imageElement;
};

let createImageCaption = (className, captionContent) => {
    let imageCaption = document.createElement('p');
    imageCaption.classList.add(className);
    imageCaption.textContent = captionContent;
    return imageCaption;
};

let createAnchor = (className, hrefContent, anchorContent) => {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', hrefContent);
    anchor.setAttribute('target', '_blank');
    // anchor.setAttribute('rel', 'noopener noreferrer');
    anchor.classList.add(className);
    anchor.textContent = anchorContent;
    return anchor;
};

let createDetailsList = (details) => {
    let detailList = document.createElement('ul');
    details.forEach(detail => {
        let listItem = document.createElement('li');
        listItem.classList.add('project-details-list-item');
        listItem.textContent = detail;
        detailList.appendChild(listItem);
    });
    return detailList;
};

let displayProjectTechnologies = (i) => {
    let projectItem = document.querySelector('.project-item-modal');
    let projectTechnologiesContainer = document.createElement('div');
    projectTechnologiesContainer.classList.add('project-technologies-container');
    let projectTechnologiesHeader = createHeader('h4', 'project-technologies-header', 'Built with');
    projectItem.appendChild(projectTechnologiesHeader);
    let currentProject = projects[i].projectTechnologies;
    currentProject.forEach(technology => {
        let technologyItem = document.createElement('div');
        technologyItem.classList.add('technology-item-project');
        let technologyIcon = createImage('technology-icon-project', technology.url, technology.caption);
        let technologyCaption = createImageCaption('technology-caption-project', technology.caption);
        technologyItem.appendChild(technologyIcon);
        technologyItem.appendChild(technologyCaption);
        projectTechnologiesContainer.appendChild(technologyItem);
        projectItem.appendChild(projectTechnologiesContainer);
    });
};

let displayProject = (i) => {
    let projectModalContainer = document.querySelector('.project-modal-container');
    let projectModalBackground = document.querySelector('.project-modal-background');
    let projectItemContainer = document.createElement('div');
    projectItemContainer.classList.add('project-item-container-modal');
    let projectItem = document.createElement('div');
    projectItem.classList.add('project-item-modal');
    let projectHeader = createHeader('h3', 'project-header-modal', projects[i].caption);
    let urlContainer = document.createElement('div');
    urlContainer.classList.add('url-container-modal');
    let demoUrl = createAnchor('demo-url', projects[i].demoUrl, 'Live Demo');
    let githubUrl = createAnchor('github-url', projects[i].githubUrl, 'Github Repository');
    let projectImage = createImage('project-image-modal', projects[i].imageUrl, projects[i].caption);
    let projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description-modal');
    projectDescription.textContent = projects[i].description;
    let projectDetailList = createDetailsList(projects[i].details);
    projectItem.appendChild(projectHeader);
    projectItem.appendChild(projectImage);
    urlContainer.appendChild(demoUrl);
    urlContainer.appendChild(githubUrl);
    projectItem.appendChild(urlContainer);
    projectItem.appendChild(projectDescription);
    projectItem.appendChild(projectDetailList);
    projectModalContainer.appendChild(projectItem);
    displayProjectTechnologies(i);
    projectModalContainer.classList.remove('hidden');
    projectModalBackground.classList.remove('hidden');
};

// let projectImageAnchor = document.querySelector('.project-image');
// projectImageAnchor.addEventListener('click', displayProject);

let displayProjectImage = () => {
    projects.forEach((project, i) => {
        projectI = i;
        let projectsContainer = document.querySelector('.projects-container');
        let projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
        let projectHeader = createHeader('h3', 'project-header', project.caption);
        let projectImageContainer = document.createElement('div');
        projectImageContainer.classList.add('project-image-container');
        let projectImage = createImage('project-image', project.imageUrl, project.caption);
        projectImageContainer.appendChild(projectImage);
        projectItem.appendChild(projectHeader);
        projectItem.appendChild(projectImageContainer);
        projectsContainer.appendChild(projectItem);
        let clickHandler = () => {
            displayProject(i);
        };
        projectImage.addEventListener('click', clickHandler);
    });
};

displayProjectImage();

let displayTechnologies = () => {
    let technologiesContainer = document.querySelector('.technologies-container');
    let technologiesArray = Object.keys(technologies);
    technologiesArray.forEach(technology => {
        let technologyIcon = createImage('technology-icon', technologies[technology].url, technologies[technology].caption);
        let technologyItem = document.createElement('div');
        technologyItem.classList.add('technology-item');
        let technologyCaption = createImageCaption('technology-caption', technologies[technology].caption);
        technologyItem.appendChild(technologyIcon);
        technologyItem.appendChild(technologyCaption);
        technologiesContainer.appendChild(technologyItem);
    });
    console.log(technologiesArray);
};

displayTechnologies();

let closeGardenModalButton = (event) => {
    event.preventDefault();
    let gardenImageModal = document.querySelector('.garden-photos-modal-container');
    let gardenItemContainer = document.querySelector('.garden-item-container');
    let gardenItem = document.querySelector('.garden-item');
    gardenImageModal.classList.add('hidden');
    gardenItemContainer.removeChild(gardenItem);
};

let gardenModalCloseButton = document.querySelector('.garden-photos-modal-close-button');
gardenModalCloseButton.addEventListener('click', closeGardenModalButton);

let closeGardenModalBackground = (event) => {
    event.preventDefault();
    let gardenImageModal = document.querySelector('.garden-photos-modal-container');
    let gardenItemContainer = document.querySelector('.garden-item-container');
    let gardenItem = document.querySelector('.garden-item');
    if (event.target === gardenImageModal) {
        gardenImageModal.classList.add('hidden');
        gardenItemContainer.removeChild(gardenItem);
    }
};

let gardenModalCloseBackground = document.querySelector('.garden-photos-modal-container');
gardenModalCloseBackground.addEventListener('click', closeGardenModalBackground);


let displayGardenImages = (event, i) => {
    event.preventDefault();
    gardenI = 0;
    let gardenImageModal = document.querySelector('.garden-photos-modal-container');
    let gardenItemContainer = document.querySelector('.garden-item-container');
    gardenImageModal.classList.remove('hidden');
    let gardenImageContainer = document.createElement('div');
    gardenImageContainer.classList.add('garden-photo-container');
    let gardenImage = createImage('garden-photo', gardenImages[gardenI].url, gardenImages[gardenI].caption);
    let gardenImageCaption = createImageCaption('garden-photo-caption', gardenImages[gardenI].caption);
    let gardenItem = document.createElement('li');
    gardenItem.classList.add('garden-item');
    gardenImageContainer.appendChild(gardenImage);
    gardenItem.appendChild(gardenImageContainer);
    gardenItem.appendChild(gardenImageCaption);
    gardenItem.classList.add('garden-item');
    gardenItemContainer.appendChild(gardenItem);
};

let gardenAnchor = document.querySelector('.garden-anchor');
gardenAnchor.addEventListener('click', displayGardenImages);

let previousImage = (event) => {
    event.preventDefault();
    gardenI = (gardenI + gardenImages.length - 1) % gardenImages.length;;
    let gardenImage = document.querySelector('.garden-photo');
    let gardenImageCaption = document.querySelector('.garden-photo-caption');
    gardenImage.setAttribute('src', gardenImages[gardenI].url);
    gardenImage.setAttribute('alt', gardenImages[gardenI].caption);
    gardenImageCaption.textContent = gardenImages[gardenI].caption;
};

let previousImageButton = document.querySelector('.previous-image');
previousImageButton.addEventListener('click', previousImage);

let nextImage = (event) => {
    event.preventDefault();
    gardenI = (gardenI + gardenImages.length + 1) % gardenImages.length;;
    let gardenImage = document.querySelector('.garden-photo');
    let gardenImageCaption = document.querySelector('.garden-photo-caption');
    gardenImage.setAttribute('src', gardenImages[gardenI].url);
    gardenImage.setAttribute('alt', gardenImages[gardenI].caption);
    gardenImageCaption.textContent = gardenImages[gardenI].caption;
};

let nextImageButton = document.querySelector('.next-image');
nextImageButton.addEventListener('click', nextImage);

