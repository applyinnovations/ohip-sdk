/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CreditCardUniqueIdType } from './CreditCardUniqueIdType';
import type { WarningsType } from './WarningsType';
/**
 * Request for fetching credit card unique id.
 * @export
 * @interface CreditCardUniqueIdRQ
 */
export interface CreditCardUniqueIdRQ {
    /**
     *
     * @type {CreditCardUniqueIdType}
     * @memberof CreditCardUniqueIdRQ
     */
    creditCardUniqueId?: CreditCardUniqueIdType;
    /**
     *
     * @type {WarningsType}
     * @memberof CreditCardUniqueIdRQ
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CreditCardUniqueIdRQ interface.
 */
export declare function instanceOfCreditCardUniqueIdRQ(value: object): boolean;
export declare function CreditCardUniqueIdRQFromJSON(json: any): CreditCardUniqueIdRQ;
export declare function CreditCardUniqueIdRQFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditCardUniqueIdRQ;
export declare function CreditCardUniqueIdRQToJSON(value?: CreditCardUniqueIdRQ | null): any;
