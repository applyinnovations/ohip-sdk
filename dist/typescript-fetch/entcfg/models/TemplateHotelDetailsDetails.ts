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
import type { TemplateHotelDetailType } from './TemplateHotelDetailType';
import {
    TemplateHotelDetailTypeFromJSON,
    TemplateHotelDetailTypeFromJSONTyped,
    TemplateHotelDetailTypeToJSON,
} from './TemplateHotelDetailType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching hotel details at the template level.
 * @export
 * @interface TemplateHotelDetailsDetails
 */
export interface TemplateHotelDetailsDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateHotelDetailsDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of template level hotel details.
     * @type {Array<TemplateHotelDetailType>}
     * @memberof TemplateHotelDetailsDetails
     */
    templateHotelDetails?: Array<TemplateHotelDetailType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateHotelDetailsDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateHotelDetailsDetails interface.
 */
export function instanceOfTemplateHotelDetailsDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateHotelDetailsDetailsFromJSON(json: any): TemplateHotelDetailsDetails {
    return TemplateHotelDetailsDetailsFromJSONTyped(json, false);
}

export function TemplateHotelDetailsDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateHotelDetailsDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateHotelDetails': !exists(json, 'templateHotelDetails') ? undefined : ((json['templateHotelDetails'] as Array<any>).map(TemplateHotelDetailTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateHotelDetailsDetailsToJSON(value?: TemplateHotelDetailsDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateHotelDetails': value.templateHotelDetails === undefined ? undefined : ((value.templateHotelDetails as Array<any>).map(TemplateHotelDetailTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

