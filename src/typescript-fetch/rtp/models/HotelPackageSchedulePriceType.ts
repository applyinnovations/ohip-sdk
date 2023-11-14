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
import type { PackageChildBuckets } from './PackageChildBuckets';
import {
    PackageChildBucketsFromJSON,
    PackageChildBucketsFromJSONTyped,
    PackageChildBucketsToJSON,
} from './PackageChildBuckets';

/**
 * A Hotel Package Schedule Pricing.
 * @export
 * @interface HotelPackageSchedulePriceType
 */
export interface HotelPackageSchedulePriceType {
    /**
     * 
     * @type {PackageChildBuckets}
     * @memberof HotelPackageSchedulePriceType
     */
    bucket?: PackageChildBuckets;
    /**
     * The allowance per unit of the package.
     * @type {number}
     * @memberof HotelPackageSchedulePriceType
     */
    unitAllowance?: number;
    /**
     * Number of points per unit of the package
     * @type {number}
     * @memberof HotelPackageSchedulePriceType
     */
    unitPoints?: number;
    /**
     * The price per unit of the package.
     * @type {number}
     * @memberof HotelPackageSchedulePriceType
     */
    unitPrice?: number;
}

/**
 * Check if a given object implements the HotelPackageSchedulePriceType interface.
 */
export function instanceOfHotelPackageSchedulePriceType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelPackageSchedulePriceTypeFromJSON(json: any): HotelPackageSchedulePriceType {
    return HotelPackageSchedulePriceTypeFromJSONTyped(json, false);
}

export function HotelPackageSchedulePriceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelPackageSchedulePriceType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bucket': !exists(json, 'bucket') ? undefined : PackageChildBucketsFromJSON(json['bucket']),
        'unitAllowance': !exists(json, 'unitAllowance') ? undefined : json['unitAllowance'],
        'unitPoints': !exists(json, 'unitPoints') ? undefined : json['unitPoints'],
        'unitPrice': !exists(json, 'unitPrice') ? undefined : json['unitPrice'],
    };
}

export function HotelPackageSchedulePriceTypeToJSON(value?: HotelPackageSchedulePriceType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bucket': PackageChildBucketsToJSON(value.bucket),
        'unitAllowance': value.unitAllowance,
        'unitPoints': value.unitPoints,
        'unitPrice': value.unitPrice,
    };
}
