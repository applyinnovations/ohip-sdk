/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CashierClosureType } from './CashierClosureType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutCashierRequest
 */
export interface PutCashierRequest {
    /**
     * The Cashier Lock Handle to pass along with operation which required cashier to be locked.
     * @type {number}
     * @memberof PutCashierRequest
     */
    cashierLockHandle?: number;
    /**
     *
     * @type {CashierClosureType}
     * @memberof PutCashierRequest
     */
    criteria?: CashierClosureType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PutCashierRequest
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof PutCashierRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutCashierRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutCashierRequest interface.
 */
export declare function instanceOfPutCashierRequest(value: object): boolean;
export declare function PutCashierRequestFromJSON(json: any): PutCashierRequest;
export declare function PutCashierRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutCashierRequest;
export declare function PutCashierRequestToJSON(value?: PutCashierRequest | null): any;
