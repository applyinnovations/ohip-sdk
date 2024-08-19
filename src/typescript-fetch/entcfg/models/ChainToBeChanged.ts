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
import type { ChainDetailInfoType } from './ChainDetailInfoType';
import {
    ChainDetailInfoTypeFromJSON,
    ChainDetailInfoTypeFromJSONTyped,
    ChainDetailInfoTypeToJSON,
} from './ChainDetailInfoType';
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
 * Request object for changing Chain.
 * @export
 * @interface ChainToBeChanged
 */
export interface ChainToBeChanged {
    /**
     * 
     * @type {Array<ChainDetailInfoType>}
     * @memberof ChainToBeChanged
     */
    chains?: Array<ChainDetailInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChainToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChainToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChainToBeChanged interface.
 */
export function instanceOfChainToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChainToBeChangedFromJSON(json: any): ChainToBeChanged {
    return ChainToBeChangedFromJSONTyped(json, false);
}

export function ChainToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChainToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chains': !exists(json, 'chains') ? undefined : ((json['chains'] as Array<any>).map(ChainDetailInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChainToBeChangedToJSON(value?: ChainToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chains': value.chains === undefined ? undefined : ((value.chains as Array<any>).map(ChainDetailInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

