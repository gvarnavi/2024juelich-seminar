---
title: Joint XMCD
toc: false
style: css/custom.css
---

```js
const serial_amp_img = FileAttachment("data/serial_XMCD_amp.png").href;
const serial_phase_img = FileAttachment("data/serial_XMCD_phase.png").href;
const joint_mag_real_img = FileAttachment("data/joint_XMCD_real_mag.png").href;
const joint_mag_imag_img = FileAttachment("data/joint_XMCD_imag_mag.png").href;
const joint_elec_real_img = FileAttachment(
  "data/joint_XMCD_real_elec.png",
).href;
const joint_elec_imag_img = FileAttachment(
  "data/joint_XMCD_imag_elec.png",
).href;

import { return_resized_img } from "./components/ImageUtilities.js";
```

# X-Ray Magnetic Circular Dichroism

- "Flipping" the magnetic contribution is a lot easier in XMCD
  - Two measurements with left and right circularly polarized X-Rays[^1]
  - The mathematics for the simultaneous updates is quite similar!

```js
const tab = view(
  Inputs.radio(["serial XMCD", "joint XMCD"], { value: "serial XMCD" }),
);
```

```js
function return_serial_tab() {
  return html`
    <div class="grid grid-cols-2" style="grid-auto-rows: auto;">
      <div class="img-container" style="min-height:300px;">
        Serial "amplitude" contrast
        ${resize((width, height) =>
          return_resized_img(serial_amp_img, "auto;", height - 16),
        )}
      </div>
      <div class="img-container" style="min-height:300px;">
        Serial "phase" contrast
        ${resize((width, height) =>
          return_resized_img(serial_phase_img, "auto;", height - 16),
        )}
      </div>
    </div>
  `;
}

function return_joint_tab() {
  return html`
    <div class="grid grid-cols-4" style="grid-auto-rows: auto;">
      <div class="img-container" style="min-height:300px;">
        Imaginary electronic index
        ${resize((width, height) =>
          return_resized_img(joint_elec_imag_img, "auto;", height - 16),
        )}
      </div>
      <div class="img-container" style="min-height:300px;">
        Real electronic index
        ${resize((width, height) =>
          return_resized_img(joint_elec_real_img, "auto;", height - 16),
        )}
      </div>
      <div class="img-container" style="min-height:300px;">
        Imaginary magnetic index
        ${resize((width, height) =>
          return_resized_img(joint_mag_imag_img, "auto;", height - 16),
        )}
      </div>
      <div class="img-container" style="min-height:300px;">
        Real magnetic index
        ${resize((width, height) =>
          return_resized_img(joint_mag_real_img, "auto;", height - 16),
        )}
      </div>
    </div>
  `;
}
```

```js
if (tab == "serial XMCD") {
  display(return_serial_tab());
} else if (tab == "joint XMCD") {
  display(return_joint_tab());
}
```

[^1]: [Soft X-ray phase nano-microscopy of micrometre-thick magnets, arXiv 2309.14969](https://arxiv.org/abs/2309.14969)
