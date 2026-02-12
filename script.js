const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factList = document.querySelector(".facts-list");

//create DOM elements
factList.innerHTML = "";

//Load data from supabase
loadFacts();
async function loadFacts(){
    const response = await fetch("https://jwuqyynkyzpkndktfowv.supabase.co/rest/v1/facts", {
    headers: {
        apikey: 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dXF5eW5reXpwa25ka3Rmb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMzA1MzksImV4cCI6MjA4MzgwNjUzOX0.MNYvo9zjsehhOYX9filkpdoQALnCphSw8o_td_sykOE",
        authorization: 
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dXF5eW5reXpwa25ka3Rmb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyMzA1MzksImV4cCI6MjA4MzgwNjUzOX0.MNYvo9zjsehhOYX9filkpdoQALnCphSw8o_td_sykOE",
    },
});
const data = await response.json();
createFactsList(data);
}




function createFactsList(dataArray) {
    const htmlArr = dataArray.map(
    (fact) => `<li class="facts">
     <p>
        ${fact.text}
        <a href="${fact.source}" target="_blank" class="source">Source</a>   
     </p>
        <span class="tag" style="background-color: #3b82f6;">${fact.category}</span>
     </li>`);

const html = htmlArr.join("");
factList.insertAdjacentHTML("afterbegin", html);
}



//toggle form visibility
btn.addEventListener('click', function() {
    if(form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close";
    } else {
        form.classList.add("hidden");
        btn.textContent = 'Share a fact';
    }
});
