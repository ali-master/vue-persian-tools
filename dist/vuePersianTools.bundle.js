/*! vuePersianTools v.0.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vuePersianTools", [], factory);
	else if(typeof exports === 'object')
		exports["vuePersianTools"] = factory();
	else
		root["vuePersianTools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_digits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_isPersian__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toPersianChars__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_NumberToWords__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_WordsToNumber__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_addCommas__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_removeCommas__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_nationalId__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_getPlaceByIranNationalId__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_verifyCardNumber__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_getBankNameFromCardNumber__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_URLfix__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_SortText__ = __webpack_require__(19);
/* unused harmony reexport NumberToWords */
/* unused harmony reexport WordsToNumber */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_isPersian__["a"]; });
/* unused harmony reexport toPersianChars */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__lib_addCommas__["a"]; });
/* unused harmony reexport removeCommas */
/* unused harmony reexport digitsEnToFa */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_digits__["b"]; });
/* unused harmony reexport digitsArToFa */
/* unused harmony reexport digitsArToEn */
/* unused harmony reexport verifyIranianNationalId */
/* unused harmony reexport getPlaceByIranNationalId */
/* unused harmony reexport verifyCardNumber */
/* unused harmony reexport getBankNameFromCardNumber */
/* unused harmony reexport URLfix */
/* unused harmony reexport SortText */
// Digits Converter

// check and convert persian string


// String and Number Converter


// Add and Remove Commas


// Iran National-ID


// Verify Card Number and Get Bank Name from Card-Number


// Fix and sort persian string






/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = digitsEnToFa;
/* harmony export (immutable) */ __webpack_exports__["b"] = digitsFaToEn;
/* unused harmony export digitsArToFa */
/* unused harmony export digitsArToEn */
const faNums = '۰۱۲۳۴۵۶۷۸۹';
const arNums = '٠١٢٣٤٥٦٧٨٩';

/** digitsEnToFa
 *
 *  Description: Takes a string made of English digits only, and
 *  returns a string that represents the same number but with
 *  Persian digits
 *
 */
function digitsEnToFa(str) {
    if (!str) return;

    str = str.toString();
    for (let i = 0; i < 10; i++) {
        let replaceEntoFa = new RegExp('' + i, 'g');
        str = str.toString().replace(replaceEntoFa, faNums[i]);
    }

    return str;
}

/** digitsFaToEn
 *
 *  Description: Takes a string made of English digits only, and
 *  returns a string that represents the same number but with
 *  Persian digits
 *
 */
function digitsFaToEn(str) {
    if (!str) return;

    str = str.toString();
    for (let i = 0; i < 10; i++) {
        let replaceFaToEn = new RegExp(faNums[i], 'g');
        str = str.replace(replaceFaToEn, i);
    }

    return str;
}

/** digitsArToFa
 *
 *  Description: Takes a string that contains digits, and
 *  replaces all Arabic digits with the corresponding Persian
 *  digits
 *
 */
function digitsArToFa(str) {
    if (!str) return;

    str = str.toString();
    for (let i = 0; i < 10; i++) {
        let replaceArabicToPersian = new RegExp(arNums[i], 'g');
        str = str.replace(replaceArabicToPersian, faNums[i]);
    }

    return str;
}

/** digitsArToEn
 *
 *  Description: Takes a string that contains digits, and
 *  replaces all Arabic digits with the corresponding English
 *  digits
 *
 */
function digitsArToEn(str) {
    if (!str) return;

    str = str.toString();
    for (let i = 0; i < 10; i++) {
        let replaceArabicToEnglish = new RegExp(arNums[i], 'g');
        str = str.replace(replaceArabicToEnglish, i);
    }

    return str;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Remove all commas in String``
 * @param  {[number]} number
 * @return {[string]}
 */
const removeCommas = number => {
    if (number.toString(16).indexOf(',') !== -1) {
        number = number.replace(/,\s?/g, '');
    }

    return number;
};

/* harmony default export */ __webpack_exports__["a"] = (removeCommas);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Check National-id validation
 * @method verifyIranianNationalId
 * @param  {String?}          nationalId [String of national id - like this: 1111111111]
 * @return {Boolean}                    [valid or no]
 */
function verifyIranianNationalId(nationalId) {
    if (nationalId) {
        let code = nationalId.toString() || null;

        if (!code.match(/^\d{10}$/)) return false;
        code = ('0000' + code).substr(code.length + 4 - 10);

        if (parseInt(code.substr(3, 6), 10) === 0) return false;

        let lastNumber = parseInt(code.substr(9, 1), 10);
        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += parseInt(code.substr(i, 1), 10) * (10 - i);
        }

        sum = sum % 11;

        return (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (verifyIranianNationalId);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function verifyCardNumber(digits) {
    digits = digits.toString();

    const length = digits.length;
    if (length < 16 || parseInt(digits.substr(1, 10), 10) === 0 || parseInt(digits.substr(10, 6), 10) === 0) {
        return false;
    }

    let sum = 0;
    let even, subDigit;
    for (let i = 0; i < 16; i++) {
        even = i % 2 === 0 ? 2 : 1;
        subDigit = parseInt(digits.substr(i, 1), 10) * even;
        sum += subDigit > 9 ? subDigit - 9 : subDigit;
    }
    return sum % 10 === 0;
}

/* harmony default export */ __webpack_exports__["a"] = (verifyCardNumber);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_persian_tools__ = __webpack_require__(0);


var VuePersianTools = {
	install: function install(Vue, options) {
		Vue.filter("isPersian", function (value) {
			return value ? Object(__WEBPACK_IMPORTED_MODULE_0_persian_tools__["c" /* isPersian */])(value) : value;
		});
	}
};

/* harmony default export */ __webpack_exports__["default"] = (VuePersianTools);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @param {string}
 * @return {boolean}
 */
const isPersian = str => {
	const letters = [];
	for (let i = 0; i <= str.length; i++) {
		letters[i] = str.substring(i - 1, i);
		if (letters[i].charCodeAt() > 255) {
			return true;
		}
	}
	return false;
};
/* harmony default export */ __webpack_exports__["a"] = (isPersian);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable */

/** toPersianChars
 *
 *  Description: Replaces all instances of ي and ك withی and ک,
 *  respectively. It should not make any ch anges to Arabic text
 *  surrounded by appropriate templates.
 *
 */
function toPersianChars(str) {
    let old = '';

    // Do not touch the text inside links, images, categories
    while (old != str) {
        old = str;

        str = str.replace(/\{\{(عەرەبی|بە عەرەبی|بە ئویغوری)\|(.*?)ى(.*?)\}\}/g, '{{$1|$2\u200b\u200b\u200bی\u200b\u200b\u200b$3}}');
        str = str.replace(/\{\{(بە سیندی)\|(.*?)ه(.*?)\}\}/g, '{{$1|$2\u200f\u200f\u200fھ\u200f\u200f\u200f$3}}');
        str = str.replace(/\{\{(بە پەشتۆ)\|(.*?)ي(.*?)\}\}/g, '{{$1|$2\u200b\u200b\u200bی\u200b\u200b\u200b$3}}');
        str = str.replace(/\[\[([^\]]*?\:[^\]]*?)ي(.*?)\]\]/g, '[[$1\u200f\u200f\u200fی\u200f\u200f\u200f$2]]');
        str = str.replace(/\[\[([^\]]*?\:[^\]]*?)ى(.*?)\]\]/g, '[[$1\u200b\u200b\u200bی\u200b\u200b\u200b$2]]');
        str = str.replace(/\[\[([^\]]*?\:[^\]]*?)ك(.*?)\]\]/g, '[[$1\u200f\u200f\u200fک\u200f\u200f\u200f$2]]');
        str = str.replace(/\[\[([^\]]*?\:[^\]]*?)ه‌(.*?)\]\]/g, '[[$1\u200f\u200f\u200fە\u200f\u200f\u200f$2]]');
        str = str.replace(/\[\[([^\]]*?\:[^\]]*?)ه(.*?)\]\]/g, '[[$1\u200f\u200f\u200fھ\u200f\u200f\u200f$2]]');
    }

    // Replace every ي and ك with ی and ک, respectively
    // NOTE: This WILL mess with images, links, categories
    // but we will undo it later
    str = str.replace(/ي/g, 'ی');
    str = str.replace(/ك/g, 'ک');
    str = str.replace(/ى/g, 'ی');
    str = str.replace(new RegExp('ه($|[^ء-يٱ-ە])', 'g'), 'ە$1');
    str = str.replace(/ە‌/g, 'ە');
    str = str.replace(/ه/g, 'ھ');

    // NOTE: This will also undo changes to categories which is not good
    // but we will undo that later
    str = str.replace(/\u200f\u200f\u200fی\u200f\u200f\u200f/g, 'ي');
    str = str.replace(/\u200b\u200b\u200bی\u200b\u200b\u200b/g, 'ى');
    str = str.replace(/\u200f\u200f\u200fک\u200f\u200f\u200f/g, 'ك');
    str = str.replace(/\u200f\u200f\u200fه\u200f\u200f\u200f/g, 'ه‌');
    str = str.replace(/\u200f\u200f\u200fھ\u200f\u200f\u200f/g, 'ه');

    old = '';
    // Replace every ي and ك in categories with ی and ک, respectively
    while (old != str) {
        old = str;
        str = str.replace(/\[\[(پۆل|[Cc]ategory):(.*?)(ى|ي)(.*?)\]\]/g, '[[$1:$2ی$4]]');
        str = str.replace(/\[\[(پۆل|[Cc]ategory):(.*?)ك(.*?)\]\]/g, '[[$1:$2ک$3]]');
        str = str.replace(/\[\[(پۆل|[Cc]ategory):(.*?)ه‌(.*?)\]\]/g, '[[$1:$2$3ە]]');
        str = str.replace(/\[\[(پۆل|[Cc]ategory):(.*?)ه(.*?)\]\]/g, '[[$1:$2ھ$3]]');
    }

    // Finally, replace every ی and ک in Arabic text with ي and ك, respectively
    old = '';
    while (old != str) {
        old = str;
        str = str.replace(/\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ی([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g, '{{$1}}$2ي$3{{کۆتایی عەرەبی}}');
        str = str.replace(/\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ک([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g, '{{$1}}$2ك$3{{کۆتایی عەرەبی}}');
        str = str.replace(/\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ە([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g, '{{$1}}$2ه$3{{کۆتایی عەرەبی}}');
        str = str.replace(/\{\{(عەرەبی|سەرەتای عەرەبی)\}\}([^\}]*)ھ([^\{]*)\{\{کۆتایی\sعەرەبی\}\}/g, '{{$1}}$2ه$3{{کۆتایی عەرەبی}}');
        str = str.replace(/\{\{(بە پەشتۆ)\|(.*?)ى(.*?)\}\}/g, '{{$1|$2ي$3}}');
        str = str.replace(/\{\{(عەرەبی|بە عەرەبی|بە سیندی|بە ئویغوری)\|(.*?)ی(.*?)\}\}/g, '{{$1|$2ي$3}}');
        str = str.replace(/\{\{(عەرەبی|بە عەرەبی|بە ئویغوری)\|(.*?)ک(.*?)\}\}/g, '{{$1|$2ك$3}}');
        str = str.replace(/\{\{(عەرەبی|بە عەرەبی|فارسی|بە فارسی|ن.فارسی|بە پەشتۆ)\|(.*?)ە(.*?)\}\}/g, '{{$1|$2ه$3}}');
        str = str.replace(/\{\{(عەرەبی|بە عەرەبی|فارسی|بە فارسی|ن.فارسی|بە پەشتۆ)\|(.*?)ھ(.*?)\}\}/g, '{{$1|$2ه$3}}');
    }

    return str;
}

/* unused harmony default export */ var _unused_webpack_default_export = (toPersianChars);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__removeCommas__ = __webpack_require__(2);



// <Refrence path="https://fa.wikipedia.org/wiki/۱۰۰۰۰۰۰۰۰۰_(عدد)" />

const config = {
    scale: ['', 'هزار', 'میلیون', 'میلیارد']
};

const numberToWord = {};

numberToWord[0] = '';
numberToWord[1] = 'یک';
numberToWord[2] = 'دو';
numberToWord[3] = 'سه';
numberToWord[4] = 'چهار';
numberToWord[5] = 'پنج';
numberToWord[6] = 'شش';
numberToWord[7] = 'هفت';
numberToWord[8] = 'هشت';
numberToWord[9] = 'نه';
numberToWord[10] = 'ده';
numberToWord[11] = 'یازده';
numberToWord[12] = 'دوازده';
numberToWord[13] = 'سیزده';
numberToWord[14] = 'چهارده';
numberToWord[15] = 'پانزده';
numberToWord[16] = 'شانزده';
numberToWord[17] = 'هفده';
numberToWord[18] = 'هجده';
numberToWord[19] = 'نوزده';
numberToWord[20] = 'بیست';
numberToWord[30] = 'سی';
numberToWord[40] = 'چهل';
numberToWord[50] = 'پنجاه';
numberToWord[60] = 'شصت';
numberToWord[70] = 'هفتاد';
numberToWord[80] = 'هشتاد';
numberToWord[90] = 'نود';
numberToWord[100] = 'صد';
numberToWord[200] = 'دویست';
numberToWord[300] = 'سیصد';
numberToWord[400] = 'چهار صد';
numberToWord[500] = 'پانصد';
numberToWord[600] = 'شش صد';
numberToWord[700] = 'هفت صد';
numberToWord[800] = 'هشت صد';
numberToWord[900] = 'نه صد';

/**
 * [toWords, Convert Numbers to Persian Text]
 * @param  {[type]} number
 * @return {[type]}
 */
const toWords = number => {
    let unit = 100;
    let result = '';

    while (unit > 0) {
        if (Math.floor(number / unit) * unit !== 0) {
            if (number in numberToWord) {
                result += numberToWord[number];
                break;
            } else {
                result += numberToWord[Math.floor(number / unit) * unit] + ' و ';
                number %= unit;
            }
        }
        unit = Math.floor(unit / 10);
    }
    return result;
};

const NumberToWords = number => {
    if (number === '') {
        return '';
    }
    if (number === 0) {
        return '۰';
    }

    const base = 1000;

    let result = [];

    number = Object(__WEBPACK_IMPORTED_MODULE_1__removeCommas__["a" /* default */])(number);

    const isNegative = number < 0;
    number = isNegative ? number * -1 : number;

    while (number > 0) {
        result.push(toWords(number % base));
        number = Math.floor(number / base);
    }
    if (result.length > 4) {
        return '';
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i] !== '') {
            result[i] += ' ' + config.scale[i] + ' و ';
        }
    }
    result.reverse();

    let words = result.join('');
    while (words.endsWith(' و ')) {
        words = words.slice(0, -3);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0__util_utils__["a" /* trim */])(isNegative ? `منفی ${words}` : words);
};

/* unused harmony default export */ var _unused_webpack_default_export = (NumberToWords);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trim; });
const trim = str => str.replace(/^\s+|\s+$/g, '');




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__digits__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_replaceArray__ = __webpack_require__(11);




// <Refrence path='https://fa.wikipedia.org/wiki/الگو:عدد_به_حروف/توضیحات' />
// https://fa.wikipedia.org/wiki/۱۰۰۰۰۰۰۰۰۰_(عدد)

class WordsToNumber {
    constructor(words) {
        this.units = {
            صفر: 0,
            یک: 1,
            دو: 2,
            سه: 3,
            چهار: 4,
            پنج: 5,
            شش: 6,
            شیش: 6,
            هفت: 7,
            هشت: 8,
            نه: 9,
            ده: 10,
            یازده: 11,
            دوازده: 12,
            سیزده: 13,
            چهارده: 14,
            پانزده: 15,
            شانزده: 16,
            هفده: 17,
            هجده: 18,
            نوزده: 19,
            بیست: 20,
            سی: 30,
            چهل: 40,
            پنجاه: 50,
            شصت: 60,
            هفتاد: 70,
            هشتاد: 80,
            نود: 90
        };

        this.adjective = {
            صد: 100,
            دویست: 200,
            سیصد: 300,
            چهارصد: 400,
            پانصد: 500,
            ششصد: 600,
            هفتصد: 700,
            هشتصد: 800,
            نهصد: 900
        };

        this.magnitudes = {
            هزار: 1000,
            میلیون: 1000000,
            بیلیون: 1000000000,
            میلیارد: 1000000000,
            تریلیون: 1000000000000
        };

        this.otherAdjective = {
            'شیش صد': 'ششصد',
            'شش صد': 'ششصد',
            'هفت صد': 'هفتصد',
            'هشت صد': 'هشتصد',
            'نه صد': 'نهصد'
        };
    }
    /**
     * Convert to numbers
     * @method convert
     * @param  {String} words         [String of words - like this: سی صد پنجاه هزار]
     * @param  {String} [digits='en'] [convert number digits to en or fa]
     * @return {Number}               [Result - like this: 350000]
     */
    convert(words, { digits = 'en', addCommas = false } = {}) {
        let numbersConverted = this.compute(this.tokenize(words));

        numbersConverted = addCommas ? Object(__WEBPACK_IMPORTED_MODULE_0____["a" /* addCommas */])(numbersConverted) : numbersConverted;
        numbersConverted = digits === 'fa' ? Object(__WEBPACK_IMPORTED_MODULE_1__digits__["a" /* digitsEnToFa */])(numbersConverted) : numbersConverted;

        return numbersConverted;
    }
    tokenize(allWords) {
        let words = Object(__WEBPACK_IMPORTED_MODULE_2__util_replaceArray__["a" /* default */])(allWords, this.otherAdjective);
        words = words.replace(new RegExp('(مین|م)$', 'ig'), '');

        let result = [];

        words.split(' ').forEach(word => (word === 'و' ? '' : !isNaN(+word) ? result.push(+word) : result.push(word)));

        return result;
    }
    compute(tokens) {
        let sum = 0;
        let isNegative = false;

        tokens.forEach(token => {
            token = Object(__WEBPACK_IMPORTED_MODULE_1__digits__["b" /* digitsFaToEn */])(token);

            if (token === 'منفی') {
                isNegative = true;
            } else if (this.units[token] != null) {
                sum += this.units[token];
            } else if (this.adjective[token] != null) {
                sum += this.adjective[token];
            } else if (!isNaN(token)) {
                sum += parseInt(token, 10);
            } else {
                sum *= this.magnitudes[token];
            }
        });
        return isNegative ? sum * -1 : sum;
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (WordsToNumber);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((string, find) => {
	const pattern = new RegExp(Object.keys(find).join('|'), 'gi');
	string = string.replace(pattern, matched => {
		return find[matched];
	});
	return string;
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(0);


/**
 * Add Commas into number
 * @method addCommas
 * @param   {Number}  number [input number, like this: 300000]
 * @return  {String}  		 [returned String, like this: 30,000]
 */
const addCommas = number => {
    number = '' + number;
    number = Object(__WEBPACK_IMPORTED_MODULE_0____["c" /* isPersian */])(number) ? Object(__WEBPACK_IMPORTED_MODULE_0____["b" /* digitsFaToEn */])(number) : number;

    return number && number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/* harmony default export */ __webpack_exports__["a"] = (addCommas);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nationalId__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_provincesCodes_json__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_provincesCodes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dummy_provincesCodes_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dummy_nationalId_json__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dummy_nationalId_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dummy_nationalId_json__);





/**
 * Get Place by Iranian National-Id
 * @method getPlaceByIranNationalId
 * @param  {String?}                 nationalId [String of national id - like this: 1111111111]
 * @return {Object}                             [If nationalId is valid, function returning an object of details, but nationalId is invalid, return error message]
 */
function getPlaceByIranNationalId(nationalId) {
    if (nationalId) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__nationalId__["a" /* default */])(nationalId)) {
            let code = nationalId.toString().substring(0, 3);
            let find = __WEBPACK_IMPORTED_MODULE_2__dummy_nationalId_json___default.a.filter(row => row.code.indexOf(code) !== -1);

            if (find.length) {
                let findProvinces = __WEBPACK_IMPORTED_MODULE_1__dummy_provincesCodes_json___default.a.filter(province => province.code === find[0].parentCode);

                return {
                    city: find[0].city,
                    province: findProvinces.length ? findProvinces[0].city : 'unkown',
                    codes: find[0].code.indexOf('-') !== -1 ? find[0].code.split('-') : [find[0].code]
                };
            } else {
                return { code: 1, message: "can't find national-id" };
            }
        } else {
            return 'Invalid national-id';
        }
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (getPlaceByIranNationalId);


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [{"code":1,"city":"آذربایجان شرقی"},{"code":2,"city":"آذربایجان غربی"},{"code":3,"city":"همدان"},{"code":4,"city":"یزد"},{"code":5,"city":"مرکزی"},{"code":6,"city":"هرمزگان"},{"code":7,"city":"لرستان"},{"code":8,"city":"مازندران"},{"code":9,"city":"گلستان"},{"code":10,"city":"گیلان"},{"code":11,"city":"کرمانشاه"},{"code":12,"city":"کهکیلویه و بویراحمد"},{"code":13,"city":"کردستان"},{"code":14,"city":"کرمان"},{"code":15,"city":"قزوین"},{"code":16,"city":"قم"},{"code":17,"city":"فارس"},{"code":18,"city":"سمنان"},{"code":19,"city":"سیستان و بلوچستان"},{"code":20,"city":"خوزستان"},{"code":21,"city":"خراسان رضوی"},{"code":22,"city":"خراسان شمالی"},{"code":23,"city":"چهارمحال و بختیاری"},{"code":24,"city":"خراسان جنوبی"},{"code":25,"city":"بوشهر"},{"code":26,"city":"تهران"},{"code":27,"city":"امور خارجه"},{"code":28,"city":"ایلام"},{"code":29,"city":"اردبیل"},{"code":30,"city":"اصفهان"}]

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = [{"code":"169","city":"آذرشهر","parentCode":1},{"code":"170","city":"اسکو","parentCode":1},{"code":"149-150","city":"اهر","parentCode":1},{"code":"171","city":"بستان آباد","parentCode":1},{"code":"168","city":"بناب","parentCode":1},{"code":"136-137-138","city":"تبریز","parentCode":1},{"code":"545","city":"ترکمانچای","parentCode":1},{"code":"505","city":"جلفا","parentCode":1},{"code":"636","city":"چاروایماق","parentCode":1},{"code":"164-165","city":"سراب","parentCode":1},{"code":"172","city":"شبستر","parentCode":1},{"code":"623","city":"صوفیان","parentCode":1},{"code":"506","city":"عجب شیر","parentCode":1},{"code":"519","city":"کلیبر","parentCode":1},{"code":"154-155","city":"مراغه","parentCode":1},{"code":"567","city":"ورزقان","parentCode":1},{"code":"173","city":"هریس","parentCode":1},{"code":"159-160","city":"هشترود","parentCode":1},{"code":"604","city":"هوراند","parentCode":1},{"code":"274-275","city":"ارومیه","parentCode":2},{"code":"295","city":"اشنویه","parentCode":2},{"code":"637","city":"انزل","parentCode":2},{"code":"292","city":"بوکان","parentCode":2},{"code":"492","city":"پلدشت","parentCode":2},{"code":"289","city":"پیرانشهر","parentCode":2},{"code":"677","city":"تخت سلیمان","parentCode":2},{"code":"294","city":"تکاب","parentCode":2},{"code":"493","city":"چایپاره","parentCode":2},{"code":"279-280","city":"خوی","parentCode":2},{"code":"288","city":"سردشت","parentCode":2},{"code":"284-285","city":"سلماس","parentCode":2},{"code":"638","city":"سیلوانه","parentCode":2},{"code":"291","city":"سیه چشمه(چالدران)","parentCode":2},{"code":"640","city":"شوط","parentCode":2},{"code":"293","city":"شاهین دژ","parentCode":2},{"code":"675","city":"کشاورز","parentCode":2},{"code":"282-283","city":"ماکو","parentCode":2},{"code":"286-287","city":"مهاباد","parentCode":2},{"code":"296-297","city":"میاندوآب","parentCode":2},{"code":"290","city":"نقده","parentCode":2},{"code":"400-401","city":"اسدآباد","parentCode":3},{"code":"404-405","city":"بهار","parentCode":3},{"code":"397","city":"تویسرکان","parentCode":3},{"code":"398-399","city":"رزن","parentCode":3},{"code":"647","city":"شراء و پیشخوار","parentCode":3},{"code":"502","city":"فامنین","parentCode":3},{"code":"584","city":"قلقل رود","parentCode":3},{"code":"402-403","city":"کبودرآهنگ","parentCode":3},{"code":"392-393","city":"ملایر","parentCode":3},{"code":"395-396","city":"نهاوند","parentCode":3},{"code":"386-387","city":"همدان","parentCode":3},{"code":"503","city":"ابرکوه","parentCode":4},{"code":"444","city":"اردکان","parentCode":4},{"code":"551","city":"اشکذر","parentCode":4},{"code":"447","city":"بافق","parentCode":4},{"code":"561","city":"بهاباد","parentCode":4},{"code":"445","city":"تفت","parentCode":4},{"code":"718","city":"دستگردان","parentCode":4},{"code":"083","city":"طبس","parentCode":4},{"code":"446","city":"مهریز","parentCode":4},{"code":"448","city":"میبد","parentCode":4},{"code":"552","city":"نیر","parentCode":4},{"code":"543","city":"هرات و مروست","parentCode":4},{"code":"442-443","city":"یزد","parentCode":4},{"code":"051","city":"آشتیان","parentCode":5},{"code":"052-053","city":"اراک","parentCode":5},{"code":"058","city":"تفرش","parentCode":5},{"code":"055","city":"خمین","parentCode":5},{"code":"617","city":"خنداب","parentCode":5},{"code":"057","city":"دلیجان","parentCode":5},{"code":"618","city":"زرند مرکزی","parentCode":5},{"code":"059-060","city":"ساوه","parentCode":5},{"code":"061-062","city":"سربند","parentCode":5},{"code":"544","city":"فراهان","parentCode":5},{"code":"056","city":"محلات","parentCode":5},{"code":"571","city":"وفس","parentCode":5},{"code":"593","city":"هندودر","parentCode":5},{"code":"667","city":"ابوموسی","parentCode":6},{"code":"348","city":"بستک","parentCode":6},{"code":"586","city":"بشاگرد","parentCode":6},{"code":"338-339","city":"بندرعباس","parentCode":6},{"code":"343-344","city":"بندرلنگه","parentCode":6},{"code":"346","city":"جاسک","parentCode":6},{"code":"337","city":"حاجی آباد","parentCode":6},{"code":"554","city":"خمیر","parentCode":6},{"code":"469","city":"رودان","parentCode":6},{"code":"537","city":"فین","parentCode":6},{"code":"345","city":"قشم","parentCode":6},{"code":"470","city":"گاوبندی","parentCode":6},{"code":"341-342","city":"میناب","parentCode":6},{"code":" 483-484","city":"ازنا","parentCode":7},{"code":"557","city":"اشترینان","parentCode":7},{"code":"418","city":"الشتر","parentCode":7},{"code":"416-417","city":"الیگودرز","parentCode":7},{"code":"412-413","city":"بروجرد","parentCode":7},{"code":"592","city":"پاپی","parentCode":7},{"code":"612","city":"چغلوندی","parentCode":7},{"code":"613","city":"چگنی","parentCode":7},{"code":"406-407","city":"خرم آباد","parentCode":7},{"code":"421","city":"دورود","parentCode":7},{"code":"598","city":"رومشکان","parentCode":7},{"code":"419","city":"کوهدشت","parentCode":7},{"code":"385","city":"ملاوی(پلدختر)","parentCode":7},{"code":"420","city":"نورآباد(دلفان)","parentCode":7},{"code":"528","city":"ویسیان","parentCode":7},{"code":"213-214","city":"آمل","parentCode":8},{"code":"205-206","city":"بابل","parentCode":8},{"code":"498","city":"بابل","parentCode":8},{"code":"568","city":"بندپی","parentCode":8},{"code":"711","city":"بندپی شرقی","parentCode":8},{"code":"217-218","city":"بهشهر","parentCode":8},{"code":"221","city":"تنکابن","parentCode":8},{"code":"582","city":"جویبار","parentCode":8},{"code":"483","city":"چالوس","parentCode":8},{"code":"625","city":"چمستان","parentCode":8},{"code":"576","city":"چهاردانگه","parentCode":8},{"code":"578","city":"دودانگه","parentCode":8},{"code":"227","city":"رامسر","parentCode":8},{"code":"208-209","city":"ساری","parentCode":8},{"code":"225","city":"سوادکوه","parentCode":8},{"code":"577","city":"شیرگاه","parentCode":8},{"code":"712","city":"عباس آباد","parentCode":8},{"code":"215-216","city":"قائمشهر","parentCode":8},{"code":"626","city":"کجور","parentCode":8},{"code":"627","city":"کلاردشت","parentCode":8},{"code":"579","city":"گلوگاه","parentCode":8},{"code":"713","city":"میاندورود","parentCode":8},{"code":"499","city":"نکاء","parentCode":8},{"code":"222","city":"نور","parentCode":8},{"code":"219-220","city":"نوشهر","parentCode":8},{"code":"500-501","city":"هراز و محمودآباد","parentCode":8},{"code":"623","city":"آزادشهر","parentCode":9},{"code":"497","city":"آق قلا","parentCode":9},{"code":"223","city":"بندرترکمن","parentCode":9},{"code":"689","city":"بندرگز","parentCode":9},{"code":"487","city":"رامیان","parentCode":9},{"code":"226","city":"علی آباد","parentCode":9},{"code":"224","city":"کردکوی","parentCode":9},{"code":"386","city":"کلاله","parentCode":9},{"code":"211-212","city":"گرگان","parentCode":9},{"code":"628","city":"گمیشان","parentCode":9},{"code":"202-203","city":"گنبد کاووس","parentCode":9},{"code":"531","city":"مراوه تپه","parentCode":9},{"code":"288","city":"مینودشت","parentCode":9},{"code":"261","city":"آستارا","parentCode":10},{"code":"273","city":"آستانه","parentCode":10},{"code":"630","city":"املش","parentCode":10},{"code":"264","city":"بندرانزلی","parentCode":10},{"code":"518","city":"خمام","parentCode":10},{"code":"631","city":"رحیم آباد","parentCode":10},{"code":"258-259","city":"رشت","parentCode":10},{"code":"570","city":"رضوانشهر","parentCode":10},{"code":"265","city":"رودبار","parentCode":10},{"code":"268-269","city":"رودسر","parentCode":10},{"code":"653","city":"سنگر","parentCode":10},{"code":"517","city":"سیاهکل","parentCode":10},{"code":"569","city":"شفت","parentCode":10},{"code":"267","city":"صومعه سرا","parentCode":10},{"code":"262-263","city":"طالش","parentCode":10},{"code":"593","city":"عمارلو","parentCode":10},{"code":"266","city":"فومن","parentCode":10},{"code":"693","city":"کوچصفهان","parentCode":10},{"code":"271-272","city":"لاهیجان","parentCode":10},{"code":"694","city":"لشت نشاء","parentCode":10},{"code":"270","city":"لنگرود","parentCode":10},{"code":"516","city":"ماسال و شاندرمن","parentCode":10},{"code":"333-334","city":"اسلام آباد","parentCode":11},{"code":"691","city":"باینگان","parentCode":11},{"code":"323-322","city":"پاوه","parentCode":11},{"code":"595","city":"ثلاث باباجانی","parentCode":11},{"code":"395","city":"جوانرود","parentCode":11},{"code":"641","city":"حمیل","parentCode":11},{"code":"596","city":"روانسر","parentCode":11},{"code":"336","city":"سرپل ذهاب","parentCode":11},{"code":"335","city":"سنقر","parentCode":11},{"code":"496","city":"صحنه","parentCode":11},{"code":"337","city":"قصرشیرین","parentCode":11},{"code":"324-325","city":"کرمانشاه","parentCode":11},{"code":"394","city":"کرند","parentCode":11},{"code":"330","city":"کنگاور","parentCode":11},{"code":"332","city":"گیلانغرب","parentCode":11},{"code":"331","city":"هرسین","parentCode":11},{"code":"687","city":"باشت","parentCode":12},{"code":"422-423","city":"بویراحمد(یاسوج)","parentCode":12},{"code":"599","city":"بهمنی","parentCode":12},{"code":"600","city":"چاروسا","parentCode":12},{"code":"688","city":"دروهان","parentCode":12},{"code":"424-425","city":"کهکیلویه(دهدشت)","parentCode":12},{"code":"426","city":"گچساران(دوگنبدان)","parentCode":12},{"code":"550","city":"لنده","parentCode":12},{"code":"697","city":"مارگون","parentCode":12},{"code":"384","city":"بانه","parentCode":13},{"code":"377-378","city":"بیجار","parentCode":13},{"code":"558","city":"دهگلان","parentCode":13},{"code":"385","city":"دیواندره","parentCode":13},{"code":"646","city":"سروآباد","parentCode":13},{"code":"375-376","city":"سقز","parentCode":13},{"code":"372-373","city":"سنندج","parentCode":13},{"code":"379-380","city":"قروه","parentCode":13},{"code":"383","city":"کامیاران","parentCode":13},{"code":"674","city":"کرانی","parentCode":13},{"code":"381-382","city":"مریوان","parentCode":13},{"code":"676","city":"نمشیر","parentCode":13},{"code":"722","city":"ارزونیه","parentCode":14},{"code":"542","city":"انار","parentCode":14},{"code":"312-313","city":"بافت","parentCode":14},{"code":"317","city":"بردسیر","parentCode":14},{"code":"310-311","city":"بم","parentCode":14},{"code":"302-303","city":"جیرفت","parentCode":14},{"code":"583","city":"رابر","parentCode":14},{"code":"321","city":"راور","parentCode":14},{"code":"382","city":"راین","parentCode":14},{"code":"304-305","city":"رفسنجان","parentCode":14},{"code":"536","city":"رودبار کهنوج","parentCode":14},{"code":"605","city":"ریگان","parentCode":14},{"code":"308-309","city":"زرند","parentCode":14},{"code":"306-307","city":"سیرجان","parentCode":14},{"code":"319","city":"شهداد","parentCode":14},{"code":"313-314","city":"شهربابک","parentCode":14},{"code":"606","city":"عنبرآباد","parentCode":14},{"code":"320","city":"فهرج","parentCode":14},{"code":"698","city":"قلعه گنج","parentCode":14},{"code":"298-299","city":"کرمان","parentCode":14},{"code":"535","city":"کوهبنان","parentCode":14},{"code":"315-316","city":"کهنوج","parentCode":14},{"code":"318","city":"گلباف","parentCode":14},{"code":"607","city":"ماهان","parentCode":14},{"code":"608","city":"منوجان","parentCode":14},{"code":"508","city":"آبیک","parentCode":15},{"code":"538","city":"آوج","parentCode":15},{"code":"728","city":"البرز","parentCode":15},{"code":"509","city":"بوئین زهرا","parentCode":15},{"code":"438-439","city":"تاکستان","parentCode":15},{"code":"580","city":"رودبار الموت","parentCode":15},{"code":"590","city":"رودبار شهرستان","parentCode":15},{"code":"559","city":"ضیاءآباد","parentCode":15},{"code":"588","city":"طارم سفلی","parentCode":15},{"code":"431-432","city":"قزوین","parentCode":15},{"code":"037-038","city":"قم","parentCode":16},{"code":"702","city":"کهک","parentCode":16},{"code":"240-241","city":"آباده","parentCode":17},{"code":"670","city":"آباده طشک","parentCode":17},{"code":"648","city":"ارسنجان","parentCode":17},{"code":"252","city":"استهبان","parentCode":17},{"code":"678","city":"اشکنان","parentCode":17},{"code":"253","city":"اقلید","parentCode":17},{"code":"649","city":"اوز","parentCode":17},{"code":"513","city":"بوانات","parentCode":17},{"code":"546","city":"بیضا","parentCode":17},{"code":"671","city":"جویم","parentCode":17},{"code":"246-247","city":"جهرم","parentCode":17},{"code":"654","city":"حاجی آباد(زرین دشت)","parentCode":17},{"code":"548","city":"خرامه","parentCode":17},{"code":"547","city":"خشت و کمارج","parentCode":17},{"code":"655","city":"خفر","parentCode":17},{"code":"248-249","city":"داراب","parentCode":17},{"code":"253","city":"سپیدان","parentCode":17},{"code":"514","city":"سروستان","parentCode":17},{"code":"665","city":"سعادت آباد","parentCode":17},{"code":"673","city":"شیبکوه","parentCode":17},{"code":"228-229-230","city":"شیراز","parentCode":17},{"code":"679","city":"فراشبند","parentCode":17},{"code":"256-257","city":"فسا","parentCode":17},{"code":"244-245","city":"فیروزآباد","parentCode":17},{"code":"681","city":"قنقری(خرم بید)","parentCode":17},{"code":"723","city":"قیروکارزین","parentCode":17},{"code":"236-237","city":"کازرون","parentCode":17},{"code":"683","city":"کوار","parentCode":17},{"code":"656","city":"کراش","parentCode":17},{"code":"250-251","city":"لارستان","parentCode":17},{"code":"515","city":"لامرد","parentCode":17},{"code":"242-243","city":"مرودشت","parentCode":17},{"code":"238-239","city":"ممسنی","parentCode":17},{"code":"657","city":"مهر","parentCode":17},{"code":"255","city":"نی ریز","parentCode":17},{"code":"684","city":"ایوانکی","parentCode":18},{"code":"700","city":"بسطام","parentCode":18},{"code":"642","city":"بیارجمند","parentCode":18},{"code":"457","city":"دامغان","parentCode":18},{"code":"456","city":"سمنان","parentCode":18},{"code":"458-459","city":"شاهرود","parentCode":18},{"code":"460","city":"گرمسار","parentCode":18},{"code":"530","city":"مهدیشهر","parentCode":18},{"code":"520","city":"میامی","parentCode":18},{"code":"358-359","city":"ایرانشهر","parentCode":19},{"code":"682","city":"بزمان","parentCode":19},{"code":"703","city":"بمپور","parentCode":19},{"code":"364-365","city":"چابهار","parentCode":19},{"code":"371","city":"خاش","parentCode":19},{"code":"701","city":"دشتیاری","parentCode":19},{"code":"720","city":"راسک","parentCode":19},{"code":"366-367","city":"زابل","parentCode":19},{"code":"704","city":"زابلی","parentCode":19},{"code":"361-362","city":"زاهدان","parentCode":19},{"code":"369-370","city":"سراوان","parentCode":19},{"code":"635","city":"سرباز","parentCode":19},{"code":"668","city":"سیب و سوران","parentCode":19},{"code":"533","city":"شهرکی و ناروئی(زهک)","parentCode":19},{"code":"705","city":"شیب آب","parentCode":19},{"code":"699","city":"فنوج","parentCode":19},{"code":"669","city":"قصرقند","parentCode":19},{"code":"725","city":"کنارک","parentCode":19},{"code":"597","city":"لاشار(اسپکه)","parentCode":19},{"code":"611","city":"میرجاوه","parentCode":19},{"code":"525","city":"نیک شهر","parentCode":19},{"code":"181","city":"آبادان","parentCode":20},{"code":"527","city":"آغاجاری","parentCode":20},{"code":"585","city":"اروندکنار","parentCode":20},{"code":"685","city":"امیدیه","parentCode":20},{"code":"663","city":"اندیکا","parentCode":20},{"code":"192-193","city":"اندیمشک","parentCode":20},{"code":"174-175","city":"اهواز","parentCode":20},{"code":"183-184","city":"ایذه","parentCode":20},{"code":"481","city":"باغ ملک","parentCode":20},{"code":"706","city":"بندر امام خمینی","parentCode":20},{"code":"194-195","city":"بندرماهشهر","parentCode":20},{"code":"185-186","city":"بهبهان","parentCode":20},{"code":"182","city":"خرمشهر","parentCode":20},{"code":"199-200","city":"دزفول","parentCode":20},{"code":"198","city":"دشت آزادگان","parentCode":20},{"code":"662","city":"رامشیر","parentCode":20},{"code":"190-191","city":"رامهرمز","parentCode":20},{"code":"692","city":"سردشت","parentCode":20},{"code":"189","city":"شادگان","parentCode":20},{"code":"707","city":"شاوور","parentCode":20},{"code":"526","city":"شوش","parentCode":20},{"code":"187-188","city":"شوشتر","parentCode":20},{"code":"729","city":"گتوند","parentCode":20},{"code":"730","city":"لالی","parentCode":20},{"code":"196-197","city":"مسجدسلیمان","parentCode":20},{"code":"661","city":"هندیجان","parentCode":20},{"code":"680","city":"هویزه","parentCode":20},{"code":"643","city":"احمدآباد","parentCode":21},{"code":"562","city":"بجستان","parentCode":21},{"code":"572","city":"بردسکن","parentCode":21},{"code":"074","city":"تایباد","parentCode":21},{"code":"644","city":"تخت جلگه","parentCode":21},{"code":"072-073","city":"تربت جام","parentCode":21},{"code":"069-070","city":"تربت حیدریه","parentCode":21},{"code":"521","city":"جغتای","parentCode":21},{"code":"573","city":"جوین","parentCode":21},{"code":"522","city":"چناران","parentCode":21},{"code":"724","city":"خلیل آباد","parentCode":21},{"code":"076","city":"خواف","parentCode":21},{"code":"077","city":"درگز","parentCode":21},{"code":"650","city":"رشتخوار","parentCode":21},{"code":"574","city":"زبرخان","parentCode":21},{"code":"078-079","city":"سبزوار","parentCode":21},{"code":"081","city":"سرخس","parentCode":21},{"code":"084","city":"فریمان","parentCode":21},{"code":"651","city":"فیض آباد","parentCode":21},{"code":"086-087","city":"قوچان","parentCode":21},{"code":"089-090","city":"کاشمر","parentCode":21},{"code":"553","city":"کلات","parentCode":21},{"code":"091","city":"گناباد","parentCode":21},{"code":"092-093-094","city":"مشهد","parentCode":21},{"code":"097","city":"مشهد منطقه2","parentCode":21},{"code":"098","city":"مشهد منطقه3","parentCode":21},{"code":"096","city":"مشهد منطقه1","parentCode":21},{"code":"105-106","city":"نیشابور","parentCode":21},{"code":"063","city":"اسفراین","parentCode":22},{"code":"067-068","city":"بجنورد","parentCode":22},{"code":"075","city":"جاجرم","parentCode":22},{"code":"591","city":"رازوجرکلان","parentCode":22},{"code":"082","city":"شیروان","parentCode":22},{"code":"635","city":"فاروج","parentCode":22},{"code":"524","city":"مانه و سملقان","parentCode":22},{"code":"468","city":"اردل","parentCode":23},{"code":"465","city":"بروجن","parentCode":23},{"code":"461-462","city":"شهرکرد","parentCode":23},{"code":"467","city":"فارسان","parentCode":23},{"code":"632","city":"فلارد","parentCode":23},{"code":"555","city":"کوهرنگ","parentCode":23},{"code":"633","city":"کیار","parentCode":23},{"code":"629","city":"گندمان","parentCode":23},{"code":"466","city":"لردگان","parentCode":23},{"code":"696","city":"میانکوه","parentCode":23},{"code":"721","city":"بشرویه","parentCode":24},{"code":"064-065","city":"بیرجند","parentCode":24},{"code":"523","city":"درمیان","parentCode":24},{"code":"652","city":"زیرکوه","parentCode":24},{"code":"719","city":"سرایان","parentCode":24},{"code":"716","city":"سربیشه","parentCode":24},{"code":"085","city":"فردوس","parentCode":24},{"code":"088","city":"قائنات","parentCode":24},{"code":"563","city":"نهبندان","parentCode":24},{"code":"529","city":"بندر دیلم","parentCode":25},{"code":"353","city":"بندر گناوه","parentCode":25},{"code":"349-350","city":"بوشهر","parentCode":25},{"code":"355","city":"تنگستان","parentCode":25},{"code":"609","city":"جم","parentCode":25},{"code":"351-352","city":"دشتستان","parentCode":25},{"code":"354","city":"دشتی","parentCode":25},{"code":"732","city":"دلوار","parentCode":25},{"code":"357","city":"دیر","parentCode":25},{"code":"532","city":"سعد آباد","parentCode":25},{"code":"610","city":"شبانکاره","parentCode":25},{"code":"356","city":"کنگان","parentCode":25},{"code":"556","city":"اسلامشهر","parentCode":26},{"code":"658","city":"پاکدشت","parentCode":26},{"code":"001-002-003-004-005-006-007-008","city":"تهران مرکزی","parentCode":26},{"code":"011","city":"تهران جنوب","parentCode":26},{"code":"020","city":"تهران شرق","parentCode":26},{"code":"025","city":"تهرانشمال","parentCode":26},{"code":"015","city":"تهران غرب","parentCode":26},{"code":"043","city":"دماوند","parentCode":26},{"code":"666","city":"رباط کریم","parentCode":26},{"code":"489","city":"ساوجبلاغ","parentCode":26},{"code":"044-045","city":"شمیران","parentCode":26},{"code":"048-049","city":"شهرری","parentCode":26},{"code":"490-491","city":"شهریار","parentCode":26},{"code":"695","city":"طالقان","parentCode":26},{"code":"659","city":"فیروزکوه","parentCode":26},{"code":"031-032","city":"کرج","parentCode":26},{"code":"664","city":"کهریزک","parentCode":26},{"code":"717","city":"نظرآباد","parentCode":26},{"code":"041-042","city":"ورامین","parentCode":26},{"code":"471-472","city":"امور خارجه","parentCode":27},{"code":"454","city":"آبدانان","parentCode":28},{"code":"581","city":"ارکوازی(ملکشاهی)","parentCode":28},{"code":"449-450","city":"ایلام","parentCode":28},{"code":"616","city":"ایوان","parentCode":28},{"code":"534","city":"بدره","parentCode":28},{"code":"455","city":"دره شهر","parentCode":28},{"code":"451","city":"دهلران","parentCode":28},{"code":"726","city":"زرین آباد","parentCode":28},{"code":"634","city":"شیروان لومار","parentCode":28},{"code":"453","city":"شیروان و چرداول","parentCode":28},{"code":"727","city":"موسیان","parentCode":28},{"code":"452","city":"مهران","parentCode":28},{"code":"145-146","city":"اردبیل","parentCode":29},{"code":"731","city":"ارشق","parentCode":29},{"code":"690","city":"انگوت","parentCode":29},{"code":"601","city":"بیله سوار","parentCode":29},{"code":"504","city":"پارس آباد","parentCode":29},{"code":"163","city":"خلخال","parentCode":29},{"code":"714","city":"خورش رستم","parentCode":29},{"code":"715","city":"سرعین","parentCode":29},{"code":"566","city":"سنجبد(کوثر)","parentCode":29},{"code":"166-167","city":"مشکین شهر","parentCode":29},{"code":"161-162","city":"مغان","parentCode":29},{"code":"686","city":"نمین","parentCode":29},{"code":"603","city":"نیر","parentCode":29},{"code":"619","city":"آران و بیدگل","parentCode":30},{"code":"118","city":"اردستان","parentCode":30},{"code":"127-128-129","city":"اصفهان","parentCode":30},{"code":"620","city":"باغ بهادران","parentCode":30},{"code":"621","city":"بوئین و میاندشت","parentCode":30},{"code":"549","city":"تیران و کرون","parentCode":30},{"code":"564","city":"جرقویه","parentCode":30},{"code":"575","city":"چادگان","parentCode":30},{"code":"113-114","city":"خمینی شهر","parentCode":30},{"code":"122","city":"خوانسار","parentCode":30},{"code":"540","city":"خور و بیابانک","parentCode":30},{"code":"660","city":"دولت آباد","parentCode":30},{"code":"120","city":"سمیرم","parentCode":30},{"code":"512","city":"سمیرم سفلی (دهاقان)","parentCode":30},{"code":"510-511","city":"شاهین شهر","parentCode":30},{"code":"119","city":"شهرضا","parentCode":30},{"code":"115","city":"فریدن","parentCode":30},{"code":"112","city":"فریدونشهر","parentCode":30},{"code":"110-111","city":"فلاورجان","parentCode":30},{"code":"125-126","city":"کاشان","parentCode":30},{"code":"565","city":"کوهپایه","parentCode":30},{"code":"121","city":"گلپایگان","parentCode":30},{"code":"116-117","city":"لنجان(زرینشهر)","parentCode":30},{"code":"541","city":"مبارکه","parentCode":30},{"code":"622","city":"میمه","parentCode":30},{"code":"124","city":"نائین","parentCode":30},{"code":"108-109","city":"نجف آباد","parentCode":30},{"code":"123","city":"نطنز","parentCode":30},{"code":"428-427","city":"زنجان","parentCode":30},{"code":"507","city":"ملکان","parentCode":30},{"code":"158","city":"مرند","parentCode":30},{"code":"615","city":"ابهر","parentCode":30},{"code":"615","city":"خرمدره","parentCode":30},{"code":"152-153","city":"میانه","parentCode":30}]

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifyCardNumber__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_banksCode_json__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dummy_banksCode_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dummy_banksCode_json__);



function getBankNameFromCardNumber(digits) {
    if (digits) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__verifyCardNumber__["a" /* default */])(digits)) {
            let code = digits.toString().substr(0, 6);
            try {
                let findBank = __WEBPACK_IMPORTED_MODULE_1__dummy_banksCode_json___default.a.find(bank => bank.code === code);

                if (findBank) {
                    return findBank.name;
                }

                throw new Error('Not found any matches bank with your card number');
            } catch (error) {
                return error;
            }
        } else {
            return { error: -1, message: 'Invalid Card-Number!' };
        }
    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (getBankNameFromCardNumber);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = [{"code":"603799","name":"بانک ملی ایران"},{"code":"589210","name":"بانک سپه"},{"code":"627648","name":"بانک توسعه صادرات"},{"code":"627961","name":"بانک صنعت و معدن"},{"code":"603770","name":"بانک کشاورزی"},{"code":"628023","name":"بانک مسکن"},{"code":"627760","name":"پست بانک ایران"},{"code":"502908","name":"بانک توسعه تعاون"},{"code":"627412","name":"بانک اقتصاد نوین"},{"code":"622106","name":"بانک پارسیان"},{"code":"502229","name":"بانک پاسارگاد"},{"code":"627488","name":"بانک کارآفرین"},{"code":"621986","name":"بانک سامان"},{"code":"639346","name":"بانک سینا"},{"code":"639607","name":"بانک سرمایه"},{"code":"636214","name":"بانک تات"},{"code":"502806","name":"بانک شهر"},{"code":"502938","name":"بانک دی"},{"code":"603769","name":"بانک صادرات"},{"code":"610433","name":"بانک ملت"},{"code":"627353","name":"بانک تجارت"},{"code":"589463","name":"بانک رفاه"},{"code":"627381","name":"بانک انصار"},{"code":"639370","name":"بانک مهر اقتصاد"}]

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Used for fix Persian Charachters in URL
 *
 * @method URLfix
 * @param {String} value
 * @return {String} Fixed String
 */
function URLfix(value) {
    if (!value) {
        return;
    }

    // Replace every %20 with _ to protect them from decodeURI
    let old = '';
    while (old !== value) {
        old = value;
        value = value.replace(/(http\S+?)%20/g, '$1\u200c\u200c\u200c_\u200c\u200c\u200c');
    }

    // Decode URIs
    // NOTE: This would convert all %20's to _'s which could break some links
    // but we will undo that later on
    value = value.replace(/(http\S+)/g, (s, p) => decodeURI(p));

    // Revive all instances of %20 to make sure no links is broken
    value = value.replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g, '%20');

    return value;
}

/* unused harmony default export */ var _unused_webpack_default_export = (URLfix);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** SortText
 *
 *  Description: Takes a piece of text in Persian which contains
 *  several lines (separated by the newline character), and sorts
 *  the lines alphabetically, with respect to their first character.
 *
 */
function SortText(str) {
	const sortPreparation = instr => {
		// solve persian problem on sorting by replace characters in strings
		return instr
			.replace(/ی/g, 'ي')
			.replace(/ک/g, 'ك')
			.replace(/ھ/g, 'ه')
			.replace(/پ/g, 'بی')
			.replace(/چ/g, 'جی')
			.replace(/ڕ/g, 'ری')
			.replace(/ژ/g, 'زی')
			.replace(/ڤ/g, 'فی')
			.replace(/ڵ/g, 'لی')
			.replace(/گ/g, 'كی')
			.replace(/ۆ/g, 'وی')
			.replace(/ە/g, 'هی')
			.replace(/ێ/g, 'يي');
	};

	let temp = str.split(' ');
	temp.sort((a, b) => {
		const keyA = sortPreparation(a);
		const keyB = sortPreparation(b);

		if (keyA < keyB) return -1;
		if (keyA > keyB) return 1;

		return 0;
	});

	return temp;
}

/* unused harmony default export */ var _unused_webpack_default_export = (SortText);


/***/ })
/******/ ]);
});
//# sourceMappingURL=vuePersianTools.bundle.js.map