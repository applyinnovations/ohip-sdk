/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyConfigurationCodesType } from './CopyConfigurationCodesType';
import {
    CopyConfigurationCodesTypeFromJSON,
    CopyConfigurationCodesTypeFromJSONTyped,
    CopyConfigurationCodesTypeToJSON,
} from './CopyConfigurationCodesType';
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
 * @interface TaxBracketsCopy
 */
export interface TaxBracketsCopy {
    /**
     * 
     * @type {CopyConfigurationCodesType}
     * @memberof TaxBracketsCopy
     */
    copyInstructions?: CopyConfigurationCodesType;
    /**
     * 
     * @type {Links}
     * @memberof TaxBracketsCopy
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof TaxBracketsCopy
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the TaxBracketsCopy interface.
 */
export function instanceOfTaxBracketsCopy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxBracketsCopyFromJSON(json: any): TaxBracketsCopy {
    return TaxBracketsCopyFromJSONTyped(json, false);
}

export function TaxBracketsCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxBracketsCopy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyInstructions': !exists(json, 'copyInstructions') ? undefined : CopyConfigurationCodesTypeFromJSON(json['copyInstructions']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function TaxBracketsCopyToJSON(value?: TaxBracketsCopy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyInstructions': CopyConfigurationCodesTypeToJSON(value.copyInstructions),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
