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
import type { BlockId } from './BlockId';
import type { EventId } from './EventId';
import type { ResourceCopyAndMoveType } from './ResourceCopyAndMoveType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Criteria to copy/move event resources
 * @export
 * @interface CopyAndMoveEventResourcesType
 */
export interface CopyAndMoveEventResourcesType {
    /**
     *
     * @type {BlockId}
     * @memberof CopyAndMoveEventResourcesType
     */
    blockId?: BlockId;
    /**
     *
     * @type {EventId}
     * @memberof CopyAndMoveEventResourcesType
     */
    eventId?: EventId;
    /**
     * Hotel code where event resources will be copied/moved.
     * @type {string}
     * @memberof CopyAndMoveEventResourcesType
     */
    hotelId?: string;
    /**
     * Flag to indicate if the resources have to be copied as a package.
     * @type {boolean}
     * @memberof CopyAndMoveEventResourcesType
     */
    includeAsPackage?: boolean;
    /**
     * Indicates whether to override warnings for copying/moving resources. By default, it is always considered as false and will provide post-change warnings.
     * @type {boolean}
     * @memberof CopyAndMoveEventResourcesType
     */
    overrideCopyAndMoveResourceProcessWarnings?: boolean;
    /**
     * Resource Type and its UniqueID.
     * @type {Array<ResourceCopyAndMoveType>}
     * @memberof CopyAndMoveEventResourcesType
     */
    resourceIdList?: Array<ResourceCopyAndMoveType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof CopyAndMoveEventResourcesType
     */
    targetBlockId?: UniqueIDType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof CopyAndMoveEventResourcesType
     */
    targetEventIdList?: Array<UniqueIDType>;
}
/**
 * Check if a given object implements the CopyAndMoveEventResourcesType interface.
 */
export declare function instanceOfCopyAndMoveEventResourcesType(value: object): boolean;
export declare function CopyAndMoveEventResourcesTypeFromJSON(json: any): CopyAndMoveEventResourcesType;
export declare function CopyAndMoveEventResourcesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyAndMoveEventResourcesType;
export declare function CopyAndMoveEventResourcesTypeToJSON(value?: CopyAndMoveEventResourcesType | null): any;
