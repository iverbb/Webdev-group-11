// Vilde

const data = [
  { dateLabel: '2019', title: 'Gathering Information' },
  { dateLabel: 'February 2017', title: 'Planning' },
  { dateLabel: 'March 2017', title: 'Design' },
  { dateLabel: 'April 2017', title: 'Content Writing and Assembly' },
  { dateLabel: 'May 2017', title: 'Coding' },
  { dateLabel: 'June 2017', title: 'Testing, Review & Launch' },
  { dateLabel: 'July 2017', title: 'Maintenance' }
];

new Vue({
  el: '#app', 
  data: {
    steps: data,
  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      //pagination: '.swiper-pagination',
      slidesPerView: 3,
      paginationClickable: true,
      grabCursor: true,
      paginationClickable: true,
      nextButton: '.next-slide',
      prevButton: '.prev-slide',
    });    
  }
})

/*var img = new Image();
img.src = "../p1 and p2/img/P1/logo_rett.png"
img.onclick = function() {
    window.location.href = "hjem.html";
};
document.body.appendChild(img);*/

/*const projects = [
    {
      text: "Hordatun",
      endpoint: "hjem.html",
    },
    {
      text: "Meto",
      endpoint: "prosjekt_prosjekttype_test.html",
    },
    {
      text: "Almerket",
      endpoint: "paa_tegnebordet.html",
    },
    {
      text: "Om oss",
      endpoint: "om_oss.html",
    },
    {
      text: "Kontakt",
      endpoint: "kontakt.html",
    },
  ];*/ 

  // dette ^ kan gjøres med link i html tror jeg

  /*data =
    {
        imagePath: "../img",
        name: "navn",
        year: "årstall",
        files:
            [
                {
                    fileName: "naering_hordatun.jpg",
                    name: "Hordatun",
                    year: "2010",
                },
                {
                    fileName: "bolig_meto.jpg",
                    name: "METO",
                    year: "2012",
                },
                {
                    fileName: "bolig_ryggstraen_01.jpg",
                    name: "Ryggstraen",
                    year: "2012",
                },
                {
                    fileName: "ideer_pedersgata_01.jpg",
                    name: "Tou camp",
                    year: "2012",
                },
                {
                    fileName: "naering_mellombygget_01.jpg",
                    name: "Mellombygget",
                    year: "2013",
                },
                {
                    fileName: "fritidsbolig_li.jpg",
                    name: "Li",
                    year: "2013",
                },
                {
                    fileName: "naering_zetlitzveien.JPG",
                    name: "Zetlitzveien",
                    year: "2015",
                },
                {
                    fileName: "naering_dansesaler.jpg",
                    name: "Dansesaler",
                    year: "2015",
                },
                {
                    fileName: "fritidsbolig_sele.jpg",
                    name: "Sele",
                    year: "2016",
                },
                {
                    fileName: "naering_sok_camping.jpg",
                    name: "Sokn camping",
                    year: "2017",
                },
            ]
    }

    const DATA = [
        {
          year: '2004',
          title: 'This is a test title',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2005',
          title: 'This is a test title 2',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '1990',
          title: 'This is a test title 3',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2018',
          title: 'This is a test title 4',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2005',
          title: 'This is a test title 2',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '1990',
          title: 'This is a test title 3',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2018',
          title: 'This is a test title 4',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2018',
          title: 'This is a test title 4',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2005',
          title: 'This is a test title 2',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '1990',
          title: 'This is a test title 3',
          image: 'https://picsum.photos/600/400'
        },
        {
          year: '2018',
          title: 'This is a test title 4',
          image: 'https://picsum.photos/600/400'
        },
  ];


function buildTimeline() {
    if(document.getElementById('timeline')) {
    let timeline = new Timeline('timeline', DATA);
    timeline.init();
    }
}*/

