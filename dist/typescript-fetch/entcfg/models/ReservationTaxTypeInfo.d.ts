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
/**
 * Provides information about the Tax Type.
 * @export
 * @interface ReservationTaxTypeInfo
 */
export interface ReservationTaxTypeInfo {
    /**
     * Code of the Tax Type.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    code?: string;
    /**
     * A boolean flag for Collecting Agent Tax
     * @type {boolean}
     * @memberof ReservationTaxTypeInfo
     */
    collectingAgentTax?: boolean;
    /**
     * Description of the Tax Type.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    description?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    hotelId?: string;
    /**
     * Minimun Length of Stay.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    minimumLengthOfStay?: number;
    /**
     * Print auto adjust information for this tax type on the tax exempt report.
     * @type {boolean}
     * @memberof ReservationTaxTypeInfo
     */
    printAutoAdjust?: boolean;
    /**
     * Number of days after which the guest will be tax exempt. Only used for tax exempt report.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    reportExemptDays?: number;
    /**
     * Tax percentage. Only used for tax exempt report.
     * @type {number}
     * @memberof ReservationTaxTypeInfo
     */
    reportTaxPercentage?: number;
    /**
     * Tax exempt number on the profile.
     * @type {string}
     * @memberof ReservationTaxTypeInfo
     */
    taxExemptNo?: string;
}
/**
 * Check if a given object implements the ReservationTaxTypeInfo interface.
 */
export declare function instanceOfReservationTaxTypeInfo(value: object): boolean;
export declare function ReservationTaxTypeInfoFromJSON(json: any): ReservationTaxTypeInfo;
export declare function ReservationTaxTypeInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationTaxTypeInfo;
export declare function ReservationTaxTypeInfoToJSON(value?: ReservationTaxTypeInfo | null): any;
