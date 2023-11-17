"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-combine-extensions";
exports.ids = ["vendor-chunks/micromark-util-combine-extensions"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-combine-extensions/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark-util-combine-extensions/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   combineExtensions: () => (/* binding */ combineExtensions),\n/* harmony export */   combineHtmlExtensions: () => (/* binding */ combineHtmlExtensions)\n/* harmony export */ });\n/* harmony import */ var micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-chunked */ \"(ssr)/./node_modules/micromark-util-chunked/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').Handles} Handles\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n * @typedef {import('micromark-util-types').NormalizedExtension} NormalizedExtension\n */ \nconst hasOwnProperty = {}.hasOwnProperty;\n/**\n * Combine multiple syntax extensions into one.\n *\n * @param {Array<Extension>} extensions\n *   List of syntax extensions.\n * @returns {NormalizedExtension}\n *   A single combined extension.\n */ function combineExtensions(extensions) {\n    /** @type {NormalizedExtension} */ const all = {};\n    let index = -1;\n    while(++index < extensions.length){\n        syntaxExtension(all, extensions[index]);\n    }\n    return all;\n}\n/**\n * Merge `extension` into `all`.\n *\n * @param {NormalizedExtension} all\n *   Extension to merge into.\n * @param {Extension} extension\n *   Extension to merge.\n * @returns {void}\n */ function syntaxExtension(all, extension) {\n    /** @type {keyof Extension} */ let hook;\n    for(hook in extension){\n        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;\n        /** @type {Record<string, unknown>} */ const left = maybe || (all[hook] = {});\n        /** @type {Record<string, unknown> | undefined} */ const right = extension[hook];\n        /** @type {string} */ let code;\n        if (right) {\n            for(code in right){\n                if (!hasOwnProperty.call(left, code)) left[code] = [];\n                const value = right[code];\n                constructs(// @ts-expect-error Looks like a list.\n                left[code], Array.isArray(value) ? value : value ? [\n                    value\n                ] : []);\n            }\n        }\n    }\n}\n/**\n * Merge `list` into `existing` (both lists of constructs).\n * Mutates `existing`.\n *\n * @param {Array<unknown>} existing\n * @param {Array<unknown>} list\n * @returns {void}\n */ function constructs(existing, list) {\n    let index = -1;\n    /** @type {Array<unknown>} */ const before = [];\n    while(++index < list.length){\n        // @ts-expect-error Looks like an object.\n        ;\n        (list[index].add === \"after\" ? existing : before).push(list[index]);\n    }\n    (0,micromark_util_chunked__WEBPACK_IMPORTED_MODULE_0__.splice)(existing, 0, 0, before);\n}\n/**\n * Combine multiple HTML extensions into one.\n *\n * @param {Array<HtmlExtension>} htmlExtensions\n *   List of HTML extensions.\n * @returns {HtmlExtension}\n *   A single combined HTML extension.\n */ function combineHtmlExtensions(htmlExtensions) {\n    /** @type {HtmlExtension} */ const handlers = {};\n    let index = -1;\n    while(++index < htmlExtensions.length){\n        htmlExtension(handlers, htmlExtensions[index]);\n    }\n    return handlers;\n}\n/**\n * Merge `extension` into `all`.\n *\n * @param {HtmlExtension} all\n *   Extension to merge into.\n * @param {HtmlExtension} extension\n *   Extension to merge.\n * @returns {void}\n */ function htmlExtension(all, extension) {\n    /** @type {keyof HtmlExtension} */ let hook;\n    for(hook in extension){\n        const maybe = hasOwnProperty.call(all, hook) ? all[hook] : undefined;\n        const left = maybe || (all[hook] = {});\n        const right = extension[hook];\n        /** @type {keyof Handles} */ let type;\n        if (right) {\n            for(type in right){\n                // @ts-expect-error assume document vs regular handler are managed correctly.\n                left[type] = right[type];\n            }\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY29tYmluZS1leHRlbnNpb25zL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7OztDQUtDLEdBRTRDO0FBRTdDLE1BQU1DLGlCQUFpQixDQUFDLEVBQUVBLGNBQWM7QUFFeEM7Ozs7Ozs7Q0FPQyxHQUNNLFNBQVNDLGtCQUFrQkMsVUFBVTtJQUMxQyxnQ0FBZ0MsR0FDaEMsTUFBTUMsTUFBTSxDQUFDO0lBQ2IsSUFBSUMsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRRixXQUFXRyxNQUFNLENBQUU7UUFDbENDLGdCQUFnQkgsS0FBS0QsVUFBVSxDQUFDRSxNQUFNO0lBQ3hDO0lBRUEsT0FBT0Q7QUFDVDtBQUVBOzs7Ozs7OztDQVFDLEdBQ0QsU0FBU0csZ0JBQWdCSCxHQUFHLEVBQUVJLFNBQVM7SUFDckMsNEJBQTRCLEdBQzVCLElBQUlDO0lBRUosSUFBS0EsUUFBUUQsVUFBVztRQUN0QixNQUFNRSxRQUFRVCxlQUFlVSxJQUFJLENBQUNQLEtBQUtLLFFBQVFMLEdBQUcsQ0FBQ0ssS0FBSyxHQUFHRztRQUMzRCxvQ0FBb0MsR0FDcEMsTUFBTUMsT0FBT0gsU0FBVU4sQ0FBQUEsR0FBRyxDQUFDSyxLQUFLLEdBQUcsQ0FBQztRQUNwQyxnREFBZ0QsR0FDaEQsTUFBTUssUUFBUU4sU0FBUyxDQUFDQyxLQUFLO1FBQzdCLG1CQUFtQixHQUNuQixJQUFJTTtRQUVKLElBQUlELE9BQU87WUFDVCxJQUFLQyxRQUFRRCxNQUFPO2dCQUNsQixJQUFJLENBQUNiLGVBQWVVLElBQUksQ0FBQ0UsTUFBTUUsT0FBT0YsSUFBSSxDQUFDRSxLQUFLLEdBQUcsRUFBRTtnQkFDckQsTUFBTUMsUUFBUUYsS0FBSyxDQUFDQyxLQUFLO2dCQUN6QkUsV0FDRSxzQ0FBc0M7Z0JBQ3RDSixJQUFJLENBQUNFLEtBQUssRUFDVkcsTUFBTUMsT0FBTyxDQUFDSCxTQUFTQSxRQUFRQSxRQUFRO29CQUFDQTtpQkFBTSxHQUFHLEVBQUU7WUFFdkQ7UUFDRjtJQUNGO0FBQ0Y7QUFFQTs7Ozs7OztDQU9DLEdBQ0QsU0FBU0MsV0FBV0csUUFBUSxFQUFFQyxJQUFJO0lBQ2hDLElBQUloQixRQUFRLENBQUM7SUFDYiwyQkFBMkIsR0FDM0IsTUFBTWlCLFNBQVMsRUFBRTtJQUVqQixNQUFPLEVBQUVqQixRQUFRZ0IsS0FBS2YsTUFBTSxDQUFFO1FBQzVCLHlDQUF5Qzs7UUFDdkNlLENBQUFBLElBQUksQ0FBQ2hCLE1BQU0sQ0FBQ2tCLEdBQUcsS0FBSyxVQUFVSCxXQUFXRSxNQUFLLEVBQUdFLElBQUksQ0FBQ0gsSUFBSSxDQUFDaEIsTUFBTTtJQUNyRTtJQUVBTCw4REFBTUEsQ0FBQ29CLFVBQVUsR0FBRyxHQUFHRTtBQUN6QjtBQUVBOzs7Ozs7O0NBT0MsR0FDTSxTQUFTRyxzQkFBc0JDLGNBQWM7SUFDbEQsMEJBQTBCLEdBQzFCLE1BQU1DLFdBQVcsQ0FBQztJQUNsQixJQUFJdEIsUUFBUSxDQUFDO0lBRWIsTUFBTyxFQUFFQSxRQUFRcUIsZUFBZXBCLE1BQU0sQ0FBRTtRQUN0Q3NCLGNBQWNELFVBQVVELGNBQWMsQ0FBQ3JCLE1BQU07SUFDL0M7SUFFQSxPQUFPc0I7QUFDVDtBQUVBOzs7Ozs7OztDQVFDLEdBQ0QsU0FBU0MsY0FBY3hCLEdBQUcsRUFBRUksU0FBUztJQUNuQyxnQ0FBZ0MsR0FDaEMsSUFBSUM7SUFFSixJQUFLQSxRQUFRRCxVQUFXO1FBQ3RCLE1BQU1FLFFBQVFULGVBQWVVLElBQUksQ0FBQ1AsS0FBS0ssUUFBUUwsR0FBRyxDQUFDSyxLQUFLLEdBQUdHO1FBQzNELE1BQU1DLE9BQU9ILFNBQVVOLENBQUFBLEdBQUcsQ0FBQ0ssS0FBSyxHQUFHLENBQUM7UUFDcEMsTUFBTUssUUFBUU4sU0FBUyxDQUFDQyxLQUFLO1FBQzdCLDBCQUEwQixHQUMxQixJQUFJb0I7UUFFSixJQUFJZixPQUFPO1lBQ1QsSUFBS2UsUUFBUWYsTUFBTztnQkFDbEIsNkVBQTZFO2dCQUM3RUQsSUFBSSxDQUFDZ0IsS0FBSyxHQUFHZixLQUFLLENBQUNlLEtBQUs7WUFDMUI7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY29tYmluZS1leHRlbnNpb25zL2luZGV4LmpzPzczYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV4dGVuc2lvbn0gRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkhhbmRsZXN9IEhhbmRsZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSHRtbEV4dGVuc2lvbn0gSHRtbEV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ob3JtYWxpemVkRXh0ZW5zaW9ufSBOb3JtYWxpemVkRXh0ZW5zaW9uXG4gKi9cblxuaW1wb3J0IHtzcGxpY2V9IGZyb20gJ21pY3JvbWFyay11dGlsLWNodW5rZWQnXG5cbmNvbnN0IGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBDb21iaW5lIG11bHRpcGxlIHN5bnRheCBleHRlbnNpb25zIGludG8gb25lLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8RXh0ZW5zaW9uPn0gZXh0ZW5zaW9uc1xuICogICBMaXN0IG9mIHN5bnRheCBleHRlbnNpb25zLlxuICogQHJldHVybnMge05vcm1hbGl6ZWRFeHRlbnNpb259XG4gKiAgIEEgc2luZ2xlIGNvbWJpbmVkIGV4dGVuc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVFeHRlbnNpb25zKGV4dGVuc2lvbnMpIHtcbiAgLyoqIEB0eXBlIHtOb3JtYWxpemVkRXh0ZW5zaW9ufSAqL1xuICBjb25zdCBhbGwgPSB7fVxuICBsZXQgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXh0ZW5zaW9ucy5sZW5ndGgpIHtcbiAgICBzeW50YXhFeHRlbnNpb24oYWxsLCBleHRlbnNpb25zW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBhbGxcbn1cblxuLyoqXG4gKiBNZXJnZSBgZXh0ZW5zaW9uYCBpbnRvIGBhbGxgLlxuICpcbiAqIEBwYXJhbSB7Tm9ybWFsaXplZEV4dGVuc2lvbn0gYWxsXG4gKiAgIEV4dGVuc2lvbiB0byBtZXJnZSBpbnRvLlxuICogQHBhcmFtIHtFeHRlbnNpb259IGV4dGVuc2lvblxuICogICBFeHRlbnNpb24gdG8gbWVyZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc3ludGF4RXh0ZW5zaW9uKGFsbCwgZXh0ZW5zaW9uKSB7XG4gIC8qKiBAdHlwZSB7a2V5b2YgRXh0ZW5zaW9ufSAqL1xuICBsZXQgaG9va1xuXG4gIGZvciAoaG9vayBpbiBleHRlbnNpb24pIHtcbiAgICBjb25zdCBtYXliZSA9IGhhc093blByb3BlcnR5LmNhbGwoYWxsLCBob29rKSA/IGFsbFtob29rXSA6IHVuZGVmaW5lZFxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgdW5rbm93bj59ICovXG4gICAgY29uc3QgbGVmdCA9IG1heWJlIHx8IChhbGxbaG9va10gPSB7fSlcbiAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+IHwgdW5kZWZpbmVkfSAqL1xuICAgIGNvbnN0IHJpZ2h0ID0gZXh0ZW5zaW9uW2hvb2tdXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IGNvZGVcblxuICAgIGlmIChyaWdodCkge1xuICAgICAgZm9yIChjb2RlIGluIHJpZ2h0KSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChsZWZ0LCBjb2RlKSkgbGVmdFtjb2RlXSA9IFtdXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcmlnaHRbY29kZV1cbiAgICAgICAgY29uc3RydWN0cyhcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYSBsaXN0LlxuICAgICAgICAgIGxlZnRbY29kZV0sXG4gICAgICAgICAgQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID8gW3ZhbHVlXSA6IFtdXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSBgbGlzdGAgaW50byBgZXhpc3RpbmdgIChib3RoIGxpc3RzIG9mIGNvbnN0cnVjdHMpLlxuICogTXV0YXRlcyBgZXhpc3RpbmdgLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8dW5rbm93bj59IGV4aXN0aW5nXG4gKiBAcGFyYW0ge0FycmF5PHVua25vd24+fSBsaXN0XG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gY29uc3RydWN0cyhleGlzdGluZywgbGlzdCkge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5PHVua25vd24+fSAqL1xuICBjb25zdCBiZWZvcmUgPSBbXVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIExvb2tzIGxpa2UgYW4gb2JqZWN0LlxuICAgIDsobGlzdFtpbmRleF0uYWRkID09PSAnYWZ0ZXInID8gZXhpc3RpbmcgOiBiZWZvcmUpLnB1c2gobGlzdFtpbmRleF0pXG4gIH1cblxuICBzcGxpY2UoZXhpc3RpbmcsIDAsIDAsIGJlZm9yZSlcbn1cblxuLyoqXG4gKiBDb21iaW5lIG11bHRpcGxlIEhUTUwgZXh0ZW5zaW9ucyBpbnRvIG9uZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PEh0bWxFeHRlbnNpb24+fSBodG1sRXh0ZW5zaW9uc1xuICogICBMaXN0IG9mIEhUTUwgZXh0ZW5zaW9ucy5cbiAqIEByZXR1cm5zIHtIdG1sRXh0ZW5zaW9ufVxuICogICBBIHNpbmdsZSBjb21iaW5lZCBIVE1MIGV4dGVuc2lvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVIdG1sRXh0ZW5zaW9ucyhodG1sRXh0ZW5zaW9ucykge1xuICAvKiogQHR5cGUge0h0bWxFeHRlbnNpb259ICovXG4gIGNvbnN0IGhhbmRsZXJzID0ge31cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGh0bWxFeHRlbnNpb25zLmxlbmd0aCkge1xuICAgIGh0bWxFeHRlbnNpb24oaGFuZGxlcnMsIGh0bWxFeHRlbnNpb25zW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVyc1xufVxuXG4vKipcbiAqIE1lcmdlIGBleHRlbnNpb25gIGludG8gYGFsbGAuXG4gKlxuICogQHBhcmFtIHtIdG1sRXh0ZW5zaW9ufSBhbGxcbiAqICAgRXh0ZW5zaW9uIHRvIG1lcmdlIGludG8uXG4gKiBAcGFyYW0ge0h0bWxFeHRlbnNpb259IGV4dGVuc2lvblxuICogICBFeHRlbnNpb24gdG8gbWVyZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaHRtbEV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbikge1xuICAvKiogQHR5cGUge2tleW9mIEh0bWxFeHRlbnNpb259ICovXG4gIGxldCBob29rXG5cbiAgZm9yIChob29rIGluIGV4dGVuc2lvbikge1xuICAgIGNvbnN0IG1heWJlID0gaGFzT3duUHJvcGVydHkuY2FsbChhbGwsIGhvb2spID8gYWxsW2hvb2tdIDogdW5kZWZpbmVkXG4gICAgY29uc3QgbGVmdCA9IG1heWJlIHx8IChhbGxbaG9va10gPSB7fSlcbiAgICBjb25zdCByaWdodCA9IGV4dGVuc2lvbltob29rXVxuICAgIC8qKiBAdHlwZSB7a2V5b2YgSGFuZGxlc30gKi9cbiAgICBsZXQgdHlwZVxuXG4gICAgaWYgKHJpZ2h0KSB7XG4gICAgICBmb3IgKHR5cGUgaW4gcmlnaHQpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciBhc3N1bWUgZG9jdW1lbnQgdnMgcmVndWxhciBoYW5kbGVyIGFyZSBtYW5hZ2VkIGNvcnJlY3RseS5cbiAgICAgICAgbGVmdFt0eXBlXSA9IHJpZ2h0W3R5cGVdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsic3BsaWNlIiwiaGFzT3duUHJvcGVydHkiLCJjb21iaW5lRXh0ZW5zaW9ucyIsImV4dGVuc2lvbnMiLCJhbGwiLCJpbmRleCIsImxlbmd0aCIsInN5bnRheEV4dGVuc2lvbiIsImV4dGVuc2lvbiIsImhvb2siLCJtYXliZSIsImNhbGwiLCJ1bmRlZmluZWQiLCJsZWZ0IiwicmlnaHQiLCJjb2RlIiwidmFsdWUiLCJjb25zdHJ1Y3RzIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhpc3RpbmciLCJsaXN0IiwiYmVmb3JlIiwiYWRkIiwicHVzaCIsImNvbWJpbmVIdG1sRXh0ZW5zaW9ucyIsImh0bWxFeHRlbnNpb25zIiwiaGFuZGxlcnMiLCJodG1sRXh0ZW5zaW9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-combine-extensions/index.js\n");

/***/ })

};
;