/**
 * OPI Token Exchange Service API
 * Oracle Token Exchange Service Specification<br /><br /> Compatible with OPERA Cloud release 1.0.1.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * TokenInfo object
 * @export
 * @interface TokenInfo
 */
export interface TokenInfo {
    /**
     * OPERA Card Type
     * @type {string}
     * @memberof TokenInfo
     */
    cardType: string;
    /**
     * Expiration Date, YYMM format
     * @type {string}
     * @memberof TokenInfo
     */
    expiryDate: string;
    /**
     * Masked Primary Account Number (PAN)
     * @type {string}
     * @memberof TokenInfo
     */
    pan: string;
    /**
     * Record number
     * @type {number}
     * @memberof TokenInfo
     */
    recordNumber: number;
    /**
     * Card Token
     * @type {string}
     * @memberof TokenInfo
     */
    token: string;
}
/**
 * Check if a given object implements the TokenInfo interface.
 */
export declare function instanceOfTokenInfo(value: object): boolean;
export declare function TokenInfoFromJSON(json: any): TokenInfo;
export declare function TokenInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenInfo;
export declare function TokenInfoToJSON(value?: TokenInfo | null): any;
