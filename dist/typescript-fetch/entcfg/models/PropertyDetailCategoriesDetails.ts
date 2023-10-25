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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PropertyDetailCategoryType } from './PropertyDetailCategoryType';
import {
    PropertyDetailCategoryTypeFromJSON,
    PropertyDetailCategoryTypeFromJSONTyped,
    PropertyDetailCategoryTypeToJSON,
} from './PropertyDetailCategoryType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Property Detail Categories.
 * @export
 * @interface PropertyDetailCategoriesDetails
 */
export interface PropertyDetailCategoriesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PropertyDetailCategoriesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * List of Property Detail Categories.
     * @type {Array<PropertyDetailCategoryType>}
     * @memberof PropertyDetailCategoriesDetails
     */
    propertyDetailCategories?: Array<PropertyDetailCategoryType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PropertyDetailCategoriesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PropertyDetailCategoriesDetails interface.
 */
export function instanceOfPropertyDetailCategoriesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyDetailCategoriesDetailsFromJSON(json: any): PropertyDetailCategoriesDetails {
    return PropertyDetailCategoriesDetailsFromJSONTyped(json, false);
}

export function PropertyDetailCategoriesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyDetailCategoriesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'propertyDetailCategories': !exists(json, 'propertyDetailCategories') ? undefined : ((json['propertyDetailCategories'] as Array<any>).map(PropertyDetailCategoryTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PropertyDetailCategoriesDetailsToJSON(value?: PropertyDetailCategoriesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'propertyDetailCategories': value.propertyDetailCategories === undefined ? undefined : ((value.propertyDetailCategories as Array<any>).map(PropertyDetailCategoryTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

