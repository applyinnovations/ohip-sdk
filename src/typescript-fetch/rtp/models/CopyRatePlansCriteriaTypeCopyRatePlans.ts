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
import type { CopyRatePlanType } from './CopyRatePlanType';
import {
    CopyRatePlanTypeFromJSON,
    CopyRatePlanTypeFromJSONTyped,
    CopyRatePlanTypeToJSON,
} from './CopyRatePlanType';

/**
 * The details of Rate plans to be copied.
 * @export
 * @interface CopyRatePlansCriteriaTypeCopyRatePlans
 */
export interface CopyRatePlansCriteriaTypeCopyRatePlans {
    /**
     * The details of Rate plans to be copied.
     * @type {Array<CopyRatePlanType>}
     * @memberof CopyRatePlansCriteriaTypeCopyRatePlans
     */
    copyRatePlan?: Array<CopyRatePlanType>;
    /**
     * Hotel Code from which rate plans are being copied.
     * @type {string}
     * @memberof CopyRatePlansCriteriaTypeCopyRatePlans
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the CopyRatePlansCriteriaTypeCopyRatePlans interface.
 */
export function instanceOfCopyRatePlansCriteriaTypeCopyRatePlans(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyRatePlansCriteriaTypeCopyRatePlansFromJSON(json: any): CopyRatePlansCriteriaTypeCopyRatePlans {
    return CopyRatePlansCriteriaTypeCopyRatePlansFromJSONTyped(json, false);
}

export function CopyRatePlansCriteriaTypeCopyRatePlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRatePlansCriteriaTypeCopyRatePlans {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyRatePlan': !exists(json, 'copyRatePlan') ? undefined : ((json['copyRatePlan'] as Array<any>).map(CopyRatePlanTypeFromJSON)),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function CopyRatePlansCriteriaTypeCopyRatePlansToJSON(value?: CopyRatePlansCriteriaTypeCopyRatePlans | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyRatePlan': value.copyRatePlan === undefined ? undefined : ((value.copyRatePlan as Array<any>).map(CopyRatePlanTypeToJSON)),
        'hotelId': value.hotelId,
    };
}
