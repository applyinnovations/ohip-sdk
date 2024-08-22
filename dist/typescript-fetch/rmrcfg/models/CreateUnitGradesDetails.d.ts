/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { RoomRotationUnitGradeType } from './RoomRotationUnitGradeType';
import type { WarningType } from './WarningType';
/**
 * Request object for creating a new Room Rotation Owner Room Grade Code.
 * @export
 * @interface CreateUnitGradesDetails
 */
export interface CreateUnitGradesDetails {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof CreateUnitGradesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Room Rotation Owner Room Grade Enumeration element.
     * @type {Array<RoomRotationUnitGradeType>}
     * @memberof CreateUnitGradesDetails
     */
    unitGrades?: Array<RoomRotationUnitGradeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CreateUnitGradesDetails
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the CreateUnitGradesDetails interface.
 */
export declare function instanceOfCreateUnitGradesDetails(value: object): boolean;
export declare function CreateUnitGradesDetailsFromJSON(json: any): CreateUnitGradesDetails;
export declare function CreateUnitGradesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateUnitGradesDetails;
export declare function CreateUnitGradesDetailsToJSON(value?: CreateUnitGradesDetails | null): any;
