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
import type { PostRateCodeCheckType } from './PostRateCodeCheckType';
import {
    PostRateCodeCheckTypeFromJSON,
    PostRateCodeCheckTypeFromJSONTyped,
    PostRateCodeCheckTypeToJSON,
} from './PostRateCodeCheckType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response for the request to check if a Rate Code can be posted to a reservation .
 * @export
 * @interface CheckedRateCode
 */
export interface CheckedRateCode {
    /**
     * 
     * @type {PostRateCodeCheckType}
     * @memberof CheckedRateCode
     */
    checks?: PostRateCodeCheckType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CheckedRateCode
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CheckedRateCode
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CheckedRateCode interface.
 */
export function instanceOfCheckedRateCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckedRateCodeFromJSON(json: any): CheckedRateCode {
    return CheckedRateCodeFromJSONTyped(json, false);
}

export function CheckedRateCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckedRateCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checks': !exists(json, 'checks') ? undefined : PostRateCodeCheckTypeFromJSON(json['checks']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CheckedRateCodeToJSON(value?: CheckedRateCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checks': PostRateCodeCheckTypeToJSON(value.checks),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

