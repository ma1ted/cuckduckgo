//> body backgroundColor #1c1c1c

document.querySelector("link[type='text/css']").remove();

const logo = document.createElement("div")
logo.id = "LOGO";
document.querySelector("span.header").insertAdjacentElement("beforebegin", logo);
document.querySelector("span.header").remove();
logo.style.maxWidth = "12.5em";
logo.innerHTML=`<svg viewBox="0 0 205 165" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<defs>
  <clipPath id="a">
    <circle cx="127.33" cy="78.97" r="52"/>
  </clipPath>
  <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="1893.32" y1="-2381.98" x2="1901.89" y2="-2381.98" gradientTransform="matrix(1 0 0 -1 -1788 -2321)">
    <stop offset=".01" stop-color="#6176b9"/>
    <stop offset=".69" stop-color="#394a9f"/>
  </linearGradient>
  <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="1920.27" y1="-2379.37" x2="1928.08" y2="-2379.37" gradientTransform="matrix(1 0 0 -1 -1788 -2321)">
    <stop offset=".01" stop-color="#6176b9"/>
    <stop offset=".69" stop-color="#394a9f"/>
  </linearGradient>
  <path id="d" d="M22.56 180.57v-24.6h8.92c8.49 0 12.35 6.24 12.35 12.04 0 6.25-3.82 12.56-12.35 12.56h-8.92zm2.84-2.83h6.08c6.57 0 9.52-4.9 9.52-9.77 0-4.46-2.98-9.27-9.52-9.27H25.4v19.04zm29.66 3.12c-4.56 0-7.5-3.14-7.5-8v-9.55h2.65v9.52c0 3.5 2.04 5.58 5.45 5.58 3.2-.03 5.51-2.48 5.51-5.83v-9.27h2.66v17.26H61.4l-.15-3-.41.52a7.2 7.2 0 0 1-5.8 2.77zm21.73.03c-4.5 0-9.02-2.77-9.02-8.95 0-5.35 3.62-8.94 9.02-8.94 2.36 0 4.43.84 6.16 2.5l-1.67 1.73a6.53 6.53 0 0 0-4.42-1.72c-3.77 0-6.4 2.65-6.4 6.43 0 4.45 3.2 6.44 6.36 6.44 1.78 0 3.4-.63 4.58-1.79l1.73 1.74a8.8 8.8 0 0 1-6.34 2.56zm20.9-.32l-8.44-8.43v8.43h-2.62v-24.56h2.62v14.86l7.37-7.56h3.44l-8.14 8.14 9.13 9.09v.03z"/>
</defs>
<g transform="translate(-22.5 -18.75)">
  <g clip-path="url(#a)">
    <path d="M138.46 132.53c-2.51-4.88-4.91-9.37-6.4-12.34-3.96-7.93-7.94-19.11-6.13-26.32.33-1.31-3.73-48.51-6.6-50.03-3.19-1.7-10.12-3.94-13.71-4.54-2.5-.4-3.07.3-4.12.46.99.1 5.7 2.42 6.61 2.55-.91.62-3.6-.02-5.32.74-.87.4-1.52 1.88-1.5 2.58 4.9-.5 12.56-.01 17.1 2-3.61.41-9.09.87-11.45 2.11-6.84 3.6-9.86 12.03-8.06 22.13 1.79 10.08 9.72 46.85 12.25 59.13 2.52 12.27 31.51 9.7 27.32 1.53z" fill="#D5D7D8"/>
    <path d="M142.1 133.72c-3.01-5.97-6.08-11.68-7.86-15.22-3.97-7.94-7.93-19.11-6.13-26.32.34-1.31.34-6.67 1.43-7.38 8.41-5.5 7.81-.19 11.19-2.65 1.74-1.27 3.13-2.8 3.74-4.9 2.16-7.58-3-20.77-8.78-26.54-1.88-1.88-4.76-3.06-8.02-3.68-1.25-1.72-3.27-3.36-6.13-4.89a28.86 28.86 0 0 0-18.27-2.88c1 .1 3.26 2.14 4.17 2.27-1.38.94-5.05.82-5.03 2.9 4.92-.5 10.3.28 14.84 2.3-3.6.4-6.96 1.3-9.31 2.54-6.86 3.6-8.66 10.81-6.86 20.91 1.81 10.1 9.74 46.88 12.26 59.13 2.53 12.26 32.5 11.8 28.77 4.41z" fill="#FFF"/>
  </g>
  <circle r="3.79" cx="112.8" cy="70.69" fill="#2D4F8E"/>
  <circle r=".98" cx="114.49" cy="69.43" fill="#FFF"/>
  <circle r="3.25" cx="138.12" cy="68.44" fill="#2D4F8E"/>
  <circle r=".84" cx="139.57" cy="67.36" fill="#FFF"/>
  <path fill="url(#b)" d="M113.89 59.72s-2.86-1.3-5.63.45c-2.77 1.74-2.67 3.52-2.67 3.52s-1.47-3.28 2.45-4.89c3.93-1.6 5.85.92 5.85.92z"/>
  <path fill="url(#c)" d="M140.08 59.46s-2.05-1.17-3.65-1.15c-3.27.04-4.16 1.48-4.16 1.48s.55-3.44 4.73-2.75a4.2 4.2 0 0 1 3.08 2.42z"/>
  <path fill="#FDD20A" d="M124.4 85.3c.38-2.3 6.3-6.63 10.5-6.9 4.2-.26 5.5-.2 9-1.04 3.51-.83 12.54-3.08 15.03-4.24 2.5-1.15 13.1.57 5.63 4.74-3.23 1.81-11.94 5.13-18.17 6.99-6.22 1.86-9.99-1.78-12.06 1.28-1.64 2.43-.33 5.76 7.1 6.45 10.04.93 19.66-4.52 20.72-1.62 1.06 2.9-8.62 6.5-14.52 6.62-5.9.11-17.78-3.9-19.56-5.14-1.79-1.23-4.16-4.13-3.67-7.14z"/>
  <g>
    <path fill="#65BC46" d="M128.94 115.6s-14.1-7.53-14.33-4.48c-.24 3.06 0 15.51 1.64 16.45 1.65.94 13.4-6.1 13.4-6.1l-.7-5.88zm5.4-.48s9.64-7.29 11.76-6.82c2.11.48 2.58 15.51.7 16.23-1.88.7-12.9-3.81-12.9-3.81l.45-5.6z"/>
    <path fill="#43A244" d="M125.53 116.39c0 4.93-.71 7.05 1.4 7.52 2.12.47 6.11 0 7.53-.94 1.4-.94.23-7.28-.24-8.46-.47-1.18-8.7-.24-8.7 1.88z"/>
    <path fill="#65BC46" d="M126.43 115.3c0 4.93-.71 7.04 1.4 7.51 2.11.48 6.1 0 7.52-.94 1.41-.94.24-7.28-.23-8.46-.47-1.18-8.7-.23-8.7 1.88z"/>
  </g>
</g>
<circle cx="104.8" cy="60.249" r="53.1" fill="none" stroke="#FFF" stroke-width="3.85"/>
<g fill="#FFF" transform="translate(-22.5 -18.75)">
  <use xlink:href="#d"/>
  <use xlink:href="#d" x="81.7"/>
  <path d="M196.72 181.03c-9.46 0-12.81-6.75-12.81-12.52-.02-3.77 1.25-7.13 3.58-9.47 2.3-2.3 5.47-3.52 9.2-3.52 3.36 0 6.53 1.27 8.93 3.6l-1.6 1.87a11.12 11.12 0 0 0-7.33-2.85c-6.86 0-9.98 5.37-9.98 10.36 0 4.91 3.1 9.88 10.05 9.88 2.53 0 4.88-.87 6.81-2.52l.1-.07v-6.07h-7.74v-2.48h10.28v9.65a12.47 12.47 0 0 1-9.5 4.14zm21.73-.14c-5.18 0-8.95-3.74-8.95-8.91 0-5.25 3.77-9.06 8.95-9.06 5.3 0 8.99 3.73 8.99 9.06 0 5.17-3.78 8.91-8.99 8.91zm.04-15.56c-3.73 0-6.33 2.74-6.33 6.65 0 3.73 2.65 6.43 6.3 6.43 3.7 0 6.32-2.64 6.35-6.43 0-3.85-2.66-6.65-6.32-6.65z"/>
</g>
</svg>`;



Element.prototype.setStyle = function(rule, value) {
    this.style[rule] = value;
    return this;
}

document.querySelector("html")
    .setStyle("height", "100%")

document.querySelector("body")
    .setStyle("height", "100%")
    .setStyle("margin", "0")
    .setStyle("backgroundColor", "#1c1c1c")

document.querySelector("center")
    .setStyle("height", "100%")
    .setStyle("margin", "0")
    .setStyle("display", "flex")
    .setStyle("flexDirection", "column")
    .setStyle("alignItems", "center")
    .setStyle("justifyContent", "center")
    .setStyle("gap", "1.5em")

document.querySelector("form")
    .setStyle("backgroundColor", "#333")
    .setStyle("color", "#eee")
    .setStyle("border", "1px solid #333")
    .setStyle("outline", "none")
    .setStyle("boxShadow", "0 1px 3px rgba(0,0,0,0.5)")
    .setStyle("borderRadius", "4px")
    .setStyle("height", "2.8em")
    .setStyle("display", "flex")

document.querySelector("input")
    .setStyle("background", "transparent")
    .setStyle("border", "none")
    .setStyle("outline", "none")
    .setStyle("margin", "0")
    .setStyle("height", "100%")
    .setStyle("color", "#eee")
    .setStyle("fontSize", "1.1em")
    .setStyle("padding", "0 0.75em")

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="11.4 -62.9 499.5 499.4" fill="#ccc" id="search-icon">
<path d="M502.4 6.5c11.3-11.2 11.3-29.4 0-40.7l-20.4-20.3c-11.2-11.2-29.5-11.2-40.8 0l-93.5 93.2c0 .1 0 .1-.1.2-84.3-54.9-198.5-45.6-272.6 28.1-84.8 84.6-84.8 221.6 0 306.1 84.9 84.5 222.5 84.5 307.3 0 74.6-74.4 83.5-189.4 26.8-273.6zM107.3 99.3c67-66.8 175.7-66.8 242.7 0 67.1 66.8 67.1 175.1 0 241.9-67 66.8-175.7 66.8-242.7 0-67.1-66.8-67.1-175.1 0-241.9z" />
</svg>`

document.querySelector("input.submit").insertAdjacentElement("beforebegin", submitButton)
document.querySelector("input.submit").remove();
document.querySelector("button[type='submit']")
    .setStyle("height", "100%")
    // .setStyle("width", "3em")
    .setStyle("border", "none")

submitButton.setStyle("backgroundColor", "#444")

document.querySelector("svg#search-icon")
    .setStyle("width", "1.5em")
    .setStyle("transform", "rotate(90deg)")
    .setStyle("padding", "0 .64em")