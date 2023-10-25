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
import type { TemplateMarketingCityConfigType } from './TemplateMarketingCityConfigType';
import {
    TemplateMarketingCityConfigTypeFromJSON,
    TemplateMarketingCityConfigTypeFromJSONTyped,
    TemplateMarketingCityConfigTypeToJSON,
} from './TemplateMarketingCityConfigType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching template marketing cities.
 * @export
 * @interface TemplateMarketingCitiesDetails
 */
export interface TemplateMarketingCitiesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateMarketingCitiesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Template marketing city details.
     * @type {Array<TemplateMarketingCityConfigType>}
     * @memberof TemplateMarketingCitiesDetails
     */
    templateMarketingCities?: Array<TemplateMarketingCityConfigType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateMarketingCitiesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateMarketingCitiesDetails interface.
 */
export function instanceOfTemplateMarketingCitiesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateMarketingCitiesDetailsFromJSON(json: any): TemplateMarketingCitiesDetails {
    return TemplateMarketingCitiesDetailsFromJSONTyped(json, false);
}

export function TemplateMarketingCitiesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateMarketingCitiesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateMarketingCities': !exists(json, 'templateMarketingCities') ? undefined : ((json['templateMarketingCities'] as Array<any>).map(TemplateMarketingCityConfigTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateMarketingCitiesDetailsToJSON(value?: TemplateMarketingCitiesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateMarketingCities': value.templateMarketingCities === undefined ? undefined : ((value.templateMarketingCities as Array<any>).map(TemplateMarketingCityConfigTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

