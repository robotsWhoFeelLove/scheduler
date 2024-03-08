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
