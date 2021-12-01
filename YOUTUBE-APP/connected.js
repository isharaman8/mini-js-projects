let id;
const key = `AIzaSyDoLi_yCEePdvNHBn3VcIfT9NOiJ1t2qR4`;

const searchVideos = async (query) => {
	const string = document.querySelector("#navSearch").value;
	if (!(string || query)) {
		try {
			let popularUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&key=${key}&maxResults=20`;
			let popApi = await fetch(popularUrl);
			let popData = await popApi.json();
			const { items } = popData;
			appendData(items);
			console.log(popData);
		} catch (err) {
			console.log(err);
		} finally {
			return;
		}
	}
	let url = `https://youtube.googleapis.com/youtube/v3/search?q=${
		query || string
	}&type=video&key=${key}&part=snippet&maxResults=20`;
	let api = await fetch(url);
	let data = await api.json();
	const { items } = data;
	console.log(items);
	appendData(items, "container");
};

const appendData = (items) => {
	document.getElementById(`container`).innerHTML = "";
	items.forEach(
		({
			id: { videoId },
			id: myId,
			snippet: {
				channelTitle,
				description,
				publishTime,
				publishedAt,
				thumbnails: {
					high: { url },
				},
				title,
			},
		}) => {
			// CREATING ELEMENTS
			const mainDiv = document.createElement("div");
			const textDiv = document.createElement("div");
			const videoTitle = document.createElement("h4");
			const dateTime = document.createElement("p");
			const thumbnail = document.createElement("img");
			const channelName = document.createElement("p");

			// SETTING ATTRIBUTES AND TEXT CONTENTS
			videoTitle.textContent = title;
			dateTime.textContent = `Uploaded on: ${publishTime || "not known"}`;
			thumbnail.src = url;

			channelName.textContent = channelTitle;
			textDiv.append(videoTitle, channelName, dateTime);
			textDiv.classList.add("videoTextDiv");
			mainDiv.append(thumbnail, textDiv);
			mainDiv.classList.add("videoMainDiv");
			mainDiv.addEventListener("click", () => {
				watchVideo(
					videoId,
					myId,
					channelTitle,
					description,
					publishTime,
					publishedAt,
					title
				);
			});

			document.querySelector("#container").append(mainDiv);
		}
	);
};

const watchVideo = async (
	vId,
	mId,
	channelTitle,
	description,
	publishTime,
	publishedAt,
	title
) => {
	document.getElementById("container").innerHTML = "";
	document.title = title;
	// CREATING ELEMENTS
	let myFrame = `
			<iframe width="620" height="330" src="https://www.youtube.com/embed/${
				vId || mId
			}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			`;
	const channelTitleTag = document.createElement("h5");
	const descriptionTag = document.createElement("p");
	const dateTag = document.createElement("p");
	const vTitleTag = document.createElement("h4");
	const showMoreText = document.createElement("p");
	const showLessText = document.createElement("p");
	const mainDiv = document.createElement("div");
	const sideRecommendationDiv = document.createElement("div");

	showMoreText.textContent = "Show More";
	showMoreText.id = "showMoreText";
	showLessText.textContent = "Show Less";
	showLessText.id = "showLessText";
	showMoreText.addEventListener("click", showMore);
	showLessText.addEventListener("click", showLess);
	sideRecommendationDiv.id = "sideRecommendations";

	const textDiv = document.createElement("div");
	const iframeDiv = document.createElement("div");

	// setting attributes and text contents
	channelTitleTag.textContent = channelTitle;
	descriptionTag.textContent = `${description}`;
	descriptionTag.id = "description";
	dateTag.textContent = `Uploaded on: ${publishTime || publishedAt}`;
	vTitleTag.textContent = title;
	iframeDiv.innerHTML = myFrame;
	textDiv.classList.add("bigTextDiv");
	mainDiv.classList.add("bigMainDiv");

	// appending
	textDiv.append(
		vTitleTag,
		channelTitleTag,
		showMoreText,
		descriptionTag,
		dateTag
	);
	mainDiv.append(iframeDiv, textDiv, showLessText);
	document.getElementById("container").append(mainDiv, sideRecommendationDiv);

	let url = `https://youtube.googleapis.com/youtube/v3/search?q=${title}&type=video&key=${key}&part=snippet&maxResults=20`;
	let api = await fetch(url);
	let data = await api.json();
	showSideRecommendations(data.items);
};
const showSideRecommendations = (items) => {
	document.getElementById(`sideRecommendations`).innerHTML = "";
	items.forEach(
		({
			id: { videoId },
			id: myId,
			snippet: {
				channelTitle,
				description,
				publishTime,
				publishedAt,
				thumbnails: {
					high: { url },
				},
				title,
			},
		}) => {
			// CREATING ELEMENTS
			const mainDiv = document.createElement("div");
			const textDiv = document.createElement("div");
			const videoTitle = document.createElement("h4");
			const dateTime = document.createElement("p");
			const thumbnail = document.createElement("img");
			const channelName = document.createElement("p");

			// SETTING ATTRIBUTES AND TEXT CONTENTS
			videoTitle.textContent = title;
			dateTime.textContent = `Uploaded on: ${publishTime || "not known"}`;
			thumbnail.src = url;
			channelName.textContent = channelTitle;
			textDiv.append(videoTitle, channelName, dateTime);
			textDiv.classList.add("sideTextDiv");
			mainDiv.append(thumbnail, textDiv);
			mainDiv.classList.add("sideMainDiv");
			mainDiv.addEventListener("click", () => {
				watchVideo(
					videoId,
					myId,
					channelTitle,
					description,
					publishTime,
					publishedAt,
					title
				);
			});
			document.querySelector("#sideRecommendations").append(mainDiv);
		}
	);
};
let allCategories = document.querySelectorAll("#categories > button");
for (const button of allCategories) {
	button.addEventListener("click", () => {
		searchVideos(button.id);
		document.title = "YouTube";
	});
}
const showMore = () => {
	document.querySelector("#description").style.display = "block";
	document.querySelector("#showMoreText").style.display = "none";
	document.querySelector("#showLessText").style.display = "block";
};
const showLess = () => {
	document.querySelector("#description").style.display = "none";
	document.querySelector("#showMoreText").style.display = "block";
	document.querySelector("#showLessText").style.display = "none";
};
document.querySelector("#navSearchDiv > img").addEventListener("click", () => {
	document.querySelector("#navSearch").value = "";
	document.title = "YouTube";
	searchVideos();
});

searchVideos();
// const debouncing = (func, delay) => {
// 	clearTimeout(id);
// 	id = setTimeout(() => {
// 		func();
// 	}, delay);
// };
