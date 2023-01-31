"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
const yahoo = new __1.default();
const startDate = new Date('08/21/2020');
const endDate = new Date('08/26/2020');
yahoo.getSymbol({ symbol: "AAPL" }).then(console.log);
yahoo.getHistoricalPrices({ startDate, endDate, symbol: 'AAPL', frequency: '1d' }).then(console.log);
