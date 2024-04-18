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
import type { AvailRatePlanInfoTypeRatePlanInner } from './AvailRatePlanInfoTypeRatePlanInner';
/**
 * The rate plan element is used to contain all the rate information for a single Rate Plan
 * @export
 * @interface AvailRatePlanInfoType
 */
export interface AvailRatePlanInfoType {
    /**
     *
     * @type {string}
     * @memberof AvailRatePlanInfoType
     */
    hotelId?: string;
    /**
     * Rate plan information
     * @type {Array<AvailRatePlanInfoTypeRatePlanInner>}
     * @memberof AvailRatePlanInfoType
     */
    ratePlan?: Array<AvailRatePlanInfoTypeRatePlanInner>;
}
/**
 * Check if a given object implements the AvailRatePlanInfoType interface.
 */
export declare function instanceOfAvailRatePlanInfoType(value: object): boolean;
export declare function AvailRatePlanInfoTypeFromJSON(json: any): AvailRatePlanInfoType;
export declare function AvailRatePlanInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailRatePlanInfoType;
export declare function AvailRatePlanInfoTypeToJSON(value?: AvailRatePlanInfoType | null): any;