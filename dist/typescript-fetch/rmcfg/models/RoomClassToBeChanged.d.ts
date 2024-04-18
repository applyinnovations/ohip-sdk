/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoomClassType } from './RoomClassType';
import type { WarningType } from './WarningType';
/**
 * Request object for changing an existing hotel level room class.
 * @export
 * @interface RoomClassToBeChanged
 */
export interface RoomClassToBeChanged {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomClassToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {RoomClassType}
     * @memberof RoomClassToBeChanged
     */
    roomClass?: RoomClassType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomClassToBeChanged
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomClassToBeChanged interface.
 */
export declare function instanceOfRoomClassToBeChanged(value: object): boolean;
export declare function RoomClassToBeChangedFromJSON(json: any): RoomClassToBeChanged;
export declare function RoomClassToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassToBeChanged;
export declare function RoomClassToBeChangedToJSON(value?: RoomClassToBeChanged | null): any;