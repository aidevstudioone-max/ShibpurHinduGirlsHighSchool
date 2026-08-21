import * as LottieModule from 'lottie-react'
import type { ComponentType } from 'react'

// lottie-react ships a UMD build whose own module.exports carries a nested
// `.default`. Depending on which bundler/interop path handles it (esbuild's
// dev-time dep pre-bundling vs. Rollup's production build), the ESM default
// import can land on either that wrapper object or the real component one
// level deeper — so unwrap defensively rather than assuming a fixed depth.
const mod = LottieModule as unknown as { default: unknown }
const candidate = mod.default as { default?: unknown }
const Lottie = (typeof candidate === 'function' ? candidate : candidate?.default) as ComponentType<any>

export default Lottie
