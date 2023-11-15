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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Contains last stay related details for the profile
 * @export
 * @interface LastStayInfoType
 */
export interface LastStayInfoType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof LastStayInfoType
     */
    lastRate?: CurrencyAmountType;
    /**
     * Used to hold last room information for the profile.
     * @type {string}
     * @memberof LastStayInfoType
     */
    lastRoom?: string;
    /**
     * Used to hold last stay information for the profile.
     * @type {string}
     * @memberof LastStayInfoType
     */
    lastVisit?: string;
    /**
     * The total number of previous stay of the profile.
     * @type {number}
     * @memberof LastStayInfoType
     */
    totalStay?: number;
}
/**
 * Check if a given object implements the LastStayInfoType interface.
 */
export declare function instanceOfLastStayInfoType(value: object): boolean;
export declare function LastStayInfoTypeFromJSON(json: any): LastStayInfoType;
export declare function LastStayInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LastStayInfoType;
export declare function LastStayInfoTypeToJSON(value?: LastStayInfoType | null): any;
