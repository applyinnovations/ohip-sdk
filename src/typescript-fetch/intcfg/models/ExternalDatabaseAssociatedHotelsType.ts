/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExternalDatabaseAssociatedHotelType } from './ExternalDatabaseAssociatedHotelType';
import {
    ExternalDatabaseAssociatedHotelTypeFromJSON,
    ExternalDatabaseAssociatedHotelTypeFromJSONTyped,
    ExternalDatabaseAssociatedHotelTypeToJSON,
} from './ExternalDatabaseAssociatedHotelType';

/**
 * Collection of Hotel for external database.
 * @export
 * @interface ExternalDatabaseAssociatedHotelsType
 */
export interface ExternalDatabaseAssociatedHotelsType extends Array<ExternalDatabaseAssociatedHotelType> {
}

/**
 * Check if a given object implements the ExternalDatabaseAssociatedHotelsType interface.
 */
export function instanceOfExternalDatabaseAssociatedHotelsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExternalDatabaseAssociatedHotelsTypeFromJSON(json: any): ExternalDatabaseAssociatedHotelsType {
    return ExternalDatabaseAssociatedHotelsTypeFromJSONTyped(json, false);
}

export function ExternalDatabaseAssociatedHotelsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalDatabaseAssociatedHotelsType {
    return json;
}

export function ExternalDatabaseAssociatedHotelsTypeToJSON(value?: ExternalDatabaseAssociatedHotelsType | null): any {
    return value;
}
