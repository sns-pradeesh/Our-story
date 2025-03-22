document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = [
        {
            image: "images/Abinaya.webp",
            name: "Abinaya Narayanan",
            role: "Associate Developer",
            description: "Connecting solutions with success.",
            linkedin: "https://www.linkedin.com/in/abinaya-narayanan",
            github: "https://github.com/Abinayanarayanan"
        },
        {
            image: "images/Karthi.png",
            name: "Karthi S",
            role: "Associate Developer",
            description: "Where logic meets creativity",
            linkedin: "https://www.linkedin.com/in/karthi-s-78b9bb228/",
            github: "https://github.com/Karthi788"
        },
        {
            image: "images/Johann.webp",
            name: "Johann Manuel Kenneth",
            role: "Associate Developer",
            description: "Code’s my language, chaos my playground",
            linkedin: "https://www.linkedin.com/in/johann-kenneth0518/",
            github: "https://github.com/Johann-Kenneth"
        },
        {
            image: "images/Nandhini.webp",
            name: "Nandhini P",
            role: "Finance",
            description: "Bridging the gap between data and dollars",
            linkedin: "http://www.linkedin.com/in/nandhini-",
            github: "https://github.com/nandhini-palanimuthu"
        },
        {
            image: "images/Dhanush.webp",
            name: "Dhanush Kumar E",
            role: "Associate Designer",
            description: "I adore orchestrating visual experiences.",
            linkedin: "https://www.linkedin.com/in/dhanushkumarwebdeveloper",
            github: "https://github.com/Dhanush-dk2003/"
        }
    ];

    const cardList = document.getElementById("card-list");

    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
            <p>${member.description}</p>
            <div class="social-icons">
                <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        `;

        cardList.appendChild(card);
    });
});
