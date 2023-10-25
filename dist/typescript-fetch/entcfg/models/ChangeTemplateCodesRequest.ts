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
import type { TemplateCodeType } from './TemplateCodeType';
import {
    TemplateCodeTypeFromJSON,
    TemplateCodeTypeFromJSONTyped,
    TemplateCodeTypeToJSON,
} from './TemplateCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface ChangeTemplateCodesRequest
 */
export interface ChangeTemplateCodesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeTemplateCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of Template Codes.
     * @type {Array<TemplateCodeType>}
     * @memberof ChangeTemplateCodesRequest
     */
    templateCodes?: Array<TemplateCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeTemplateCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeTemplateCodesRequest interface.
 */
export function instanceOfChangeTemplateCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeTemplateCodesRequestFromJSON(json: any): ChangeTemplateCodesRequest {
    return ChangeTemplateCodesRequestFromJSONTyped(json, false);
}

export function ChangeTemplateCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeTemplateCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateCodes': !exists(json, 'templateCodes') ? undefined : ((json['templateCodes'] as Array<any>).map(TemplateCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeTemplateCodesRequestToJSON(value?: ChangeTemplateCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateCodes': value.templateCodes === undefined ? undefined : ((value.templateCodes as Array<any>).map(TemplateCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

