/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RoomRotationUnitGradeType } from './RoomRotationUnitGradeType';
import {
    RoomRotationUnitGradeTypeFromJSON,
    RoomRotationUnitGradeTypeFromJSONTyped,
    RoomRotationUnitGradeTypeToJSON,
} from './RoomRotationUnitGradeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Room Rotation Owner Room Grade Codes.
 * @export
 * @interface FetchUnitGradesDetails
 */
export interface FetchUnitGradesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FetchUnitGradesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Room Rotation Owner Room Grade Enumeration element.
     * @type {Array<RoomRotationUnitGradeType>}
     * @memberof FetchUnitGradesDetails
     */
    unitGrades?: Array<RoomRotationUnitGradeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FetchUnitGradesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FetchUnitGradesDetails interface.
 */
export function instanceOfFetchUnitGradesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FetchUnitGradesDetailsFromJSON(json: any): FetchUnitGradesDetails {
    return FetchUnitGradesDetailsFromJSONTyped(json, false);
}

export function FetchUnitGradesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FetchUnitGradesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'unitGrades': !exists(json, 'unitGrades') ? undefined : ((json['unitGrades'] as Array<any>).map(RoomRotationUnitGradeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FetchUnitGradesDetailsToJSON(value?: FetchUnitGradesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'unitGrades': value.unitGrades === undefined ? undefined : ((value.unitGrades as Array<any>).map(RoomRotationUnitGradeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

