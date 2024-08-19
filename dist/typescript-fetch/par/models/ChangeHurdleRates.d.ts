/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HurdleRateEditType } from './HurdleRateEditType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object for changing existing Hurdle Rates.
 * @export
 * @interface ChangeHurdleRates
 */
export interface ChangeHurdleRates {
    /**
     * Details for hurdle rate to be modified.
     * @type {Array<HurdleRateEditType>}
     * @memberof ChangeHurdleRates
     */
    hurdleRates?: Array<HurdleRateEditType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ChangeHurdleRates
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeHurdleRates
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ChangeHurdleRates interface.
 */
export declare function instanceOfChangeHurdleRates(value: object): boolean;
export declare function ChangeHurdleRatesFromJSON(json: any): ChangeHurdleRates;
export declare function ChangeHurdleRatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHurdleRates;
export declare function ChangeHurdleRatesToJSON(value?: ChangeHurdleRates | null): any;
