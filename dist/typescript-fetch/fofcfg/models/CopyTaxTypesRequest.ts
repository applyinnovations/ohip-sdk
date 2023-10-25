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
 * @interface CopyTaxTypesRequest
 */
export interface CopyTaxTypesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CopyTaxTypesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of the Tax Types to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyTaxTypesRequest
     */
    taxType?: Array<CopyConfigurationCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CopyTaxTypesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CopyTaxTypesRequest interface.
 */
export function instanceOfCopyTaxTypesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyTaxTypesRequestFromJSON(json: any): CopyTaxTypesRequest {
    return CopyTaxTypesRequestFromJSONTyped(json, false);
}

export function CopyTaxTypesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTaxTypesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'taxType': !exists(json, 'taxType') ? undefined : ((json['taxType'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CopyTaxTypesRequestToJSON(value?: CopyTaxTypesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'taxType': value.taxType === undefined ? undefined : ((value.taxType as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

