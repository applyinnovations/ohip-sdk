/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { TemplateSourceCodeType } from './TemplateSourceCodeType';
import {
    TemplateSourceCodeTypeFromJSON,
    TemplateSourceCodeTypeFromJSONTyped,
    TemplateSourceCodeTypeToJSON,
} from './TemplateSourceCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostTemplateSourceCodeRequest
 */
export interface PostTemplateSourceCodeRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostTemplateSourceCodeRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {TemplateSourceCodeType}
     * @memberof PostTemplateSourceCodeRequest
     */
    templateSourceCode?: TemplateSourceCodeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostTemplateSourceCodeRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostTemplateSourceCodeRequest interface.
 */
export function instanceOfPostTemplateSourceCodeRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostTemplateSourceCodeRequestFromJSON(json: any): PostTemplateSourceCodeRequest {
    return PostTemplateSourceCodeRequestFromJSONTyped(json, false);
}

export function PostTemplateSourceCodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTemplateSourceCodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateSourceCode': !exists(json, 'templateSourceCode') ? undefined : TemplateSourceCodeTypeFromJSON(json['templateSourceCode']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostTemplateSourceCodeRequestToJSON(value?: PostTemplateSourceCodeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateSourceCode': TemplateSourceCodeTypeToJSON(value.templateSourceCode),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

