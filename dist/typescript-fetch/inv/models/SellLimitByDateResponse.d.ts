/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * A Response object for setting sell limit by date range.
 * @export
 * @interface SellLimitByDateResponse
 */
export interface SellLimitByDateResponse {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof SellLimitByDateResponse
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SellLimitByDateResponse
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the SellLimitByDateResponse interface.
 */
export declare function instanceOfSellLimitByDateResponse(value: object): boolean;
export declare function SellLimitByDateResponseFromJSON(json: any): SellLimitByDateResponse;
export declare function SellLimitByDateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellLimitByDateResponse;
export declare function SellLimitByDateResponseToJSON(value?: SellLimitByDateResponse | null): any;