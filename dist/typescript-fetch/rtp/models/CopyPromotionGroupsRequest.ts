/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyPromotionGroupsCriteriaType } from './CopyPromotionGroupsCriteriaType';
import {
    CopyPromotionGroupsCriteriaTypeFromJSON,
    CopyPromotionGroupsCriteriaTypeFromJSONTyped,
    CopyPromotionGroupsCriteriaTypeToJSON,
} from './CopyPromotionGroupsCriteriaType';
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
 * @interface CopyPromotionGroupsRequest
 */
export interface CopyPromotionGroupsRequest {
    /**
     * 
     * @type {CopyPromotionGroupsCriteriaType}
     * @memberof CopyPromotionGroupsRequest
     */
    criteria?: CopyPromotionGroupsCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CopyPromotionGroupsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CopyPromotionGroupsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CopyPromotionGroupsRequest interface.
 */
export function instanceOfCopyPromotionGroupsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyPromotionGroupsRequestFromJSON(json: any): CopyPromotionGroupsRequest {
    return CopyPromotionGroupsRequestFromJSONTyped(json, false);
}

export function CopyPromotionGroupsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyPromotionGroupsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : CopyPromotionGroupsCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CopyPromotionGroupsRequestToJSON(value?: CopyPromotionGroupsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': CopyPromotionGroupsCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

