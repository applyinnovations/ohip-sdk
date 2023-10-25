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
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import {
    CopyConfigurationCodeTypeFromJSON,
    CopyConfigurationCodeTypeFromJSONTyped,
    CopyConfigurationCodeTypeToJSON,
} from './CopyConfigurationCodeType';
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
 * @interface TaxBracketsCopy
 */
export interface TaxBracketsCopy {
    /**
     * Information needed to copy configuration code from one property to the other.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof TaxBracketsCopy
     */
    copyInstructions?: Array<CopyConfigurationCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TaxBracketsCopy
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TaxBracketsCopy
     */
    warnings?: Array<WarningType>;
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
        
        'copyInstructions': !exists(json, 'copyInstructions') ? undefined : ((json['copyInstructions'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
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
        
        'copyInstructions': value.copyInstructions === undefined ? undefined : ((value.copyInstructions as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

