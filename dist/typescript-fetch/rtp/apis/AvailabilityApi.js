"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilityApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class AvailabilityApi extends runtime.BaseAPI {
    /**
     * This API allows you to validate a coupon code. <p><strong>OperationId:</strong>validateRateCoupon</p>
     * Validate a coupon code
     */
    validateRateCouponRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.couponCode === null || requestParameters.couponCode === undefined) {
                throw new runtime.RequiredError('couponCode', 'Required parameter requestParameters.couponCode was null or undefined when calling validateRateCoupon.');
            }
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling validateRateCoupon.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/rates/coupons/{couponCode}`.replace(`{${"couponCode"}}`, encodeURIComponent(String(requestParameters.couponCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PromotionCouponValidationDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * This API allows you to validate a coupon code. <p><strong>OperationId:</strong>validateRateCoupon</p>
     * Validate a coupon code
     */
    validateRateCoupon(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.validateRateCouponRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API allows you to validate a promotion code. <p><strong>OperationId:</strong>validateRatePromotion</p>
     * Validate a promotion code
     */
    validateRatePromotionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.promotionCode === null || requestParameters.promotionCode === undefined) {
                throw new runtime.RequiredError('promotionCode', 'Required parameter requestParameters.promotionCode was null or undefined when calling validateRatePromotion.');
            }
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling validateRatePromotion.');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/rates/promotions/{promotionCode}`.replace(`{${"promotionCode"}}`, encodeURIComponent(String(requestParameters.promotionCode))).replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PromotionCouponValidationDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * This API allows you to validate a promotion code. <p><strong>OperationId:</strong>validateRatePromotion</p>
     * Validate a promotion code
     */
    validateRatePromotion(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.validateRatePromotionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API allows you to validate a promotion and coupon code. <p><strong>OperationId:</strong>validateRatePromotionCoupon</p>
     * Validate promotion and coupon code
     */
    validateRatePromotionCouponRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling validateRatePromotionCoupon.');
            }
            if (requestParameters.couponCode === null || requestParameters.couponCode === undefined) {
                throw new runtime.RequiredError('couponCode', 'Required parameter requestParameters.couponCode was null or undefined when calling validateRatePromotionCoupon.');
            }
            if (requestParameters.promotionCode === null || requestParameters.promotionCode === undefined) {
                throw new runtime.RequiredError('promotionCode', 'Required parameter requestParameters.promotionCode was null or undefined when calling validateRatePromotionCoupon.');
            }
            const queryParameters = {};
            if (requestParameters.couponCode !== undefined) {
                queryParameters['couponCode'] = requestParameters.couponCode;
            }
            if (requestParameters.promotionCode !== undefined) {
                queryParameters['promotionCode'] = requestParameters.promotionCode;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate;
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate;
            }
            const headerParameters = {};
            if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
                headerParameters['authorization'] = String(requestParameters.authorization);
            }
            if (requestParameters.xAppKey !== undefined && requestParameters.xAppKey !== null) {
                headerParameters['x-app-key'] = String(requestParameters.xAppKey);
            }
            if (requestParameters.xHotelid !== undefined && requestParameters.xHotelid !== null) {
                headerParameters['x-hotelid'] = String(requestParameters.xHotelid);
            }
            if (requestParameters.xExternalsystem !== undefined && requestParameters.xExternalsystem !== null) {
                headerParameters['x-externalsystem'] = String(requestParameters.xExternalsystem);
            }
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            const response = yield this.request({
                path: `/hotels/{hotelId}/rates/promotionsCoupons`.replace(`{${"hotelId"}}`, encodeURIComponent(String(requestParameters.hotelId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.PromotionCouponValidationDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * This API allows you to validate a promotion and coupon code. <p><strong>OperationId:</strong>validateRatePromotionCoupon</p>
     * Validate promotion and coupon code
     */
    validateRatePromotionCoupon(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.validateRatePromotionCouponRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.AvailabilityApi = AvailabilityApi;