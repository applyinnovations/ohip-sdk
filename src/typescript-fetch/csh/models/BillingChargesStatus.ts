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
import type { CheckPostBillingChargesOptionsTypeInner } from './CheckPostBillingChargesOptionsTypeInner';
import {
    CheckPostBillingChargesOptionsTypeInnerFromJSON,
    CheckPostBillingChargesOptionsTypeInnerFromJSONTyped,
    CheckPostBillingChargesOptionsTypeInnerToJSON,
} from './CheckPostBillingChargesOptionsTypeInner';
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
 * Response when checking or inquiring the available options for a set of billing charges.
 * @export
 * @interface BillingChargesStatus
 */
export interface BillingChargesStatus {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BillingChargesStatus
     */
    links?: Array<InstanceLink>;
    /**
     * TAvailable options for this consumable
     * @type {Array<CheckPostBillingChargesOptionsTypeInner>}
     * @memberof BillingChargesStatus
     */
    options?: Array<CheckPostBillingChargesOptionsTypeInner>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof BillingChargesStatus
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the BillingChargesStatus interface.
 */
export function instanceOfBillingChargesStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BillingChargesStatusFromJSON(json: any): BillingChargesStatus {
    return BillingChargesStatusFromJSONTyped(json, false);
}

export function BillingChargesStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingChargesStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(CheckPostBillingChargesOptionsTypeInnerFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function BillingChargesStatusToJSON(value?: BillingChargesStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(CheckPostBillingChargesOptionsTypeInnerToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
