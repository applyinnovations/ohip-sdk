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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { TemplateCountriesType } from './TemplateCountriesType';
import {
    TemplateCountriesTypeFromJSON,
    TemplateCountriesTypeFromJSONTyped,
    TemplateCountriesTypeToJSON,
} from './TemplateCountriesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for modifying template Countries.
 * @export
 * @interface TemplateCountriesToBeChanged
 */
export interface TemplateCountriesToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof TemplateCountriesToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {TemplateCountriesType}
     * @memberof TemplateCountriesToBeChanged
     */
    templateCountries?: TemplateCountriesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof TemplateCountriesToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TemplateCountriesToBeChanged interface.
 */
export function instanceOfTemplateCountriesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateCountriesToBeChangedFromJSON(json: any): TemplateCountriesToBeChanged {
    return TemplateCountriesToBeChangedFromJSONTyped(json, false);
}

export function TemplateCountriesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCountriesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'templateCountries': !exists(json, 'templateCountries') ? undefined : TemplateCountriesTypeFromJSON(json['templateCountries']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TemplateCountriesToBeChangedToJSON(value?: TemplateCountriesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'templateCountries': TemplateCountriesTypeToJSON(value.templateCountries),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
