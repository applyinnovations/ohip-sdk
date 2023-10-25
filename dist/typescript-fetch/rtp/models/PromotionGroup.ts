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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PromotionGroupType } from './PromotionGroupType';
import {
    PromotionGroupTypeFromJSON,
    PromotionGroupTypeFromJSONTyped,
    PromotionGroupTypeToJSON,
} from './PromotionGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PromotionGroup
 */
export interface PromotionGroup {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PromotionGroup
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {PromotionGroupType}
     * @memberof PromotionGroup
     */
    promotionGroup?: PromotionGroupType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PromotionGroup
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PromotionGroup interface.
 */
export function instanceOfPromotionGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PromotionGroupFromJSON(json: any): PromotionGroup {
    return PromotionGroupFromJSONTyped(json, false);
}

export function PromotionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): PromotionGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'promotionGroup': !exists(json, 'promotionGroup') ? undefined : PromotionGroupTypeFromJSON(json['promotionGroup']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PromotionGroupToJSON(value?: PromotionGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'promotionGroup': PromotionGroupTypeToJSON(value.promotionGroup),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

