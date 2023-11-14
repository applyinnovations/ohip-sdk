/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DisplaySetsType } from './DisplaySetsType';
import {
    DisplaySetsTypeFromJSON,
    DisplaySetsTypeFromJSONTyped,
    DisplaySetsTypeToJSON,
} from './DisplaySetsType';
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
 * Request object for creating Display Sets.
 * @export
 * @interface DisplaySetsCriteria
 */
export interface DisplaySetsCriteria {
    /**
     * 
     * @type {DisplaySetsType}
     * @memberof DisplaySetsCriteria
     */
    displaySets?: DisplaySetsType;
    /**
     * 
     * @type {Links}
     * @memberof DisplaySetsCriteria
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof DisplaySetsCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the DisplaySetsCriteria interface.
 */
export function instanceOfDisplaySetsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DisplaySetsCriteriaFromJSON(json: any): DisplaySetsCriteria {
    return DisplaySetsCriteriaFromJSONTyped(json, false);
}

export function DisplaySetsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisplaySetsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displaySets': !exists(json, 'displaySets') ? undefined : DisplaySetsTypeFromJSON(json['displaySets']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function DisplaySetsCriteriaToJSON(value?: DisplaySetsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displaySets': DisplaySetsTypeToJSON(value.displaySets),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
