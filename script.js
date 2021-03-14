let projects = [
    {
        title: 'UrNotes',
        description: 'A simple note taking app using Node, Express, and MongoDB. Users can make their own account.',
        link: 'http://notes.patrickcs.com',
        gitHub: 'https://github.com/Patrogenic/notes_front_end',
        image: './images/Notes.png',
    },
    {
        title: 'Smooth Typing',
        description: 'A simple typing website in its early stages.',
        link: 'http://typing.patrickcs.com/',
        gitHub: 'https://github.com/Patrogenic/typing_website',
        image: './images/Typing.png',
    },
    {
        title: 'Weather App',
        description: 'I fetch the <a href="https://openweathermap.org/api">OpenWeather API</a> to get the current weather and forecast.',
        link: 'http://weather_app.patrickcs.com/',
        gitHub: 'Need to put this on github',
        image: './images/Weather-San Jose.png',
    },
    {
        title: 'Covid 19 Data',
        description: 'I fetch this <a href="https://covidtracking.com/data/api/version-2/">Covid 19 Data API</a> and display the data.',
        link: 'http://covid19_data.patrickcs.com',
        gitHub: 'https://github.com/Patrogenic/Fetching-Covid19-API',
        image: './images/Covid19_Data.png',
    },
];

function buildProjects(projects){
    let projectsContainer = document.getElementById('projects-container');

    for (let i = 0; i < projects.length; i++) {
        projectsContainer.appendChild(buildProjectElement(projects[i], i));
        projectsContainer.appendChild(document.createElement('hr'));
    }
}

function buildProjectElement(project, i){
    let projectContainer = buildDiv('project-container');
    let image = document.createElement('img');
    image.src = project.image;
    image.classList.add('image');

    let imgContainer = buildDiv('img-container');
    imgContainer.appendChild(image);

    let projectDetails = buildDiv('project-details');
    projectDetails.appendChild(buildDiv('project-title', project.title));
    projectDetails.appendChild(buildDiv('project-description', project.description));
    projectDetails.appendChild(buildOptionsEl(project));

    let projectDetailsContainer = buildDiv('project-details-container');
    projectDetailsContainer.appendChild(projectDetails);

    projectContainer.appendChild(imgContainer);
    projectContainer.appendChild(projectDetailsContainer);

    return projectContainer;
}

function buildOptionsEl(project){
    let options = buildDiv('options');
    let previewSite = buildDiv('btn');
    previewSite.id = 'preview-site-btn';

    previewSite.innerHTML = "Preview";
    previewSite.addEventListener('click', () => {
        document.getElementById('iframe').src = project.link;
        document.getElementById('iframe-wrapper').style.display = 'block';
    })
    previewSite.classList.add('btn');

    let visitSite = document.createElement('a');
    visitSite.href = project.link;
    visitSite.target = "_blank";
    visitSite.innerHTML = 'Visit Site';
    visitSite.classList.add('btn');

    let visitGitHub = document.createElement('a');
    visitGitHub.href = project.gitHub;
    visitGitHub.target = "_blank";
    visitGitHub.innerHTML = 'GitHub';
    visitGitHub.classList.add('btn');

    options.appendChild(previewSite);
    options.appendChild(visitSite);
    options.appendChild(visitGitHub);

    return options;
}

function buildDiv(styleClass, text = ''){
    let element = document.createElement('div');
    element.classList.add(styleClass);

    if(text.localeCompare('') !== 0){
        element.innerHTML = text;
    }

    return element;
}

document.getElementById('close-icon').addEventListener('click', () => {
    document.getElementById('iframe-wrapper').style.display = 'none';
    document.getElementById('iframe').src = "about:blank";
})

buildProjects(projects);