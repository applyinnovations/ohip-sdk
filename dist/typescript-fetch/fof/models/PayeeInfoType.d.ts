/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
