/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileType } from './ProfileType';
import type { ResProfileTypeType } from './ResProfileTypeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface ReservationProfileType
 */
export interface ReservationProfileType {
    /**
     *
     * @type {ProfileType}
     * @memberof ReservationProfileType
     */
    profile?: ProfileType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ReservationProfileType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     *
     * @type {ResProfileTypeType}
     * @memberof ReservationProfileType
     */
    reservationProfileType?: ResProfileTypeType;
}
/**
 * Check if a given object implements the ReservationProfileType interface.
 */
export declare function instanceOfReservationProfileType(value: object): boolean;
export declare function ReservationProfileTypeFromJSON(json: any): ReservationProfileType;
export declare function ReservationProfileTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationProfileType;
export declare function ReservationProfileTypeToJSON(value?: ReservationProfileType | null): any;
