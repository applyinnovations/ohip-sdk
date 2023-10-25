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
import type { HotelTransportationType } from './HotelTransportationType';
import {
    HotelTransportationTypeFromJSON,
    HotelTransportationTypeFromJSONTyped,
    HotelTransportationTypeToJSON,
} from './HotelTransportationType';
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

/**
 * Request object for modifying transportation templates.
 * @export
 * @interface TransportationTemplatesToBeChanged
 */
export interface TransportationTemplatesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TransportationTemplatesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of transportation templates.
     * @type {Array<HotelTransportationType>}
     * @memberof TransportationTemplatesToBeChanged
     */
    transportationTemplates?: Array<HotelTransportationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TransportationTemplatesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TransportationTemplatesToBeChanged interface.
 */
export function instanceOfTransportationTemplatesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransportationTemplatesToBeChangedFromJSON(json: any): TransportationTemplatesToBeChanged {
    return TransportationTemplatesToBeChangedFromJSONTyped(json, false);
}

export function TransportationTemplatesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransportationTemplatesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'transportationTemplates': !exists(json, 'transportationTemplates') ? undefined : ((json['transportationTemplates'] as Array<any>).map(HotelTransportationTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TransportationTemplatesToBeChangedToJSON(value?: TransportationTemplatesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'transportationTemplates': value.transportationTemplates === undefined ? undefined : ((value.transportationTemplates as Array<any>).map(HotelTransportationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

