/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information about the packages of the hotel.
 * @export
 * @interface HotelPackageType
 */
export interface HotelPackageType {
    /**
     * The begin date of the package.
     * @type {string}
     * @memberof HotelPackageType
     */
    beginDate?: string;
    /**
     * The end date of the package.
     * @type {string}
     * @memberof HotelPackageType
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof HotelPackageType
     */
    packageCode?: string;
    /**
     * The name of the package.
     * @type {string}
     * @memberof HotelPackageType
     */
    packageName?: string;
    /**
     * The price of the package.
     * @type {number}
     * @memberof HotelPackageType
     */
    packagePrice?: number;
    /**
     * Indicates the required membership points for the package.
     * @type {number}
     * @memberof HotelPackageType
     */
    pointsRequired?: number;
    /**
     * Indicates the rate code for the package.
     * @type {string}
     * @memberof HotelPackageType
     */
    rateCode?: string;
}

/**
 * Check if a given object implements the HotelPackageType interface.
 */
export function instanceOfHotelPackageType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelPackageTypeFromJSON(json: any): HotelPackageType {
    return HotelPackageTypeFromJSONTyped(json, false);
}

export function HotelPackageTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelPackageType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'beginDate': !exists(json, 'beginDate') ? undefined : json['beginDate'],
        'endDate': !exists(json, 'endDate') ? undefined : json['endDate'],
        'packageCode': !exists(json, 'packageCode') ? undefined : json['packageCode'],
        'packageName': !exists(json, 'packageName') ? undefined : json['packageName'],
        'packagePrice': !exists(json, 'packagePrice') ? undefined : json['packagePrice'],
        'pointsRequired': !exists(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
    };
}

export function HotelPackageTypeToJSON(value?: HotelPackageType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'beginDate': value.beginDate,
        'endDate': value.endDate,
        'packageCode': value.packageCode,
        'packageName': value.packageName,
        'packagePrice': value.packagePrice,
        'pointsRequired': value.pointsRequired,
        'rateCode': value.rateCode,
    };
}

