import { getProject } from '@theatre/core'

// A Theatre.js project/sheet that authors the static pose of the 3D cap
// (position/rotation/scale fine-tuning). In dev, Theatre Studio is mounted
// so that pose is visually tweakable; the one-shot mount intro and idle
// motion are driven separately by GSAP / drei so the two tools don't fight
// over the same values.
//
// We never export a Studio-authored state.json (the JSX defaults are the
// only pose we ship), so an explicit empty state is passed here — without
// it, @theatre/core throws after 1s in any session where Studio never
// attaches, i.e. every production visit.
export const theatreProject = getProject('Shibpur School Hero', {
  state: { sheetsById: {}, definitionVersion: '0.4.0' },
})
export const heroSheet = theatreProject.sheet('Hero Scene')

if (import.meta.env.DEV) {
  Promise.all([import('@theatre/studio'), import('@theatre/r3f/dist/extension')]).then(
    ([studioModule, extensionModule]) => {
      // @theatre/studio is CJS, and esbuild's interop double-wraps it: the
      // CJS `module.exports` object itself has a nested `.default`, so the
      // real studio instance sits one level deeper than a normal default
      // import. @theatre/r3f's extension is plain ESM, so it needs no such
      // unwrapping.
      const studio = (studioModule as any).default.default
      const extension = (extensionModule as any).default
      studio.initialize()
      studio.extend(extension)
    }
  )
}
