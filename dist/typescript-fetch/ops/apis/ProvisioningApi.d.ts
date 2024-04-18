/**
 * OPERA Provisioning Service API
 * APIs to cater to provisioning and deprovisioning of new properties and chains in OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { Currencies } from '../models/index';
export interface GetCurrenciesRequest {
    authorization?: string;
    xAppKey?: string;
    xHotelid?: string;
    xExternalsystem?: string;
    acceptLanguage?: string;
}
/**
 *
 */
export declare class ProvisioningApi extends runtime.BaseAPI {
    /**
     * Operation to fetch all currencies that are valid in the Environment. <p><strong>OperationId:</strong>getShells</p>
     * Operation to fetch all currencies that are valid in the Environment.
     */
    getCurrenciesRaw(requestParameters: GetCurrenciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Currencies>>;
    /**
     * Operation to fetch all currencies that are valid in the Environment. <p><strong>OperationId:</strong>getShells</p>
     * Operation to fetch all currencies that are valid in the Environment.
     */
    getCurrencies(requestParameters: GetCurrenciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Currencies>;
}