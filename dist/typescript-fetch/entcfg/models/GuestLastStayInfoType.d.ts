/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Contains last stay related details of the guest.
 * @export
 * @interface GuestLastStayInfoType
 */
export interface GuestLastStayInfoType {
    /**
     * Guest's last stay date.
     * @type {Date}
     * @memberof GuestLastStayInfoType
     */
    lastStayDate?: Date;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof GuestLastStayInfoType
     */
    lastStayRate?: CurrencyAmountType;
    /**
     * Room Number where the guest stayed.
     * @type {string}
     * @memberof GuestLastStayInfoType
     */
    lastStayRoom?: string;
    /**
     * The total number of previous stay of the guest.
     * @type {number}
     * @memberof GuestLastStayInfoType
     */
    totalStay?: number;
}
/**
 * Check if a given object implements the GuestLastStayInfoType interface.
 */
export declare function instanceOfGuestLastStayInfoType(value: object): boolean;
export declare function GuestLastStayInfoTypeFromJSON(json: any): GuestLastStayInfoType;
export declare function GuestLastStayInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestLastStayInfoType;
export declare function GuestLastStayInfoTypeToJSON(value?: GuestLastStayInfoType | null): any;
