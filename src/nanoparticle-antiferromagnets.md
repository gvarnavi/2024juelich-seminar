---
title: Nanoparticle Antiferromagnets
toc: false
style: css/custom.css
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

# Nanoparticle Antiferromagnets

- Consider an antiferromagnetic NiO sphere, ~6,500 atoms
  - Two orthogonal tilt-series, with twelve degree increments
- Need to enforce magnetic vector potential is divergence-free

```js
const checkboxes = view(
  Inputs.checkbox(["electrostatic", "magnetic", "combined"], {
    value: ["electrostatic"],
  }),
);
```

```js
function return_img(include, img_src, width) {
  if (include) {
    return return_resized_img(img_src, width);
  } else {
    return "";
  }
}
```

<div class="grid grid-cols-3">
  <div style="max-width:300px;">
    ${resize((width)=> return_img(checkboxes.includes("electrostatic"),img_src_e,width))}
  </div>
  <div style="max-width:300px;">
    ${resize((width)=> return_img(checkboxes.includes("magnetic"),img_src_m,width))}
  </div>
  <div style="max-width:300px;">
    ${resize((width)=> return_img(checkboxes.includes("combined"),img_src_em,width))}
  </div>
</div>
