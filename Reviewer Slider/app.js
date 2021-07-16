// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://s3.amazonaws.com/gazelle.cdn.yolocare.com/sites/467/2019/05/yolo-950x450-14.jpg",
      text:
        "I have had many websites since the early 90s. Most were like pulling teeth to get developed. Not so with the Thrive team. These guys are true professionals in every aspect.",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://t3.ftcdn.net/jpg/02/94/62/14/360_F_294621430_9dwIpCeY1LqefWCcU23pP9i11BgzOS0N.jpg",
      text:
        "We re-did our website twice in a 12 month period. There was no comparison between the first company and Thrive. Professional, Creative, Attentive to Detail, Excellent Communication…If I had contracted with Thrive the first time I would not have had to do it twice.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      text:
        "We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend Thrive to anyone looking to build a new website.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Matt Bowman & his team at Thrive are honest, genuine, creative & rare. Their design and overhaul of txproducts.com provided global visibility and credibility our small business needed for growth.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });