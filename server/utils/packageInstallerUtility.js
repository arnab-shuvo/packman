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
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require('fs');
var download = require('download-to-file');
var childProcess = require('child_process');
var fsUtils = require('nodejs-fs-utils');
var axios = require('axios');
var tarball = require('tarball-extract');
var InstallerUtils = {
    getInstallPath: function (packageName, name) {
        return path.join('tmp', packageName, name ? name : '');
    },
    preparePath: function (packageName, majorVersions) {
        var majorVersions_1, majorVersions_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var installPath, version, filePath, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        installPath = this.getInstallPath(packageName);
                        if (!fs.existsSync('tmp')) {
                            fs.mkdirSync('tmp');
                        }
                        if (!fs.existsSync(installPath)) {
                            fs.mkdirSync(installPath);
                        }
                        version = {};
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        majorVersions_1 = __asyncValues(majorVersions);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, majorVersions_1.next()];
                    case 3:
                        if (!(majorVersions_1_1 = _b.sent(), !majorVersions_1_1.done)) return [3 /*break*/, 5];
                        version = majorVersions_1_1.value;
                        filePath = this.getInstallPath(packageName, version.name);
                        if (!fs.existsSync(filePath)) {
                            fs.mkdirSync(filePath);
                        }
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(majorVersions_1_1 && !majorVersions_1_1.done && (_a = majorVersions_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(majorVersions_1)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    },
    installPackage: function (singleVersion, packageName) {
        return __awaiter(this, void 0, void 0, function () {
            var installPath, path, writer, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        installPath = this.getInstallPath(packageName, singleVersion.name);
                        path = installPath + "/" + singleVersion.name + ".tgz";
                        singleVersion.path = path;
                        writer = fs.createWriteStream(path);
                        return [4 /*yield*/, axios.get(singleVersion.link, { responseType: 'stream' }).then(function (res) {
                                res.data.pipe(writer);
                                writer.on('finish', function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(singleVersion.unpackedSize === 0)) return [3 /*break*/, 2];
                                                return [4 /*yield*/, tarball.extractTarball(path, installPath + "/" + singleVersion.name, function (err) {
                                                        if (err)
                                                            console.log(err);
                                                    })];
                                            case 1:
                                                _a.sent();
                                                _a.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                }); });
                                writer.on('error', function () {
                                    console.log('downaloded error');
                                });
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, singleVersion];
                }
            });
        });
    },
    sizeCalculator: function (path, type) {
        return __awaiter(this, void 0, void 0, function () {
            var size, pathToFolder, newPath, unPackedSize, finalSize;
            return __generator(this, function (_a) {
                if (type === 'zipped') {
                    if (fs.existsSync(path)) {
                        size = fs.statSync(path).size;
                        return [2 /*return*/, (size / 1024).toFixed(2)];
                    }
                    return [2 /*return*/, 0];
                }
                else {
                    try {
                        pathToFolder = path.split('.tgz')[0];
                        newPath = pathToFolder + "/package";
                        unPackedSize = fsUtils.fsizeSync(newPath, {
                            symbolicLinks: false,
                        });
                        finalSize = (unPackedSize / 1024).toFixed(2);
                        return [2 /*return*/, finalSize];
                    }
                    catch (error) {
                        console.log(error, 'error got');
                        return [2 /*return*/, 0];
                    }
                }
                return [2 /*return*/];
            });
        });
    },
    clearPath: function (dir) {
        return __awaiter(this, void 0, void 0, function () {
            var command;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = "sudo rm -rf " + dir;
                        return [4 /*yield*/, childProcess.exec(command, function (error, stdout, stderr) { })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
module.exports = InstallerUtils;
