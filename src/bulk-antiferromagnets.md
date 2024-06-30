---
title: Bulk Antiferromagnets
toc: false
style: css/custom.css
---

```js
const model_img = FileAttachment("data/NiO-bulk_atomic-model.svg").image();
const gt_img = FileAttachment("data/NiO-bulk_ground-truth.png").image();
const serial_img = FileAttachment("data/NiO-bulk_naive-recon.png").image();
const joint_img = FileAttachment("data/NiO-bulk_joint-recon.png").image();
```

# Bulk Antiferromagnets

```js
const tab = view(
  Inputs.radio(
    ["model", "ground truth", "serial reconstruction", "joint reconstruction"],
    { value: "model" },
  ),
);
```

```js
function return_model_tab() {
  return html`
    <ul>
      <li>Consider bulk antiferromagnetic NiO</li>
      <ul>
        <li>
          ${tex`Ni_{\uparrow}`} (pink) spins up and ${tex`Ni_{\downarrow}`}
          (green) spins up aligned on alternating [111] planes
        </li>
      </ul>
    </ul>

    <div class="card" style="background: var(--theme-foreground);">
      <div id="py4dstem-container">${model_img}</div>
    </div>
  `;
}

function return_gt_tab() {
  return html`
    <ul>
      <li>Consider bulk antiferromagnetic NiO</li>
      <ul>
        <li>
          ${tex`Ni_{\uparrow}`} (pink) spins up and ${tex`Ni_{\downarrow}`}
          (green) spins up aligned on alternating [111] planes
        </li>
        <li>Magnetic contribution ~500x smaller than electrostatic</li>
      </ul>
    </ul>

    <div class="card" style="background: var(--theme-foreground);">
      <div id="py4dstem-container">${gt_img}</div>
    </div>
  `;
}

function return_serial_tab() {
  return html`
    <ul>
      <li>
        Electrostatic contribution &rarr; invariant under time-reversal symmetry
      </li>
      <li>
        Magnetic contribution &rarr; changes sign under time-reversal symmetry
      </li>
      <ul>
        <li>Inversion-symmetry: "flip" sample and record two measurements</li>
        ${tex` \phi_e = \frac{1}{2}\left(\phi^{\rightarrow} {\color{#fff994} +} \phi^{\leftarrow} \right) \quad \text{and} \quad \phi_m = \frac{1}{2}\left(\phi^{\rightarrow} {\color{#fff994} -} \phi^{\leftarrow} \right)`}
      </ul>
    </ul>

    <details>
      <summary>Reconstruction:</summary>
      <div class="card" style="background: var(--theme-foreground);">
        <div id="py4dstem-container">${serial_img}</div>
      </div>
    </details>
  `;
}

function return_joint_tab() {
  return html`
    <ul>
      <li>Forward-model for our measurement as we "flip" the sample</li>
      ${tex`\psi^{\rightarrow} = \mathcal{P} \times \exp\left(i \left(V_p {\color{#fff994} +} A_z\right)\right)`}
      <br />
      ${tex`\psi^{\leftarrow} = \mathcal{P} \times \exp\left(i \left(V_p {\color{#fff994} -} A_z\right)\right)`}
      <li>Simultaneous electrostatic and magnetic adjoint operators</li>
      ${tex`\Delta V_p \propto \overbrace{\Re\left\{ -i \exp(-i (V_p{\color{#fff994} +}A_z)) \times \mathcal{P}^* \times \Delta \psi^{\rightarrow} \right\}}^{{\color{#fff994} \text{Forward Measurement Contribution}}} {\color{#fff994} +} \overbrace{\Re\left\{ -i \exp(-i (V_p{\color{#fff994} -}A_z)) \times \mathcal{P}^* \times \Delta \psi^{\leftarrow} \right\}}^{{\color{#fff994} \text{Reverse Measurement Contribution}}}`}
      <br />
      ${tex`\Delta A_z \propto \Re\left\{ -i \exp(-i (V_p{\color{#fff994} +}A_z)) \times \mathcal{P}^* \times \Delta \psi^{\rightarrow} \right\} {\color{#fff994} -} \Re\left\{-i \exp(-i (V_p{\color{#fff994} -}A_z)) \times \mathcal{P}^* \times \Delta \psi^{\leftarrow} \right\}`}
    </ul>

    <details>
      <summary>Reconstruction:</summary>
      <div class="card" style="background: var(--theme-foreground);">
        <div id="py4dstem-container">${joint_img}</div>
      </div>
    </details>
  `;
}
```

```js
if (tab == "model") {
  display(return_model_tab());
} else if (tab == "ground truth") {
  display(return_gt_tab());
} else if (tab == "serial reconstruction") {
  display(return_serial_tab());
} else if (tab == "joint reconstruction") {
  display(return_joint_tab());
}
```
