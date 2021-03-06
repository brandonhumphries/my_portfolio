const technologies = {
    javascript: {caption: 'JavaScript', url: 'img/technologies_icons/javascript-plain.svg'},
    html: {caption: 'HTML5', url: 'img/technologies_icons/html5-original.svg'},
    css: {caption: 'CSS3', url: 'img/technologies_icons/css3-original.svg'},
    node: {caption: 'Node.js', url: 'img/technologies_icons/nodejs-original.svg'},
    express: {caption: 'Express.js', url: 'img/technologies_icons/express-original.svg'},
    postgres: {caption: 'PostgreSQL', url: 'img/technologies_icons/postgresql-original.svg'},
    react: {caption: 'React.js', url: 'img/technologies_icons/react-original.svg'},
    redux: {caption: 'Redux.js', url: 'img/technologies_icons/redux-original.svg'},
    python: {caption: 'Python', url: 'img/technologies_icons/python-original.svg'},
    jquery: {caption: 'jQuery', url: 'img/technologies_icons/jquery-original.svg'},
    git: {caption: 'Git', url: 'img/technologies_icons/git-original.svg'},
    aws: {caption: 'Amazon Web Services', url: 'img/technologies_icons/amazonwebservices-original.svg'},
};

const projects = [
    {
        caption: 'The Local Experience',
        imageUrl: 'img/the_local_experience/the-local-experience.png',
        demoUrl: 'https://thelocalexperience.club',
        githubUrl: 'https://github.com/MitchGuth/theLocalExperience',
        description: 'Web app where users can capture and share experiences by uploading a photo of their experience, a description that describes their experience, and a location tag to allow others to have their own experience at that location.',
        details: [
            `Single Page Application built with React and Redux on the front end.`,
            `The Geolocation API is used to obtain the user's coordinates when they upload a photo.` ,
            `Utilized Multer NPM for image uploads and Sharp NPM to auto-rotate the image based on its intrinsic orientation.`,
            `The Google Maps API displays user contributions as markers on the map.`
        ],
        projectTechnologies: [technologies.javascript, technologies.html, technologies.css, technologies.react, technologies.redux, technologies.node, technologies.express, technologies.postgres, technologies.aws]
    },
    {
        caption: 'in your fridge', 
        imageUrl: 'img/inyourfridge/in-your-fridge.png', 
        demoUrl: 'http://www.inyourfridge.co',
        githubUrl: 'https://github.com/hglasser/In-Your-Fridge',
        description: 'Web application that allows users to search for recipes based on the limited ingredients they have on hand.',
        details: [
            'Spoonacular API retrieves ingredients that utilize the entered/saved ingredients.',
            'Database stores user email and password, staple ingredients that the user usually has on hand, and recipes that are favorited by the user.',
            'Utilizes PostgreSQL to query the database.',
            'JSON Web Tokens provide user authentication.'
        ],
        projectTechnologies: [technologies.javascript, technologies.html, technologies.css, technologies.node, technologies.express, technologies.postgres, technologies.aws]
    },
    {
        caption: 'Coffeeology', 
        imageUrl: 'img/coffeeology/Coffee 920.PNG', 
        demoUrl: 'https://www.coffeeology.club',
        githubUrl: 'https://github.com/brandonhumphries/coffeeology',
        description: 'Web app targeting users looking to learn about the craft of coffee and replace their expensive coffeeshop coffee.',
        details: [
            'Utilizes the Blogger API to retrieve coffee-related blog posts.',
            'The EventBrite API retrieves coffee events around the Atlanta area.',
            'Local Storage keeps track of returning users and their survey results.'
        ],
        projectTechnologies: [technologies.javascript, technologies.html, technologies.css]
    },
];

const gardenImages = [
    {caption: 'Zucchini', url: 'img/garden_photos/zucchini.jpg'},
    {caption: 'Tomatoes', url: 'img/garden_photos/tomatoes.jpg'},
    {caption: 'Squash', url: 'img/garden_photos/squash.jpg'},
    {caption: 'Eggplant', url: 'img/garden_photos/eggplant.jpg'},
    {caption: 'Cantaloupe', url: 'img/garden_photos/cantaloupe.jpg'},
    {caption: 'Cucumber', url: 'img/garden_photos/cucumber1.jpg'},
    {caption: 'Cucumber', url: 'img/garden_photos/cucumber2.jpg'},
    {caption: 'Mini Bell Peppers', url: 'img/garden_photos/minibellpeppers.jpg'},
    {caption: 'Jalapeno', url: 'img/garden_photos/jalapeno.jpg'},
    {caption: 'Okra', url: 'img/garden_photos/okra.jpg'},
    {caption: 'Watermelon', url: 'img/garden_photos/watermelon1.jpg'},
    {caption: 'Watermelon', url: 'img/garden_photos/watermelon2.jpg'},
    {caption: 'Vegetable Harvest', url: 'img/garden_photos/vegetableharvest.jpg'}
];

let projectI;
let gardenI;

let closeProjectModalButton = (event) => {
    event.preventDefault();
    let body = document.querySelector('body');
    let projectModalBackground = document.querySelector('.project-modal-background');
    let projectModal = document.querySelector('.project-modal-container');
    let projectItemContainer = document.querySelector('.project-item-container-modal');
    let projectItem = document.querySelector('.project-item-modal');
    projectModal.classList.add('hidden');
    projectModalBackground.classList.add('hidden');
    body.classList.remove('overflow-hidden');
    projectModal.removeChild(projectItem);
};

let closeProjectModalBackground = (event) => {
    event.preventDefault();
    let body = document.querySelector('body');
    let projectModal = document.querySelector('.project-modal-container');
    let projectModalBackground = document.querySelector('.project-modal-background');
    let projectItemContainer = document.querySelector('.project-item-container-modal');
    let projectItem = document.querySelector('.project-item-modal');
    if (event.target === projectModalBackground) {
        projectModal.classList.add('hidden');
        projectModalBackground.classList.add('hidden');
        body.classList.remove('overflow-hidden');
        projectModal.removeChild(projectItem);
    }
};

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
    anchor.setAttribute('rel', 'noopener noreferrer');
    anchor.classList.add(className);
    anchor.textContent = anchorContent;
    return anchor;
};

let createUrlContainer = (i) => {
    let urlContainer = document.createElement('div');
    urlContainer.classList.add('url-container-modal');
    let demoUrl = createAnchor('demo-url', projects[i].demoUrl, 'Live Demo');
    let githubUrl = createAnchor('github-url', projects[i].githubUrl, 'Github Repository');
    urlContainer.appendChild(demoUrl);
    urlContainer.appendChild(githubUrl);
    return urlContainer;
}

let createDetailsList = (details) => {
    let detailList = document.createElement('ul');
    detailList.classList.add('project-detail-list');
    details.forEach(detail => {
        let listItem = document.createElement('li');
        listItem.classList.add('project-details-list-item');
        listItem.textContent = detail;
        detailList.appendChild(listItem);
    });
    return detailList;
};

let displayProjectTechnologies = (i) => {
    let projectInformationContainer = document.querySelector('.project-information-container-modal');
    let projectTechnologiesContainer = document.createElement('div');
    projectTechnologiesContainer.classList.add('project-technologies-container');
    let projectTechnologiesHeader = createHeader('h4', 'project-technologies-header', 'Built with');
    projectInformationContainer.appendChild(projectTechnologiesHeader);
    let currentProject = projects[i].projectTechnologies;
    currentProject.forEach(technology => {
        let technologyItem = document.createElement('div');
        technologyItem.classList.add('technology-item-project');
        let technologyIcon = createImage('technology-icon-project', technology.url, technology.caption);
        let technologyCaption = createImageCaption('technology-caption-project', technology.caption);
        technologyItem.appendChild(technologyIcon);
        technologyItem.appendChild(technologyCaption);
        projectTechnologiesContainer.appendChild(technologyItem);
        projectInformationContainer.appendChild(projectTechnologiesContainer);
    });
};

let displayProject = (i) => {
    let body = document.querySelector('body');
    let projectModalContainer = document.querySelector('.project-modal-container');
    let projectModalBackground = document.querySelector('.project-modal-background');
    let projectItemContainer = document.createElement('div');
    projectItemContainer.classList.add('project-item-container-modal');
    let projectImageInformationContainer =document.createElement('div');
    projectImageInformationContainer.classList.add('project-image-information-container-modal');
    let projectItem = document.createElement('div');
    projectItem.classList.add('project-item-modal');
    let projectHeaderContainer = document.createElement('div');
    projectHeaderContainer.classList.add('project-header-container');
    let projectHeader = createHeader('h3', 'project-header-modal', projects[i].caption);
    let projectHeaderLine1 = document.createElement('div');
    projectHeaderLine1.classList.add('project-header-line');
    let projectHeaderLine2 = document.createElement('div');
    projectHeaderLine2.classList.add('project-header-line');
    let projectInformationContainer = document.createElement('div');
    projectInformationContainer.classList.add('project-information-container-modal');
    let urlContainer = createUrlContainer(i);
    let projectImage = createImage('project-image-modal', projects[i].imageUrl, projects[i].caption);
    let projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description-modal');
    projectDescription.textContent = projects[i].description;
    let projectDetailList = createDetailsList(projects[i].details);
    projectHeaderContainer.appendChild(projectHeaderLine1);
    projectHeaderContainer.appendChild(projectHeader);
    projectHeaderContainer.appendChild(projectHeaderLine2);
    projectItem.appendChild(projectHeaderContainer);
    projectImageInformationContainer.appendChild(projectImage);
    projectItem.appendChild(projectImageInformationContainer);
    projectInformationContainer.appendChild(urlContainer);
    projectInformationContainer.appendChild(projectDescription);
    projectInformationContainer.appendChild(projectDetailList);
    projectImageInformationContainer.appendChild(projectInformationContainer);
    projectItem.appendChild(projectImageInformationContainer);
    projectModalContainer.appendChild(projectItem);
    displayProjectTechnologies(i);
    body.classList.add('overflow-hidden');
    projectModalContainer.classList.remove('hidden');
    projectModalBackground.classList.remove('hidden');
};

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
};

displayTechnologies();

let closeGardenModalButton = (event) => {
    event.preventDefault();
    let body = document.querySelector('body');
    let gardenImageModal = document.querySelector('.garden-photos-modal-container');
    let gardenItemContainer = document.querySelector('.garden-item-container');
    let gardenItem = document.querySelector('.garden-item');
    gardenImageModal.classList.add('hidden');
    body.classList.remove('overflow-hidden');
    gardenItemContainer.removeChild(gardenItem);
};

let closeGardenModalBackground = (event) => {
    event.preventDefault();
    let body = document.querySelector('body');
    let gardenImageModal = document.querySelector('.garden-photos-modal-container');
    let gardenItemContainer = document.querySelector('.garden-item-container');
    let gardenItem = document.querySelector('.garden-item');
    if (event.target === gardenImageModal) {
        gardenImageModal.classList.add('hidden');
        body.classList.remove('overflow-hidden');
        gardenItemContainer.removeChild(gardenItem);
    }
};

let displayGardenImages = (event, i) => {
    event.preventDefault();
    gardenI = 0;
    let body = document.querySelector('body');
    let gardenImageModal = document.querySelector('.garden-photos-modal-container');
    let gardenItemContainer = document.querySelector('.garden-item-container');
    gardenImageModal.classList.remove('hidden');
    body.classList.add('overflow-hidden');
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

let previousImage = (event) => {
    event.preventDefault();
    gardenI = (gardenI + gardenImages.length - 1) % gardenImages.length;;
    let gardenImage = document.querySelector('.garden-photo');
    let gardenImageCaption = document.querySelector('.garden-photo-caption');
    gardenImage.setAttribute('src', gardenImages[gardenI].url);
    gardenImage.setAttribute('alt', gardenImages[gardenI].caption);
    gardenImageCaption.textContent = gardenImages[gardenI].caption;
};

let nextImage = (event) => {
    event.preventDefault();
    gardenI = (gardenI + gardenImages.length + 1) % gardenImages.length;;
    let gardenImage = document.querySelector('.garden-photo');
    let gardenImageCaption = document.querySelector('.garden-photo-caption');
    gardenImage.setAttribute('src', gardenImages[gardenI].url);
    gardenImage.setAttribute('alt', gardenImages[gardenI].caption);
    gardenImageCaption.textContent = gardenImages[gardenI].caption;
};

let setupEventListeners = () => {

    let projectModalCloseButton = document.querySelector('.project-modal-close-button');
    projectModalCloseButton.addEventListener('click', closeProjectModalButton);

    let projectModalBackgroundClose = document.querySelector('.project-modal-background');
    projectModalBackgroundClose.addEventListener('click', closeProjectModalBackground);

    let gardenModalCloseButton = document.querySelector('.garden-photos-modal-close-button');
    gardenModalCloseButton.addEventListener('click', closeGardenModalButton);

    let gardenModalCloseBackground = document.querySelector('.garden-photos-modal-container');
    gardenModalCloseBackground.addEventListener('click', closeGardenModalBackground);

    let gardenAnchor = document.querySelector('.garden-anchor');
    gardenAnchor.addEventListener('click', displayGardenImages);

    let previousImageButton = document.querySelector('.previous-image');
    previousImageButton.addEventListener('click', previousImage);

    let nextImageButton = document.querySelector('.next-image');
    nextImageButton.addEventListener('click', nextImage);
};

setupEventListeners();