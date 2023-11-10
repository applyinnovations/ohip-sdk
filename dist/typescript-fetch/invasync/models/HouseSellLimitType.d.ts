/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface HouseSellLimitType
 */
export interface HouseSellLimitType {
    /**
     *
     * @type {number}
     * @memberof HouseSellLimitType
     */
    amount?: number;
    /**
     *
     * @type {Date}
     * @memberof HouseSellLimitType
     */
    date?: Date;
    /**
     * Indicates if sell limit is flat or percentage.
     * @type {string}
     * @memberof HouseSellLimitType
     */
    flatOrPercentage?: HouseSellLimitTypeFlatOrPercentageEnum;
}
/**
 * @export
 */
export declare const HouseSellLimitTypeFlatOrPercentageEnum: {
    readonly Flat: "Flat";
    readonly Percentage: "Percentage";
};
export type HouseSellLimitTypeFlatOrPercentageEnum = typeof HouseSellLimitTypeFlatOrPercentageEnum[keyof typeof HouseSellLimitTypeFlatOrPercentageEnum];
/**
 * Check if a given object implements the HouseSellLimitType interface.
 */
export declare function instanceOfHouseSellLimitType(value: object): boolean;
export declare function HouseSellLimitTypeFromJSON(json: any): HouseSellLimitType;
export declare function HouseSellLimitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HouseSellLimitType;
export declare function HouseSellLimitTypeToJSON(value?: HouseSellLimitType | null): any;
