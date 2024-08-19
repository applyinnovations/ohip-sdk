/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConfigLanguageType } from './ConfigLanguageType';
import {
    ConfigLanguageTypeFromJSON,
    ConfigLanguageTypeFromJSONTyped,
    ConfigLanguageTypeToJSON,
} from './ConfigLanguageType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating new language records.
 * @export
 * @interface LanguagesCriteria
 */
export interface LanguagesCriteria {
    /**
     * This type holds a collection of languages.
     * @type {Array<ConfigLanguageType>}
     * @memberof LanguagesCriteria
     */
    languages?: Array<ConfigLanguageType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof LanguagesCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof LanguagesCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the LanguagesCriteria interface.
 */
export function instanceOfLanguagesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LanguagesCriteriaFromJSON(json: any): LanguagesCriteria {
    return LanguagesCriteriaFromJSONTyped(json, false);
}

export function LanguagesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguagesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'languages': !exists(json, 'languages') ? undefined : ((json['languages'] as Array<any>).map(ConfigLanguageTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function LanguagesCriteriaToJSON(value?: LanguagesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'languages': value.languages === undefined ? undefined : ((value.languages as Array<any>).map(ConfigLanguageTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

