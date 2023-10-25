/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockStatReportType } from './BlockStatReportType';
import {
    BlockStatReportTypeFromJSON,
    BlockStatReportTypeFromJSONTyped,
    BlockStatReportTypeToJSON,
} from './BlockStatReportType';
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
 * Response element for block statistics.
 * @export
 * @interface BlockStats
 */
export interface BlockStats {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BlockStats
     */
    links?: Array<InstanceLink>;
    /**
     * Statistical report - each report is determined by the requested report in the service request criteria.
     * @type {Array<BlockStatReportType>}
     * @memberof BlockStats
     */
    reports?: Array<BlockStatReportType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockStats
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BlockStats interface.
 */
export function instanceOfBlockStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockStatsFromJSON(json: any): BlockStats {
    return BlockStatsFromJSONTyped(json, false);
}

export function BlockStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reports': !exists(json, 'reports') ? undefined : ((json['reports'] as Array<any>).map(BlockStatReportTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BlockStatsToJSON(value?: BlockStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reports': value.reports === undefined ? undefined : ((value.reports as Array<any>).map(BlockStatReportTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

