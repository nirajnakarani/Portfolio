/* ====== typing animation ===== */

var typed = new Typed(".typing" , {

    strings:[ "","web designer" , "Web Developer" , "Photographer"],
    typeSpeed:100,
    BackSpeed:200,
    loop:true
})

/* ====== Age ===== */
        // My birthday
        const birthday = new Date('2004-08-23');
        
        // Current date
        const today = new Date();

        // Calculate the age
        let age = today.getFullYear() - birthday.getFullYear();

        // Check if the birthday has not occurred yet this year
        const hasBirthdayPassed = today.getMonth() > birthday.getMonth() || 
                                  (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

        if (!hasBirthdayPassed) {
            age--;
        }

        // Display the age
        document.querySelector('.age').innerHTML = `${age} years`;

/* ====== Aside ===== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

      for(let i=0; i<totalNavList; i++)
      {
        const a= navList[i].querySelector("a");

        a.addEventListener("click" , function()
        {

         removeBackSection();

          for(j=0; j<totalNavList; j++)
          {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
              addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
          }
          this.classList.add("active")
          showSection(this);

          if(window.innerWidth < 1200)
          {
            asideSectionTogllerBtn();
          }

        })
      }

      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
          allSection[i].classList.remove("back-section");
        }
      }

      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }

      function showSection(element)
      {
        for(let i=0; i<totalSection; i++)
        {
          allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }

      function updateNav(element)
      {
        for (let i=0; i<totalNavList; i++)
        {
          navList[i].querySelector("a").classList.remove("active");
          const target = element.getAttribute("href").split("#")[1];

          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
          {
          navList[i].querySelector("a").classList.add("active");
          }
        }
      }
      document.querySelector(".hire-me").addEventListener("click" , function()
      {
        const sectionIndex = this.getAttribute("data-section-index");
        // console.log(sectionIndex);
       showSection(this);
       updateNav(this);
       removeBackSection();
       addBackSection(sectionIndex);
      })
      
/* ====== toggler ===== */ 
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");

            navTogglerBtn.addEventListener("click" , () =>
            {
              asideSectionTogllerBtn();
            })

            function asideSectionTogllerBtn ()
            {
              aside.classList.toggle("open");
              navTogglerBtn.classList.toggle("open");
              for(let i=0; i<totalSection; i++)
              {
                allSection[i].classList.toggle("open");
              }
            }

/* ====== fancybox ===== */ 
$('[data-fancybox]').fancybox({
  // Options will go here
  buttons : [
    'close'
  ],
  wheel : false,
  transitionEffect: "slide",
   // thumbs          : false,
  // hash            : false,
  loop            : true,
  // keyboard        : true,
  toolbar         : false,
  // animationEffect : false,
  // arrows          : true,
  clickContent    : false
});