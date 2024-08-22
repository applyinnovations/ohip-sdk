/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DiscountReasonType } from './DiscountReasonType';
import {
    DiscountReasonTypeFromJSON,
    DiscountReasonTypeFromJSONTyped,
    DiscountReasonTypeToJSON,
} from './DiscountReasonType';
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
 * Request object for creating Discount Reasons.
 * @export
 * @interface DiscountReasonsCriteria
 */
export interface DiscountReasonsCriteria {
    /**
     * List of Discount Reasons.
     * @type {Array<DiscountReasonType>}
     * @memberof DiscountReasonsCriteria
     */
    discountReasons?: Array<DiscountReasonType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DiscountReasonsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DiscountReasonsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DiscountReasonsCriteria interface.
 */
export function instanceOfDiscountReasonsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiscountReasonsCriteriaFromJSON(json: any): DiscountReasonsCriteria {
    return DiscountReasonsCriteriaFromJSONTyped(json, false);
}

export function DiscountReasonsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountReasonsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountReasons': !exists(json, 'discountReasons') ? undefined : ((json['discountReasons'] as Array<any>).map(DiscountReasonTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DiscountReasonsCriteriaToJSON(value?: DiscountReasonsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discountReasons': value.discountReasons === undefined ? undefined : ((value.discountReasons as Array<any>).map(DiscountReasonTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

