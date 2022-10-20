/*
 * replaces the file extension .mjs -> .mts
 * without jest-resolver will complain that he can not find './util.mjs' from 'src/util.spec.mts'
 */
const mjsResolver = (path, options) => {
    const mjsExtRegex = /\.mjs$/i
    const resolver = options.defaultResolver
    // console.log(path)
    if (mjsExtRegex.test(path)) {
        try {
            return resolver(path.replace(mjsExtRegex, '.mts'), options)
        } catch {
            // use default resolver
        }
    }

    return resolver(path, options)
}

module.exports = mjsResolver