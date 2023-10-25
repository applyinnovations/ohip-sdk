/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MergeTaskSheetCriteriaType } from './MergeTaskSheetCriteriaType';
import {
    MergeTaskSheetCriteriaTypeFromJSON,
    MergeTaskSheetCriteriaTypeFromJSONTyped,
    MergeTaskSheetCriteriaTypeToJSON,
} from './MergeTaskSheetCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request for merging task sheets.
 * @export
 * @interface TaskSheetToMerge
 */
export interface TaskSheetToMerge {
    /**
     * 
     * @type {MergeTaskSheetCriteriaType}
     * @memberof TaskSheetToMerge
     */
    criteria?: MergeTaskSheetCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TaskSheetToMerge
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TaskSheetToMerge
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TaskSheetToMerge interface.
 */
export function instanceOfTaskSheetToMerge(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskSheetToMergeFromJSON(json: any): TaskSheetToMerge {
    return TaskSheetToMergeFromJSONTyped(json, false);
}

export function TaskSheetToMergeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskSheetToMerge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : MergeTaskSheetCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TaskSheetToMergeToJSON(value?: TaskSheetToMerge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': MergeTaskSheetCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

