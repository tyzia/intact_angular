function changeText(): void {
    const message: string = "Hello, you clicked the button!";
    const paragraph = document.getElementById("demo");
    if (paragraph) {
        paragraph.innerHTML = message;
    }
    console.log("Text has been changed (TS).");
}
