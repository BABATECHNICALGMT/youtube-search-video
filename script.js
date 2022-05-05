const btn = document.querySelector(".btn .button");
let h2 = document.getElementById("h2");

// add event
const key = ""; // api key
const baseUrl = "https://www.googleapis.com/youtube/v3/search?key";
const maxResults = 10;

const sendData = () => {
	const searchBox = document.querySelector(".failds .search").value;

	const createUrl = `${baseUrl}=${key}&type=videos&part=snippet&maxResults=${maxResults}&q=${searchBox}`;

	let arr = [];
	fetch(createUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			data.items.forEach((items) => {
				arr.push(items.id.videoId);
			});
			const videoD = document.querySelector(".container .videoD");
			for (let i = 0; i < arr.length; i++) {
				let video = `<iframe width="360" height="200" src="https://www.youtube.com/embed/${arr[i]}" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
				videoD.innerHTML = video;

				// console.log(arr[i][o]);
			}
		})
		.catch(function (error) {
			console.log("error");
		});
};

btn.addEventListener("click", (e) => {
	e.preventDefault();
	h2.style.display = "block";
	sendData();
});
