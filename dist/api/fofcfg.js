"use strict";
/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = exports.HttpClient = exports.ContentType = exports.StatusTypes = exports.CurrencyExchangeType = exports.AmountOrPercentage = exports.AdjustmentReasonCodeType = exports.CardNumberTypeType = exports.CardProcessingType = exports.CardTypeType = exports.CommissionConfigPaymentMethodType = exports.CommissionBasedOnType = exports.CashierTypeType = exports.ColorType = void 0;
/** Color configuration type. This color configuration provides a visual category of entities. */
var ColorType;
(function (ColorType) {
    ColorType["Red"] = "Red";
    ColorType["DarkRed"] = "DarkRed";
    ColorType["Green"] = "Green";
    ColorType["DarkGreen"] = "DarkGreen";
    ColorType["LightGreen"] = "LightGreen";
    ColorType["Orange"] = "Orange";
    ColorType["White"] = "White";
    ColorType["Yellow"] = "Yellow";
    ColorType["DarkYellow"] = "DarkYellow";
    ColorType["Purple"] = "Purple";
    ColorType["Brown"] = "Brown";
    ColorType["Gray"] = "Gray";
    ColorType["Aqua"] = "Aqua";
    ColorType["Chocolate"] = "Chocolate";
    ColorType["Blue"] = "Blue";
    ColorType["LightBlue"] = "LightBlue";
    ColorType["DarkBlue"] = "DarkBlue";
    ColorType["Cyan"] = "Cyan";
    ColorType["DarkCyan"] = "DarkCyan";
    ColorType["Magenta"] = "Magenta";
    ColorType["DarkMagenta"] = "DarkMagenta";
    ColorType["Black"] = "Black";
})(ColorType = exports.ColorType || (exports.ColorType = {}));
/** The types of cashier. */
var CashierTypeType;
(function (CashierTypeType) {
    CashierTypeType["Cashier"] = "Cashier";
    CashierTypeType["InterfaceCashier"] = "InterfaceCashier";
    CashierTypeType["LDAPTemplate"] = "LDAPTemplate";
})(CashierTypeType = exports.CashierTypeType || (exports.CashierTypeType = {}));
/** Commission based on Revenue. */
var CommissionBasedOnType;
(function (CommissionBasedOnType) {
    CommissionBasedOnType["Reservation"] = "Reservation";
    CommissionBasedOnType["Revenue"] = "Revenue";
})(CommissionBasedOnType = exports.CommissionBasedOnType || (exports.CommissionBasedOnType = {}));
/** This value of the enum is used for Payment methods */
var CommissionConfigPaymentMethodType;
(function (CommissionConfigPaymentMethodType) {
    CommissionConfigPaymentMethodType["Check"] = "Check";
    CommissionConfigPaymentMethodType["CentrallyPaid"] = "CentrallyPaid";
    CommissionConfigPaymentMethodType["Eft"] = "Eft";
})(CommissionConfigPaymentMethodType = exports.CommissionConfigPaymentMethodType || (exports.CommissionConfigPaymentMethodType = {}));
/** This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. */
var CardTypeType;
(function (CardTypeType) {
    CardTypeType["Ab"] = "Ab";
    CardTypeType["Am"] = "Am";
    CardTypeType["Ax"] = "Ax";
    CardTypeType["Cb"] = "Cb";
    CardTypeType["Dc"] = "Dc";
    CardTypeType["Ds"] = "Ds";
    CardTypeType["Dt"] = "Dt";
    CardTypeType["Ec"] = "Ec";
    CardTypeType["Er"] = "Er";
    CardTypeType["Jc"] = "Jc";
    CardTypeType["Jl"] = "Jl";
    CardTypeType["Mc"] = "Mc";
    CardTypeType["Nb"] = "Nb";
    CardTypeType["So"] = "So";
    CardTypeType["St"] = "St";
    CardTypeType["Sw"] = "Sw";
    CardTypeType["Va"] = "Va";
    CardTypeType["Xy"] = "Xy";
    CardTypeType["Zz"] = "Zz";
    CardTypeType["Cp"] = "Cp";
    CardTypeType["Cu"] = "Cu";
})(CardTypeType = exports.CardTypeType || (exports.CardTypeType = {}));
var CardProcessingType;
(function (CardProcessingType) {
    CardProcessingType["Eft"] = "Eft";
    CardProcessingType["Manual"] = "Manual";
})(CardProcessingType = exports.CardProcessingType || (exports.CardProcessingType = {}));
/** Simple type for indicating if credit card number is tokenized. */
var CardNumberTypeType;
(function (CardNumberTypeType) {
    CardNumberTypeType["CardNumber"] = "CardNumber";
    CardNumberTypeType["Token"] = "Token";
})(CardNumberTypeType = exports.CardNumberTypeType || (exports.CardNumberTypeType = {}));
/** Defines values for Adjustment reason codes. e.g. ADJ for adjustment, COR for correction, DEL for deletion. */
var AdjustmentReasonCodeType;
(function (AdjustmentReasonCodeType) {
    AdjustmentReasonCodeType["Adjustment"] = "Adjustment";
    AdjustmentReasonCodeType["Correction"] = "Correction";
    AdjustmentReasonCodeType["Deletion"] = "Deletion";
    AdjustmentReasonCodeType["ServiceRecovery"] = "ServiceRecovery";
    AdjustmentReasonCodeType["CreditBill"] = "CreditBill";
})(AdjustmentReasonCodeType = exports.AdjustmentReasonCodeType || (exports.AdjustmentReasonCodeType = {}));
/** Adjustment Code calculation type based on details. */
var AmountOrPercentage;
(function (AmountOrPercentage) {
    AmountOrPercentage["Amount"] = "Amount";
    AmountOrPercentage["Percent"] = "Percent";
})(AmountOrPercentage = exports.AmountOrPercentage || (exports.AmountOrPercentage = {}));
/** E-certificate conversion. */
var CurrencyExchangeType;
(function (CurrencyExchangeType) {
    CurrencyExchangeType["Cash"] = "Cash";
    CurrencyExchangeType["Settlement"] = "Settlement";
    CurrencyExchangeType["Posting"] = "Posting";
    CurrencyExchangeType["Check"] = "Check";
    CurrencyExchangeType["TACommission"] = "TACommission";
    CurrencyExchangeType["Membership"] = "Membership";
    CurrencyExchangeType["Certificate"] = "Certificate";
})(CurrencyExchangeType = exports.CurrencyExchangeType || (exports.CurrencyExchangeType = {}));
/** Defines status in terms of time. */
var StatusTypes;
(function (StatusTypes) {
    StatusTypes["Future"] = "Future";
    StatusTypes["Current"] = "Current";
    StatusTypes["Past"] = "Past";
})(StatusTypes = exports.StatusTypes || (exports.StatusTypes = {}));
const axios_1 = __importDefault(require("axios"));
var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
class HttpClient {
    constructor(_a = {}) {
        var { securityWorker, secure, format } = _a, axiosConfig = __rest(_a, ["securityWorker", "secure", "format"]);
        this.securityData = null;
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.request = async (_a) => {
            var { secure, path, type, query, format, body } = _a, params = __rest(_a, ["secure", "path", "type", "query", "format", "body"]);
            const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
                {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const responseFormat = format || this.format || undefined;
            if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
                body = this.createFormData(body);
            }
            if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
                body = JSON.stringify(body);
            }
            return this.instance.request(Object.assign(Object.assign({}, requestParams), { headers: Object.assign(Object.assign({}, (requestParams.headers || {})), (type && type !== ContentType.FormData ? { 'Content-Type': type } : {})), params: query, responseType: responseFormat, data: body, url: path }));
        };
        this.instance = axios_1.default.create(Object.assign(Object.assign({}, axiosConfig), { baseURL: new URL('/fof/config/v1', axiosConfig.baseURL).toString() }));
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return Object.assign(Object.assign(Object.assign(Object.assign({}, this.instance.defaults), params1), (params2 || {})), { headers: Object.assign(Object.assign(Object.assign({}, ((method && this.instance.defaults.headers[method.toLowerCase()]) || {})), (params1.headers || {})), ((params2 && params2.headers) || {})) });
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
}
exports.HttpClient = HttpClient;
/**
 * @title OPERA Cloud Front Desk Configuration API
 * @version 21.5.0.0
 * @license UPL (https://opensource.org/licenses/upl)
 * @termsOfService https://www.oracle.com/legal/terms.html
 * @baseUrl /fof/config/v1
 * @externalDocs https://docs.oracle.com/en/industries/hospitality/integration_platforms.html
 * @contact <hospitality_apis_ww_grp@oracle.com>
 *
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 21.5.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p>
 */
class Api extends HttpClient {
    constructor() {
        super(...arguments);
        this.articles = {
            /**
             * @description Operation to change articles. <p><strong>OperationId:</strong>putArticles</p>
             *
             * @tags CashieringConfig
             * @name PutArticles
             * @summary Operation to change Articles.
             * @request PUT:/articles
             */
            putArticles: (hotelId, articles, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/articles`, method: 'PUT', body: articles, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to create articles. <p><strong>OperationId:</strong>postArticles</p>
             *
             * @tags CashieringConfig
             * @name PostArticles
             * @summary Operation to create Articles.
             * @request POST:/articles
             */
            postArticles: (hotelId, articles, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/articles`, method: 'POST', body: articles, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to return articles for one or multiple properties based on search criteria such as hotelIds, transactionCodes, articleCodes, etc. One transaction code can sometimes serve as an umbrella for multiple articles, which can be posted using that transaction code.  For example, a single mini bar food transaction code might cover potato chips, crackers, peanuts, pretzels, and so on.<p><strong>OperationId:</strong>getArticles</p>
             *
             * @tags CashieringConfig
             * @name GetArticles
             * @summary Get articles
             * @request GET:/articles
             */
            getArticles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/articles`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to remove articles. <p><strong>OperationId:</strong>deleteArticles</p>
             *
             * @tags CashieringConfig
             * @name DeleteArticles
             * @summary Operation to delete Articles.
             * @request DELETE:/articles
             */
            deleteArticles: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/articles`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.authorizationConfigRule = {
            /**
             * @description  <p><strong>OperationId:</strong>putAuthorizationConfigRule</p>
             *
             * @tags CashieringConfig
             * @name PutAuthorizationConfigRule
             * @summary Operation to change AuthorizationConfigRule.
             * @request PUT:/authorizationConfigRule
             */
            putAuthorizationConfigRule: (hotelId, authorizationConfigRules, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizationConfigRule`, method: 'PUT', body: authorizationConfigRules, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postAuthorizationConfigRule</p>
             *
             * @tags CashieringConfig
             * @name PostAuthorizationConfigRule
             * @summary Operation to create AuthorizationConfigRule.
             * @request POST:/authorizationConfigRule
             */
            postAuthorizationConfigRule: (hotelId, authorizationConfigRules, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizationConfigRule`, method: 'POST', body: authorizationConfigRules, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteAuthorizationConfigRule</p>
             *
             * @tags CashieringConfig
             * @name DeleteAuthorizationConfigRule
             * @summary Operation to delete AuthorizationConfigRule.
             * @request DELETE:/authorizationConfigRule
             */
            deleteAuthorizationConfigRule: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizationConfigRule`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.authorizerGroups = {
            /**
             * @description Operation to change Authorizer Groups. <p><strong>OperationId:</strong>putAuthorizerGroups</p>
             *
             * @tags CashieringConfig
             * @name PutAuthorizerGroups
             * @summary Operation to change AuthorizerGroups.
             * @request PUT:/authorizerGroups
             */
            putAuthorizerGroups: (hotelId, authorizerGroupsToChange, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizerGroups`, method: 'PUT', body: authorizerGroupsToChange, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to create Authorizer Groups. <p><strong>OperationId:</strong>postAuthorizerGroups</p>
             *
             * @tags CashieringConfig
             * @name PostAuthorizerGroups
             * @summary Operation to create AuthorizerGroups.
             * @request POST:/authorizerGroups
             */
            postAuthorizerGroups: (hotelId, authorizerGroups, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizerGroups`, method: 'POST', body: authorizerGroups, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to fetch Authorizer Groups. <p><strong>OperationId:</strong>getAuthorizerGroups</p>
             *
             * @tags CashieringConfig
             * @name GetAuthorizerGroups
             * @summary Operation to fetch AuthorizerGroups.
             * @request GET:/authorizerGroups
             */
            getAuthorizerGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizerGroups`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to remove Authorizer Groups. <p><strong>OperationId:</strong>deleteAuthorizerGroups</p>
             *
             * @tags CashieringConfig
             * @name DeleteAuthorizerGroups
             * @summary Operation to delete AuthorizerGroups.
             * @request DELETE:/authorizerGroups
             */
            deleteAuthorizerGroups: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/authorizerGroups`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.autoFolioSettlementTypes = {
            /**
             * @description Use this API to get Auto Folio Settlement Types. <p><strong>OperationId:</strong>getAutoFolioSettlementTypes</p>
             *
             * @tags ChainConfig
             * @name GetAutoFolioSettlementTypes
             * @summary Get Auto Folio Settlement Types
             * @request GET:/autoFolioSettlementTypes
             */
            getAutoFolioSettlementTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoFolioSettlementTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Auto Folio Settlement Types. <p><strong>OperationId:</strong>postAutoFolioSettlementTypes</p>
             *
             * @tags ChainConfig
             * @name PostAutoFolioSettlementTypes
             * @summary Create Auto Folio Settlement Types
             * @request POST:/autoFolioSettlementTypes
             */
            postAutoFolioSettlementTypes: (hotelId, autoFolioSettlementTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoFolioSettlementTypes`, method: 'POST', body: autoFolioSettlementTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Auto Folio Settlement Types. <p><strong>OperationId:</strong>putAutoFolioSettlementTypes</p>
             *
             * @tags ChainConfig
             * @name PutAutoFolioSettlementTypes
             * @summary Change Auto Folio Settlement Types
             * @request PUT:/autoFolioSettlementTypes/{code}
             */
            putAutoFolioSettlementTypes: (hotelId, code, autoFolioSettlementTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoFolioSettlementTypes/${code}`, method: 'PUT', body: autoFolioSettlementTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Auto Folio Settlement Types. <p><strong>OperationId:</strong>deleteAutoFolioSettlementTypes</p>
             *
             * @tags ChainConfig
             * @name DeleteAutoFolioSettlementTypes
             * @summary Delete Auto Folio Settlement Types
             * @request DELETE:/autoFolioSettlementTypes/{code}
             */
            deleteAutoFolioSettlementTypes: (hotelId, code, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/autoFolioSettlementTypes/${code}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.cashierDetails = {
            /**
             * @description Use this API to return Cashier information based on search criteria such as cashierIDs, limit, name. <p><strong>OperationId:</strong>getCashiers</p>
             *
             * @tags CashieringConfig
             * @name GetCashiers
             * @summary Get cashiers
             * @request GET:/cashierDetails/cashiers
             */
            getCashiers: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashierDetails/cashiers`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.cashiers = {
            /**
             * @description This Operation to Change a Cashier. <p><strong>OperationId:</strong>putCashiers</p>
             *
             * @tags CashieringConfig
             * @name PutCashiers
             * @summary Operation to change CashiersDetails.
             * @request PUT:/cashiers
             */
            putCashiers: (hotelId, cashiers, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers`, method: 'PUT', body: cashiers, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to Create Cashier. <p><strong>OperationId:</strong>postCashiers</p>
             *
             * @tags CashieringConfig
             * @name PostCashiers
             * @summary Operation to create Cashiers.
             * @request POST:/cashiers
             */
            postCashiers: (hotelId, cashiers, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers`, method: 'POST', body: cashiers, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description The operation returns a next available Cashier Number to be used while creating a new Cashier. <p><strong>OperationId:</strong>getAvailableCashierNumber</p>
             *
             * @tags CashieringConfig
             * @name GetAvailableCashierNumber
             * @summary Operation to fetch AvailableCashierNumber.
             * @request GET:/cashiers/nextAvailable
             */
            getAvailableCashierNumber: (hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/cashiers/nextAvailable`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.commissionCodes = {
            /**
             * @description  <p><strong>OperationId:</strong>getCommissionCodes</p>
             *
             * @tags CommissionConfig
             * @name GetCommissionCodes
             * @summary Operation to fetch commission codes.
             * @request GET:/commissionCodes
             */
            getCommissionCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/commissionCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>putCommissionCodes</p>
             *
             * @tags CommissionConfig
             * @name PutCommissionCodes
             * @summary Operation to change commission codes.
             * @request PUT:/commissionCodes
             */
            putCommissionCodes: (hotelId, commissionCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/commissionCodes`, method: 'PUT', body: commissionCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postCommissionCodes</p>
             *
             * @tags CommissionConfig
             * @name PostCommissionCodes
             * @summary Operation to create commission codes.
             * @request POST:/commissionCodes
             */
            postCommissionCodes: (hotelId, commissionCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/commissionCodes`, method: 'POST', body: commissionCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteCommissionCodes</p>
             *
             * @tags CommissionConfig
             * @name DeleteCommissionCodes
             * @summary Operation to remove commission codes.
             * @request DELETE:/commissionCodes
             */
            deleteCommissionCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/commissionCodes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.compTypes = {
            /**
             * @description Operation to Create Comp Types <p><strong>OperationId:</strong>postCompTypes</p>
             *
             * @tags CashieringConfig
             * @name PostCompTypes
             * @summary Operation to Create Comp Types
             * @request POST:/compTypes
             */
            postCompTypes: (hotelId, compTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/compTypes`, method: 'POST', body: compTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to Change Comp Types. <p><strong>OperationId:</strong>changeCompTypes</p>
             *
             * @tags CashieringConfig
             * @name ChangeCompTypes
             * @summary Operation to Change Comp Types.
             * @request PUT:/compTypes
             */
            changeCompTypes: (hotelId, compTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/compTypes`, method: 'PUT', body: compTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to Remove Comp Types. <p><strong>OperationId:</strong>removeCompTypes</p>
             *
             * @tags CashieringConfig
             * @name RemoveCompTypes
             * @summary Operation to Remove Comp Types.
             * @request DELETE:/compTypes/codes/{compTypesCode}
             */
            removeCompTypes: (hotelId, compTypesCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/compTypes/codes/${compTypesCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.configBankAccounts = {
            /**
             * @description  <p><strong>OperationId:</strong>getConfigBankAccounts</p>
             *
             * @tags CommissionConfig
             * @name GetConfigBankAccounts
             * @summary Operation to fetch config bank accounts.
             * @request GET:/configBankAccounts
             */
            getConfigBankAccounts: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/configBankAccounts`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>putConfigBankAccounts</p>
             *
             * @tags CommissionConfig
             * @name PutConfigBankAccounts
             * @summary Operation to change config bank accounts.
             * @request PUT:/configBankAccounts
             */
            putConfigBankAccounts: (hotelId, bankAccounts, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/configBankAccounts`, method: 'PUT', body: bankAccounts, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteConfigBankAccounts</p>
             *
             * @tags CommissionConfig
             * @name DeleteConfigBankAccounts
             * @summary Operation to remove config bank accounts.
             * @request DELETE:/configBankAccounts
             */
            deleteConfigBankAccounts: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/configBankAccounts`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postConfigBankAccounts</p>
             *
             * @tags CommissionConfig
             * @name PostConfigBankAccounts
             * @summary Operation to create config bank accounts.
             * @request POST:/configBankAccounts
             */
            postConfigBankAccounts: (hotelId, bankAccounts, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/configBankAccounts`, method: 'POST', body: bankAccounts, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.creditCardInfo = {
            /**
             * @description Use this API to return the token inclusive cardType and expirationDate for the credit card used in a specific reservation. Oracle does not provide any credit card numbers. Include the hotelId and the cardId in the parameters. The cardId can be returned with the getReservation operation. <p><strong>OperationId:</strong>getCreditCardInfo</p>
             *
             * @tags CreditCard
             * @name GetCreditCardInfo
             * @summary Get credit card token information
             * @request GET:/creditCardInfo
             */
            getCreditCardInfo: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/creditCardInfo`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.currencyExchangeServiceTaxes = {
            /**
             * @description Operation to change currency exchange service taxes. <p><strong>OperationId:</strong>putCurrencyExchangeServiceTaxes</p>
             *
             * @tags CashieringConfig
             * @name PutCurrencyExchangeServiceTaxes
             * @summary Operation to change ExchangeServiceTaxes.
             * @request PUT:/currencyExchangeServiceTaxes
             */
            putCurrencyExchangeServiceTaxes: (hotelId, currencyExchangeServiceTaxes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/currencyExchangeServiceTaxes`, method: 'PUT', body: currencyExchangeServiceTaxes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to create currency exchange service taxes. <p><strong>OperationId:</strong>postCurrencyExchangeServiceTaxes</p>
             *
             * @tags CashieringConfig
             * @name PostCurrencyExchangeServiceTaxes
             * @summary Operation to create CurrencyExchangeServiceTaxes.
             * @request POST:/currencyExchangeServiceTaxes
             */
            postCurrencyExchangeServiceTaxes: (hotelId, currencyExchangeServiceTaxes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/currencyExchangeServiceTaxes`, method: 'POST', body: currencyExchangeServiceTaxes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to fetch currency exchange service taxes. <p><strong>OperationId:</strong>getCurrencyExchangeServiceTaxes</p>
             *
             * @tags CashieringConfig
             * @name GetCurrencyExchangeServiceTaxes
             * @summary Operation to fetch CurrencyExchangeServiceTaxes.
             * @request GET:/currencyExchangeServiceTaxes
             */
            getCurrencyExchangeServiceTaxes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/currencyExchangeServiceTaxes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to remove currency exchange service taxes. <p><strong>OperationId:</strong>deleteCurrencyExchangeServiceTaxes</p>
             *
             * @tags CashieringConfig
             * @name DeleteCurrencyExchangeServiceTaxes
             * @summary Operation to delete CurrencyExchangeServiceTaxes.
             * @request DELETE:/currencyExchangeServiceTaxes
             */
            deleteCurrencyExchangeServiceTaxes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/currencyExchangeServiceTaxes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.customTaxTypes = {
            /**
             * @description Use this API to get Custom Tax Types. <p><strong>OperationId:</strong>getCustomTaxTypes</p>
             *
             * @tags ChainConfig
             * @name GetCustomTaxTypes
             * @summary Get Custom Tax Types
             * @request GET:/customTaxTypes
             */
            getCustomTaxTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/customTaxTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to create Custom Tax Types. <p><strong>OperationId:</strong>postCustomTaxTypes</p>
             *
             * @tags ChainConfig
             * @name PostCustomTaxTypes
             * @summary Create Custom Tax Types
             * @request POST:/customTaxTypes
             */
            postCustomTaxTypes: (hotelId, customTaxTypesCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/customTaxTypes`, method: 'POST', body: customTaxTypesCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to update Custom Tax Types. <p><strong>OperationId:</strong>changeCustomTaxTypes</p>
             *
             * @tags ChainConfig
             * @name ChangeCustomTaxTypes
             * @summary Change Custom Tax Types
             * @request PUT:/customTaxTypes/{taxTypeCode}
             */
            changeCustomTaxTypes: (hotelId, taxTypeCode, customTaxTypesToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/customTaxTypes/${taxTypeCode}`, method: 'PUT', body: customTaxTypesToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Use this API to delete Custom Tax Types. <p><strong>OperationId:</strong>removeCustomTaxTypes</p>
             *
             * @tags ChainConfig
             * @name RemoveCustomTaxTypes
             * @summary Delete Custom Tax Types
             * @request DELETE:/customTaxTypes/{taxTypeCode}
             */
            removeCustomTaxTypes: (hotelId, taxTypeCode, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/customTaxTypes/${taxTypeCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.dailyPlanCodes = {
            /**
             * @description  <p><strong>OperationId:</strong>putDailyPlanCodes</p>
             *
             * @tags CashieringConfig
             * @name PutDailyPlanCodes
             * @summary Operation to change DailyPlanCodes.
             * @request PUT:/dailyPlanCodes
             */
            putDailyPlanCodes: (hotelId, dailyPlanCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/dailyPlanCodes`, method: 'PUT', body: dailyPlanCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getDailyPlanCodes</p>
             *
             * @tags CashieringConfig
             * @name GetDailyPlanCodes
             * @summary Operation to fetch DailyPlanCodes.
             * @request GET:/dailyPlanCodes
             */
            getDailyPlanCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/dailyPlanCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.expenseArrangementCodes = {
            /**
             * @description  <p><strong>OperationId:</strong>putExpenseArrangementCodes</p>
             *
             * @tags CashieringConfig
             * @name PutExpenseArrangementCodes
             * @summary Operation to change ExpenseArrangementCodes.
             * @request PUT:/expenseArrangementCodes
             */
            putExpenseArrangementCodes: (hotelId, expenseArrangementCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/expenseArrangementCodes`, method: 'PUT', body: expenseArrangementCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postExpenseArrangementCodes</p>
             *
             * @tags CashieringConfig
             * @name PostExpenseArrangementCodes
             * @summary Operation to create ExpenseArrangementCodes.
             * @request POST:/expenseArrangementCodes
             */
            postExpenseArrangementCodes: (hotelId, expenseArrangementCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/expenseArrangementCodes`, method: 'POST', body: expenseArrangementCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>getExpenseArrangementCodes</p>
             *
             * @tags CashieringConfig
             * @name GetExpenseArrangementCodes
             * @summary Operation to fetch ExpenseArrangementCodes.
             * @request GET:/expenseArrangementCodes
             */
            getExpenseArrangementCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/expenseArrangementCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteExpenseArrangementCodes</p>
             *
             * @tags CashieringConfig
             * @name DeleteExpenseArrangementCodes
             * @summary Operation to delete ExpenseArrangementCodes.
             * @request DELETE:/expenseArrangementCodes
             */
            deleteExpenseArrangementCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/expenseArrangementCodes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.fiscalFolioParameters = {
            /**
             * @description Operation to change Fiscal Folio Parameters. <p><strong>OperationId:</strong>putFiscalFolioParameters</p>
             *
             * @tags CashieringConfig
             * @name PutFiscalFolioParameters
             * @summary Operation to change FiscalFolioParameters.
             * @request PUT:/fiscalFolioParameters
             */
            putFiscalFolioParameters: (hotelId, fiscalFolioParameters, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalFolioParameters`, method: 'PUT', body: fiscalFolioParameters, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to fetch Fiscal Folio Parameters. <p><strong>OperationId:</strong>getFiscalFolioParameters</p>
             *
             * @tags CashieringConfig
             * @name GetFiscalFolioParameters
             * @summary Operation to fetch FiscalFolioParameters.
             * @request GET:/fiscalFolioParameters
             */
            getFiscalFolioParameters: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalFolioParameters`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to remove Fiscal Folio Parameters. <p><strong>OperationId:</strong>deleteFiscalFolioParameters</p>
             *
             * @tags CashieringConfig
             * @name DeleteFiscalFolioParameters
             * @summary Operation to delete FiscalFolioParameters.
             * @request DELETE:/fiscalFolioParameters
             */
            deleteFiscalFolioParameters: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/fiscalFolioParameters`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.folioTypeLegendMappings = {
            /**
             * @description Operation to fetch folio type legend mappings config. <p><strong>OperationId:</strong>getFolioTypeLegendMappingsConfig</p>
             *
             * @tags CashieringConfig
             * @name GetFolioTypeLegendMappingsConfig
             * @summary Operation to fetch folio type legend mappings config.
             * @request GET:/folioTypeLegendMappings
             */
            getFolioTypeLegendMappingsConfig: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/folioTypeLegendMappings`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to create folio type legend mappings config. <p><strong>OperationId:</strong>postFolioTypeLegendMappingConfig</p>
             *
             * @tags CashieringConfig
             * @name PostFolioTypeLegendMappingConfig
             * @summary Operation to create folio type legend mappings config.
             * @request POST:/folioTypeLegendMappings
             */
            postFolioTypeLegendMappingConfig: (hotelId, folioTypeLegendMappingConfigCriteria, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/folioTypeLegendMappings`, method: 'POST', body: folioTypeLegendMappingConfigCriteria, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to change folio type legend mappings config. <p><strong>OperationId:</strong>changeFolioTypeLegendMappingConfig</p>
             *
             * @tags CashieringConfig
             * @name ChangeFolioTypeLegendMappingConfig
             * @summary Operation to change folio type legend mappings config.
             * @request PUT:/folioTypeLegendMappings
             */
            changeFolioTypeLegendMappingConfig: (hotelId, folioTypeLegendMappingConfigToBeChanged, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/folioTypeLegendMappings`, method: 'PUT', body: folioTypeLegendMappingConfigToBeChanged, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotelAdjustmentCodes = {
            /**
             * @description Operation to change Adjustment Codes. <p><strong>OperationId:</strong>putAdjustmentCodes</p>
             *
             * @tags CashieringConfig
             * @name PutAdjustmentCodes
             * @summary Operation to change AdjustmentCodes.
             * @request PUT:/hotelAdjustmentCodes
             */
            putAdjustmentCodes: (hotelId, adjustmentCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelAdjustmentCodes`, method: 'PUT', body: adjustmentCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to create Adjustment Codes. <p><strong>OperationId:</strong>postAdjustmentCodes</p>
             *
             * @tags CashieringConfig
             * @name PostAdjustmentCodes
             * @summary Operation to create AdjustmentCodes.
             * @request POST:/hotelAdjustmentCodes
             */
            postAdjustmentCodes: (hotelId, adjustmentCodes, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelAdjustmentCodes`, method: 'POST', body: adjustmentCodes, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to fetch Adjustment Codes. <p><strong>OperationId:</strong>getAdjustmentCodes</p>
             *
             * @tags CashieringConfig
             * @name GetAdjustmentCodes
             * @summary Operation to fetch AdjustmentCodes.
             * @request GET:/hotelAdjustmentCodes
             */
            getAdjustmentCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelAdjustmentCodes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to remove Adjustment Codes. <p><strong>OperationId:</strong>deleteAdjustmentCodes</p>
             *
             * @tags CashieringConfig
             * @name DeleteAdjustmentCodes
             * @summary Operation to delete AdjustmentCodes.
             * @request DELETE:/hotelAdjustmentCodes
             */
            deleteAdjustmentCodes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelAdjustmentCodes`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotelTaxTypes = {
            /**
             * @description Operation to fetch Tax Types. <p><strong>OperationId:</strong>getTaxTypes</p>
             *
             * @tags CashieringConfig
             * @name GetTaxTypes
             * @summary Operation to fetch TaxTypes.
             * @request GET:/hotelTaxTypes
             */
            getTaxTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotelTaxTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.hotels = {
            /**
             * @description  <p><strong>OperationId:</strong>getCommissionCode</p>
             *
             * @tags CommissionConfig
             * @name GetCommissionCode
             * @summary Operation to fetch commission code.
             * @request GET:/hotels/{hotelId}/commissionCode/{commissionCode}
             */
            getCommissionCode: (commissionCode, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/commissionCode/${commissionCode}`, method: 'GET', type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to Fetch Comp TYpes. <p><strong>OperationId:</strong>getCompTypes</p>
             *
             * @tags CashieringConfig
             * @name GetCompTypes
             * @summary Operation to Fetch Comp Types.
             * @request GET:/hotels/{hotelId}/compTypes
             */
            getCompTypes: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/compTypes`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to Fetch Future Past Exchange Rates. <p><strong>OperationId:</strong>getFuturePastExchangeRates</p>
             *
             * @tags CashieringConfig
             * @name GetFuturePastExchangeRates
             * @summary Operation to fetch FuturePastExchangeRates.
             * @request GET:/hotels/{hotelId}/exchangeRates/{currencyCode}
             */
            getFuturePastExchangeRates: (currencyCode, hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/exchangeRates/${currencyCode}`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description Operation to remove folio type legend mappings config. <p><strong>OperationId:</strong>removeFolioTypeLegendMappingConfig</p>
             *
             * @tags CashieringConfig
             * @name RemoveFolioTypeLegendMappingConfig
             * @summary Operation to remove folio type legend mappings config.
             * @request DELETE:/hotels/{hotelId}/folios/{folioType}/legends/{legendCode}
             */
            removeFolioTypeLegendMappingConfig: (legendCode, folioType, hotelId, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/hotels/${hotelId}/folios/${folioType}/legends/${legendCode}`, method: 'DELETE', type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.services = {
            /**
             * @description  <p><strong>OperationId:</strong>deleteCommisionConfigServicesCache</p>
             *
             * @tags CommissionConfig
             * @name DeleteCommisionConfigServicesCache
             * @summary Operation to clear cache.
             * @request DELETE:/services/commissionConfig/cache
             */
            deleteCommisionConfigServicesCache: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/commissionConfig/cache`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>pingCommisionConfigServices</p>
             *
             * @tags CommissionConfig
             * @name PingCommisionConfigServices
             * @summary Operation to ping.
             * @request GET:/services/commissionConfig/status
             */
            pingCommisionConfigServices: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/services/commissionConfig/status`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
        this.stopProcessingReasons = {
            /**
             * @description  <p><strong>OperationId:</strong>getStopProcessingReasons</p>
             *
             * @tags CommissionConfig
             * @name GetStopProcessingReasons
             * @summary Operation to fetch stop processing reasons.
             * @request GET:/stopProcessingReasons
             */
            getStopProcessingReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/stopProcessingReasons`, method: 'GET', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>putStopProcessingReasons</p>
             *
             * @tags CommissionConfig
             * @name PutStopProcessingReasons
             * @summary Operation to change stop processing reasons.
             * @request PUT:/stopProcessingReasons
             */
            putStopProcessingReasons: (hotelId, stopProcessingReasons, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/stopProcessingReasons`, method: 'PUT', body: stopProcessingReasons, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>postStopProcessingReasons</p>
             *
             * @tags CommissionConfig
             * @name PostStopProcessingReasons
             * @summary Operation to create stop processing reasons.
             * @request POST:/stopProcessingReasons
             */
            postStopProcessingReasons: (hotelId, stopProcessingReasons, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/stopProcessingReasons`, method: 'POST', body: stopProcessingReasons, type: ContentType.Json, format: 'json' }, newParams));
            },
            /**
             * @description  <p><strong>OperationId:</strong>deleteStopProcessingReasons</p>
             *
             * @tags CommissionConfig
             * @name DeleteStopProcessingReasons
             * @summary Operation to remove stop processing reasons.
             * @request DELETE:/stopProcessingReasons
             */
            deleteStopProcessingReasons: (hotelId, query, params = {}) => {
                const headers = Object.assign(Object.assign({}, params.headers), { 'x-hotelid': hotelId });
                const newParams = Object.assign(Object.assign({}, params), { headers });
                return this.request(Object.assign({ path: `/stopProcessingReasons`, method: 'DELETE', query: query, type: ContentType.Json, format: 'json' }, newParams));
            },
        };
    }
}
exports.Api = Api;
