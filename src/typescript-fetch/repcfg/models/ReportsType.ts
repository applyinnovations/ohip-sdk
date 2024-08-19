/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ReportType } from './ReportType';
import {
    ReportTypeFromJSON,
    ReportTypeFromJSONTyped,
    ReportTypeToJSON,
} from './ReportType';

/**
 * Contains a collection of reports matching the requested criteria.
 * @export
 * @interface ReportsType
 */
export interface ReportsType {
    /**
     * List of reports matching search criteria.
     * @type {Array<ReportType>}
     * @memberof ReportsType
     */
    reports?: Array<ReportType>;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ReportsType
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ReportsType
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ReportsType
     */
    count?: number;
}

/**
 * Check if a given object implements the ReportsType interface.
 */
export function instanceOfReportsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportsTypeFromJSON(json: any): ReportsType {
    return ReportsTypeFromJSONTyped(json, false);
}

export function ReportsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reports': !exists(json, 'reports') ? undefined : ((json['reports'] as Array<any>).map(ReportTypeFromJSON)),
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function ReportsTypeToJSON(value?: ReportsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reports': value.reports === undefined ? undefined : ((value.reports as Array<any>).map(ReportTypeToJSON)),
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
    };
}

