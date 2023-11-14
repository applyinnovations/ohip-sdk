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
import type { ExportSchedulesConfigType } from './ExportSchedulesConfigType';
import {
    ExportSchedulesConfigTypeFromJSON,
    ExportSchedulesConfigTypeFromJSONTyped,
    ExportSchedulesConfigTypeToJSON,
} from './ExportSchedulesConfigType';
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
 * Request to create export schedules
 * @export
 * @interface ExportSchedulesCriteria
 */
export interface ExportSchedulesCriteria {
    /**
     * 
     * @type {ExportSchedulesConfigType}
     * @memberof ExportSchedulesCriteria
     */
    exportScheduleConfig?: ExportSchedulesConfigType;
    /**
     * 
     * @type {Links}
     * @memberof ExportSchedulesCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ExportSchedulesCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ExportSchedulesCriteria interface.
 */
export function instanceOfExportSchedulesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportSchedulesCriteriaFromJSON(json: any): ExportSchedulesCriteria {
    return ExportSchedulesCriteriaFromJSONTyped(json, false);
}

export function ExportSchedulesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportSchedulesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exportScheduleConfig': !exists(json, 'exportScheduleConfig') ? undefined : ExportSchedulesConfigTypeFromJSON(json['exportScheduleConfig']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ExportSchedulesCriteriaToJSON(value?: ExportSchedulesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exportScheduleConfig': ExportSchedulesConfigTypeToJSON(value.exportScheduleConfig),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
