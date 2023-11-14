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
import type { AttractionCodesType } from './AttractionCodesType';
import {
    AttractionCodesTypeFromJSON,
    AttractionCodesTypeFromJSONTyped,
    AttractionCodesTypeToJSON,
} from './AttractionCodesType';
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
 * Request object for modifying an existing attraction.
 * @export
 * @interface AttractionsToBeChanged
 */
export interface AttractionsToBeChanged {
    /**
     * 
     * @type {AttractionCodesType}
     * @memberof AttractionsToBeChanged
     */
    attractions?: AttractionCodesType;
    /**
     * 
     * @type {Links}
     * @memberof AttractionsToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof AttractionsToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the AttractionsToBeChanged interface.
 */
export function instanceOfAttractionsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttractionsToBeChangedFromJSON(json: any): AttractionsToBeChanged {
    return AttractionsToBeChangedFromJSONTyped(json, false);
}

export function AttractionsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttractionsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attractions': !exists(json, 'attractions') ? undefined : AttractionCodesTypeFromJSON(json['attractions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function AttractionsToBeChangedToJSON(value?: AttractionsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attractions': AttractionCodesTypeToJSON(value.attractions),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
