/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Fiscal Command details.
 * @export
 * @interface FiscalCommandType
 */
export interface FiscalCommandType {
    /**
     * Fiscal Command description that is only used during a fetch.
     * @type {string}
     * @memberof FiscalCommandType
     */
    description?: string;
    /**
     * Fiscal Command.
     * @type {string}
     * @memberof FiscalCommandType
     */
    fiscalCommandCode?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof FiscalCommandType
     */
    fiscalPartnerCodes?: Array<string>;
    /**
     * Unique code of the hotel.
     * @type {string}
     * @memberof FiscalCommandType
     */
    hotelId?: string;
    /**
     * A flag that determines whether to fetch active records or inactive records.
     * @type {boolean}
     * @memberof FiscalCommandType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the FiscalCommandType interface.
 */
export declare function instanceOfFiscalCommandType(value: object): boolean;
export declare function FiscalCommandTypeFromJSON(json: any): FiscalCommandType;
export declare function FiscalCommandTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalCommandType;
export declare function FiscalCommandTypeToJSON(value?: FiscalCommandType | null): any;
