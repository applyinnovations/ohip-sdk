/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface ChangeHurdleRatesDetails
 */
export interface ChangeHurdleRatesDetails {
    /**
     *
     * @type {Links}
     * @memberof ChangeHurdleRatesDetails
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof ChangeHurdleRatesDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ChangeHurdleRatesDetails interface.
 */
export declare function instanceOfChangeHurdleRatesDetails(value: object): boolean;
export declare function ChangeHurdleRatesDetailsFromJSON(json: any): ChangeHurdleRatesDetails;
export declare function ChangeHurdleRatesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHurdleRatesDetails;
export declare function ChangeHurdleRatesDetailsToJSON(value?: ChangeHurdleRatesDetails | null): any;
