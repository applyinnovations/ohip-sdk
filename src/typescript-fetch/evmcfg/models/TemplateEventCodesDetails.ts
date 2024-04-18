/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
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
import type { TemplateEventCodeType } from './TemplateEventCodeType';
import {
    TemplateEventCodeTypeFromJSON,
    TemplateEventCodeTypeFromJSONTyped,
    TemplateEventCodeTypeToJSON,
} from './TemplateEventCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching template Event Codes.
 * @export
 * @interface TemplateEventCodesDetails
 */
export interface TemplateEventCodesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateEventCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Details for Event Code at template level.
     * @type {Array<TemplateEventCodeType>}
     * @memberof TemplateEventCodesDetails
     */
    templateEventCodes?: Array<TemplateEventCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateEventCodesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateEventCodesDetails interface.
 */
export function instanceOfTemplateEventCodesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateEventCodesDetailsFromJSON(json: any): TemplateEventCodesDetails {
    return TemplateEventCodesDetailsFromJSONTyped(json, false);
}

export function TemplateEventCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateEventCodesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateEventCodes': !exists(json, 'templateEventCodes') ? undefined : ((json['templateEventCodes'] as Array<any>).map(TemplateEventCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateEventCodesDetailsToJSON(value?: TemplateEventCodesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateEventCodes': value.templateEventCodes === undefined ? undefined : ((value.templateEventCodes as Array<any>).map(TemplateEventCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
