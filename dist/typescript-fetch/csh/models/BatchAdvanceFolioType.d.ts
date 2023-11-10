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
import type { Reservations } from './Reservations';
/**
 * Contains criteria for process batch advance folio.
 * @export
 * @interface BatchAdvanceFolioType
 */
export interface BatchAdvanceFolioType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof BatchAdvanceFolioType
     */
    cashierId?: number;
    /**
     * Property context of the reservations.
     * @type {string}
     * @memberof BatchAdvanceFolioType
     */
    hotelId?: string;
    /**
     *
     * @type {Reservations}
     * @memberof BatchAdvanceFolioType
     */
    reservations?: Reservations;
}
/**
 * Check if a given object implements the BatchAdvanceFolioType interface.
 */
export declare function instanceOfBatchAdvanceFolioType(value: object): boolean;
export declare function BatchAdvanceFolioTypeFromJSON(json: any): BatchAdvanceFolioType;
export declare function BatchAdvanceFolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BatchAdvanceFolioType;
export declare function BatchAdvanceFolioTypeToJSON(value?: BatchAdvanceFolioType | null): any;
