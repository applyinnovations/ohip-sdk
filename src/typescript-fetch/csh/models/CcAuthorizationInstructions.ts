/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CCAuthorizationInstructionType } from './CCAuthorizationInstructionType';
import {
    CCAuthorizationInstructionTypeFromJSON,
    CCAuthorizationInstructionTypeFromJSONTyped,
    CCAuthorizationInstructionTypeToJSON,
} from './CCAuthorizationInstructionType';
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
 * Response to the fetch authorization instructions. Based on the criteria requested, the response can contain information required to send a credit card authorization to the Vendor.
 * @export
 * @interface CcAuthorizationInstructions
 */
export interface CcAuthorizationInstructions {
    /**
     * 
     * @type {CCAuthorizationInstructionType}
     * @memberof CcAuthorizationInstructions
     */
    details?: CCAuthorizationInstructionType;
    /**
     * 
     * @type {Links}
     * @memberof CcAuthorizationInstructions
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CcAuthorizationInstructions
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CcAuthorizationInstructions interface.
 */
export function instanceOfCcAuthorizationInstructions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CcAuthorizationInstructionsFromJSON(json: any): CcAuthorizationInstructions {
    return CcAuthorizationInstructionsFromJSONTyped(json, false);
}

export function CcAuthorizationInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CcAuthorizationInstructions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': !exists(json, 'details') ? undefined : CCAuthorizationInstructionTypeFromJSON(json['details']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CcAuthorizationInstructionsToJSON(value?: CcAuthorizationInstructions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': CCAuthorizationInstructionTypeToJSON(value.details),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
