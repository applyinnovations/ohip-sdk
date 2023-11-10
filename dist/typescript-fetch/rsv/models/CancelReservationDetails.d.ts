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
import type { CancelReservationType } from './CancelReservationType';
import type { CancellationActivityType } from './CancellationActivityType';
import type { ChannelResvRSInfoType } from './ChannelResvRSInfoType';
import type { DailyRatesType } from './DailyRatesType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response object for the request to cancel reservations. Response contains the reservations which were successfully canceled.
 * @export
 * @interface CancelReservationDetails
 */
export interface CancelReservationDetails {
    /**
     *
     * @type {ChannelResvRSInfoType}
     * @memberof CancelReservationDetails
     */
    channelInformation?: ChannelResvRSInfoType;
    /**
     * Cancellation information includes information regarding Reason, Date of Cancellation etc..
     * @type {Array<CancellationActivityType>}
     * @memberof CancelReservationDetails
     */
    cxlActivityLog?: Array<CancellationActivityType>;
    /**
     *
     * @type {Links}
     * @memberof CancelReservationDetails
     */
    links?: Links;
    /**
     *
     * @type {DailyRatesType}
     * @memberof CancelReservationDetails
     */
    newRates?: DailyRatesType;
    /**
     *
     * @type {DailyRatesType}
     * @memberof CancelReservationDetails
     */
    oldRates?: DailyRatesType;
    /**
     * Information regarding the reservation which was canceled.
     * @type {Array<CancelReservationType>}
     * @memberof CancelReservationDetails
     */
    reservations?: Array<CancelReservationType>;
    /**
     *
     * @type {WarningsType}
     * @memberof CancelReservationDetails
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CancelReservationDetails interface.
 */
export declare function instanceOfCancelReservationDetails(value: object): boolean;
export declare function CancelReservationDetailsFromJSON(json: any): CancelReservationDetails;
export declare function CancelReservationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CancelReservationDetails;
export declare function CancelReservationDetailsToJSON(value?: CancelReservationDetails | null): any;
