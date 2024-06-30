---
title: Open-Source Phase Retrieval
toc: false
style: css/custom.css
---

```js
const py4dstem_svg = FileAttachment(
  "data/py4dstem-phase-retrieval.svg",
).image();

const img_Ti = FileAttachment("data/mat-sci-examples_Ti.png").href;
const img_hBN = FileAttachment("data/mat-sci-examples_hBN.png").href;
const img_Au = FileAttachment("data/mat-sci-examples_Au-Carbon.png").href;
const img_STO_top = FileAttachment("data/mat-sci-examples_STO-top.png").href;
const img_STO_middle = FileAttachment(
  "data/mat-sci-examples_STO-middle.png",
).href;
const img_STO_bottom = FileAttachment(
  "data/mat-sci-examples_STO-bottom.png",
).href;
const img_coreshell_top = FileAttachment(
  "data/mat-sci-examples_core-shell-top.png",
).href;
const img_coreshell_middle = FileAttachment(
  "data/mat-sci-examples_core-shell-middle.png",
).href;
const img_coreshell_bottom = FileAttachment(
  "data/mat-sci-examples_core-shell-bottom.png",
).href;
const img_style = "object-fit:contain;";

import { return_resized_img } from "./components/ImageUtilities.js";
```

# Open-Source Phase Retrieval

<div id="py4dstem-container"> ${py4dstem_svg} </div>

- Suite of phase retrieval algorithms, including iterative DPC, **ptychography**, and parallax (tc-BF)
- User-friendly, object-oriented code
  - Check out our tutorial notebooks[^1] and recent preprint[^2]
  - Dataset credit[^3]

:::card

```python
ptycho = py4DSTEM.process.phase.SingleslicePtychography(
    datacube=dataset,
    # device = 'gpu', # GPU acceleration
    energy = 80e3,
    semiangle_cutoff = 21.4, # mrad
).preprocess(
    plot_center_of_mass = False,
).reconstruct(
    num_iter = 8,
    step_size = 0.5,
    gaussian_filter_sigma = 0.2,
).visualize(
)
```

:::

<details open>
  <summary> Materials-Science Example Reconstructions </summary>
<div class="grid grid-cols-3" style="grid-auto-rows: auto;">
  <div class="img-container" style="min-height:300px;">
    Ti islands on graphene
    ${resize((width,height)=> return_resized_img(img_Ti,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    few-layer hBN
    ${resize((width,height)=> return_resized_img(img_hBN,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    Au nanoparticles
    ${resize((width,height)=> return_resized_img(img_Au,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    STO bottom-layer
    ${resize((width,height)=> return_resized_img(img_STO_bottom,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    STO middle-layer
    ${resize((width,height)=> return_resized_img(img_STO_middle,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    STO top-layer
    ${resize((width,height)=> return_resized_img(img_STO_top,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    Core-shell bottom-layer
    ${resize((width,height)=> return_resized_img(img_coreshell_bottom,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    Core-shell middle-layer
    ${resize((width,height)=> return_resized_img(img_coreshell_middle,width,height-16,img_style))}
  </div>
  <div class="img-container" style="min-height:300px;">
    Core-shell top-layer
    ${resize((width,height)=> return_resized_img(img_coreshell_top,width,height-16,img_style))}
  </div>
</div>
Sample & Imaging credit: K.Reidy, D. Byrne, F. Allen, B. Cohen, H. Shih, E. Hoglund, C. Ophus, S. Ribet
</details>

[^1]: https://github.com/py4dstem/py4DSTEM_tutorials/tree/main/notebooks

[^2]: Iterative Phase Retrieval Algorithms for Scanning Transmission Electron Microscopy, [arXiv:2309.05250](https://arxiv.org/abs/2309.05250)

[^3]: 4D-STEM dataset used was recorded by Zhen Chen, at Cornell: [Electron ptychography of 2D materials to deep sub-ångström resolution](https://www.nature.com/articles/s41586-018-0298-5)
