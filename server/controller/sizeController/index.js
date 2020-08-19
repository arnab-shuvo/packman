"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var InstallerUtils = require('../../utils/packageInstallerUtility');
var versionFinderUtility = require('../../utils/versionFinderUtility');
function getSize(req, res) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var packageName, majorVersions, singleVersion, response, majorVersions_1, majorVersions_1_1, singleResponse, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    packageName = req.query.package;
                    majorVersions = [];
                    return [4 /*yield*/, versionFinderUtility.searchValidPackage(packageName).then(function (response) {
                            if (response.status === 200) {
                                var regex_1 = /(\d+\.)+[0-9]$/g;
                                var versions = [];
                                var versionList = Object.keys(response.data).filter(function (data, index) {
                                    if (regex_1.test(data)) {
                                        return data;
                                    }
                                });
                                console.log(Object.keys(response.data), versionList, 'versionList');
                                var looper = versionList.length > 3 ? 3 : versions.length;
                                for (var i = versionList.length; i > 0; i--) {
                                    if (majorVersions.length !== looper) {
                                        var versionData = {
                                            name: versionList[i - 1],
                                            link: response.data[versionList[i - 1]].dist.tarball,
                                            unpackedSize: response.data[versionList[i - 1]].dist.unpackedSize
                                                ? (response.data[versionList[i - 1]].dist.unpackedSize / 1024).toFixed(2)
                                                : 0,
                                        };
                                        majorVersions.push(versionData);
                                    }
                                }
                            }
                            else {
                                res.json({
                                    res: res,
                                });
                            }
                        })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, InstallerUtils.preparePath(packageName, majorVersions)];
                case 2:
                    _b.sent();
                    singleVersion = {};
                    response = [];
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 9, 10, 15]);
                    majorVersions_1 = __asyncValues(majorVersions);
                    _b.label = 4;
                case 4: return [4 /*yield*/, majorVersions_1.next()];
                case 5:
                    if (!(majorVersions_1_1 = _b.sent(), !majorVersions_1_1.done)) return [3 /*break*/, 8];
                    singleVersion = majorVersions_1_1.value;
                    return [4 /*yield*/, InstallerUtils.installPackage(singleVersion, packageName)];
                case 6:
                    singleResponse = _b.sent();
                    response.push(singleResponse);
                    _b.label = 7;
                case 7: return [3 /*break*/, 4];
                case 8: return [3 /*break*/, 15];
                case 9:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 15];
                case 10:
                    _b.trys.push([10, , 13, 14]);
                    if (!(majorVersions_1_1 && !majorVersions_1_1.done && (_a = majorVersions_1.return))) return [3 /*break*/, 12];
                    return [4 /*yield*/, _a.call(majorVersions_1)];
                case 11:
                    _b.sent();
                    _b.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 14: return [7 /*endfinally*/];
                case 15:
                    res.json({
                        response: response,
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function getVersion(req, res) {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var version, singleVersion, version_1, version_1_1, _b, _c, e_2_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    version = req.body;
                    singleVersion = {};
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 8, 9, 14]);
                    version_1 = __asyncValues(version);
                    _d.label = 2;
                case 2: return [4 /*yield*/, version_1.next()];
                case 3:
                    if (!(version_1_1 = _d.sent(), !version_1_1.done)) return [3 /*break*/, 7];
                    singleVersion = version_1_1.value;
                    _b = singleVersion;
                    return [4 /*yield*/, InstallerUtils.sizeCalculator(singleVersion.path, 'zipped')];
                case 4:
                    _b.packedSize = _d.sent();
                    if (!(singleVersion.unpackedSize === 0)) return [3 /*break*/, 6];
                    _c = singleVersion;
                    return [4 /*yield*/, InstallerUtils.sizeCalculator(singleVersion.path, 'unzipped')];
                case 5:
                    _c.unpackedSize = _d.sent();
                    _d.label = 6;
                case 6: return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _d.trys.push([9, , 12, 13]);
                    if (!(version_1_1 && !version_1_1.done && (_a = version_1.return))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _a.call(version_1)];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14: return [4 /*yield*/, InstallerUtils.clearPath('tmp')];
                case 15:
                    _d.sent();
                    res.json({
                        version: version,
                    });
                    return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    getSize: getSize,
    getVersion: getVersion,
};
