/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { RevenueBucketCodeType } from './RevenueBucketCodeType';
import {
    RevenueBucketCodeTypeFromJSON,
    RevenueBucketCodeTypeFromJSONTyped,
    RevenueBucketCodeTypeToJSON,
} from './RevenueBucketCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface RevenueBucketCodes
 */
export interface RevenueBucketCodes {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RevenueBucketCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Details for Revenue Bucket codes along with associated transaction codes.
     * @type {Array<RevenueBucketCodeType>}
     * @memberof RevenueBucketCodes
     */
    revenueBucketCodes?: Array<RevenueBucketCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RevenueBucketCodes
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RevenueBucketCodes interface.
 */
export function instanceOfRevenueBucketCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueBucketCodesFromJSON(json: any): RevenueBucketCodes {
    return RevenueBucketCodesFromJSONTyped(json, false);
}

export function RevenueBucketCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueBucketCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'revenueBucketCodes': !exists(json, 'revenueBucketCodes') ? undefined : ((json['revenueBucketCodes'] as Array<any>).map(RevenueBucketCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RevenueBucketCodesToJSON(value?: RevenueBucketCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'revenueBucketCodes': value.revenueBucketCodes === undefined ? undefined : ((value.revenueBucketCodes as Array<any>).map(RevenueBucketCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

