/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CopyRoomHierarchiesCopyRoomHierarchies } from './CopyRoomHierarchiesCopyRoomHierarchies';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Request to copy room hierarchies
 * @export
 * @interface CopyRoomHierarchies
 */
export interface CopyRoomHierarchies {
    /**
     *
     * @type {CopyRoomHierarchiesCopyRoomHierarchies}
     * @memberof CopyRoomHierarchies
     */
    copyRoomHierarchies?: CopyRoomHierarchiesCopyRoomHierarchies;
    /**
     *
     * @type {Links}
     * @memberof CopyRoomHierarchies
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof CopyRoomHierarchies
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the CopyRoomHierarchies interface.
 */
export declare function instanceOfCopyRoomHierarchies(value: object): boolean;
export declare function CopyRoomHierarchiesFromJSON(json: any): CopyRoomHierarchies;
export declare function CopyRoomHierarchiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRoomHierarchies;
export declare function CopyRoomHierarchiesToJSON(value?: CopyRoomHierarchies | null): any;
