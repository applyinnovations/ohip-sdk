/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud DataValueMapping Service API
 * APIs which offer external systems to config and use values different than what are configured in opera<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConversionHotelInfoType } from './ConversionHotelInfoType';
import {
    ConversionHotelInfoTypeFromJSON,
    ConversionHotelInfoTypeFromJSONTyped,
    ConversionHotelInfoTypeToJSON,
} from './ConversionHotelInfoType';
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
 * 
 * @export
 * @interface ConvertedHotelCode
 */
export interface ConvertedHotelCode {
    /**
     * ExternalSystem for which the conversion is needed.
     * @type {string}
     * @memberof ConvertedHotelCode
     */
    externalSystem?: string;
    /**
     * 
     * @type {ConversionHotelInfoType}
     * @memberof ConvertedHotelCode
     */
    hotelInfo?: ConversionHotelInfoType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ConvertedHotelCode
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ConvertedHotelCode
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ConvertedHotelCode interface.
 */
export function instanceOfConvertedHotelCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConvertedHotelCodeFromJSON(json: any): ConvertedHotelCode {
    return ConvertedHotelCodeFromJSONTyped(json, false);
}

export function ConvertedHotelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConvertedHotelCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'externalSystem': !exists(json, 'externalSystem') ? undefined : json['externalSystem'],
        'hotelInfo': !exists(json, 'hotelInfo') ? undefined : ConversionHotelInfoTypeFromJSON(json['hotelInfo']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ConvertedHotelCodeToJSON(value?: ConvertedHotelCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'externalSystem': value.externalSystem,
        'hotelInfo': ConversionHotelInfoTypeToJSON(value.hotelInfo),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
