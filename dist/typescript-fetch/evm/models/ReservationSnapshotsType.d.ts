/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationSnapshotType } from './ReservationSnapshotType';
/**
 * A collection of Reservation snapshot objects.
 * @export
 * @interface ReservationSnapshotsType
 */
export interface ReservationSnapshotsType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ReservationSnapshotsType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ReservationSnapshotsType
     */
    hasMore?: boolean;
    /**
     * A reservation snapshot object.
     * @type {Array<ReservationSnapshotType>}
     * @memberof ReservationSnapshotsType
     */
    reservation?: Array<ReservationSnapshotType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ReservationSnapshotsType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ReservationSnapshotsType interface.
 */
export declare function instanceOfReservationSnapshotsType(value: object): boolean;
export declare function ReservationSnapshotsTypeFromJSON(json: any): ReservationSnapshotsType;
export declare function ReservationSnapshotsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationSnapshotsType;
export declare function ReservationSnapshotsTypeToJSON(value?: ReservationSnapshotsType | null): any;