const containerTimeLineExperiencesProfessionnelles = document.querySelector('#container-timeline-experiences-professionnelle');

const timelineData = {
    SaintMaurdesFossés: {
        logo: 'asset/entreprises/Saint-Maur-des-Fossés.png',
        date: '2023-2023',
        title: 'Stage développeur VBA',
        subtitle: 'Mairie de Saint Maur des Fossés',
        description: [
            "Recueil du besoin des utilisateurs",
            "Réalisations / modifications de macro VBA"
        ],
        skills: ['Excel','VBA'],
    },
    coachinternet: {
        logo: 'asset/entreprises/coachinternet.png',
        date: '2022-2022',
        title: 'Stage développeur frontend',
        subtitle: 'Coachinternet',
        description: [
            "Recueil du besoin des utilisateurs",
            "Réalisations / modifications sur les sites web des clients"
        ],
        skills: ['HTML / CSS / JS','Wordpress'],
    },
    rte: {
        logo: 'asset/entreprises/rte.png',
        date: '2019-2020',
        title: 'Stage technicien informatique',
        subtitle: 'RTE',
        description: [
            "Création de plateformes d'essai",
            "Installation de machines virtuelles"
        ],

        skills: ['Plateformes d\'essai', 'Machines virtuelles'],
    },
};


function afficherTimeline() {

    containerTimeLineExperiencesProfessionnelles.innerHTML = '';

  
    for (const key in timelineData) {
        if (timelineData.hasOwnProperty(key)) {
            const event = timelineData[key];

            containerTimeLineExperiencesProfessionnelles.insertAdjacentHTML('beforeend', `
            <div class="timeline-item">
                <div class="timeline-logo">
                <img src="${event.logo}" alt="Logo">
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">${event.date}</div>
                    <div class="timeline-title">${event.title}</div>
                    <div class="timeline-subtitle">${event.subtitle}</div>
                    <div class="timeline-description">
                        ${event.description.map(desc => `<p>${desc}</p>`).join('')}
                    </div>
                    <div class="skills-tags">
                        ${event.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            </div>
            `);

        }
    }
}

// Appelle la fonction pour afficher toute la timeline
afficherTimeline();
