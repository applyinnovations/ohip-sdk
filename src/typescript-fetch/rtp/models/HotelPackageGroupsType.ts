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
import type { PackageGroupType } from './PackageGroupType';
import {
    PackageGroupTypeFromJSON,
    PackageGroupTypeFromJSONTyped,
    PackageGroupTypeToJSON,
} from './PackageGroupType';

/**
 * 
 * @export
 * @interface HotelPackageGroupsType
 */
export interface HotelPackageGroupsType {
    /**
     * Hotel code for the packages.
     * @type {string}
     * @memberof HotelPackageGroupsType
     */
    hotelId?: string;
    /**
     * Information about the each package group.
     * @type {Array<PackageGroupType>}
     * @memberof HotelPackageGroupsType
     */
    packageGroup?: Array<PackageGroupType>;
}

/**
 * Check if a given object implements the HotelPackageGroupsType interface.
 */
export function instanceOfHotelPackageGroupsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelPackageGroupsTypeFromJSON(json: any): HotelPackageGroupsType {
    return HotelPackageGroupsTypeFromJSONTyped(json, false);
}

export function HotelPackageGroupsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelPackageGroupsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'packageGroup': !exists(json, 'packageGroup') ? undefined : ((json['packageGroup'] as Array<any>).map(PackageGroupTypeFromJSON)),
    };
}

export function HotelPackageGroupsTypeToJSON(value?: HotelPackageGroupsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'packageGroup': value.packageGroup === undefined ? undefined : ((value.packageGroup as Array<any>).map(PackageGroupTypeToJSON)),
    };
}

