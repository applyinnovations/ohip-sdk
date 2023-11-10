/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARAccountShortInfoType } from './ARAccountShortInfoType';
import type { AddressInfoType } from './AddressInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Payee information.
 * @export
 * @interface PayeeInfoType
 */
export interface PayeeInfoType {
    /**
     *
     * @type {ARAccountShortInfoType}
     * @memberof PayeeInfoType
     */
    payeeAccountInfo?: ARAccountShortInfoType;
    /**
     *
     * @type {AddressInfoType}
     * @memberof PayeeInfoType
     */
    payeeAddress?: AddressInfoType;
    /**
     * Payee multiple address count.
     * @type {number}
     * @memberof PayeeInfoType
     */
    payeeAddressCount?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PayeeInfoType
     */
    payeeId?: UniqueIDType;
    /**
     * Name of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeName?: string;
    /**
     * Reference currency of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeReferenceCurrency?: string;
    /**
     * The tax number of the payee.
     * @type {string}
     * @memberof PayeeInfoType
     */
    payeeTaxNumber?: string;
}
/**
 * Check if a given object implements the PayeeInfoType interface.
 */
export declare function instanceOfPayeeInfoType(value: object): boolean;
export declare function PayeeInfoTypeFromJSON(json: any): PayeeInfoType;
export declare function PayeeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayeeInfoType;
export declare function PayeeInfoTypeToJSON(value?: PayeeInfoType | null): any;
