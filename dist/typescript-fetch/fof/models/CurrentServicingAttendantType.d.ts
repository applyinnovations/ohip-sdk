/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ApplicationUserType } from './ApplicationUserType';
import type { HousekeepingSectionType } from './HousekeepingSectionType';
import type { ServicingAttendantStatusType } from './ServicingAttendantStatusType';
/**
 * The Attendant Name and ID of the attendant servicing the room.
 * @export
 * @interface CurrentServicingAttendantType
 */
export interface CurrentServicingAttendantType {
    /**
     * Indicates if the Attendant is active.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    activeFlag?: string;
    /**
     *
     * @type {ApplicationUserType}
     * @memberof CurrentServicingAttendantType
     */
    appUser?: ApplicationUserType;
    /**
     * Attendant's unique identifier.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    attendantId?: string;
    /**
     * Attendant's name.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    attendantName?: string;
    /**
     * The Floor which is assigned to the attendant.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    floor?: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    friday?: boolean;
    /**
     * Property where the attendant belongs.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    hotelId?: string;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    monday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    saturday?: boolean;
    /**
     *
     * @type {HousekeepingSectionType}
     * @memberof CurrentServicingAttendantType
     */
    section?: HousekeepingSectionType;
    /**
     * The start time of the service.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    startTime?: string;
    /**
     *
     * @type {ServicingAttendantStatusType}
     * @memberof CurrentServicingAttendantType
     */
    status?: ServicingAttendantStatusType;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the CurrentServicingAttendantType interface.
 */
export declare function instanceOfCurrentServicingAttendantType(value: object): boolean;
export declare function CurrentServicingAttendantTypeFromJSON(json: any): CurrentServicingAttendantType;
export declare function CurrentServicingAttendantTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentServicingAttendantType;
export declare function CurrentServicingAttendantTypeToJSON(value?: CurrentServicingAttendantType | null): any;
