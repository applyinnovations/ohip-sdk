/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ExceptionDetailType,
  OperaVersion,
  Status,
} from '../models/index';
import {
    ExceptionDetailTypeFromJSON,
    ExceptionDetailTypeToJSON,
    OperaVersionFromJSON,
    OperaVersionToJSON,
    StatusFromJSON,
    StatusToJSON,
} from '../models/index';

export interface ClearCacheBeProcessorRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PingBeProcessorRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

/**
 * 
 */
export class BEProcessorApi extends runtime.BaseAPI {

    /**
     *  <p><strong>OperationId:</strong>clearCacheBeProcessor</p>
     * Operation to clear cache.
     */
    async clearCacheBeProcessorRaw(requestParameters: ClearCacheBeProcessorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
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
            path: `/config/oxi/services/beProcessor/cache`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     *  <p><strong>OperationId:</strong>clearCacheBeProcessor</p>
     * Operation to clear cache.
     */
    async clearCacheBeProcessor(requestParameters: ClearCacheBeProcessorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.clearCacheBeProcessorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     *  <p><strong>OperationId:</strong>pingBeProcessor</p>
     * Operation to ping.
     */
    async pingBeProcessorRaw(requestParameters: PingBeProcessorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OperaVersion>> {
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
            path: `/config/oxi/services/beProcessor/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OperaVersionFromJSON(jsonValue));
    }

    /**
     *  <p><strong>OperationId:</strong>pingBeProcessor</p>
     * Operation to ping.
     */
    async pingBeProcessor(requestParameters: PingBeProcessorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OperaVersion> {
        const response = await this.pingBeProcessorRaw(requestParameters, initOverrides);
        return await response.value();
    }

}