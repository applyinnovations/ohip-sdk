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
import type { CashieringEventType } from './CashieringEventType';
import type { CheckoutInstructionsType } from './CheckoutInstructionsType';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 *
 * @export
 * @interface CheckoutReservationType
 */
export interface CheckoutReservationType {
    /**
     * This flag will be set to true if the reservation is checked out via mobility service. When the reservation is checked out through UI, this would be false.
     * @type {boolean}
     * @memberof CheckoutReservationType
     */
    autoCheckout?: boolean;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof CheckoutReservationType
     */
    cashierId?: number;
    /**
     *
     * @type {CheckoutInstructionsType}
     * @memberof CheckoutReservationType
     */
    checkoutInstr?: CheckoutInstructionsType;
    /**
     * If the Property works with Open Folios and the reservation has the privileges for Post Stay Charging, this flag could be set to True which would checkout the guest without requiring the guest to settle his balances.
     * @type {boolean}
     * @memberof CheckoutReservationType
     */
    checkoutWithOpenFolio?: boolean;
    /**
     *
     * @type {CashieringEventType}
     * @memberof CheckoutReservationType
     */
    eventType?: CashieringEventType;
    /**
     * Property code.
     * @type {string}
     * @memberof CheckoutReservationType
     */
    hotelId?: string;
    /**
     * This flag will be set to true if the reservation is checked out via mobility service. When the reservation is checked out through UI, this would be false.
     * @type {boolean}
     * @memberof CheckoutReservationType
     */
    mobileCheckout?: boolean;
    /**
     * Email address
     * @type {string}
     * @memberof CheckoutReservationType
     */
    mobileCheckoutFolioEmail?: string;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof CheckoutReservationType
     */
    reservationIdList?: UniqueIDListType;
    /**
     * Indicates Stop Checkout reservation Global Alert flag.
     * @type {boolean}
     * @memberof CheckoutReservationType
     */
    stopCheckout?: boolean;
}
/**
 * Check if a given object implements the CheckoutReservationType interface.
 */
export declare function instanceOfCheckoutReservationType(value: object): boolean;
export declare function CheckoutReservationTypeFromJSON(json: any): CheckoutReservationType;
export declare function CheckoutReservationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutReservationType;
export declare function CheckoutReservationTypeToJSON(value?: CheckoutReservationType | null): any;
