/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { RoomRotationUnitGradesType } from './RoomRotationUnitGradesType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutUnitGradesRequest
 */
export interface PutUnitGradesRequest {
    /**
     *
     * @type {Links}
     * @memberof PutUnitGradesRequest
     */
    links?: Links;
    /**
     *
     * @type {RoomRotationUnitGradesType}
     * @memberof PutUnitGradesRequest
     */
    unitGrades?: RoomRotationUnitGradesType;
    /**
     *
     * @type {WarningsType}
     * @memberof PutUnitGradesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutUnitGradesRequest interface.
 */
export declare function instanceOfPutUnitGradesRequest(value: object): boolean;
export declare function PutUnitGradesRequestFromJSON(json: any): PutUnitGradesRequest;
export declare function PutUnitGradesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutUnitGradesRequest;
export declare function PutUnitGradesRequestToJSON(value?: PutUnitGradesRequest | null): any;
