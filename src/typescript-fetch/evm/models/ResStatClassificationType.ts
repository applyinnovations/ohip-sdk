/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Statistical Classification information for the reservation.
 * @export
 * @interface ResStatClassificationType
 */
export interface ResStatClassificationType {
    /**
     * Rate Tier used calculate statistics for export(DRS).
     * @type {number}
     * @memberof ResStatClassificationType
     */
    rateTier?: number;
    /**
     * Room Type used to calculate statistics for export(DRS).
     * @type {string}
     * @memberof ResStatClassificationType
     */
    roomType?: string;
}

/**
 * Check if a given object implements the ResStatClassificationType interface.
 */
export function instanceOfResStatClassificationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResStatClassificationTypeFromJSON(json: any): ResStatClassificationType {
    return ResStatClassificationTypeFromJSONTyped(json, false);
}

export function ResStatClassificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResStatClassificationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rateTier': !exists(json, 'rateTier') ? undefined : json['rateTier'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
    };
}

export function ResStatClassificationTypeToJSON(value?: ResStatClassificationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rateTier': value.rateTier,
        'roomType': value.roomType,
    };
}
