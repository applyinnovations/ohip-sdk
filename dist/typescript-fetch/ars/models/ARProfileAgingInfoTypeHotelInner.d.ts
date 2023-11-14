/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARAccountsType } from './ARAccountsType';
import type { ARAgingInfoType } from './ARAgingInfoType';
/**
 *
 * @export
 * @interface ARProfileAgingInfoTypeHotelInner
 */
export interface ARProfileAgingInfoTypeHotelInner {
    /**
     *
     * @type {ARAccountsType}
     * @memberof ARProfileAgingInfoTypeHotelInner
     */
    accountAging?: ARAccountsType;
    /**
     * Property Code for the Aging information.
     * @type {string}
     * @memberof ARProfileAgingInfoTypeHotelInner
     */
    hotelId?: string;
    /**
     *
     * @type {ARAgingInfoType}
     * @memberof ARProfileAgingInfoTypeHotelInner
     */
    totalHotelAging?: ARAgingInfoType;
}
/**
 * Check if a given object implements the ARProfileAgingInfoTypeHotelInner interface.
 */
export declare function instanceOfARProfileAgingInfoTypeHotelInner(value: object): boolean;
export declare function ARProfileAgingInfoTypeHotelInnerFromJSON(json: any): ARProfileAgingInfoTypeHotelInner;
export declare function ARProfileAgingInfoTypeHotelInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARProfileAgingInfoTypeHotelInner;
export declare function ARProfileAgingInfoTypeHotelInnerToJSON(value?: ARProfileAgingInfoTypeHotelInner | null): any;