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
import type { GeneratedExportType } from './GeneratedExportType';
import {
    GeneratedExportTypeFromJSON,
    GeneratedExportTypeFromJSONTyped,
    GeneratedExportTypeToJSON,
} from './GeneratedExportType';

/**
 * Contains a collection of available export instance records.
 * @export
 * @interface GeneratedExportListType
 */
export interface GeneratedExportListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof GeneratedExportListType
     */
    count?: number;
    /**
     * The list of export instance records.
     * @type {Array<GeneratedExportType>}
     * @memberof GeneratedExportListType
     */
    exportDataHeader?: Array<GeneratedExportType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof GeneratedExportListType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof GeneratedExportListType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the GeneratedExportListType interface.
 */
export function instanceOfGeneratedExportListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GeneratedExportListTypeFromJSON(json: any): GeneratedExportListType {
    return GeneratedExportListTypeFromJSONTyped(json, false);
}

export function GeneratedExportListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratedExportListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'exportDataHeader': !exists(json, 'exportDataHeader') ? undefined : ((json['exportDataHeader'] as Array<any>).map(GeneratedExportTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function GeneratedExportListTypeToJSON(value?: GeneratedExportListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'exportDataHeader': value.exportDataHeader === undefined ? undefined : ((value.exportDataHeader as Array<any>).map(GeneratedExportTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
    };
}

