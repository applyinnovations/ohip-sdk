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
import type { ListOfValuesType } from './ListOfValuesType';
import {
    ListOfValuesTypeFromJSON,
    ListOfValuesTypeFromJSONTyped,
    ListOfValuesTypeToJSON,
} from './ListOfValuesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * 
 * @export
 * @interface ListOfValues
 */
export interface ListOfValues {
    /**
     * 
     * @type {ListOfValuesType}
     * @memberof ListOfValues
     */
    listOfValues?: ListOfValuesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof ListOfValues
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the ListOfValues interface.
 */
export function instanceOfListOfValues(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ListOfValuesFromJSON(json: any): ListOfValues {
    return ListOfValuesFromJSONTyped(json, false);
}

export function ListOfValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListOfValues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listOfValues': !exists(json, 'listOfValues') ? undefined : ListOfValuesTypeFromJSON(json['listOfValues']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function ListOfValuesToJSON(value?: ListOfValues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'listOfValues': ListOfValuesTypeToJSON(value.listOfValues),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
