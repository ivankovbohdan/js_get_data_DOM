var t=document.querySelectorAll(".population"),e=0,o=0;t.forEach(function(t){var o=t.textContent.replaceAll(",","");e+=+o}),o=e/t.length,document.querySelector(".total-population").textContent=e.toLocaleString(),document.querySelector(".average-population").textContent=o.toLocaleString();
//# sourceMappingURL=index.ab364e94.js.map
