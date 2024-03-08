import { toPng, toBlob } from "html-to-image";
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
  await toPng(document.getElementById(item)).then(function (dataUrl) {
    callback(dataUrl);
  });
}

export async function createBlob(item, callback) {
  toBlob(document.getElementById(item)).then(function (blob) {
    callback(blob);
  });
}

export async function sharePoster(url) {
  const filesArr = await convertToBlob(url);

  try {
    navigator.share({
      files: filesArr,
    });
    console.log("Shared successfully");
  } catch (err) {
    console.error("error:", err.message);
  }
}

async function convertToBlob(url) {
  const blob = await (await fetch(url)).blob();
  const filesArr = [new File([blob], "MyLineup.png", { type: blob.type })];
  return filesArr;
}

export async function downloadPoster(url) {
  download(url, "Lineup.png");
}
