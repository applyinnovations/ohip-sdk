/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HousekeepingSectionType } from './HousekeepingSectionType';
/**
 * Information regarding Housekeeping Attendants.
 * @export
 * @interface HousekeepingTaskTypeAttendant
 */
export interface HousekeepingTaskTypeAttendant {
    /**
     * Indicates if the Attendant is active.
     * @type {string}
     * @memberof HousekeepingTaskTypeAttendant
     */
    activeFlag?: string;
    /**
     * Attendant's unique identifier.
     * @type {string}
     * @memberof HousekeepingTaskTypeAttendant
     */
    attendantId?: string;
    /**
     *
     * @type {string}
     * @memberof HousekeepingTaskTypeAttendant
     */
    attendantInstructions?: string;
    /**
     * Attendant's name.
     * @type {string}
     * @memberof HousekeepingTaskTypeAttendant
     */
    attendantName?: string;
    /**
     * The Floor which is assigned to the attendant.
     * @type {string}
     * @memberof HousekeepingTaskTypeAttendant
     */
    floor?: string;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    friday?: boolean;
    /**
     * Property where the attendant belongs.
     * @type {string}
     * @memberof HousekeepingTaskTypeAttendant
     */
    hotelId?: string;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    monday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    saturday?: boolean;
    /**
     *
     * @type {HousekeepingSectionType}
     * @memberof HousekeepingTaskTypeAttendant
     */
    section?: HousekeepingSectionType;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof HousekeepingTaskTypeAttendant
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the HousekeepingTaskTypeAttendant interface.
 */
export declare function instanceOfHousekeepingTaskTypeAttendant(value: object): boolean;
export declare function HousekeepingTaskTypeAttendantFromJSON(json: any): HousekeepingTaskTypeAttendant;
export declare function HousekeepingTaskTypeAttendantFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingTaskTypeAttendant;
export declare function HousekeepingTaskTypeAttendantToJSON(value?: HousekeepingTaskTypeAttendant | null): any;