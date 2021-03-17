let projects = [
    {
        title: 'UrNotes',
        description: 'A simple note taking app using Node, Express, and MongoDB. Users can make their own account.',
        link: 'https://notes.patrickcs.com',
        gitHub: 'https://github.com/Patrogenic/notes_front_end',
        image: './images/Notes.png',
        website: true,
    },
    {
        title: 'Smooth Typing',
        description: 'A simple typing website in its early stages.',
        link: 'https://typing.patrickcs.com/',
        gitHub: 'https://github.com/Patrogenic/typing_website',
        image: './images/Typing.png',
        website: true,
    },
    {
        title: 'Weather App',
        description: 'I fetch the <a href="https://openweathermap.org/api">OpenWeather API</a> to get the current weather and forecast.',
        link: 'https://weather.patrickcs.com/',
        gitHub: 'Need to put this on github',
        image: './images/Weather-San Jose.png',
        website: true,
    },
    {
        title: 'Covid 19 Data',
        description: 'I fetch this <a href="https://covidtracking.com/data/api/version-2/">Covid 19 Data API</a> and display the data.',
        link: 'https://covid19-data.patrickcs.com',
        gitHub: 'https://github.com/Patrogenic/Fetching-Covid19-API',
        image: './images/Covid19_Data.png',
        website: true,
    },
    {
        title: 'Tetris',
        description: 'Description',
        link: '',
        gitHub: 'https://github.com/Patrogenic/tetris',
        image: './images/Tetris.png',
        website: false,
    },
    {
        title: '2D Shooter',
        description: 'Description',
        link: '',
        gitHub: 'https://github.com/Patrogenic/2D-Shooter',
        image: './images/2D_Shooter.png',
        website: false,
    },
];

function buildProjects(projects){
    let projectsContainer = document.getElementById('projects-container');

    for (let i = 0; i < projects.length; i++) {
        projectsContainer.appendChild(buildProjectElement(projects[i], i));
        if(i !== 5){
            projectsContainer.appendChild(document.createElement('hr'));
        }
        if(i === 3){
            let otherProjectsHeading = document.createElement('div');
            otherProjectsHeading.classList.add('projects-heading');
            otherProjectsHeading.innerHTML = 'Java Projects';

            projectsContainer.appendChild(otherProjectsHeading);
        }
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
    let visitGitHub = document.createElement('a');

    if(project.website){
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

        options.appendChild(previewSite);
        options.appendChild(visitSite);
    }else{
        visitGitHub.title = "Download on GitHub";
    }

    visitGitHub.href = project.gitHub;
    visitGitHub.target = "_blank";
    visitGitHub.innerHTML = 'GitHub';
    visitGitHub.classList.add('btn');

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