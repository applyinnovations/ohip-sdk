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
import type { CashieringTransactionTypeType } from './CashieringTransactionTypeType';
import type { GeneratesSetupType } from './GeneratesSetupType';
/**
 * Transaction Group configuration information.
 * @export
 * @interface HotelTransactionGroupType
 */
export interface HotelTransactionGroupType {
    /**
     * Transaction Group Configuration Code.
     * @type {string}
     * @memberof HotelTransactionGroupType
     */
    code?: string;
    /**
     * Description of the Transaction Group.
     * @type {string}
     * @memberof HotelTransactionGroupType
     */
    description?: string;
    /**
     * Flag to determine whether generates are available or not
     * @type {boolean}
     * @memberof HotelTransactionGroupType
     */
    generatesAvailable?: boolean;
    /**
     *
     * @type {GeneratesSetupType}
     * @memberof HotelTransactionGroupType
     */
    generatesSetup?: GeneratesSetupType;
    /**
     * Hotel Code where the Transaction Group is configured.
     * @type {string}
     * @memberof HotelTransactionGroupType
     */
    hotelId?: string;
    /**
     * Display sequence for the code type.
     * @type {number}
     * @memberof HotelTransactionGroupType
     */
    sequence?: number;
    /**
     *
     * @type {CashieringTransactionTypeType}
     * @memberof HotelTransactionGroupType
     */
    type?: CashieringTransactionTypeType;
}
/**
 * Check if a given object implements the HotelTransactionGroupType interface.
 */
export declare function instanceOfHotelTransactionGroupType(value: object): boolean;
export declare function HotelTransactionGroupTypeFromJSON(json: any): HotelTransactionGroupType;
export declare function HotelTransactionGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelTransactionGroupType;
export declare function HotelTransactionGroupTypeToJSON(value?: HotelTransactionGroupType | null): any;
