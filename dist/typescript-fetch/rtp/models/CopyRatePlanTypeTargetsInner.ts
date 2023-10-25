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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * 
 * @export
 * @interface CopyRatePlanTypeTargetsInner
 */
export interface CopyRatePlanTypeTargetsInner {
    /**
     * Hotel code to which rate code will be copied.
     * @type {string}
     * @memberof CopyRatePlanTypeTargetsInner
     */
    hotelId?: string;
    /**
     * The code and description to be used for the rate plan being copied.
     * @type {Array<CodeDescriptionType>}
     * @memberof CopyRatePlanTypeTargetsInner
     */
    ratePlanCodes?: Array<CodeDescriptionType>;
}

/**
 * Check if a given object implements the CopyRatePlanTypeTargetsInner interface.
 */
export function instanceOfCopyRatePlanTypeTargetsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyRatePlanTypeTargetsInnerFromJSON(json: any): CopyRatePlanTypeTargetsInner {
    return CopyRatePlanTypeTargetsInnerFromJSONTyped(json, false);
}

export function CopyRatePlanTypeTargetsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRatePlanTypeTargetsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ratePlanCodes': !exists(json, 'ratePlanCodes') ? undefined : ((json['ratePlanCodes'] as Array<any>).map(CodeDescriptionTypeFromJSON)),
    };
}

export function CopyRatePlanTypeTargetsInnerToJSON(value?: CopyRatePlanTypeTargetsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'ratePlanCodes': value.ratePlanCodes === undefined ? undefined : ((value.ratePlanCodes as Array<any>).map(CodeDescriptionTypeToJSON)),
    };
}

