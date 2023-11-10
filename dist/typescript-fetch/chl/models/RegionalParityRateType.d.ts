/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Rate on specific arrival date.
 * @export
 * @interface RegionalParityRateType
 */
export interface RegionalParityRateType {
    /**
     * Arrival Date.
     * @type {Date}
     * @memberof RegionalParityRateType
     */
    arrivalDate?: Date;
    /**
     *
     * @type {string}
     * @memberof RegionalParityRateType
     */
    currencyCode?: string;
    /**
     *
     * @type {number}
     * @memberof RegionalParityRateType
     */
    maximumRate?: number;
    /**
     *
     * @type {number}
     * @memberof RegionalParityRateType
     */
    minimumRate?: number;
    /**
     * Status Code related to functionality.
     * @type {string}
     * @memberof RegionalParityRateType
     */
    statusCode?: string;
    /**
     * Description of Status Code.
     * @type {string}
     * @memberof RegionalParityRateType
     */
    statusDescription?: string;
    /**
     *
     * @type {boolean}
     * @memberof RegionalParityRateType
     */
    weekendDay?: boolean;
}
/**
 * Check if a given object implements the RegionalParityRateType interface.
 */
export declare function instanceOfRegionalParityRateType(value: object): boolean;
export declare function RegionalParityRateTypeFromJSON(json: any): RegionalParityRateType;
export declare function RegionalParityRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegionalParityRateType;
export declare function RegionalParityRateTypeToJSON(value?: RegionalParityRateType | null): any;
