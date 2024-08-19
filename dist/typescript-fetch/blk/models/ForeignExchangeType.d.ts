/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
     * Effective Exchange date for the foreign currency posting.
     * @type {string}
     * @memberof ForeignExchangeType
     */
    effectiveDate?: string;
    /**
     * Exchange Type for the postings.
     * @type {string}
     * @memberof ForeignExchangeType
     */
    type?: string;
}
/**
 * Check if a given object implements the ForeignExchangeType interface.
 */
export declare function instanceOfForeignExchangeType(value: object): boolean;
export declare function ForeignExchangeTypeFromJSON(json: any): ForeignExchangeType;
export declare function ForeignExchangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignExchangeType;
export declare function ForeignExchangeTypeToJSON(value?: ForeignExchangeType | null): any;
