/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { MasterInfoType } from './MasterInfoType';
import type { ReservationsDetailsReservations } from './ReservationsDetailsReservations';
import type { WarningType } from './WarningType';
/**
 * Response object to the Fetch Reservation Request operation. Based on the criteria, reservation information is returned.
 * @export
 * @interface ReservationsDetails
 */
export interface ReservationsDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ReservationsDetails
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {Array<MasterInfoType>}
     * @memberof ReservationsDetails
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     *
     * @type {ReservationsDetailsReservations}
     * @memberof ReservationsDetails
     */
    reservations?: ReservationsDetailsReservations;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReservationsDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ReservationsDetails interface.
 */
export declare function instanceOfReservationsDetails(value: object): boolean;
export declare function ReservationsDetailsFromJSON(json: any): ReservationsDetails;
export declare function ReservationsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationsDetails;
export declare function ReservationsDetailsToJSON(value?: ReservationsDetails | null): any;
