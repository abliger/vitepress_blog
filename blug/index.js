
export default (options = {}, ctx = {}) => {
  console.log(options)
  console.log(ctx)
  console.log(23445)
  debugger
  return {
    extendMarkdown: md => {
    }
    // ...
  }
}
