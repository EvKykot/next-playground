"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/(pages)/dashboards/page",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b8c6aa37f7ab\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2FiYmIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiOGM2YWEzN2Y3YWJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/(dashboard)/(pages)/dashboards/page.tsx":
/*!*****************************************************!*\
  !*** ./app/(dashboard)/(pages)/dashboards/page.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"https://api.github.com/repos/vercel/next.js\");\n    const repo = await res.json();\n    return {\n        props: {\n            repo\n        }\n    };\n};\nfunction DashboardPage(props) {\n    const { repo } = props;\n    console.log(\"FirstPostLayout props\", props);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: repo === null || repo === void 0 ? void 0 : repo.stargazers_count\n            }, void 0, false, {\n                fileName: \"/Users/admin/next-test/next-test/app/(dashboard)/(pages)/dashboards/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            \"--- dashboards page ---\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/next-test/next-test/app/(dashboard)/(pages)/dashboards/page.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = DashboardPage;\nvar _c;\n$RefreshReg$(_c, \"DashboardPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS8ocGFnZXMpL2Rhc2hib2FyZHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU2QjtBQU83QixNQUFNQSxpQkFBa0I7SUFDdEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLE1BQU1DLE9BQWEsTUFBTUYsSUFBSUcsSUFBSTtJQUNqQyxPQUFPO1FBQUVDLE9BQU87WUFBRUY7UUFBSztJQUFFO0FBQzNCO0FBRWUsU0FBU0csY0FDdEJELEtBQXFEO0lBRXJELE1BQU0sRUFBR0YsSUFBSSxFQUFFLEdBQUdFO0lBQ2xCRSxRQUFRQyxHQUFHLENBQUMseUJBQXlCSDtJQUVyQyxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzswQkFBR1AsaUJBQUFBLDJCQUFBQSxLQUFNUSxnQkFBZ0I7Ozs7OztZQUFLOzs7Ozs7O0FBSXJDO0tBWndCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvKHBhZ2VzKS9kYXNoYm9hcmRzL3BhZ2UudHN4PzU5NjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgdHlwZSB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5pbXBvcnQgJy4uLy4uLy4uL2dsb2JhbHMuY3NzJ1xuXG50eXBlIFJlcG8gPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBzdGFyZ2F6ZXJzX2NvdW50OiBudW1iZXJcbn1cblxuY29uc3QgZ2V0U3RhdGljUHJvcHMgPSAoYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy92ZXJjZWwvbmV4dC5qcycpXG4gIGNvbnN0IHJlcG86IFJlcG8gPSBhd2FpdCByZXMuanNvbigpXG4gIHJldHVybiB7IHByb3BzOiB7IHJlcG8gfSB9XG59KSBzYXRpc2ZpZXMgR2V0U3RhdGljUHJvcHM8eyByZXBvOiBSZXBvIH0+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZFBhZ2UoXG4gIHByb3BzOiBJbmZlckdldFN0YXRpY1Byb3BzVHlwZTx0eXBlb2YgZ2V0U3RhdGljUHJvcHM+XG4pIHtcbiAgY29uc3QgeyAgcmVwbyB9ID0gcHJvcHM7XG4gIGNvbnNvbGUubG9nKCdGaXJzdFBvc3RMYXlvdXQgcHJvcHMnLCBwcm9wcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+e3JlcG8/LnN0YXJnYXplcnNfY291bnR9PC9wPlxuICAgICAgLS0tIGRhc2hib2FyZHMgcGFnZSAtLS1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInJlcyIsImZldGNoIiwicmVwbyIsImpzb24iLCJwcm9wcyIsIkRhc2hib2FyZFBhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicCIsInN0YXJnYXplcnNfY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/(pages)/dashboards/page.tsx\n"));

/***/ })

});