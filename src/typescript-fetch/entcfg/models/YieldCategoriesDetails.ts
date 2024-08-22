/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';
import type { YieldCategoryType } from './YieldCategoryType';
import {
    YieldCategoryTypeFromJSON,
    YieldCategoryTypeFromJSONTyped,
    YieldCategoryTypeToJSON,
} from './YieldCategoryType';

/**
 * Response object for fetching Yield Category configurations.
 * @export
 * @interface YieldCategoriesDetails
 */
export interface YieldCategoriesDetails {
    /**
     * Holds Yield Category details.
     * @type {Array<YieldCategoryType>}
     * @memberof YieldCategoriesDetails
     */
    yieldCategories?: Array<YieldCategoryType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof YieldCategoriesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof YieldCategoriesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the YieldCategoriesDetails interface.
 */
export function instanceOfYieldCategoriesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function YieldCategoriesDetailsFromJSON(json: any): YieldCategoriesDetails {
    return YieldCategoriesDetailsFromJSONTyped(json, false);
}

export function YieldCategoriesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): YieldCategoriesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'yieldCategories': !exists(json, 'yieldCategories') ? undefined : ((json['yieldCategories'] as Array<any>).map(YieldCategoryTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function YieldCategoriesDetailsToJSON(value?: YieldCategoriesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'yieldCategories': value.yieldCategories === undefined ? undefined : ((value.yieldCategories as Array<any>).map(YieldCategoryTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

