/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoomTypePoolType } from './RoomTypePoolType';
import type { WarningType } from './WarningType';
/**
 * Request object for creating new room pool.
 * @export
 * @interface RoomTypePoolCriteria
 */
export interface RoomTypePoolCriteria {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RoomTypePoolCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of room type pool and associated room type(s).
     * @type {Array<RoomTypePoolType>}
     * @memberof RoomTypePoolCriteria
     */
    roomPoolTypes?: Array<RoomTypePoolType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomTypePoolCriteria
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RoomTypePoolCriteria interface.
 */
export declare function instanceOfRoomTypePoolCriteria(value: object): boolean;
export declare function RoomTypePoolCriteriaFromJSON(json: any): RoomTypePoolCriteria;
export declare function RoomTypePoolCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypePoolCriteria;
export declare function RoomTypePoolCriteriaToJSON(value?: RoomTypePoolCriteria | null): any;