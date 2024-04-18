/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ResDepositPolicyType } from './ResDepositPolicyType';
import {
    ResDepositPolicyTypeFromJSON,
    ResDepositPolicyTypeFromJSONTyped,
    ResDepositPolicyTypeToJSON,
} from './ResDepositPolicyType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Information regarding the Deposit Policy if a Deposit Folio is going to be created for this policy.
 * @export
 * @interface DepositedFolioValidate
 */
export interface DepositedFolioValidate {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DepositedFolioValidate
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {Array<ResDepositPolicyType>}
     * @memberof DepositedFolioValidate
     */
    policyInfoList?: Array<ResDepositPolicyType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DepositedFolioValidate
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DepositedFolioValidate interface.
 */
export function instanceOfDepositedFolioValidate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositedFolioValidateFromJSON(json: any): DepositedFolioValidate {
    return DepositedFolioValidateFromJSONTyped(json, false);
}

export function DepositedFolioValidateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositedFolioValidate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'policyInfoList': !exists(json, 'policyInfoList') ? undefined : ((json['policyInfoList'] as Array<any>).map(ResDepositPolicyTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DepositedFolioValidateToJSON(value?: DepositedFolioValidate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'policyInfoList': value.policyInfoList === undefined ? undefined : ((value.policyInfoList as Array<any>).map(ResDepositPolicyTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
