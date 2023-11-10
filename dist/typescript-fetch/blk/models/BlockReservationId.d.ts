/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * An identifier used to uniquely reference an object in a system (e.g. an airline reservation reference, customer profile reference, booking confirmation number, or a reference to a previous availability quote).
 * @export
 * @interface BlockReservationId
 */
export interface BlockReservationId {
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof BlockReservationId
     */
    id?: string;
    /**
     * Used to identify the source of the identifier (e.g., IATA, ABTA).
     * @type {string}
     * @memberof BlockReservationId
     */
    idContext?: string;
    /**
     * Additional identifying value assigned by the creating system.
     * @type {number}
     * @memberof BlockReservationId
     */
    idExtension?: number;
    /**
     * The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
     * @type {string}
     * @memberof BlockReservationId
     */
    instance?: string;
    /**
     * If this candidate reservation has an out of service room assigned to it, setting this flag to true will ignore the out of service check and apply changes to the reservation.
     * @type {boolean}
     * @memberof BlockReservationId
     */
    overrideOutOfService?: boolean;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof BlockReservationId
     */
    type?: string;
    /**
     * URL that identifies the location associated with the record identified by the UniqueID.
     * @type {string}
     * @memberof BlockReservationId
     */
    url?: string;
}
/**
 * Check if a given object implements the BlockReservationId interface.
 */
export declare function instanceOfBlockReservationId(value: object): boolean;
export declare function BlockReservationIdFromJSON(json: any): BlockReservationId;
export declare function BlockReservationIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockReservationId;
export declare function BlockReservationIdToJSON(value?: BlockReservationId | null): any;
