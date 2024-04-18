/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * eligible amount that is allowed to pay with award payment
 * @export
 * @interface AwardFolioInfo
 */
export interface AwardFolioInfo {
    /**
     * Eligible Bill Amount
     * @type {number}
     * @memberof AwardFolioInfo
     */
    eligibleBill?: number;
    /**
     * Folio Window.
     * @type {number}
     * @memberof AwardFolioInfo
     */
    folioView?: number;
}
/**
 * Check if a given object implements the AwardFolioInfo interface.
 */
export declare function instanceOfAwardFolioInfo(value: object): boolean;
export declare function AwardFolioInfoFromJSON(json: any): AwardFolioInfo;
export declare function AwardFolioInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardFolioInfo;
export declare function AwardFolioInfoToJSON(value?: AwardFolioInfo | null): any;