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
import type { FixedChargeDetailType } from './FixedChargeDetailType';
import type { FixedChargeScheduleType } from './FixedChargeScheduleType';
/**
 * Holds fixed charge information.
 * @export
 * @interface FixedChargeType
 */
export interface FixedChargeType {
    /**
     *
     * @type {FixedChargeDetailType}
     * @memberof FixedChargeType
     */
    charge?: FixedChargeDetailType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof FixedChargeType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof FixedChargeType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof FixedChargeType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof FixedChargeType
     */
    instance?: string;
    /**
     *
     * @type {FixedChargeScheduleType}
     * @memberof FixedChargeType
     */
    schedule?: FixedChargeScheduleType;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof FixedChargeType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof FixedChargeType
     */
    url?: string;
}
/**
 * Check if a given object implements the FixedChargeType interface.
 */
export declare function instanceOfFixedChargeType(value: object): boolean;
export declare function FixedChargeTypeFromJSON(json: any): FixedChargeType;
export declare function FixedChargeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargeType;
export declare function FixedChargeTypeToJSON(value?: FixedChargeType | null): any;
