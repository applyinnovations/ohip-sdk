/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The instructions to be applied for the reservations that are being cancelled.
 * @export
 * @interface CancelReservationsInstructionsType
 */
export interface CancelReservationsInstructionsType {
    /**
     * Indicate whether any sharing reservations associated with the reservation which is being cancelled will also be cancelled.
     * @type {boolean}
     * @memberof CancelReservationsInstructionsType
     */
    cancelShares?: boolean;
    /**
     * Indicate if the traces associated with the reservations have to be deleted after the cancellation process.
     * @type {boolean}
     * @memberof CancelReservationsInstructionsType
     */
    deleteTraces?: boolean;
    /**
     * Indicate whether to allow cancel a reservation which has an applied deposit.
     * @type {boolean}
     * @memberof CancelReservationsInstructionsType
     */
    ignoreDeposits?: boolean;
    /**
     * Indicate whether to ignore any associated cancellation rules during the cancellation process.
     * @type {boolean}
     * @memberof CancelReservationsInstructionsType
     */
    ignorePenalties?: boolean;
}
/**
 * Check if a given object implements the CancelReservationsInstructionsType interface.
 */
export declare function instanceOfCancelReservationsInstructionsType(value: object): boolean;
export declare function CancelReservationsInstructionsTypeFromJSON(json: any): CancelReservationsInstructionsType;
export declare function CancelReservationsInstructionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelReservationsInstructionsType;
export declare function CancelReservationsInstructionsTypeToJSON(value?: CancelReservationsInstructionsType | null): any;
