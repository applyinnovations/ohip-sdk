/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Foreign Exchange info.
 * @export
 * @interface ForeignExchangeType
 */
export interface ForeignExchangeType {
    /**
     * Exchange Type for the postings.
     * @type {string}
     * @memberof ForeignExchangeType
     */
    type?: string;
    /**
     * Effective Exchange date for the foreign currency posting.
     * @type {string}
     * @memberof ForeignExchangeType
     */
    effectiveDate?: string;
}
/**
 * Check if a given object implements the ForeignExchangeType interface.
 */
export declare function instanceOfForeignExchangeType(value: object): boolean;
export declare function ForeignExchangeTypeFromJSON(json: any): ForeignExchangeType;
export declare function ForeignExchangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignExchangeType;
export declare function ForeignExchangeTypeToJSON(value?: ForeignExchangeType | null): any;