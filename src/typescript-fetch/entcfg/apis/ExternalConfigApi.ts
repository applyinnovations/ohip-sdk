/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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

export interface DeleteExternalConfigServicesCacheRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

export interface PingExternalConfigServicesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}

/**
 * 
 */
export class ExternalConfigApi extends runtime.BaseAPI {

    /**
     * clearCache <p><strong>OperationId:</strong>deleteExternalConfigServicesCache</p>
     *  clear cache
     */
    async deleteExternalConfigServicesCacheRaw(requestParameters: DeleteExternalConfigServicesCacheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Status>> {
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
            path: `/services/externalConfig/cache`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * clearCache <p><strong>OperationId:</strong>deleteExternalConfigServicesCache</p>
     *  clear cache
     */
    async deleteExternalConfigServicesCache(requestParameters: DeleteExternalConfigServicesCacheRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Status> {
        const response = await this.deleteExternalConfigServicesCacheRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * NA <p><strong>OperationId:</strong>pingExternalConfigServices</p>
     *  ping
     */
    async pingExternalConfigServicesRaw(requestParameters: PingExternalConfigServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OperaVersion>> {
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
            path: `/services/externalConfig/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OperaVersionFromJSON(jsonValue));
    }

    /**
     * NA <p><strong>OperationId:</strong>pingExternalConfigServices</p>
     *  ping
     */
    async pingExternalConfigServices(requestParameters: PingExternalConfigServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OperaVersion> {
        const response = await this.pingExternalConfigServicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
