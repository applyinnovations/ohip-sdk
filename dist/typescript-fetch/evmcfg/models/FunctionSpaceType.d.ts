/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FunctionSpaceRoomType } from './FunctionSpaceRoomType';
/**
 * This type holds collection of function space room with complete information.
 * @export
 * @interface FunctionSpaceType
 */
export interface FunctionSpaceType {
    /**
     * Hotel Code of the room.
     * @type {string}
     * @memberof FunctionSpaceType
     */
    hotelId?: string;
    /**
     *
     * @type {Array<FunctionSpaceRoomType>}
     * @memberof FunctionSpaceType
     */
    room?: Array<FunctionSpaceRoomType>;
}
/**
 * Check if a given object implements the FunctionSpaceType interface.
 */
export declare function instanceOfFunctionSpaceType(value: object): boolean;
export declare function FunctionSpaceTypeFromJSON(json: any): FunctionSpaceType;
export declare function FunctionSpaceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceType;
export declare function FunctionSpaceTypeToJSON(value?: FunctionSpaceType | null): any;
