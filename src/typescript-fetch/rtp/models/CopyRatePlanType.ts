/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyRatePlanTypeTargetsInner } from './CopyRatePlanTypeTargetsInner';
import {
    CopyRatePlanTypeTargetsInnerFromJSON,
    CopyRatePlanTypeTargetsInnerFromJSONTyped,
    CopyRatePlanTypeTargetsInnerToJSON,
} from './CopyRatePlanTypeTargetsInner';

/**
 * The type describes Rate plan Details being copied.
 * @export
 * @interface CopyRatePlanType
 */
export interface CopyRatePlanType {
    /**
     * Rate plan code being copied.
     * @type {string}
     * @memberof CopyRatePlanType
     */
    ratePlanCode?: string;
    /**
     * The details of Rate plan targets, where it is being copied and with what name.
     * @type {Array<CopyRatePlanTypeTargetsInner>}
     * @memberof CopyRatePlanType
     */
    targets?: Array<CopyRatePlanTypeTargetsInner>;
}

/**
 * Check if a given object implements the CopyRatePlanType interface.
 */
export function instanceOfCopyRatePlanType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyRatePlanTypeFromJSON(json: any): CopyRatePlanType {
    return CopyRatePlanTypeFromJSONTyped(json, false);
}

export function CopyRatePlanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRatePlanType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'targets': !exists(json, 'targets') ? undefined : ((json['targets'] as Array<any>).map(CopyRatePlanTypeTargetsInnerFromJSON)),
    };
}

export function CopyRatePlanTypeToJSON(value?: CopyRatePlanType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ratePlanCode': value.ratePlanCode,
        'targets': value.targets === undefined ? undefined : ((value.targets as Array<any>).map(CopyRatePlanTypeTargetsInnerToJSON)),
    };
}

