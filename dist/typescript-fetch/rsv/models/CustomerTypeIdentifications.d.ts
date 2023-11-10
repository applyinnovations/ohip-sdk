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
import type { IdentificationInfoType } from './IdentificationInfoType';
/**
 * List of identification of the customer.
 * @export
 * @interface CustomerTypeIdentifications
 */
export interface CustomerTypeIdentifications {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CustomerTypeIdentifications
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CustomerTypeIdentifications
     */
    hasMore?: boolean;
    /**
     * Collection of detailed information on the identification of the customer.
     * @type {Array<IdentificationInfoType>}
     * @memberof CustomerTypeIdentifications
     */
    identificationInfo?: Array<IdentificationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CustomerTypeIdentifications
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the CustomerTypeIdentifications interface.
 */
export declare function instanceOfCustomerTypeIdentifications(value: object): boolean;
export declare function CustomerTypeIdentificationsFromJSON(json: any): CustomerTypeIdentifications;
export declare function CustomerTypeIdentificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerTypeIdentifications;
export declare function CustomerTypeIdentificationsToJSON(value?: CustomerTypeIdentifications | null): any;
