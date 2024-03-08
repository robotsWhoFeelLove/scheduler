import { toPng } from "html-to-image";
import download from "downloadjs";

export async function shareSchedule(url) {
  try {
    await navigator.share({
      title: " My Schedule",
      text: "Here's my lineup for the festival.",
      url,
    });
    console.log("Shared successfully");
  } catch (err) {
    console.error("error:", err.message);
  }
}

export async function createImage(item, callback) {
  toPng(document.getElementById(item)).then(function (dataUrl) {
    callback(dataUrl);
  });
}

export async function sharePoster(url) {
  try {
    await navigator.share({
      //   title: " My Poster",
      //   text: "Here's my lineup for the festival.",
      files: [url],
    });
    console.log("Shared successfully");
  } catch (err) {
    console.error("error:", err.message);
  }
}

export async function downloadPoster(url) {
  download(url, "Lineup.png");
}
