function convertMarkdown(){

  let text = document.getElementById("markdown-input").value;
  
  text = text.replace(/^### (.*$)/gim, "<h3>$1</h3>");
  text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");
  text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");

  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");

  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  text = text.replace(/^\s*> (.*$)/gim, "<blockquote>$1</blockquote>");

  return text;
}

const markInput= document.getElementById("markdown-input");
const htmlOutput= document.getElementById("html-output");

markInput.addEventListener("input", () => {
  htmlOutput.textContent= convertMarkdown(markInput.value);
});

const preview = document.getElementById("preview");
const downInput= document.getElementById("markdown-input");

downInput.addEventListener("input",() => {
  preview.innerHTML = convertMarkdown(markInput.value);
})
