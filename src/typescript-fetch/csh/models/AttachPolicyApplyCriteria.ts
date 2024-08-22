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
import type { PolicyApplyCriteriaType } from './PolicyApplyCriteriaType';
import {
    PolicyApplyCriteriaTypeFromJSON,
    PolicyApplyCriteriaTypeFromJSONTyped,
    PolicyApplyCriteriaTypeToJSON,
} from './PolicyApplyCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request to attach an existing Deposit Policy on a reservation towards an existing deposit payment on the same reservation.
 * @export
 * @interface AttachPolicyApplyCriteria
 */
export interface AttachPolicyApplyCriteria {
    /**
     * 
     * @type {PolicyApplyCriteriaType}
     * @memberof AttachPolicyApplyCriteria
     */
    criteria?: PolicyApplyCriteriaType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AttachPolicyApplyCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AttachPolicyApplyCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AttachPolicyApplyCriteria interface.
 */
export function instanceOfAttachPolicyApplyCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttachPolicyApplyCriteriaFromJSON(json: any): AttachPolicyApplyCriteria {
    return AttachPolicyApplyCriteriaFromJSONTyped(json, false);
}

export function AttachPolicyApplyCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachPolicyApplyCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : PolicyApplyCriteriaTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AttachPolicyApplyCriteriaToJSON(value?: AttachPolicyApplyCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': PolicyApplyCriteriaTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

