/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TimeSpanType } from './TimeSpanType';
import type { WakeUpCallResvInfoType } from './WakeUpCallResvInfoType';
import type { WakeUpCallStatusType } from './WakeUpCallStatusType';
/**
 * Criteria to search and retrieve wake up calls.
 * @export
 * @interface WakeUpCallType
 */
export interface WakeUpCallType {
    /**
     * Time on which wake up call is set.
     * @type {string}
     * @memberof WakeUpCallType
     */
    callTime?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof WakeUpCallType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof WakeUpCallType
     */
    creatorId?: string;
    /**
     * Follow up call time.
     * @type {string}
     * @memberof WakeUpCallType
     */
    followUpCallTime?: string;
    /**
     * Special instructions for the wake up call.
     * @type {string}
     * @memberof WakeUpCallType
     */
    instructions?: string;
    /**
     * Is the call type follow up.
     * @type {boolean}
     * @memberof WakeUpCallType
     */
    isFollowUpCall?: boolean;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof WakeUpCallType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof WakeUpCallType
     */
    lastModifyDateTime?: string;
    /**
     * New Time on which wake up call is set. Used to change the Followup Call time
     * @type {string}
     * @memberof WakeUpCallType
     */
    newCallTime?: string;
    /**
     * New Follow up call time.Used to change the Followup Call time.
     * @type {string}
     * @memberof WakeUpCallType
     */
    newFollowUpCallTime?: string;
    /**
     * Date on which wake up call was processed.
     * @type {string}
     * @memberof WakeUpCallType
     */
    processedDate?: string;
    /**
     * Time on which wake up call was processed.
     * @type {string}
     * @memberof WakeUpCallType
     */
    processedTime?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof WakeUpCallType
     */
    purgeDate?: string;
    /**
     *
     * @type {WakeUpCallResvInfoType}
     * @memberof WakeUpCallType
     */
    reservationInfo?: WakeUpCallResvInfoType;
    /**
     *
     * @type {WakeUpCallStatusType}
     * @memberof WakeUpCallType
     */
    status?: WakeUpCallStatusType;
    /**
     *
     * @type {TimeSpanType}
     * @memberof WakeUpCallType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the WakeUpCallType interface.
 */
export declare function instanceOfWakeUpCallType(value: object): boolean;
export declare function WakeUpCallTypeFromJSON(json: any): WakeUpCallType;
export declare function WakeUpCallTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WakeUpCallType;
export declare function WakeUpCallTypeToJSON(value?: WakeUpCallType | null): any;
