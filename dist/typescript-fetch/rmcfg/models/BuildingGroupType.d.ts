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
/**
 * Building or Building Group details associated with the Hotel.
 * @export
 * @interface BuildingGroupType
 */
export interface BuildingGroupType {
    /**
     * Building Group or Building Code Identifier of the Hotel.
     * @type {string}
     * @memberof BuildingGroupType
     */
    code?: string;
    /**
     * Total Credits for all the rooms that belong to this building group.
     * @type {number}
     * @memberof BuildingGroupType
     */
    credits?: number;
    /**
     * The description of the Building or Building Group.
     * @type {string}
     * @memberof BuildingGroupType
     */
    description?: string;
    /**
     * Hotel Identifier of the Building or Building Group.
     * @type {string}
     * @memberof BuildingGroupType
     */
    hotelId?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof BuildingGroupType
     */
    rooms?: Array<string>;
    /**
     * Building Sequence when task assignment is automatically generated by building.
     * @type {number}
     * @memberof BuildingGroupType
     */
    sequence?: number;
    /**
     * Target Credit for each task sheet created for this building when auto task assignment is broken out by building.
     * @type {number}
     * @memberof BuildingGroupType
     */
    targetCredits?: number;
}
/**
 * Check if a given object implements the BuildingGroupType interface.
 */
export declare function instanceOfBuildingGroupType(value: object): boolean;
export declare function BuildingGroupTypeFromJSON(json: any): BuildingGroupType;
export declare function BuildingGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildingGroupType;
export declare function BuildingGroupTypeToJSON(value?: BuildingGroupType | null): any;