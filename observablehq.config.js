// See https://observablehq.com/framework/config for documentation.

import MarkdownItContainer from "markdown-it-container";
import MarkdownItFootnote from "markdown-it-footnote";

const head = `
<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/assets/site.webmanifest">
`;

export default {
  title: "ER-C, Juelich Seminar",
  head: head,
  root: "src",
  theme: "dark",
  typographer: true,
  pages: [
    {
      name: "Phase-Retrieval Methods",
      open: false,
      collapsible: true,
      pages: [
        { name: "4D-STEM Measurements", path: "4dstem-measurements" },
        { name: "Phase Problem", path: "phase-problem" },
        { name: "Tilt-Corrected BF-STEM", path: "tc-bf" },
        {
          name: "Proximal Gradient Methods",
          path: "proximal-gradient-methods",
        },
        { name: "Electron Ptychography", path: "electron-ptychography" },
        {
          name: "Open Source Phase Retrieval",
          path: "open-source-phase-retrieval",
        },
      ],
    },
    {
      name: "Magnetic Ptychography",
      open: false,
      collapsible: true,
      pages: [
        { name: "Imaging Magnetic Textures", path: "magnetic-textures" },
        { name: "Bulk Antiferromagnets", path: "bulk-antiferromagnets" },
        {
          name: "Nanoparticle Antiferromagnets",
          path: "nanoparticle-antiferromagnets",
        },
        { name: "Joint XMCD", path: "joint-xmcd" },
      ],
    },
    {
      name: "Biological Cryo 4D-STEM",
      open: false,
      collapsible: true,
      pages: [
        {
          name: "Serial Cryogenic Phase-Retrieval",
          path: "serial-cryo-phase",
        },
        { name: "Joint  Cryogenic Ptychography", path: "joint-cryo-ptycho" },
        { name: "Transfer of Information", path: "ctf" },
      ],
    },
    {
      name: "Conclusions",
      open: false,
      collapsible: true,
      pages: [
        { name: "Acknowledgments", path: "acknowledgments" },
        { name: "About This Presentation", path: "about" },
      ],
    },
  ],
  markdownIt: (md) =>
    md
      .use(MarkdownItContainer, "card") // ::: card
      .use(MarkdownItContainer, "hero") // ::: hero
      .use(MarkdownItFootnote), // [^1] or [^longnote]
};
