/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExportScheduleFrequencyType } from './ExportScheduleFrequencyType';
import {
    ExportScheduleFrequencyTypeFromJSON,
    ExportScheduleFrequencyTypeFromJSONTyped,
    ExportScheduleFrequencyTypeToJSON,
} from './ExportScheduleFrequencyType';
import type { ScheduleExportGroupType } from './ScheduleExportGroupType';
import {
    ScheduleExportGroupTypeFromJSON,
    ScheduleExportGroupTypeFromJSONTyped,
    ScheduleExportGroupTypeToJSON,
} from './ScheduleExportGroupType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Type that holds all the information related to export schedule
 * @export
 * @interface ExportScheduleType
 */
export interface ExportScheduleType {
    /**
     * User who created the export schedule
     * @type {string}
     * @memberof ExportScheduleType
     */
    createdBy?: string;
    /**
     * Export schedule is expected to end around this time. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z
     * @type {string}
     * @memberof ExportScheduleType
     */
    endDate?: string;
    /**
     * Export Description
     * @type {string}
     * @memberof ExportScheduleType
     */
    exportDescription?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ExportScheduleType
     */
    exportFileId?: UniqueIDType;
    /**
     * 
     * @type {ScheduleExportGroupType}
     * @memberof ExportScheduleType
     */
    exportGroup?: ScheduleExportGroupType;
    /**
     * Name of the export
     * @type {string}
     * @memberof ExportScheduleType
     */
    exportName?: string;
    /**
     * 
     * @type {ExportScheduleFrequencyType}
     * @memberof ExportScheduleType
     */
    frequency?: ExportScheduleFrequencyType;
    /**
     * Indicates whether schedule export is active or not
     * @type {boolean}
     * @memberof ExportScheduleType
     */
    inactive?: boolean;
    /**
     * Unique name that identifies export schedule
     * @type {string}
     * @memberof ExportScheduleType
     */
    jobName?: string;
    /**
     * Export is expected to run at time specified by this element. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z
     * @type {string}
     * @memberof ExportScheduleType
     */
    nextScheduledRun?: string;
    /**
     * Number of time export generated
     * @type {number}
     * @memberof ExportScheduleType
     */
    runcount?: number;
    /**
     * Export scheduled started at this time. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z
     * @type {string}
     * @memberof ExportScheduleType
     */
    startDate?: string;
    /**
     * Export schedule status
     * @type {string}
     * @memberof ExportScheduleType
     */
    status?: string;
}

/**
 * Check if a given object implements the ExportScheduleType interface.
 */
export function instanceOfExportScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportScheduleTypeFromJSON(json: any): ExportScheduleType {
    return ExportScheduleTypeFromJSONTyped(json, false);
}

export function ExportScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'exportDescription': !exists(json, 'exportDescription') ? undefined : json['exportDescription'],
        'exportFileId': !exists(json, 'exportFileId') ? undefined : UniqueIDTypeFromJSON(json['exportFileId']),
        'exportGroup': !exists(json, 'exportGroup') ? undefined : ScheduleExportGroupTypeFromJSON(json['exportGroup']),
        'exportName': !exists(json, 'exportName') ? undefined : json['exportName'],
        'frequency': !exists(json, 'frequency') ? undefined : ExportScheduleFrequencyTypeFromJSON(json['frequency']),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'jobName': !exists(json, 'jobName') ? undefined : json['jobName'],
        'nextScheduledRun': !exists(json, 'nextScheduledRun') ? undefined : json['nextScheduledRun'],
        'runcount': !exists(json, 'runcount') ? undefined : json['runcount'],
        'startDate': !exists(json, 'startDate') ? undefined : json['startDate'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ExportScheduleTypeToJSON(value?: ExportScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdBy': value.createdBy,
        'endDate': value.endDate,
        'exportDescription': value.exportDescription,
        'exportFileId': UniqueIDTypeToJSON(value.exportFileId),
        'exportGroup': ScheduleExportGroupTypeToJSON(value.exportGroup),
        'exportName': value.exportName,
        'frequency': ExportScheduleFrequencyTypeToJSON(value.frequency),
        'inactive': value.inactive,
        'jobName': value.jobName,
        'nextScheduledRun': value.nextScheduledRun,
        'runcount': value.runcount,
        'startDate': value.startDate,
        'status': value.status,
    };
}
