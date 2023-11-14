/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityLocationType } from './ActivityLocationType';
import {
    ActivityLocationTypeFromJSON,
    ActivityLocationTypeFromJSONTyped,
    ActivityLocationTypeToJSON,
} from './ActivityLocationType';

/**
 * Collection of Activity Locations.
 * @export
 * @interface ActivityLocationsType
 */
export interface ActivityLocationsType extends Array<ActivityLocationType> {
}

/**
 * Check if a given object implements the ActivityLocationsType interface.
 */
export function instanceOfActivityLocationsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityLocationsTypeFromJSON(json: any): ActivityLocationsType {
    return ActivityLocationsTypeFromJSONTyped(json, false);
}

export function ActivityLocationsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLocationsType {
    return json;
}

export function ActivityLocationsTypeToJSON(value?: ActivityLocationsType | null): any {
    return value;
}
