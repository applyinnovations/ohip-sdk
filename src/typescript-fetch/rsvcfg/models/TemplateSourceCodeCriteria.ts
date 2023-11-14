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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { TemplateSourceCodeType } from './TemplateSourceCodeType';
import {
    TemplateSourceCodeTypeFromJSON,
    TemplateSourceCodeTypeFromJSONTyped,
    TemplateSourceCodeTypeToJSON,
} from './TemplateSourceCodeType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object that holds the details of template Source Code to be created.
 * @export
 * @interface TemplateSourceCodeCriteria
 */
export interface TemplateSourceCodeCriteria {
    /**
     * 
     * @type {Links}
     * @memberof TemplateSourceCodeCriteria
     */
    links?: Links;
    /**
     * 
     * @type {TemplateSourceCodeType}
     * @memberof TemplateSourceCodeCriteria
     */
    templateSourceCode?: TemplateSourceCodeType;
    /**
     * 
     * @type {WarningsType}
     * @memberof TemplateSourceCodeCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TemplateSourceCodeCriteria interface.
 */
export function instanceOfTemplateSourceCodeCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateSourceCodeCriteriaFromJSON(json: any): TemplateSourceCodeCriteria {
    return TemplateSourceCodeCriteriaFromJSONTyped(json, false);
}

export function TemplateSourceCodeCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateSourceCodeCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'templateSourceCode': !exists(json, 'templateSourceCode') ? undefined : TemplateSourceCodeTypeFromJSON(json['templateSourceCode']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TemplateSourceCodeCriteriaToJSON(value?: TemplateSourceCodeCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'templateSourceCode': TemplateSourceCodeTypeToJSON(value.templateSourceCode),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
