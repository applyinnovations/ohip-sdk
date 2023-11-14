/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud List of Values Management API
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { LOVNamesType } from './LOVNamesType';
import {
    LOVNamesTypeFromJSON,
    LOVNamesTypeFromJSONTyped,
    LOVNamesTypeToJSON,
} from './LOVNamesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * 
 * @export
 * @interface ListOfValueNames
 */
export interface ListOfValueNames {
    /**
     * 
     * @type {LOVNamesType}
     * @memberof ListOfValueNames
     */
    lOVNames?: LOVNamesType;
    /**
     * 
     * @type {Links}
     * @memberof ListOfValueNames
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof ListOfValueNames
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ListOfValueNames interface.
 */
export function instanceOfListOfValueNames(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListOfValueNamesFromJSON(json: any): ListOfValueNames {
    return ListOfValueNamesFromJSONTyped(json, false);
}

export function ListOfValueNamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOfValueNames {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lOVNames': !exists(json, 'lOVNames') ? undefined : LOVNamesTypeFromJSON(json['lOVNames']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ListOfValueNamesToJSON(value?: ListOfValueNames | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lOVNames': LOVNamesTypeToJSON(value.lOVNames),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
