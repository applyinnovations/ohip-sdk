/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * Base details common between both template and hotel level floors.
 * @export
 * @interface TemplateFloorType
 */
export interface TemplateFloorType {
    /**
     * Description for the floor.
     * @type {string}
     * @memberof TemplateFloorType
     */
    description?: string;
    /**
     * Specifies the floor code.
     * @type {string}
     * @memberof TemplateFloorType
     */
    floor?: string;
    /**
     * Specifies whether the floor is to be available for selection at all hotels.
     * @type {boolean}
     * @memberof TemplateFloorType
     */
    global?: boolean;
    /**
     * Flag to indicate if this floor should be available on the Task Sheet Workflow configuration.
     * @type {boolean}
     * @memberof TemplateFloorType
     */
    housekeeping?: boolean;
    /**
     * Display sequence for the floor.
     * @type {number}
     * @memberof TemplateFloorType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the TemplateFloorType interface.
 */
export function instanceOfTemplateFloorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateFloorTypeFromJSON(json: any): TemplateFloorType {
    return TemplateFloorTypeFromJSONTyped(json, false);
}

export function TemplateFloorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateFloorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'global': !exists(json, 'global') ? undefined : json['global'],
        'housekeeping': !exists(json, 'housekeeping') ? undefined : json['housekeeping'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function TemplateFloorTypeToJSON(value?: TemplateFloorType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'floor': value.floor,
        'global': value.global,
        'housekeeping': value.housekeeping,
        'sequence': value.sequence,
    };
}
