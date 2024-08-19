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
/**
 * The list of best availabe rates for rates code(s).
 * @export
 * @interface BestAvailableRateType
 */
export interface BestAvailableRateType {
    /**
     * Best available rate date available
     * @type {string}
     * @memberof BestAvailableRateType
     */
    date?: string;
    /**
     * Best available rate length of stay
     * @type {number}
     * @memberof BestAvailableRateType
     */
    lengthOfStay?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof BestAvailableRateType
     */
    rateCode?: Array<string>;
}
/**
 * Check if a given object implements the BestAvailableRateType interface.
 */
export declare function instanceOfBestAvailableRateType(value: object): boolean;
export declare function BestAvailableRateTypeFromJSON(json: any): BestAvailableRateType;
export declare function BestAvailableRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BestAvailableRateType;
export declare function BestAvailableRateTypeToJSON(value?: BestAvailableRateType | null): any;
