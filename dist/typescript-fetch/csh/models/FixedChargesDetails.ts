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
import type { FixedChargeType } from './FixedChargeType';
import {
    FixedChargeTypeFromJSON,
    FixedChargeTypeFromJSONTyped,
    FixedChargeTypeToJSON,
} from './FixedChargeType';
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
 * Response that contains either the fixed charges list if fetch was successful or error(s) if not.
 * @export
 * @interface FixedChargesDetails
 */
export interface FixedChargesDetails {
    /**
     * Holds fixed charge detail.
     * @type {Array<FixedChargeType>}
     * @memberof FixedChargesDetails
     */
    fixedCharges?: Array<FixedChargeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof FixedChargesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof FixedChargesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the FixedChargesDetails interface.
 */
export function instanceOfFixedChargesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FixedChargesDetailsFromJSON(json: any): FixedChargesDetails {
    return FixedChargesDetailsFromJSONTyped(json, false);
}

export function FixedChargesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FixedChargesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fixedCharges': !exists(json, 'fixedCharges') ? undefined : ((json['fixedCharges'] as Array<any>).map(FixedChargeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function FixedChargesDetailsToJSON(value?: FixedChargesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fixedCharges': value.fixedCharges === undefined ? undefined : ((value.fixedCharges as Array<any>).map(FixedChargeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

