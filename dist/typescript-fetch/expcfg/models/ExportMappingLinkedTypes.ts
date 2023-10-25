/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExportMappingLinkedCodeType } from './ExportMappingLinkedCodeType';
import {
    ExportMappingLinkedCodeTypeFromJSON,
    ExportMappingLinkedCodeTypeFromJSONTyped,
    ExportMappingLinkedCodeTypeToJSON,
} from './ExportMappingLinkedCodeType';
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
 * Request to fetch codes linked to export mapping codes.
 * @export
 * @interface ExportMappingLinkedTypes
 */
export interface ExportMappingLinkedTypes {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ExportMappingLinkedTypes
     */
    hotelId?: string;
    /**
     * The linked codes for the given hotel.
     * @type {Array<ExportMappingLinkedCodeType>}
     * @memberof ExportMappingLinkedTypes
     */
    linkedCodes?: Array<ExportMappingLinkedCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ExportMappingLinkedTypes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ExportMappingLinkedTypes
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ExportMappingLinkedTypes interface.
 */
export function instanceOfExportMappingLinkedTypes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportMappingLinkedTypesFromJSON(json: any): ExportMappingLinkedTypes {
    return ExportMappingLinkedTypesFromJSONTyped(json, false);
}

export function ExportMappingLinkedTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportMappingLinkedTypes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'linkedCodes': !exists(json, 'linkedCodes') ? undefined : ((json['linkedCodes'] as Array<any>).map(ExportMappingLinkedCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ExportMappingLinkedTypesToJSON(value?: ExportMappingLinkedTypes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'linkedCodes': value.linkedCodes === undefined ? undefined : ((value.linkedCodes as Array<any>).map(ExportMappingLinkedCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

