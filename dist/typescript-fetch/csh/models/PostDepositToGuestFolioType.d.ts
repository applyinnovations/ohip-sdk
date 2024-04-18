/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationId } from './ReservationId';
/**
 * Criteria for transferring the Deposit Amount to the Guest Folio
 * @export
 * @interface PostDepositToGuestFolioType
 */
export interface PostDepositToGuestFolioType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof PostDepositToGuestFolioType
     */
    cashierId?: number;
    /**
     * Resort for which the reservation defined.
     * @type {string}
     * @memberof PostDepositToGuestFolioType
     */
    hotelId?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof PostDepositToGuestFolioType
     */
    reservationId?: ReservationId;
}
/**
 * Check if a given object implements the PostDepositToGuestFolioType interface.
 */
export declare function instanceOfPostDepositToGuestFolioType(value: object): boolean;
export declare function PostDepositToGuestFolioTypeFromJSON(json: any): PostDepositToGuestFolioType;
export declare function PostDepositToGuestFolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostDepositToGuestFolioType;
export declare function PostDepositToGuestFolioTypeToJSON(value?: PostDepositToGuestFolioType | null): any;