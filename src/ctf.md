---
title: Transfer of Information
toc: false
style: css/custom.css
---

```js
const bio_fft_img = FileAttachment("data/biological_crystals-recon.png").href;

const ctf_00_img = FileAttachment("data/ctf_00.svg").href;
const ctf_01_img = FileAttachment("data/ctf_01.svg").href;
const ctf_02_img = FileAttachment("data/ctf_02.svg").href;
const ctf_03_img = FileAttachment("data/ctf_03.svg").href;
const ctf_04_img = FileAttachment("data/ctf_04.svg").href;

import { return_resized_img } from "./components/ImageUtilities.js";
```

# Transfer of Information

<details open>

  <summary> Different phase retrieval methods &rarr; different transfer of information </summary>
    <div class="card" style="background: var(--theme-foreground);">
      <div class="img-container">
        ${resize((width) =>
          return_resized_img(bio_fft_img, 0.85*width,"auto;"),
        )}
      </div>
      <div style="color: var(--theme-background);"> Sample (purple membrane, bacteria crystal) & Imaging credit: B. Küçükoglu </div>
    </div>

</details>

```js
const tab_input = Inputs.radio(
  [
    "CTF",
    "inverse random error",
    "CTF / random error",
    "line traces",
    "phase diagram",
  ],
  { value: "CTF" },
);
const tab = Generators.input(tab_input);
```

```js
function return_ctf_tab() {
  return html`
    <details>
      <summary>Information transfer models</summary>
      ${tab_input}
      <div class="card" style="background: var(--theme-foreground);">
        <div class="img-container">
          ${resize((width) =>
            return_resized_img(ctf_00_img, 0.85 * width, "auto;"),
          )}
        </div>
      </div>
    </details>
  `;
}

function return_error_tab() {
  return html`
    <details open>
      <summary>Information transfer models</summary>
      ${tab_input}
      <div class="card" style="background: var(--theme-foreground);">
        <div class="img-container">
          ${resize((width) =>
            return_resized_img(ctf_01_img, 0.85 * width, "auto;"),
          )}
        </div>
      </div>
    </details>
  `;
}

function return_ratio_tab() {
  return html`
    <details open>
      <summary>Information transfer models</summary>
      ${tab_input}
      <div class="card" style="background: var(--theme-foreground);">
        <div class="img-container">
          ${resize((width) =>
            return_resized_img(ctf_02_img, 0.85 * width, "auto;"),
          )}
        </div>
      </div>
    </details>
  `;
}

function return_line_traces_tab() {
  return html`
    <details open>
      <summary>Information transfer models</summary>
      ${tab_input}
      <div class="card" style="background: var(--theme-foreground);">
        <div class="img-container">
          ${resize((width) =>
            return_resized_img(ctf_03_img, 0.85 * width, "auto;"),
          )}
        </div>
      </div>
    </details>
  `;
}

function return_phase_diagram_tab() {
  return html`
    <details open>
      <summary>Information transfer models</summary>
      ${tab_input}
      <div class="card" style="background: var(--theme-foreground);">
        <div class="img-container">
          ${resize((width) =>
            return_resized_img(ctf_04_img, 0.85 * width, "auto;"),
          )}
        </div>
      </div>
    </details>
  `;
}
```

```js
if (tab == "CTF") {
  display(return_ctf_tab());
} else if (tab == "inverse random error") {
  display(return_error_tab());
} else if (tab == "CTF / random error") {
  display(return_ratio_tab());
} else if (tab == "line traces") {
  display(return_line_traces_tab());
} else if (tab == "phase diagram") {
  display(return_phase_diagram_tab());
}
```
