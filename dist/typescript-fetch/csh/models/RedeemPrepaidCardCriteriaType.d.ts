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
import type { PrepaidCardRedemptionsType } from './PrepaidCardRedemptionsType';
import type { ReservationId } from './ReservationId';
/**
 * Criteria for Prepaid card redeem request.
 * @export
 * @interface RedeemPrepaidCardCriteriaType
 */
export interface RedeemPrepaidCardCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof RedeemPrepaidCardCriteriaType
     */
    cashierId?: number;
    /**
     * Folio Window.
     * @type {number}
     * @memberof RedeemPrepaidCardCriteriaType
     */
    folioView?: number;
    /**
     * Hotel code.
     * @type {string}
     * @memberof RedeemPrepaidCardCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {PrepaidCardRedemptionsType}
     * @memberof RedeemPrepaidCardCriteriaType
     */
    prepaidCardRedemptions?: PrepaidCardRedemptionsType;
    /**
     *
     * @type {ReservationId}
     * @memberof RedeemPrepaidCardCriteriaType
     */
    reservationId?: ReservationId;
}
/**
 * Check if a given object implements the RedeemPrepaidCardCriteriaType interface.
 */
export declare function instanceOfRedeemPrepaidCardCriteriaType(value: object): boolean;
export declare function RedeemPrepaidCardCriteriaTypeFromJSON(json: any): RedeemPrepaidCardCriteriaType;
export declare function RedeemPrepaidCardCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedeemPrepaidCardCriteriaType;
export declare function RedeemPrepaidCardCriteriaTypeToJSON(value?: RedeemPrepaidCardCriteriaType | null): any;
