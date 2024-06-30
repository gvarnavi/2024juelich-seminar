---
title: Joint Cryogenic Ptychography
toc: false
style: css/custom.css
---

```js
const img_VLP = FileAttachment("data/joint-ptycho-tomo-VLP.svg").href;
const img_Apo = FileAttachment("data/joint-ptycho-tomo-Apo.svg").href;

const img_style = "object-fit:contain;";
import { return_resized_img } from "./components/ImageUtilities.js";
```

# Joint Cryogenic Ptychography

- "Serial" cryogenic ptychography: 4D-data &rarr; 2D images &rarr; 3D volume
  - Not maximally dose-efficient
- "Joint" cryogenic ptychography: 3D volume is reconstructed directly from 4D-data
  - Captures non-linear effects of propagator
  - Allows regularization in 3D

<div class="grid grid-cols-2" style="grid-auto-rows: auto;">
  <div class="card img-container" style="min-height:300px; background: var(--theme-foreground);">
    <div style="color: var(--theme-background);"> Virus-like particles </div>
    ${resize((width,height)=> return_resized_img(img_VLP,height-16,height-16))}
  </div>
  <div class="card img-container" style="min-height:300px; background: var(--theme-foreground);">
    <div style="color: var(--theme-background);"> Apoferritin proteins </div>
    ${resize((width,height)=> return_resized_img(img_Apo,height-16,height-16))}
  </div>
</div>
