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
import type { TemplateMarketCodeType } from './TemplateMarketCodeType';
import {
    TemplateMarketCodeTypeFromJSON,
    TemplateMarketCodeTypeFromJSONTyped,
    TemplateMarketCodeTypeToJSON,
} from './TemplateMarketCodeType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object that holds the details of template Market Code to be changed.
 * @export
 * @interface TemplateMarketCodeToBeChanged
 */
export interface TemplateMarketCodeToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof TemplateMarketCodeToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {TemplateMarketCodeType}
     * @memberof TemplateMarketCodeToBeChanged
     */
    templateMarketCode?: TemplateMarketCodeType;
    /**
     * 
     * @type {WarningsType}
     * @memberof TemplateMarketCodeToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TemplateMarketCodeToBeChanged interface.
 */
export function instanceOfTemplateMarketCodeToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateMarketCodeToBeChangedFromJSON(json: any): TemplateMarketCodeToBeChanged {
    return TemplateMarketCodeToBeChangedFromJSONTyped(json, false);
}

export function TemplateMarketCodeToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateMarketCodeToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'templateMarketCode': !exists(json, 'templateMarketCode') ? undefined : TemplateMarketCodeTypeFromJSON(json['templateMarketCode']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TemplateMarketCodeToBeChangedToJSON(value?: TemplateMarketCodeToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'templateMarketCode': TemplateMarketCodeTypeToJSON(value.templateMarketCode),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
