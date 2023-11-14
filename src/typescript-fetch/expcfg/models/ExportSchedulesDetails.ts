/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExportSchedulesType } from './ExportSchedulesType';
import {
    ExportSchedulesTypeFromJSON,
    ExportSchedulesTypeFromJSONTyped,
    ExportSchedulesTypeToJSON,
} from './ExportSchedulesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Export Schedules collection matching the crieteria specified in the request
 * @export
 * @interface ExportSchedulesDetails
 */
export interface ExportSchedulesDetails {
    /**
     * 
     * @type {ExportSchedulesType}
     * @memberof ExportSchedulesDetails
     */
    exportSchedules?: ExportSchedulesType;
    /**
     * 
     * @type {Links}
     * @memberof ExportSchedulesDetails
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ExportSchedulesDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ExportSchedulesDetails interface.
 */
export function instanceOfExportSchedulesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportSchedulesDetailsFromJSON(json: any): ExportSchedulesDetails {
    return ExportSchedulesDetailsFromJSONTyped(json, false);
}

export function ExportSchedulesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportSchedulesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportSchedules': !exists(json, 'exportSchedules') ? undefined : ExportSchedulesTypeFromJSON(json['exportSchedules']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ExportSchedulesDetailsToJSON(value?: ExportSchedulesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportSchedules': ExportSchedulesTypeToJSON(value.exportSchedules),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
