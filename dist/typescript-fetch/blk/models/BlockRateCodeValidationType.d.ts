/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Information for validation of block rate code.
 * @export
 * @interface BlockRateCodeValidationType
 */
export interface BlockRateCodeValidationType {
    /**
     * End date for the rate code validation.
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    endDate?: string;
    /**
     * Hotel code for which rate code should be validated.
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    hotelId?: string;
    /**
     * Rate code
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    rateCode?: string;
    /**
     * Start date for the rate code validation.
     * @type {string}
     * @memberof BlockRateCodeValidationType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the BlockRateCodeValidationType interface.
 */
export declare function instanceOfBlockRateCodeValidationType(value: object): boolean;
export declare function BlockRateCodeValidationTypeFromJSON(json: any): BlockRateCodeValidationType;
export declare function BlockRateCodeValidationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRateCodeValidationType;
export declare function BlockRateCodeValidationTypeToJSON(value?: BlockRateCodeValidationType | null): any;
