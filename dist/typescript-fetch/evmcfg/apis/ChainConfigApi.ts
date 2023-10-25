/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ChangeFunctionSpaceEventTypesRequest,
  ExceptionDetailType,
  FunctionSpaceEventTypesDetails,
  FunctionSpaceTypesDetails,
  MealTypesDetails,
  PostFunctionSpaceEventTypesRequest,
  PostFunctionSpaceTypesRequest,
  PostMealTypesRequest,
  PutFunctionSpaceTypesRequest,
  PutMealTypesRequest,
  Status,
} from '../models';
import {
    ChangeFunctionSpaceEventTypesRequestFromJSON,
    ChangeFunctionSpaceEventTypesRequestToJSON,
    ExceptionDetailTypeFromJSON,
    ExceptionDetailTypeToJSON,
    FunctionSpaceEventTypesDetailsFromJSON,
    FunctionSpaceEventTypesDetailsToJSON,
    FunctionSpaceTypesDetailsFromJSON,
    FunctionSpaceTypesDetailsToJSON,
    MealTypesDetailsFromJSON,
    MealTypesDetailsToJSON,
    PostFunctionSpaceEventTypesRequestFromJSON,
    PostFunctionSpaceEventTypesRequestToJSON,
    PostFunctionSpaceTypesRequestFromJSON,
    PostFunctionSpaceTypesRequestToJSON,
    PostMealTypesRequestFromJSON,
    PostMealTypesRequestToJSON,
    PutFunctionSpaceTypesRequestFromJSON,
    PutFunctionSpaceTypesRequestToJSON,
    PutMealTypesRequestFromJSON,
    PutMealTypesRequestToJSON,
    StatusFromJSON,
    StatusToJSON,
} from '../models';

export interface ChangeFunctionSpaceEventTypesOperationRequest {
    eventTypeCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    functionSpaceEventTypesToBeChanged?: ChangeFunctionSpaceEventTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface DeleteFunctionSpaceTypesRequest {
    functionSpaceTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface DeleteMealTypesRequest {
    mealTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface GetFunctionSpaceEventTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    codes?: Array<string>;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface GetFunctionSpaceTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface GetMealTypesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    fetchInactive?: boolean;
    codes?: Array<string>;
    wildCard?: string;
    description?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PostFunctionSpaceEventTypesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    functionSpaceEventTypesCriteria?: PostFunctionSpaceEventTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PostFunctionSpaceTypesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    functionSpaceTypesCriteria?: PostFunctionSpaceTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PostMealTypesOperationRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    mealTypesCriteria?: PostMealTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PutFunctionSpaceTypesOperationRequest {
    functionSpaceTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    functionSpaceTypesToBeChanged?: PutFunctionSpaceTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PutMealTypesOperationRequest {
    mealTypesId?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    mealTypesToBeChanged?: PutMealTypesRequest;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface RemoveFunctionSpaceEventTypesRequest {
    eventTypeCode?: string;
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

/**
 * 
 */
export class ChainConfigApi extends runtime.BaseAPI {

    /**
     * Use this API to update Function Space Event Types. <p><strong>OperationId:</strong>changeFunctionSpaceEventTypes</p>
     * Change Function Space Event Types
     */
    async changeFunctionSpaceEventTypesRaw(requestParameters: ChangeFunctionSpaceEventTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/cateringEventTypes/{eventTypeCode}`.replace(`{${"eventTypeCode"}}`, encodeURIComponent(String(requestParameters.eventTypeCode))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ChangeFunctionSpaceEventTypesRequestToJSON(requestParameters.functionSpaceEventTypesToBeChanged),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to update Function Space Event Types. <p><strong>OperationId:</strong>changeFunctionSpaceEventTypes</p>
     * Change Function Space Event Types
     */
    async changeFunctionSpaceEventTypes(requestParameters: ChangeFunctionSpaceEventTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.changeFunctionSpaceEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to delete Function Space Types. <p><strong>OperationId:</strong>deleteFunctionSpaceTypes</p>
     * Delete Function Space Types
     */
    async deleteFunctionSpaceTypesRaw(requestParameters: DeleteFunctionSpaceTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/functionSpaceTypes/{functionSpaceTypesId}`.replace(`{${"functionSpaceTypesId"}}`, encodeURIComponent(String(requestParameters.functionSpaceTypesId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to delete Function Space Types. <p><strong>OperationId:</strong>deleteFunctionSpaceTypes</p>
     * Delete Function Space Types
     */
    async deleteFunctionSpaceTypes(requestParameters: DeleteFunctionSpaceTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.deleteFunctionSpaceTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to delete Meal Types. <p><strong>OperationId:</strong>deleteMealTypes</p>
     * Delete Meal Types
     */
    async deleteMealTypesRaw(requestParameters: DeleteMealTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/mealTypes/{mealTypesId}`.replace(`{${"mealTypesId"}}`, encodeURIComponent(String(requestParameters.mealTypesId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to delete Meal Types. <p><strong>OperationId:</strong>deleteMealTypes</p>
     * Delete Meal Types
     */
    async deleteMealTypes(requestParameters: DeleteMealTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.deleteMealTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to get Function Space Event Types. <p><strong>OperationId:</strong>getFunctionSpaceEventTypes</p>
     * Get Function Space Event Types
     */
    async getFunctionSpaceEventTypesRaw(requestParameters: GetFunctionSpaceEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FunctionSpaceEventTypesDetails>> {
        const queryParameters: any = {};

        if (requestParameters.codes) {
            queryParameters['codes'] = requestParameters.codes;
        }

        if (requestParameters.description !== undefined) {
            queryParameters['description'] = requestParameters.description;
        }

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/cateringEventTypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FunctionSpaceEventTypesDetailsFromJSON(jsonValue));
    }

    /**
     * Use this API to get Function Space Event Types. <p><strong>OperationId:</strong>getFunctionSpaceEventTypes</p>
     * Get Function Space Event Types
     */
    async getFunctionSpaceEventTypes(requestParameters: GetFunctionSpaceEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FunctionSpaceEventTypesDetails> {
        const response = await this.getFunctionSpaceEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to get Function Space Types. <p><strong>OperationId:</strong>getFunctionSpaceTypes</p>
     * Get Function Space Types
     */
    async getFunctionSpaceTypesRaw(requestParameters: GetFunctionSpaceTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FunctionSpaceTypesDetails>> {
        const queryParameters: any = {};

        if (requestParameters.fetchInactive !== undefined) {
            queryParameters['fetchInactive'] = requestParameters.fetchInactive;
        }

        if (requestParameters.codes) {
            queryParameters['codes'] = requestParameters.codes;
        }

        if (requestParameters.wildCard !== undefined) {
            queryParameters['wildCard'] = requestParameters.wildCard;
        }

        if (requestParameters.description !== undefined) {
            queryParameters['description'] = requestParameters.description;
        }

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/functionSpaceTypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FunctionSpaceTypesDetailsFromJSON(jsonValue));
    }

    /**
     * Use this API to get Function Space Types. <p><strong>OperationId:</strong>getFunctionSpaceTypes</p>
     * Get Function Space Types
     */
    async getFunctionSpaceTypes(requestParameters: GetFunctionSpaceTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FunctionSpaceTypesDetails> {
        const response = await this.getFunctionSpaceTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to get Meal Types. <p><strong>OperationId:</strong>getMealTypes</p>
     * Get Meal Types
     */
    async getMealTypesRaw(requestParameters: GetMealTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MealTypesDetails>> {
        const queryParameters: any = {};

        if (requestParameters.fetchInactive !== undefined) {
            queryParameters['fetchInactive'] = requestParameters.fetchInactive;
        }

        if (requestParameters.codes) {
            queryParameters['codes'] = requestParameters.codes;
        }

        if (requestParameters.wildCard !== undefined) {
            queryParameters['wildCard'] = requestParameters.wildCard;
        }

        if (requestParameters.description !== undefined) {
            queryParameters['description'] = requestParameters.description;
        }

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/mealTypes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MealTypesDetailsFromJSON(jsonValue));
    }

    /**
     * Use this API to get Meal Types. <p><strong>OperationId:</strong>getMealTypes</p>
     * Get Meal Types
     */
    async getMealTypes(requestParameters: GetMealTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MealTypesDetails> {
        const response = await this.getMealTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to create Function Space Event Types. <p><strong>OperationId:</strong>postFunctionSpaceEventTypes</p>
     * Create Function Space Event Types
     */
    async postFunctionSpaceEventTypesRaw(requestParameters: PostFunctionSpaceEventTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/cateringEventTypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostFunctionSpaceEventTypesRequestToJSON(requestParameters.functionSpaceEventTypesCriteria),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to create Function Space Event Types. <p><strong>OperationId:</strong>postFunctionSpaceEventTypes</p>
     * Create Function Space Event Types
     */
    async postFunctionSpaceEventTypes(requestParameters: PostFunctionSpaceEventTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.postFunctionSpaceEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to create Function Space Types. <p><strong>OperationId:</strong>postFunctionSpaceTypes</p>
     * Create Function Space Types
     */
    async postFunctionSpaceTypesRaw(requestParameters: PostFunctionSpaceTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/functionSpaceTypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostFunctionSpaceTypesRequestToJSON(requestParameters.functionSpaceTypesCriteria),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to create Function Space Types. <p><strong>OperationId:</strong>postFunctionSpaceTypes</p>
     * Create Function Space Types
     */
    async postFunctionSpaceTypes(requestParameters: PostFunctionSpaceTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.postFunctionSpaceTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to create Meal Types. <p><strong>OperationId:</strong>postMealTypes</p>
     * Create Meal Types
     */
    async postMealTypesRaw(requestParameters: PostMealTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/mealTypes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostMealTypesRequestToJSON(requestParameters.mealTypesCriteria),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to create Meal Types. <p><strong>OperationId:</strong>postMealTypes</p>
     * Create Meal Types
     */
    async postMealTypes(requestParameters: PostMealTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.postMealTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to update Function Space Types. <p><strong>OperationId:</strong>putFunctionSpaceTypes</p>
     * Change Function Space Types
     */
    async putFunctionSpaceTypesRaw(requestParameters: PutFunctionSpaceTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/functionSpaceTypes/{functionSpaceTypesId}`.replace(`{${"functionSpaceTypesId"}}`, encodeURIComponent(String(requestParameters.functionSpaceTypesId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutFunctionSpaceTypesRequestToJSON(requestParameters.functionSpaceTypesToBeChanged),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to update Function Space Types. <p><strong>OperationId:</strong>putFunctionSpaceTypes</p>
     * Change Function Space Types
     */
    async putFunctionSpaceTypes(requestParameters: PutFunctionSpaceTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.putFunctionSpaceTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to update Meal Types. <p><strong>OperationId:</strong>putMealTypes</p>
     * Change Meal Types
     */
    async putMealTypesRaw(requestParameters: PutMealTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/mealTypes/{mealTypesId}`.replace(`{${"mealTypesId"}}`, encodeURIComponent(String(requestParameters.mealTypesId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PutMealTypesRequestToJSON(requestParameters.mealTypesToBeChanged),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to update Meal Types. <p><strong>OperationId:</strong>putMealTypes</p>
     * Change Meal Types
     */
    async putMealTypes(requestParameters: PutMealTypesOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.putMealTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this API to delete Function Space Event Types. <p><strong>OperationId:</strong>removeFunctionSpaceEventTypes</p>
     * Delete Function Space Event Types
     */
    async removeFunctionSpaceEventTypesRaw(requestParameters: RemoveFunctionSpaceEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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

        const response = await this.request({
            path: `/cateringEventTypes/{eventTypeCode}`.replace(`{${"eventTypeCode"}}`, encodeURIComponent(String(requestParameters.eventTypeCode))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Use this API to delete Function Space Event Types. <p><strong>OperationId:</strong>removeFunctionSpaceEventTypes</p>
     * Delete Function Space Event Types
     */
    async removeFunctionSpaceEventTypes(requestParameters: RemoveFunctionSpaceEventTypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.removeFunctionSpaceEventTypesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
