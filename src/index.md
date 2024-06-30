---
toc: false
style: css/index.css
---

```js
// IMAGES
const img_src_e = FileAttachment(
  "./data/electrostatic-near-midnight-cropped-animated.gif",
).href;
const img_src_m = FileAttachment(
  "./data/magnetic-near-midnight-cropped-animated.gif",
).href;
const img_src_em = FileAttachment(
  "./data/combined-near-midnight-cropped-animated.gif",
).href;

import { return_resized_img } from "./components/ImageUtilities.js";
```

:::hero

# Phase Retrieval Algorithms for Inverse Scattering Problems in S/TEM

:::

<div class="grid grid-cols-3" style="grid-auto-rows: auto;">
  <div class="img-container" style="min-height:250px;">
    ${resize((width,height)=> return_resized_img(img_src_e,Math.min(width,height)))}
  </div>
  <div class="img-container" style="min-height:250px;">
    ${resize((width,height)=> return_resized_img(img_src_m,Math.min(width,height)))}
  </div>
  <div class="img-container" style="min-height:250px;">
    ${resize((width,height)=> return_resized_img(img_src_em,Math.min(width,height)))}
  </div>
</div>

::: hero

Georgios Varnavides | National Center for Electron Microscopy  
Follow along! https://gvarnavides.com/2024juelich-seminar/

:::
