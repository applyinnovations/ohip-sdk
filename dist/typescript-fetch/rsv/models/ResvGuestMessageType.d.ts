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
import type { MessageDeliveryType } from './MessageDeliveryType';
import type { ResvMessageType } from './ResvMessageType';
/**
 * List of Guest Messages
 * @export
 * @interface ResvGuestMessageType
 */
export interface ResvGuestMessageType {
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    creatorId?: string;
    /**
     *
     * @type {MessageDeliveryType}
     * @memberof ResvGuestMessageType
     */
    delivery?: MessageDeliveryType;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof ResvGuestMessageType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    instance?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    lastModifyDateTime?: string;
    /**
     *
     * @type {ResvMessageType}
     * @memberof ResvGuestMessageType
     */
    message?: ResvMessageType;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {Date}
     * @memberof ResvGuestMessageType
     */
    purgeDate?: Date;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof ResvGuestMessageType
     */
    url?: string;
}
/**
 * Check if a given object implements the ResvGuestMessageType interface.
 */
export declare function instanceOfResvGuestMessageType(value: object): boolean;
export declare function ResvGuestMessageTypeFromJSON(json: any): ResvGuestMessageType;
export declare function ResvGuestMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResvGuestMessageType;
export declare function ResvGuestMessageTypeToJSON(value?: ResvGuestMessageType | null): any;
