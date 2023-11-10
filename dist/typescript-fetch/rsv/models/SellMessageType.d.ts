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
import type { UsedInModuleType } from './UsedInModuleType';
/**
 * The SellMessagesType defines the standard attributes that will be retrieved with the sell message.
 * @export
 * @interface SellMessageType
 */
export interface SellMessageType {
    /**
     * This is the Begin date for the configured SellMessage.
     * @type {Date}
     * @memberof SellMessageType
     */
    beginDate?: Date;
    /**
     * This is the chain code.
     * @type {string}
     * @memberof SellMessageType
     */
    chainCode?: string;
    /**
     * This is the Central Reservation office code.
     * @type {string}
     * @memberof SellMessageType
     */
    croCode?: string;
    /**
     * This is the hotel code or resort.
     * @type {string}
     * @memberof SellMessageType
     */
    hotelId?: string;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof SellMessageType
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof SellMessageType
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof SellMessageType
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof SellMessageType
     */
    instance?: string;
    /**
     * This is the language code.
     * @type {string}
     * @memberof SellMessageType
     */
    languageCode?: string;
    /**
     * This is the message text.
     * @type {string}
     * @memberof SellMessageType
     */
    message?: string;
    /**
     * This represents the rate plan code of the room type.
     * @type {string}
     * @memberof SellMessageType
     */
    ratePlanCode?: string;
    /**
     * This represents the room type code.
     * @type {string}
     * @memberof SellMessageType
     */
    roomType?: string;
    /**
     * Flag which tells if this message is Sticky (Y/N).
     * @type {string}
     * @memberof SellMessageType
     */
    stickyFlagYn?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof SellMessageType
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof SellMessageType
     */
    url?: string;
    /**
     *
     * @type {UsedInModuleType}
     * @memberof SellMessageType
     */
    usedInModule?: UsedInModuleType;
}
/**
 * Check if a given object implements the SellMessageType interface.
 */
export declare function instanceOfSellMessageType(value: object): boolean;
export declare function SellMessageTypeFromJSON(json: any): SellMessageType;
export declare function SellMessageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellMessageType;
export declare function SellMessageTypeToJSON(value?: SellMessageType | null): any;
