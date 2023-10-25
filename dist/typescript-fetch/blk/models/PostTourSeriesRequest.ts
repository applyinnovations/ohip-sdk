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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ResponseInstructionType } from './ResponseInstructionType';
import {
    ResponseInstructionTypeFromJSON,
    ResponseInstructionTypeFromJSONTyped,
    ResponseInstructionTypeToJSON,
} from './ResponseInstructionType';
import type { TourSeriesType } from './TourSeriesType';
import {
    TourSeriesTypeFromJSON,
    TourSeriesTypeFromJSONTyped,
    TourSeriesTypeToJSON,
} from './TourSeriesType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostTourSeriesRequest
 */
export interface PostTourSeriesRequest {
    /**
     * 
     * @type {TourSeriesType}
     * @memberof PostTourSeriesRequest
     */
    criteria?: TourSeriesType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostTourSeriesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ResponseInstructionType}
     * @memberof PostTourSeriesRequest
     */
    responseInstruction?: ResponseInstructionType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostTourSeriesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostTourSeriesRequest interface.
 */
export function instanceOfPostTourSeriesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostTourSeriesRequestFromJSON(json: any): PostTourSeriesRequest {
    return PostTourSeriesRequestFromJSONTyped(json, false);
}

export function PostTourSeriesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTourSeriesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : TourSeriesTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'responseInstruction': !exists(json, 'responseInstruction') ? undefined : ResponseInstructionTypeFromJSON(json['responseInstruction']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostTourSeriesRequestToJSON(value?: PostTourSeriesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': TourSeriesTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'responseInstruction': ResponseInstructionTypeToJSON(value.responseInstruction),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

