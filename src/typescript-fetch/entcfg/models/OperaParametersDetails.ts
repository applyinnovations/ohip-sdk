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
import type { ApplicationSettingSimpleType } from './ApplicationSettingSimpleType';
import {
    ApplicationSettingSimpleTypeFromJSON,
    ApplicationSettingSimpleTypeFromJSONTyped,
    ApplicationSettingSimpleTypeToJSON,
} from './ApplicationSettingSimpleType';
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
 * The result element containing a collection of the requested application parameters.
 * @export
 * @interface OperaParametersDetails
 */
export interface OperaParametersDetails {
    /**
     * 
     * @type {Links}
     * @memberof OperaParametersDetails
     */
    links?: Links;
    /**
     * Represents a single application parameter and its value.
     * @type {Array<ApplicationSettingSimpleType>}
     * @memberof OperaParametersDetails
     */
    parameters?: Array<ApplicationSettingSimpleType>;
    /**
     * 
     * @type {WarningsType}
     * @memberof OperaParametersDetails
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the OperaParametersDetails interface.
 */
export function instanceOfOperaParametersDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OperaParametersDetailsFromJSON(json: any): OperaParametersDetails {
    return OperaParametersDetailsFromJSONTyped(json, false);
}

export function OperaParametersDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperaParametersDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'parameters': !exists(json, 'parameters') ? undefined : ((json['parameters'] as Array<any>).map(ApplicationSettingSimpleTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function OperaParametersDetailsToJSON(value?: OperaParametersDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'parameters': value.parameters === undefined ? undefined : ((value.parameters as Array<any>).map(ApplicationSettingSimpleTypeToJSON)),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
