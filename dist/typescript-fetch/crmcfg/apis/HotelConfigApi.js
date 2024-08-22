"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
exports.GetCommunicationTypesRolesEnum = exports.HotelConfigApi = void 0;
const runtime = __importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class HotelConfigApi extends runtime.BaseAPI {
    /**
     * Use this API to update a  communication type. <p><strong>OperationId:</strong>changeCommunicationType</p>
     * Change a  communication type
     */
    changeCommunicationTypeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.communicationTypeCode === null || requestParameters.communicationTypeCode === undefined) {
                throw new runtime.RequiredError('communicationTypeCode', 'Required parameter requestParameters.communicationTypeCode was null or undefined when calling changeCommunicationType.');
            }
            if (requestParameters.communicationTypeToBeChanged === null || requestParameters.communicationTypeToBeChanged === undefined) {
                throw new runtime.RequiredError('communicationTypeToBeChanged', 'Required parameter requestParameters.communicationTypeToBeChanged was null or undefined when calling changeCommunicationType.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
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
                path: `/communicationTypes/{communicationTypeCode}`.replace(`{${"communicationTypeCode"}}`, encodeURIComponent(String(requestParameters.communicationTypeCode))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.CommunicationTypeToBeChangedToJSON)(requestParameters.communicationTypeToBeChanged),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to update a  communication type. <p><strong>OperationId:</strong>changeCommunicationType</p>
     * Change a  communication type
     */
    changeCommunicationType(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.changeCommunicationTypeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Clear Hotel Configuration Cache <p><strong>OperationId:</strong>deleteHotelConfigServicesCache</p>
     *  clear cache
     */
    deleteHotelConfigServicesCacheRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
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
                path: `/services/hotelConfig/cache`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * Clear Hotel Configuration Cache <p><strong>OperationId:</strong>deleteHotelConfigServicesCache</p>
     *  clear cache
     */
    deleteHotelConfigServicesCache(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteHotelConfigServicesCacheRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to Fetch Available Preferences for a Property. The request can be filtered to search only for preferences marked for reservation. <p><strong>OperationId:</strong>getAvailablePreferences</p>
     * Get available Preferences
     */
    getAvailablePreferencesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.hotelId === null || requestParameters.hotelId === undefined) {
                throw new runtime.RequiredError('hotelId', 'Required parameter requestParameters.hotelId was null or undefined when calling getAvailablePreferences.');
            }
            const queryParameters = {};
            if (requestParameters.hotelId !== undefined) {
                queryParameters['hotelId'] = requestParameters.hotelId;
            }
            if (requestParameters.isOnlyForReservation !== undefined) {
                queryParameters['isOnlyForReservation'] = requestParameters.isOnlyForReservation;
            }
            if (requestParameters.preferenceType !== undefined) {
                queryParameters['preferenceType'] = requestParameters.preferenceType;
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
                path: `/availablePreferences`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.AvailablePreferencesDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to Fetch Available Preferences for a Property. The request can be filtered to search only for preferences marked for reservation. <p><strong>OperationId:</strong>getAvailablePreferences</p>
     * Get available Preferences
     */
    getAvailablePreferences(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getAvailablePreferencesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to get communication types. <p><strong>OperationId:</strong>getCommunicationTypes</p>
     * Get communication types
     */
    getCommunicationTypesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.codes) {
                queryParameters['codes'] = requestParameters.codes;
            }
            if (requestParameters.roles) {
                queryParameters['roles'] = requestParameters.roles;
            }
            if (requestParameters.description !== undefined) {
                queryParameters['description'] = requestParameters.description;
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
                path: `/communicationTypes`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.CommunicationTypesDetailsFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to get communication types. <p><strong>OperationId:</strong>getCommunicationTypes</p>
     * Get communication types
     */
    getCommunicationTypes(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCommunicationTypesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Ping Hotel Configuration Service <p><strong>OperationId:</strong>pingHotelConfigServices</p>
     *  ping
     */
    pingHotelConfigServicesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
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
                path: `/services/hotelConfig/status`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.OperaVersionFromJSON)(jsonValue));
        });
    }
    /**
     * Ping Hotel Configuration Service <p><strong>OperationId:</strong>pingHotelConfigServices</p>
     *  ping
     */
    pingHotelConfigServices(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.pingHotelConfigServicesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to create a  communication type. <p><strong>OperationId:</strong>postCommunicationType</p>
     * Create a  communication type
     */
    postCommunicationTypeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.communicationTypeCriteria === null || requestParameters.communicationTypeCriteria === undefined) {
                throw new runtime.RequiredError('communicationTypeCriteria', 'Required parameter requestParameters.communicationTypeCriteria was null or undefined when calling postCommunicationType.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json;charset=UTF-8';
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
                path: `/communicationTypes`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, index_1.CommunicationTypeCriteriaToJSON)(requestParameters.communicationTypeCriteria),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to create a  communication type. <p><strong>OperationId:</strong>postCommunicationType</p>
     * Create a  communication type
     */
    postCommunicationType(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postCommunicationTypeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Use this API to delete a communication type. <p><strong>OperationId:</strong>removeCommunicationType</p>
     * Delete a communication type
     */
    removeCommunicationTypeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.communicationTypeCode === null || requestParameters.communicationTypeCode === undefined) {
                throw new runtime.RequiredError('communicationTypeCode', 'Required parameter requestParameters.communicationTypeCode was null or undefined when calling removeCommunicationType.');
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
                path: `/communicationTypes/{communicationTypeCode}`.replace(`{${"communicationTypeCode"}}`, encodeURIComponent(String(requestParameters.communicationTypeCode))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatusFromJSON)(jsonValue));
        });
    }
    /**
     * Use this API to delete a communication type. <p><strong>OperationId:</strong>removeCommunicationType</p>
     * Delete a communication type
     */
    removeCommunicationType(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.removeCommunicationTypeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.HotelConfigApi = HotelConfigApi;
/**
 * @export
 */
exports.GetCommunicationTypesRolesEnum = {
    Email: 'Email',
    Fax: 'Fax',
    EmailForRequest: 'EmailForRequest',
    Webpage: 'Webpage',
    Phone: 'Phone'
};
