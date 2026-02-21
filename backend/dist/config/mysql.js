"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlPool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
exports.mysqlPool = promise_1.default.createPool({
    host: "mysql",
    user: "root",
    password: "root",
    database: "college_db"
});
