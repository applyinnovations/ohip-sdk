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
import type { AutoGenerateTaskSheetsCriteriaType } from './AutoGenerateTaskSheetsCriteriaType';
import {
    AutoGenerateTaskSheetsCriteriaTypeFromJSON,
    AutoGenerateTaskSheetsCriteriaTypeFromJSONTyped,
    AutoGenerateTaskSheetsCriteriaTypeToJSON,
} from './AutoGenerateTaskSheetsCriteriaType';
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
 * @interface PutTaskSheetTemplateRequest
 */
export interface PutTaskSheetTemplateRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutTaskSheetTemplateRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {AutoGenerateTaskSheetsCriteriaType}
     * @memberof PutTaskSheetTemplateRequest
     */
    taskSheetTemplateDetails?: AutoGenerateTaskSheetsCriteriaType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutTaskSheetTemplateRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutTaskSheetTemplateRequest interface.
 */
export function instanceOfPutTaskSheetTemplateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutTaskSheetTemplateRequestFromJSON(json: any): PutTaskSheetTemplateRequest {
    return PutTaskSheetTemplateRequestFromJSONTyped(json, false);
}

export function PutTaskSheetTemplateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutTaskSheetTemplateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'taskSheetTemplateDetails': !exists(json, 'taskSheetTemplateDetails') ? undefined : AutoGenerateTaskSheetsCriteriaTypeFromJSON(json['taskSheetTemplateDetails']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutTaskSheetTemplateRequestToJSON(value?: PutTaskSheetTemplateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'taskSheetTemplateDetails': AutoGenerateTaskSheetsCriteriaTypeToJSON(value.taskSheetTemplateDetails),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

