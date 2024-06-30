---
title: Imaging Magnetic Textures
toc: false
style: css/custom.css
---

```js
const vfet_img = FileAttachment("data//vector-field-tomography.png").image();
```

# Imaging Magnetic Textures

- Accelerated electron beams interacting with thin specimen acquire phase-shifts:

```tex
\begin{aligned}

\phi\left(\boldsymbol{r}_{\perp}\right) &= \phi_e\left(\boldsymbol{r}_{\perp}\right) + \phi_m \left(\boldsymbol{r}_{\perp}\right) \\
&= \frac{e}{\hbar v} \int_L V(\boldsymbol{r}_{\perp},z) dz - \frac{e}{\hbar} \int_L \boldsymbol{A}(\boldsymbol{r}_{\perp},z) \cdot d \boldsymbol{r}
\end{aligned}
```

- Challenges:
  - Magnetic contribution is 3-4 orders of magnitude weaker!
  - Reconstructing 3D vector potential requires multiple tilt-series &rarr; vector tomography[^1]

<div class="card" style="background: white;">
  <div id="py4dstem-container"> ${vfet_img} </div>
</div>

[^1]: [D Wolf et al., Nat. Nano. 17 250-255 (2022)](https://www.nature.com/articles/s41565-021-01031-x)
