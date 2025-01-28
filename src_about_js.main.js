"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_about_js"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uploadPage: () => (/* binding */ uploadPage)\n/* harmony export */ });\n/* harmony import */ var _src_img_about_us_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/about-us-image.png */ \"./src/img/about-us-image.png\");\n/* harmony import */ var _src_img_story_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/img/story-image.png */ \"./src/img/story-image.png\");\n/* harmony import */ var _src_img_first_chef_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/img/first-chef.png */ \"./src/img/first-chef.png\");\n/* harmony import */ var _src_img_second_chef_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/img/second-chef.png */ \"./src/img/second-chef.png\");\n/* harmony import */ var _src_img_third_chef_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/third-chef.png */ \"./src/img/third-chef.png\");\n/* harmony import */ var _src_img_fourth_chef_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/img/fourth-chef.png */ \"./src/img/fourth-chef.png\");\n/* harmony import */ var _src_img_fresh_product_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/img/fresh-product.svg */ \"./src/img/fresh-product.svg\");\n/* harmony import */ var _src_img_skilled_chefs_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/img/skilled-chefs.svg */ \"./src/img/skilled-chefs.svg\");\n/* harmony import */ var _src_img_drinks_juices_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/img/drinks-juices.svg */ \"./src/img/drinks-juices.svg\");\n/* harmony import */ var _src_img_vegan_cuisine_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/img/vegan-cuisine.svg */ \"./src/img/vegan-cuisine.svg\");\n/* harmony import */ var _storySection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./storySection */ \"./src/storySection.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\n\r\nconst advantages = [\r\n    {img: _src_img_fresh_product_svg__WEBPACK_IMPORTED_MODULE_6__, name: \"Fresh Product\"},\r\n    {img: _src_img_skilled_chefs_svg__WEBPACK_IMPORTED_MODULE_7__, name: \"Skilled Chefs\"},\r\n    {img: _src_img_drinks_juices_svg__WEBPACK_IMPORTED_MODULE_8__, name: \"Drinks & Juices\"},\r\n    {img: _src_img_vegan_cuisine_svg__WEBPACK_IMPORTED_MODULE_9__, name: \"Vegan Cuisine\"},\r\n];\r\n\r\nconst chefs = [\r\n    {img: _src_img_first_chef_png__WEBPACK_IMPORTED_MODULE_2__, name: \"Avroko\", vacation: \"Master Chef\"},\r\n    {img: _src_img_second_chef_png__WEBPACK_IMPORTED_MODULE_3__, name: \"Evan Mattew\", vacation: \"Master Chef\"},\r\n    {img: _src_img_third_chef_png__WEBPACK_IMPORTED_MODULE_4__, name: \"Diane\tClarkson\", vacation: \"Master Chef\"},\r\n    {img: _src_img_fourth_chef_png__WEBPACK_IMPORTED_MODULE_5__, name: \"Dan Rafalin\", vacation: \"Assistant Chef \"},\r\n]\r\n\r\nfunction uploadPage(){\r\n    if(!content.firstChild){\r\n        createAboutSection();\r\n        createAdvantageSection();\r\n        (0,_storySection__WEBPACK_IMPORTED_MODULE_10__.createStorySection)(content);\r\n        createTeamSection();\r\n    }\r\n}\r\n\r\nfunction createAboutSection(){\r\n    const aboutSection = document.createElement('section');\r\n    aboutSection.classList.add('about-us-section');\r\n\r\n    const div = document.createElement('div');\r\n    div.classList.add('about-us-description');\r\n\r\n    const subtitle = document.createElement('h3');\r\n    subtitle.classList.add('subtitle');\r\n    subtitle.innerHTML = \"ABOUT US\";\r\n\r\n    const h2Element = document.createElement('h2');\r\n    const pElement = document.createElement('p');\r\n\r\n    h2Element.innerHTML = \"Quality and Tradition\";\r\n    pElement.innerHTML = \"Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages.\"\r\n\r\n    const button = document.createElement('button');\r\n    button.innerHTML = \"See More\";\r\n\r\n    const img = document.createElement('img');\r\n    img.src = _src_img_about_us_image_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    div.appendChild(subtitle);\r\n    div.appendChild(h2Element);\r\n    div.appendChild(pElement);\r\n    div.appendChild(button);\r\n\r\n\r\n    aboutSection.appendChild(div);\r\n    aboutSection.appendChild(img);\r\n\r\n    content.appendChild(aboutSection);\r\n}\r\n\r\nfunction createAdvantageSection(){\r\n    const advantageSection = document.createElement('section');\r\n    advantageSection.classList.add(\"advantage-section\");\r\n\r\n    advantages.forEach(advantage => {\r\n        advantageSection.appendChild(createAdvantage(advantage.img, advantage.name));\r\n    });\r\n\r\n    content.appendChild(advantageSection);\r\n}\r\n\r\nfunction createAdvantage(imgPath, headerText) {\r\n    const advantageElement = document.createElement('div');\r\n    advantageElement.classList.add('advantage');\r\n    const img = document.createElement('img');\r\n\r\n    img.src = imgPath;\r\n\r\n    const header = document.createElement('p');\r\n    header.classList.add('advantage-header');\r\n    header.innerHTML = headerText;\r\n\r\n    const description = document.createElement('p');\r\n    description.classList.add(\"advantage-text\");\r\n    description.innerHTML = \"Professional consider everyone probls small niche friendly\";\r\n    \r\n    const link = document.createElement('a');\r\n    link.innerHTML = \"See more\";\r\n    link.href = '#';\r\n\r\n    advantageElement.appendChild(img);\r\n    advantageElement.appendChild(header);\r\n    advantageElement.appendChild(description);\r\n    advantageElement.appendChild(link);\r\n\r\n    return advantageElement;\r\n}\r\n\r\nfunction createTeamSection() {\r\n    const teamSection = document.createElement('section');\r\n    teamSection.classList.add(\"team-section\");\r\n\r\n    const subtitle = document.createElement('h3');\r\n    subtitle.classList.add('subtitle');\r\n    subtitle.innerHTML = \"TEAM\";\r\n\r\n    const h2Element = document.createElement('h2');\r\n    h2Element.innerHTML = \"Meet Our Professional Chefs\";\r\n\r\n    const chefsList = document.createElement('div');\r\n    chefsList.classList.add(\"chefs-list\");\r\n\r\n    chefs.forEach(chef => {\r\n        chefsList.appendChild(createChefElement(chef.img, chef.name, chef.vacation));\r\n    });\r\n\r\n    teamSection.appendChild(subtitle);\r\n    teamSection.appendChild(h2Element);\r\n    teamSection.appendChild(chefsList);\r\n\r\n    content.appendChild(teamSection);\r\n}\r\n\r\nfunction createChefElement(imgPath, chefName, chefClass){\r\n    const chefElement = document.createElement('div');\r\n    chefElement.classList.add('chef-element');\r\n\r\n    const img = document.createElement('img');\r\n    img.src = imgPath;\r\n\r\n    const header = document.createElement('p');\r\n    header.classList.add('chef-name');\r\n    header.innerHTML = chefName;\r\n\r\n    const description = document.createElement('p');\r\n    description.classList.add(\"chef-class\");\r\n    description.innerHTML = chefClass;\r\n\r\n    chefElement.appendChild(img);\r\n    chefElement.appendChild(header);\r\n    chefElement.appendChild(description);\r\n\r\n    return chefElement;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ1A7QUFDQTtBQUNFO0FBQ0Y7QUFDRTtBQUNTO0FBQ0E7QUFDQTtBQUNBO0FBQzdEO0FBQ2tEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxLQUFLLHVEQUFpQix3QkFBd0I7QUFDbkQsS0FBSyxLQUFLLHVEQUFpQix3QkFBd0I7QUFDbkQsS0FBSyxLQUFLLHVEQUFpQiwwQkFBMEI7QUFDckQsS0FBSyxLQUFLLHVEQUFpQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSyxLQUFLLG9EQUFTLDBDQUEwQztBQUM3RCxLQUFLLEtBQUsscURBQVUsK0NBQStDO0FBQ25FLEtBQUssS0FBSyxvREFBUyxrREFBa0Q7QUFDckUsS0FBSyxLQUFLLHFEQUFVLG1EQUFtRDtBQUN2RTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0RBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Fib3V0LmpzPzU4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFib3V0VXNJbWFnZSBmcm9tIFwiLi4vc3JjL2ltZy9hYm91dC11cy1pbWFnZS5wbmdcIjtcclxuaW1wb3J0IHN0b3J5SW1nIGZyb20gXCIuLi9zcmMvaW1nL3N0b3J5LWltYWdlLnBuZ1wiO1xyXG5pbXBvcnQgZmlyc3RDaGVmIGZyb20gXCIuLi9zcmMvaW1nL2ZpcnN0LWNoZWYucG5nXCI7XHJcbmltcG9ydCBzZWNvbmRDaGVmIGZyb20gXCIuLi9zcmMvaW1nL3NlY29uZC1jaGVmLnBuZ1wiO1xyXG5pbXBvcnQgdGhpcmRDaGVmIGZyb20gXCIuLi9zcmMvaW1nL3RoaXJkLWNoZWYucG5nXCI7XHJcbmltcG9ydCBmb3VydGhDaGVmIGZyb20gXCIuLi9zcmMvaW1nL2ZvdXJ0aC1jaGVmLnBuZ1wiO1xyXG5pbXBvcnQgZnJlc2hQcm9kdWN0SW1hZ2UgZnJvbSBcIi4uL3NyYy9pbWcvZnJlc2gtcHJvZHVjdC5zdmdcIjtcclxuaW1wb3J0IHNraWxsZWRDaGVmc0ltYWdlIGZyb20gXCIuLi9zcmMvaW1nL3NraWxsZWQtY2hlZnMuc3ZnXCI7XHJcbmltcG9ydCBkcmlua3NKdWljZXNJbWFnZSBmcm9tIFwiLi4vc3JjL2ltZy9kcmlua3MtanVpY2VzLnN2Z1wiO1xyXG5pbXBvcnQgdmVnYW5DdWlzaW5lSW1hZ2UgZnJvbSBcIi4uL3NyYy9pbWcvdmVnYW4tY3Vpc2luZS5zdmdcIjtcclxuXHJcbmltcG9ydCB7Y3JlYXRlU3RvcnlTZWN0aW9ufSBmcm9tIFwiLi9zdG9yeVNlY3Rpb25cIjtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgYWR2YW50YWdlcyA9IFtcclxuICAgIHtpbWc6IGZyZXNoUHJvZHVjdEltYWdlLCBuYW1lOiBcIkZyZXNoIFByb2R1Y3RcIn0sXHJcbiAgICB7aW1nOiBza2lsbGVkQ2hlZnNJbWFnZSwgbmFtZTogXCJTa2lsbGVkIENoZWZzXCJ9LFxyXG4gICAge2ltZzogZHJpbmtzSnVpY2VzSW1hZ2UsIG5hbWU6IFwiRHJpbmtzICYgSnVpY2VzXCJ9LFxyXG4gICAge2ltZzogdmVnYW5DdWlzaW5lSW1hZ2UsIG5hbWU6IFwiVmVnYW4gQ3Vpc2luZVwifSxcclxuXTtcclxuXHJcbmNvbnN0IGNoZWZzID0gW1xyXG4gICAge2ltZzogZmlyc3RDaGVmLCBuYW1lOiBcIkF2cm9rb1wiLCB2YWNhdGlvbjogXCJNYXN0ZXIgQ2hlZlwifSxcclxuICAgIHtpbWc6IHNlY29uZENoZWYsIG5hbWU6IFwiRXZhbiBNYXR0ZXdcIiwgdmFjYXRpb246IFwiTWFzdGVyIENoZWZcIn0sXHJcbiAgICB7aW1nOiB0aGlyZENoZWYsIG5hbWU6IFwiRGlhbmVcdENsYXJrc29uXCIsIHZhY2F0aW9uOiBcIk1hc3RlciBDaGVmXCJ9LFxyXG4gICAge2ltZzogZm91cnRoQ2hlZiwgbmFtZTogXCJEYW4gUmFmYWxpblwiLCB2YWNhdGlvbjogXCJBc3Npc3RhbnQgQ2hlZiBcIn0sXHJcbl1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRQYWdlKCl7XHJcbiAgICBpZighY29udGVudC5maXJzdENoaWxkKXtcclxuICAgICAgICBjcmVhdGVBYm91dFNlY3Rpb24oKTtcclxuICAgICAgICBjcmVhdGVBZHZhbnRhZ2VTZWN0aW9uKCk7XHJcbiAgICAgICAgY3JlYXRlU3RvcnlTZWN0aW9uKGNvbnRlbnQpO1xyXG4gICAgICAgIGNyZWF0ZVRlYW1TZWN0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0U2VjdGlvbigpe1xyXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXVzLXNlY3Rpb24nKTtcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdhYm91dC11cy1kZXNjcmlwdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHN1YnRpdGxlLmNsYXNzTGlzdC5hZGQoJ3N1YnRpdGxlJyk7XHJcbiAgICBzdWJ0aXRsZS5pbm5lckhUTUwgPSBcIkFCT1VUIFVTXCI7XHJcblxyXG4gICAgY29uc3QgaDJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IHBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIGgyRWxlbWVudC5pbm5lckhUTUwgPSBcIlF1YWxpdHkgYW5kIFRyYWRpdGlvblwiO1xyXG4gICAgcEVsZW1lbnQuaW5uZXJIVE1MID0gXCJMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBnZnNoZXJlIG1ha2luZyBsb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wIHB1Ymxpc2hpbmcgcGFja2FnZXMuXCJcclxuXHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlNlZSBNb3JlXCI7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gYWJvdXRVc0ltYWdlO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDJFbGVtZW50KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwRWxlbWVudCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcblxyXG4gICAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICBhYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFkdmFudGFnZVNlY3Rpb24oKXtcclxuICAgIGNvbnN0IGFkdmFudGFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBhZHZhbnRhZ2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhZHZhbnRhZ2Utc2VjdGlvblwiKTtcclxuXHJcbiAgICBhZHZhbnRhZ2VzLmZvckVhY2goYWR2YW50YWdlID0+IHtcclxuICAgICAgICBhZHZhbnRhZ2VTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUFkdmFudGFnZShhZHZhbnRhZ2UuaW1nLCBhZHZhbnRhZ2UubmFtZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZHZhbnRhZ2VTZWN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWR2YW50YWdlKGltZ1BhdGgsIGhlYWRlclRleHQpIHtcclxuICAgIGNvbnN0IGFkdmFudGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFkdmFudGFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlJyk7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBpbWcuc3JjID0gaW1nUGF0aDtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYWR2YW50YWdlLWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGhlYWRlclRleHQ7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiYWR2YW50YWdlLXRleHRcIik7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlByb2Zlc3Npb25hbCBjb25zaWRlciBldmVyeW9uZSBwcm9ibHMgc21hbGwgbmljaGUgZnJpZW5kbHlcIjtcclxuICAgIFxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuaW5uZXJIVE1MID0gXCJTZWUgbW9yZVwiO1xyXG4gICAgbGluay5ocmVmID0gJyMnO1xyXG5cclxuICAgIGFkdmFudGFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGFkdmFudGFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGFkdmFudGFnZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgYWR2YW50YWdlRWxlbWVudC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgICByZXR1cm4gYWR2YW50YWdlRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGVhbVNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0ZWFtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIHRlYW1TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0ZWFtLXNlY3Rpb25cIik7XHJcblxyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnc3VidGl0bGUnKTtcclxuICAgIHN1YnRpdGxlLmlubmVySFRNTCA9IFwiVEVBTVwiO1xyXG5cclxuICAgIGNvbnN0IGgyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMkVsZW1lbnQuaW5uZXJIVE1MID0gXCJNZWV0IE91ciBQcm9mZXNzaW9uYWwgQ2hlZnNcIjtcclxuXHJcbiAgICBjb25zdCBjaGVmc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWZzTGlzdC5jbGFzc0xpc3QuYWRkKFwiY2hlZnMtbGlzdFwiKTtcclxuXHJcbiAgICBjaGVmcy5mb3JFYWNoKGNoZWYgPT4ge1xyXG4gICAgICAgIGNoZWZzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVDaGVmRWxlbWVudChjaGVmLmltZywgY2hlZi5uYW1lLCBjaGVmLnZhY2F0aW9uKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0ZWFtU2VjdGlvbi5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XHJcbiAgICB0ZWFtU2VjdGlvbi5hcHBlbmRDaGlsZChoMkVsZW1lbnQpO1xyXG4gICAgdGVhbVNlY3Rpb24uYXBwZW5kQ2hpbGQoY2hlZnNMaXN0KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRlYW1TZWN0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlZkVsZW1lbnQoaW1nUGF0aCwgY2hlZk5hbWUsIGNoZWZDbGFzcyl7XHJcbiAgICBjb25zdCBjaGVmRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2hlZkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlZi1lbGVtZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gaW1nUGF0aDtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2hlZi1uYW1lJyk7XHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gY2hlZk5hbWU7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2hlZi1jbGFzc1wiKTtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGNoZWZDbGFzcztcclxuXHJcbiAgICBjaGVmRWxlbWVudC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgY2hlZkVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNoZWZFbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gY2hlZkVsZW1lbnQ7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/storySection.js":
/*!*****************************!*\
  !*** ./src/storySection.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStorySection: () => (/* binding */ createStorySection)\n/* harmony export */ });\n/* harmony import */ var _src_img_story_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/img/story-image.png */ \"./src/img/story-image.png\");\n\r\n\r\nfunction createStorySection(content) {\r\n    const storySection = document.createElement('section');\r\n    storySection.classList.add(\"story-section\");\r\n\r\n    const storySectionImg = document.createElement('img');\r\n    storySectionImg.src = _src_img_story_image_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    const storyText = document.createElement('div');\r\n    storyText.classList.add(\"story-text\");\r\n    const h2StoryElement = document.createElement('h2');\r\n    h2StoryElement.innerHTML = \"The Story\";\r\n    const pStoryElement = document.createElement('p');\r\n    pStoryElement.innerHTML =\r\n        \"Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.\";\r\n    storyText.appendChild(h2StoryElement);\r\n    storyText.appendChild(pStoryElement);\r\n\r\n    const year1996Text = document.createElement('div');\r\n    year1996Text.classList.add(\"year-1996\");\r\n    const h2Year1996Element = document.createElement('h2');\r\n    h2Year1996Element.innerHTML = \"1996\";\r\n    const pYear1996Element = document.createElement('p');\r\n    pYear1996Element.innerHTML = \"Lorem Ipsum is that it has a more-or-less normal distribution\";\r\n    year1996Text.appendChild(h2Year1996Element);\r\n    year1996Text.appendChild(pYear1996Element);\r\n\r\n    const year2021Text = document.createElement('div');\r\n    year2021Text.classList.add(\"year-2021\");\r\n    const h2Year2021Element = document.createElement('h2');\r\n    h2Year2021Element.innerHTML = \"2021\";\r\n    const pYear2021Element = document.createElement('p');\r\n    pYear2021Element.innerHTML = \"Lorem Ipsum is that it has a more-or-less normal Content content\";\r\n    year2021Text.appendChild(h2Year2021Element);\r\n    year2021Text.appendChild(pYear2021Element);\r\n\r\n    storySection.appendChild(storySectionImg);\r\n    storySection.appendChild(storyText);\r\n    storySection.appendChild(year1996Text);\r\n    storySection.appendChild(year2021Text);\r\n\r\n    content.appendChild(storySection);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcnlTZWN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBQ2xEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcnlTZWN0aW9uLmpzP2JkNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0b3J5SW1nIGZyb20gJy4uL3NyYy9pbWcvc3RvcnktaW1hZ2UucG5nJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yeVNlY3Rpb24oY29udGVudCkge1xyXG4gICAgY29uc3Qgc3RvcnlTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgc3RvcnlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzdG9yeS1zZWN0aW9uXCIpO1xyXG5cclxuICAgIGNvbnN0IHN0b3J5U2VjdGlvbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3RvcnlTZWN0aW9uSW1nLnNyYyA9IHN0b3J5SW1nO1xyXG5cclxuICAgIGNvbnN0IHN0b3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3RvcnlUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdG9yeS10ZXh0XCIpO1xyXG4gICAgY29uc3QgaDJTdG9yeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaDJTdG9yeUVsZW1lbnQuaW5uZXJIVE1MID0gXCJUaGUgU3RvcnlcIjtcclxuICAgIGNvbnN0IHBTdG9yeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwU3RvcnlFbGVtZW50LmlubmVySFRNTCA9XHJcbiAgICAgICAgXCJMb3JlbSBJcHN1bSBpcyB0aGF0IGl0IGhhcyBhIG1vcmUtb3ItbGVzcyBub3JtYWwgZGlzdHJpYnV0aW9uIG9mIGxldHRlcnMsIGFzIG9wcG9zZWQgdG8gdXNpbmcgJ0NvbnRlbnQgaGVyZSwgY29udGVudCBnZnNoZXJlJywgbWFraW5sb29rIGxpa2UgcmVhZGFibGUgRW5nbGlzaC4gTWFueSBkZXNrdG9wIHB1Ymxpc2hpbmcgcGFja2FnZXMuXCI7XHJcbiAgICBzdG9yeVRleHQuYXBwZW5kQ2hpbGQoaDJTdG9yeUVsZW1lbnQpO1xyXG4gICAgc3RvcnlUZXh0LmFwcGVuZENoaWxkKHBTdG9yeUVsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHllYXIxOTk2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgeWVhcjE5OTZUZXh0LmNsYXNzTGlzdC5hZGQoXCJ5ZWFyLTE5OTZcIik7XHJcbiAgICBjb25zdCBoMlllYXIxOTk2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBoMlllYXIxOTk2RWxlbWVudC5pbm5lckhUTUwgPSBcIjE5OTZcIjtcclxuICAgIGNvbnN0IHBZZWFyMTk5NkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwWWVhcjE5OTZFbGVtZW50LmlubmVySFRNTCA9IFwiTG9yZW0gSXBzdW0gaXMgdGhhdCBpdCBoYXMgYSBtb3JlLW9yLWxlc3Mgbm9ybWFsIGRpc3RyaWJ1dGlvblwiO1xyXG4gICAgeWVhcjE5OTZUZXh0LmFwcGVuZENoaWxkKGgyWWVhcjE5OTZFbGVtZW50KTtcclxuICAgIHllYXIxOTk2VGV4dC5hcHBlbmRDaGlsZChwWWVhcjE5OTZFbGVtZW50KTtcclxuXHJcbiAgICBjb25zdCB5ZWFyMjAyMVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHllYXIyMDIxVGV4dC5jbGFzc0xpc3QuYWRkKFwieWVhci0yMDIxXCIpO1xyXG4gICAgY29uc3QgaDJZZWFyMjAyMUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaDJZZWFyMjAyMUVsZW1lbnQuaW5uZXJIVE1MID0gXCIyMDIxXCI7XHJcbiAgICBjb25zdCBwWWVhcjIwMjFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcFllYXIyMDIxRWxlbWVudC5pbm5lckhUTUwgPSBcIkxvcmVtIElwc3VtIGlzIHRoYXQgaXQgaGFzIGEgbW9yZS1vci1sZXNzIG5vcm1hbCBDb250ZW50IGNvbnRlbnRcIjtcclxuICAgIHllYXIyMDIxVGV4dC5hcHBlbmRDaGlsZChoMlllYXIyMDIxRWxlbWVudCk7XHJcbiAgICB5ZWFyMjAyMVRleHQuYXBwZW5kQ2hpbGQocFllYXIyMDIxRWxlbWVudCk7XHJcblxyXG4gICAgc3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKHN0b3J5U2VjdGlvbkltZyk7XHJcbiAgICBzdG9yeVNlY3Rpb24uYXBwZW5kQ2hpbGQoc3RvcnlUZXh0KTtcclxuICAgIHN0b3J5U2VjdGlvbi5hcHBlbmRDaGlsZCh5ZWFyMTk5NlRleHQpO1xyXG4gICAgc3RvcnlTZWN0aW9uLmFwcGVuZENoaWxkKHllYXIyMDIxVGV4dCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzdG9yeVNlY3Rpb24pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/storySection.js\n");

/***/ }),

/***/ "./src/img/about-us-image.png":
/*!************************************!*\
  !*** ./src/img/about-us-image.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f08fb8d4216d4cea4747.png";

/***/ }),

/***/ "./src/img/drinks-juices.svg":
/*!***********************************!*\
  !*** ./src/img/drinks-juices.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f64b418bc0bf6396fc5b.svg";

/***/ }),

/***/ "./src/img/first-chef.png":
/*!********************************!*\
  !*** ./src/img/first-chef.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ea23013e68424ad3cff.png";

/***/ }),

/***/ "./src/img/fourth-chef.png":
/*!*********************************!*\
  !*** ./src/img/fourth-chef.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bafb9ffa17d195323f7.png";

/***/ }),

/***/ "./src/img/fresh-product.svg":
/*!***********************************!*\
  !*** ./src/img/fresh-product.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5af9abdfc0c37489dcf.svg";

/***/ }),

/***/ "./src/img/second-chef.png":
/*!*********************************!*\
  !*** ./src/img/second-chef.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4306dc498557b357f420.png";

/***/ }),

/***/ "./src/img/skilled-chefs.svg":
/*!***********************************!*\
  !*** ./src/img/skilled-chefs.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cb76c7d25d0749cbd58.svg";

/***/ }),

/***/ "./src/img/story-image.png":
/*!*********************************!*\
  !*** ./src/img/story-image.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35bf88c584e8c051e205.png";

/***/ }),

/***/ "./src/img/third-chef.png":
/*!********************************!*\
  !*** ./src/img/third-chef.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fdda46b1e130d05b6728.png";

/***/ }),

/***/ "./src/img/vegan-cuisine.svg":
/*!***********************************!*\
  !*** ./src/img/vegan-cuisine.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a58764cf9a26da42146.svg";

/***/ })

}]);