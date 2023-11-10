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
import type { ConfirmationsType } from './ConfirmationsType';
import type { Links } from './Links';
import type { ReservationId } from './ReservationId';
import type { ResponseInstructionsType } from './ResponseInstructionsType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostConfirmationLettersRequest
 */
export interface PostConfirmationLettersRequest {
    /**
     *
     * @type {ConfirmationsType}
     * @memberof PostConfirmationLettersRequest
     */
    confLetters?: ConfirmationsType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PostConfirmationLettersRequest
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof PostConfirmationLettersRequest
     */
    links?: Links;
    /**
     *
     * @type {ReservationId}
     * @memberof PostConfirmationLettersRequest
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {ResponseInstructionsType}
     * @memberof PostConfirmationLettersRequest
     */
    responseInstruction?: ResponseInstructionsType;
    /**
     *
     * @type {WarningsType}
     * @memberof PostConfirmationLettersRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostConfirmationLettersRequest interface.
 */
export declare function instanceOfPostConfirmationLettersRequest(value: object): boolean;
export declare function PostConfirmationLettersRequestFromJSON(json: any): PostConfirmationLettersRequest;
export declare function PostConfirmationLettersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostConfirmationLettersRequest;
export declare function PostConfirmationLettersRequestToJSON(value?: PostConfirmationLettersRequest | null): any;
