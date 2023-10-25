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
import type { ChildAgeType } from './ChildAgeType';
import {
    ChildAgeTypeFromJSON,
    ChildAgeTypeFromJSONTyped,
    ChildAgeTypeToJSON,
} from './ChildAgeType';
import type { ChildBucketsType } from './ChildBucketsType';
import {
    ChildBucketsTypeFromJSON,
    ChildBucketsTypeFromJSONTyped,
    ChildBucketsTypeToJSON,
} from './ChildBucketsType';

/**
 * A collection of GuestCount by age group.
 * @export
 * @interface GuestCountsType
 */
export interface GuestCountsType {
    /**
     * Defines the number of Adults.
     * @type {number}
     * @memberof GuestCountsType
     */
    adults?: number;
    /**
     * Age of a child in years.
     * @type {Array<ChildAgeType>}
     * @memberof GuestCountsType
     */
    childAges?: Array<ChildAgeType>;
    /**
     * 
     * @type {ChildBucketsType}
     * @memberof GuestCountsType
     */
    childBuckets?: ChildBucketsType;
    /**
     * Defines the number of Children.
     * @type {number}
     * @memberof GuestCountsType
     */
    children?: number;
}

/**
 * Check if a given object implements the GuestCountsType interface.
 */
export function instanceOfGuestCountsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuestCountsTypeFromJSON(json: any): GuestCountsType {
    return GuestCountsTypeFromJSONTyped(json, false);
}

export function GuestCountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuestCountsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adults': !exists(json, 'adults') ? undefined : json['adults'],
        'childAges': !exists(json, 'childAges') ? undefined : ((json['childAges'] as Array<any>).map(ChildAgeTypeFromJSON)),
        'childBuckets': !exists(json, 'childBuckets') ? undefined : ChildBucketsTypeFromJSON(json['childBuckets']),
        'children': !exists(json, 'children') ? undefined : json['children'],
    };
}

export function GuestCountsTypeToJSON(value?: GuestCountsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adults': value.adults,
        'childAges': value.childAges === undefined ? undefined : ((value.childAges as Array<any>).map(ChildAgeTypeToJSON)),
        'childBuckets': ChildBucketsTypeToJSON(value.childBuckets),
        'children': value.children,
    };
}

