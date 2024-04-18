/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityStatReportType } from './ActivityStatReportType';
import {
    ActivityStatReportTypeFromJSON,
    ActivityStatReportTypeFromJSONTyped,
    ActivityStatReportTypeToJSON,
} from './ActivityStatReportType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface ActivityStatistics
 */
export interface ActivityStatistics {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ActivityStatistics
     */
    links?: Array<InstanceLink>;
    /**
     * Statistical report - each report is determined by the requested report in the service request criteria.
     * @type {Array<ActivityStatReportType>}
     * @memberof ActivityStatistics
     */
    reports?: Array<ActivityStatReportType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ActivityStatistics
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ActivityStatistics interface.
 */
export function instanceOfActivityStatistics(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivityStatisticsFromJSON(json: any): ActivityStatistics {
    return ActivityStatisticsFromJSONTyped(json, false);
}

export function ActivityStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reports': !exists(json, 'reports') ? undefined : ((json['reports'] as Array<any>).map(ActivityStatReportTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ActivityStatisticsToJSON(value?: ActivityStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reports': value.reports === undefined ? undefined : ((value.reports as Array<any>).map(ActivityStatReportTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
