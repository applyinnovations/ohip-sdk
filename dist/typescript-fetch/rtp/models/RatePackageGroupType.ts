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
import type { RatePackageCodeType } from './RatePackageCodeType';
import {
    RatePackageCodeTypeFromJSON,
    RatePackageCodeTypeFromJSONTyped,
    RatePackageCodeTypeToJSON,
} from './RatePackageCodeType';

/**
 * Information about a package group common to all usages.
 * @export
 * @interface RatePackageGroupType
 */
export interface RatePackageGroupType {
    /**
     * Package group Code.
     * @type {string}
     * @memberof RatePackageGroupType
     */
    code?: string;
    /**
     * Package group description.
     * @type {string}
     * @memberof RatePackageGroupType
     */
    description?: string;
    /**
     * Rate Package Full Information
     * @type {Array<RatePackageCodeType>}
     * @memberof RatePackageGroupType
     */
    packages?: Array<RatePackageCodeType>;
    /**
     * Can Package group be sold separately?
     * @type {boolean}
     * @memberof RatePackageGroupType
     */
    sellSeparate?: boolean;
    /**
     * The short description of the package group.
     * @type {string}
     * @memberof RatePackageGroupType
     */
    shortDescription?: string;
    /**
     * Is Package group web bookable?
     * @type {boolean}
     * @memberof RatePackageGroupType
     */
    webBookable?: boolean;
}

/**
 * Check if a given object implements the RatePackageGroupType interface.
 */
export function instanceOfRatePackageGroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RatePackageGroupTypeFromJSON(json: any): RatePackageGroupType {
    return RatePackageGroupTypeFromJSONTyped(json, false);
}

export function RatePackageGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePackageGroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'packages': !exists(json, 'packages') ? undefined : ((json['packages'] as Array<any>).map(RatePackageCodeTypeFromJSON)),
        'sellSeparate': !exists(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
    };
}

export function RatePackageGroupTypeToJSON(value?: RatePackageGroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'packages': value.packages === undefined ? undefined : ((value.packages as Array<any>).map(RatePackageCodeTypeToJSON)),
        'sellSeparate': value.sellSeparate,
        'shortDescription': value.shortDescription,
        'webBookable': value.webBookable,
    };
}

