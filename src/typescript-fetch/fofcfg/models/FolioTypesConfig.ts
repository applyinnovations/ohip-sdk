/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FolioTypeConfigType } from './FolioTypeConfigType';
import {
    FolioTypeConfigTypeFromJSON,
    FolioTypeConfigTypeFromJSONTyped,
    FolioTypeConfigTypeToJSON,
} from './FolioTypeConfigType';
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
 * 
 * @export
 * @interface FolioTypesConfig
 */
export interface FolioTypesConfig {
    /**
     * Information details of the Folio Type Names.
     * @type {Array<FolioTypeConfigType>}
     * @memberof FolioTypesConfig
     */
    folioTypes?: Array<FolioTypeConfigType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FolioTypesConfig
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FolioTypesConfig
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FolioTypesConfig interface.
 */
export function instanceOfFolioTypesConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioTypesConfigFromJSON(json: any): FolioTypesConfig {
    return FolioTypesConfigFromJSONTyped(json, false);
}

export function FolioTypesConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioTypesConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'folioTypes': !exists(json, 'folioTypes') ? undefined : ((json['folioTypes'] as Array<any>).map(FolioTypeConfigTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FolioTypesConfigToJSON(value?: FolioTypesConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'folioTypes': value.folioTypes === undefined ? undefined : ((value.folioTypes as Array<any>).map(FolioTypeConfigTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

