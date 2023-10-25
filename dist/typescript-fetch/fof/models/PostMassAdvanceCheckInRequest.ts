/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { MassAdvanceCheckInCriteriaType } from './MassAdvanceCheckInCriteriaType';
import {
    MassAdvanceCheckInCriteriaTypeFromJSON,
    MassAdvanceCheckInCriteriaTypeFromJSONTyped,
    MassAdvanceCheckInCriteriaTypeToJSON,
} from './MassAdvanceCheckInCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostMassAdvanceCheckInRequest
 */
export interface PostMassAdvanceCheckInRequest {
    /**
     * 
     * @type {MassAdvanceCheckInCriteriaType}
     * @memberof PostMassAdvanceCheckInRequest
     */
    criteria?: MassAdvanceCheckInCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostMassAdvanceCheckInRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostMassAdvanceCheckInRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostMassAdvanceCheckInRequest interface.
 */
export function instanceOfPostMassAdvanceCheckInRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostMassAdvanceCheckInRequestFromJSON(json: any): PostMassAdvanceCheckInRequest {
    return PostMassAdvanceCheckInRequestFromJSONTyped(json, false);
}

export function PostMassAdvanceCheckInRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostMassAdvanceCheckInRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : MassAdvanceCheckInCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostMassAdvanceCheckInRequestToJSON(value?: PostMassAdvanceCheckInRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': MassAdvanceCheckInCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

