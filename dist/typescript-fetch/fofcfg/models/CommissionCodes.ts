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
import type { CommissionCodeInfoType } from './CommissionCodeInfoType';
import {
    CommissionCodeInfoTypeFromJSON,
    CommissionCodeInfoTypeFromJSONTyped,
    CommissionCodeInfoTypeToJSON,
} from './CommissionCodeInfoType';
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
 * Request object to update commission codes.
 * @export
 * @interface CommissionCodes
 */
export interface CommissionCodes {
    /**
     * Commission code details object.
     * @type {Array<CommissionCodeInfoType>}
     * @memberof CommissionCodes
     */
    commissionCodes?: Array<CommissionCodeInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CommissionCodes
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CommissionCodes
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CommissionCodes interface.
 */
export function instanceOfCommissionCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommissionCodesFromJSON(json: any): CommissionCodes {
    return CommissionCodesFromJSONTyped(json, false);
}

export function CommissionCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commissionCodes': !exists(json, 'commissionCodes') ? undefined : ((json['commissionCodes'] as Array<any>).map(CommissionCodeInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CommissionCodesToJSON(value?: CommissionCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commissionCodes': value.commissionCodes === undefined ? undefined : ((value.commissionCodes as Array<any>).map(CommissionCodeInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

