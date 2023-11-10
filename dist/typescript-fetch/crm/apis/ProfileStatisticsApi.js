"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
exports.GetProfileStatisticsContactProfileRoleTypeEnum = exports.GetProfileStatisticsReportTypeEnum = exports.ProfileStatisticsApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ProfileStatisticsApi extends runtime.BaseAPI {
    /**
     * Retrieve the summary statistics and/or the details of each of the membership transactions and its points.  You can filter by membership Type, or Membership Number. <p><strong>OperationId:</strong>getProfileMembershipStatistics</p>
     * Get Membership statistics
     */
    getProfileMembershipStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.profileId) {
                queryParameters['profileId'] = requestParameters.profileId;
            }
            if (requestParameters.membershipCardNo !== undefined) {
                queryParameters['membershipCardNo'] = requestParameters.membershipCardNo;
            }
            if (requestParameters.membershipType !== undefined) {
                queryParameters['membershipType'] = requestParameters.membershipType;
            }
            if (requestParameters.startDate !== undefined) {
                queryParameters['startDate'] = requestParameters.startDate.toISOString().substr(0, 10);
            }
            if (requestParameters.endDate !== undefined) {
                queryParameters['endDate'] = requestParameters.endDate.toISOString().substr(0, 10);
            }
            if (requestParameters.duration !== undefined) {
                queryParameters['duration'] = requestParameters.duration;
            }
            if (requestParameters.transactionDetail !== undefined) {
                queryParameters['transactionDetail'] = requestParameters.transactionDetail;
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
                path: `/profileMembershipStatistics`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProfileMembershipStatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * Retrieve the summary statistics and/or the details of each of the membership transactions and its points.  You can filter by membership Type, or Membership Number. <p><strong>OperationId:</strong>getProfileMembershipStatistics</p>
     * Get Membership statistics
     */
    getProfileMembershipStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProfileMembershipStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * This API provides summary/detail/revenue statistics information <p><strong>OperationId:</strong>getProfileStatistics</p>
     * Get Profile Statistics
     */
    getProfileStatisticsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.profileId) {
                queryParameters['profileId'] = requestParameters.profileId;
            }
            if (requestParameters.hotelIds) {
                queryParameters['hotelIds'] = requestParameters.hotelIds;
            }
            if (requestParameters.reportType !== undefined) {
                queryParameters['reportType'] = requestParameters.reportType;
            }
            if (requestParameters.stayFrom !== undefined) {
                queryParameters['stayFrom'] = requestParameters.stayFrom.toISOString().substr(0, 10);
            }
            if (requestParameters.stayTo !== undefined) {
                queryParameters['stayTo'] = requestParameters.stayTo.toISOString().substr(0, 10);
            }
            if (requestParameters.summary !== undefined) {
                queryParameters['summary'] = requestParameters.summary;
            }
            if (requestParameters.passerBy !== undefined) {
                queryParameters['passerBy'] = requestParameters.passerBy;
            }
            if (requestParameters.contactProfileRoleType !== undefined) {
                queryParameters['contactProfileRoleType'] = requestParameters.contactProfileRoleType;
            }
            if (requestParameters.stayRecordId !== undefined) {
                queryParameters['stayRecordId'] = requestParameters.stayRecordId;
            }
            if (requestParameters.stayRecordIdContext !== undefined) {
                queryParameters['stayRecordIdContext'] = requestParameters.stayRecordIdContext;
            }
            if (requestParameters.stayRecordIdType !== undefined) {
                queryParameters['stayRecordIdType'] = requestParameters.stayRecordIdType;
            }
            if (requestParameters.reservationId !== undefined) {
                queryParameters['reservationId'] = requestParameters.reservationId;
            }
            if (requestParameters.reservationIdContext !== undefined) {
                queryParameters['reservationIdContext'] = requestParameters.reservationIdContext;
            }
            if (requestParameters.reservationIdType !== undefined) {
                queryParameters['reservationIdType'] = requestParameters.reservationIdType;
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
                path: `/profileStatistics`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProfileStatisticsFromJSON)(jsonValue));
        });
    }
    /**
     * This API provides summary/detail/revenue statistics information <p><strong>OperationId:</strong>getProfileStatistics</p>
     * Get Profile Statistics
     */
    getProfileStatistics(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProfileStatisticsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ProfileStatisticsApi = ProfileStatisticsApi;
/**
 * @export
 */
exports.GetProfileStatisticsReportTypeEnum = {
    Reservation: 'Reservation',
    Revenue: 'Revenue',
    ProfileStayRecords: 'ProfileStayRecords',
    DetailStayRecordsRevenue: 'DetailStayRecordsRevenue'
};
/**
 * @export
 */
exports.GetProfileStatisticsContactProfileRoleTypeEnum = {
    AccountContact: 'AccountContact',
    AgentContact: 'AgentContact',
    ReservationContact: 'ReservationContact',
    ReservationBillingContact: 'ReservationBillingContact',
    All: 'All'
};
