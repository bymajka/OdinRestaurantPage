"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_menu_js"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uploadPage: () => (/* binding */ uploadPage)\n/* harmony export */ });\n/* harmony import */ var _src_img_star_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/star.png */ \"./src/img/star.png\");\n/* harmony import */ var _src_img_first_dish_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/first-dish.png */ \"./src/img/first-dish.png\");\n/* harmony import */ var _src_img_second_dish_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/second-dish.png */ \"./src/img/second-dish.png\");\n/* harmony import */ var _src_img_third_dish_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/third-dish.png */ \"./src/img/third-dish.png\");\n/* harmony import */ var _src_img_menu_section_separator_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/menu-section-separator.png */ \"./src/img/menu-section-separator.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst dishData = [\r\n    {img: _src_img_first_dish_png__WEBPACK_IMPORTED_MODULE_1__, rating: \"5.0\", price: \"$13\", name: \"Dish 1\" },\r\n    {img: _src_img_second_dish_png__WEBPACK_IMPORTED_MODULE_2__, rating: \"4.8\", price: \"$15\", name: \"Dish 2\" },\r\n    {img: _src_img_third_dish_png__WEBPACK_IMPORTED_MODULE_3__, rating: \"4.5\", price: \"$14\", name: \"Dish 3\" },\r\n];\r\n\r\nconst content = document.getElementById('content');\r\n\r\nfunction uploadPage() {\r\n    if(!content.firstChild){\r\n        createMenuSection();\r\n        createSeparator(_src_img_menu_section_separator_png__WEBPACK_IMPORTED_MODULE_4__);\r\n    }\r\n}\r\n\r\nfunction createMenuSection(){\r\n    const menuSection = document.createElement('section');\r\n    menuSection.classList.add('menu-section');\r\n\r\n    const subtitle = document.createElement('h3');\r\n    subtitle.classList.add('subtitle');\r\n    subtitle.innerHTML = \"MENU\";\r\n\r\n    const h2Element = document.createElement('h2');\r\n    h2Element.innerHTML = \"Popular Dishes\";\r\n    \r\n    const pElement = document.createElement('p');\r\n    pElement.innerHTML = \"Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.\";\r\n\r\n    const popularDishes = document.createElement('div');\r\n    popularDishes.classList.add(\"popular-dishes\");\r\n\r\n    dishData.forEach(dish => {\r\n        popularDishes.appendChild(createDishCard(dish.img, dish.rating));\r\n    });\r\n\r\n    const button = document.createElement('button');\r\n    button.innerHTML = \"See all dishes\";\r\n\r\n    menuSection.appendChild(subtitle);\r\n    menuSection.appendChild(h2Element);\r\n    menuSection.appendChild(pElement);\r\n    menuSection.appendChild(popularDishes);\r\n    menuSection.appendChild(button);\r\n\r\n    content.appendChild(menuSection);\r\n}\r\n\r\nfunction createDishCard(imgPath, ratingScore){\r\n    const dishCard = document.createElement('div');\r\n    const img = document.createElement('img');\r\n\r\n    img.src = imgPath;\r\n    img.loading = 'lazy';\r\n\r\n    const dishInfo = document.createElement('div');\r\n    dishInfo.classList.add(\"dish-info\");\r\n\r\n    const h4Element = document.createElement('h4');\r\n    h4Element.innerHTML = \"Lorem Epsum\";\r\n\r\n    const price = document.createElement('p');\r\n    price.innerHTML = \"$13\";\r\n    price.classList.add(\"price\");\r\n\r\n    const rating = document.createElement('div');\r\n    rating.classList.add(\"rating\");\r\n\r\n    const button = document.createElement('button');\r\n    button.innerHTML = \"Order Now\";\r\n\r\n    const ratingNumber = document.createElement('p');\r\n    ratingNumber.innerHTML = ratingScore;\r\n    rating.appendChild(ratingNumber);\r\n    for(let i = 0; i < 5; i++){\r\n        const star = document.createElement('img');\r\n        star.src = _src_img_star_png__WEBPACK_IMPORTED_MODULE_0__;\r\n        rating.appendChild(star);\r\n    }\r\n\r\n    dishInfo.appendChild(h4Element);\r\n    dishInfo.appendChild(price);\r\n    dishInfo.appendChild(rating);\r\n    dishInfo.appendChild(button);\r\n\r\n    dishCard.appendChild(img);\r\n    dishCard.appendChild(dishInfo);\r\n\r\n    return dishCard;\r\n}\r\n\r\nfunction createSeparator(imgPath){\r\n    const separatorImage = document.createElement('img');\r\n    separatorImage.src = imgPath;\r\n    separatorImage.classList.add(\"separator\");\r\n\r\n    content.appendChild(separatorImage);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDVztBQUNFO0FBQ0Y7QUFDa0I7QUFDdkU7QUFDQTtBQUNBLEtBQUssS0FBSyxvREFBWSwrQ0FBK0M7QUFDckUsS0FBSyxLQUFLLHFEQUFhLCtDQUErQztBQUN0RSxLQUFLLEtBQUssb0RBQVksK0NBQStDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esd0JBQXdCLGdFQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLG1CQUFtQiw4Q0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGFySW1nIGZyb20gXCIuLi9zcmMvaW1nL3N0YXIucG5nXCI7XHJcbmltcG9ydCBmaXJzdERpc2hJbWcgZnJvbSBcIi4uL3NyYy9pbWcvZmlyc3QtZGlzaC5wbmdcIjtcclxuaW1wb3J0IHNlY29uZERpc2hJbWcgZnJvbSBcIi4uL3NyYy9pbWcvc2Vjb25kLWRpc2gucG5nXCI7XHJcbmltcG9ydCB0aGlyZERpc2hJbWcgZnJvbSBcIi4uL3NyYy9pbWcvdGhpcmQtZGlzaC5wbmdcIjtcclxuaW1wb3J0IHNlY3Rpb25TZXBhcmF0b3JJbWcgZnJvbSBcIi4uL3NyYy9pbWcvbWVudS1zZWN0aW9uLXNlcGFyYXRvci5wbmdcIlxyXG5cclxuY29uc3QgZGlzaERhdGEgPSBbXHJcbiAgICB7aW1nOiBmaXJzdERpc2hJbWcsIHJhdGluZzogXCI1LjBcIiwgcHJpY2U6IFwiJDEzXCIsIG5hbWU6IFwiRGlzaCAxXCIgfSxcclxuICAgIHtpbWc6IHNlY29uZERpc2hJbWcsIHJhdGluZzogXCI0LjhcIiwgcHJpY2U6IFwiJDE1XCIsIG5hbWU6IFwiRGlzaCAyXCIgfSxcclxuICAgIHtpbWc6IHRoaXJkRGlzaEltZywgcmF0aW5nOiBcIjQuNVwiLCBwcmljZTogXCIkMTRcIiwgbmFtZTogXCJEaXNoIDNcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkUGFnZSgpIHtcclxuICAgIGlmKCFjb250ZW50LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIGNyZWF0ZU1lbnVTZWN0aW9uKCk7XHJcbiAgICAgICAgY3JlYXRlU2VwYXJhdG9yKHNlY3Rpb25TZXBhcmF0b3JJbWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpe1xyXG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcclxuXHJcbiAgICBjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdzdWJ0aXRsZScpO1xyXG4gICAgc3VidGl0bGUuaW5uZXJIVE1MID0gXCJNRU5VXCI7XHJcblxyXG4gICAgY29uc3QgaDJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGgyRWxlbWVudC5pbm5lckhUTUwgPSBcIlBvcHVsYXIgRGlzaGVzXCI7XHJcbiAgICBcclxuICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcEVsZW1lbnQuaW5uZXJIVE1MID0gXCJMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBtYWtpbmcuXCI7XHJcblxyXG4gICAgY29uc3QgcG9wdWxhckRpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcG9wdWxhckRpc2hlcy5jbGFzc0xpc3QuYWRkKFwicG9wdWxhci1kaXNoZXNcIik7XHJcblxyXG4gICAgZGlzaERhdGEuZm9yRWFjaChkaXNoID0+IHtcclxuICAgICAgICBwb3B1bGFyRGlzaGVzLmFwcGVuZENoaWxkKGNyZWF0ZURpc2hDYXJkKGRpc2guaW1nLCBkaXNoLnJhdGluZykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTZWUgYWxsIGRpc2hlc1wiO1xyXG5cclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGgyRWxlbWVudCk7XHJcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChwRWxlbWVudCk7XHJcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChwb3B1bGFyRGlzaGVzKTtcclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURpc2hDYXJkKGltZ1BhdGgsIHJhdGluZ1Njb3JlKXtcclxuICAgIGNvbnN0IGRpc2hDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBpbWcuc3JjID0gaW1nUGF0aDtcclxuICAgIGltZy5sb2FkaW5nID0gJ2xhenknO1xyXG5cclxuICAgIGNvbnN0IGRpc2hJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXNoSW5mby5jbGFzc0xpc3QuYWRkKFwiZGlzaC1pbmZvXCIpO1xyXG5cclxuICAgIGNvbnN0IGg0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBoNEVsZW1lbnQuaW5uZXJIVE1MID0gXCJMb3JlbSBFcHN1bVwiO1xyXG5cclxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcHJpY2UuaW5uZXJIVE1MID0gXCIkMTNcIjtcclxuICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuXHJcbiAgICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhdGluZy5jbGFzc0xpc3QuYWRkKFwicmF0aW5nXCIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiT3JkZXIgTm93XCI7XHJcblxyXG4gICAgY29uc3QgcmF0aW5nTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmF0aW5nTnVtYmVyLmlubmVySFRNTCA9IHJhdGluZ1Njb3JlO1xyXG4gICAgcmF0aW5nLmFwcGVuZENoaWxkKHJhdGluZ051bWJlcik7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXtcclxuICAgICAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgc3Rhci5zcmMgPSBzdGFySW1nO1xyXG4gICAgICAgIHJhdGluZy5hcHBlbmRDaGlsZChzdGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNoSW5mby5hcHBlbmRDaGlsZChoNEVsZW1lbnQpO1xyXG4gICAgZGlzaEluZm8uYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG4gICAgZGlzaEluZm8uYXBwZW5kQ2hpbGQocmF0aW5nKTtcclxuICAgIGRpc2hJbmZvLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgZGlzaENhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGRpc2hDYXJkLmFwcGVuZENoaWxkKGRpc2hJbmZvKTtcclxuXHJcbiAgICByZXR1cm4gZGlzaENhcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlcGFyYXRvcihpbWdQYXRoKXtcclxuICAgIGNvbnN0IHNlcGFyYXRvckltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzZXBhcmF0b3JJbWFnZS5zcmMgPSBpbWdQYXRoO1xyXG4gICAgc2VwYXJhdG9ySW1hZ2UuY2xhc3NMaXN0LmFkZChcInNlcGFyYXRvclwiKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNlcGFyYXRvckltYWdlKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/img/first-dish.png":
/*!********************************!*\
  !*** ./src/img/first-dish.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e645a230ed6b810d716e.png";

/***/ }),

/***/ "./src/img/menu-section-separator.png":
/*!********************************************!*\
  !*** ./src/img/menu-section-separator.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "307271e68dce5ac86451.png";

/***/ }),

/***/ "./src/img/second-dish.png":
/*!*********************************!*\
  !*** ./src/img/second-dish.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81758fff8c73f6b0f987.png";

/***/ }),

/***/ "./src/img/star.png":
/*!**************************!*\
  !*** ./src/img/star.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68957a291d7215570b64.png";

/***/ }),

/***/ "./src/img/third-dish.png":
/*!********************************!*\
  !*** ./src/img/third-dish.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92d6cf7b36a87759f5e1.png";

/***/ })

}]);