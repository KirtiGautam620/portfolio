// ========== typing animation ==========

var typed = new Typed    (".typing", {
  strings: ["","Aspiring Software Developer", "CSE Student | Web Developer", "Freelance Web Developer | Programmer","Tech Enthusiast | AI & ML Learner","Junior Web Developer | Competitive Programmer","First-Year CSE Student | Future AI/ML Innovator"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
})

// ========== aside ==========

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i = 0; i < totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j = 0; j < totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
    }

