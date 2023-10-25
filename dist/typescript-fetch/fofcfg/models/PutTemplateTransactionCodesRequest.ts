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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { TemplateTransactionCodeType } from './TemplateTransactionCodeType';
import {
    TemplateTransactionCodeTypeFromJSON,
    TemplateTransactionCodeTypeFromJSONTyped,
    TemplateTransactionCodeTypeToJSON,
} from './TemplateTransactionCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PutTemplateTransactionCodesRequest
 */
export interface PutTemplateTransactionCodesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutTemplateTransactionCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Template transaction code configuration details.
     * @type {Array<TemplateTransactionCodeType>}
     * @memberof PutTemplateTransactionCodesRequest
     */
    transactionCodes?: Array<TemplateTransactionCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutTemplateTransactionCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutTemplateTransactionCodesRequest interface.
 */
export function instanceOfPutTemplateTransactionCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutTemplateTransactionCodesRequestFromJSON(json: any): PutTemplateTransactionCodesRequest {
    return PutTemplateTransactionCodesRequestFromJSONTyped(json, false);
}

export function PutTemplateTransactionCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutTemplateTransactionCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : ((json['transactionCodes'] as Array<any>).map(TemplateTransactionCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutTemplateTransactionCodesRequestToJSON(value?: PutTemplateTransactionCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'transactionCodes': value.transactionCodes === undefined ? undefined : ((value.transactionCodes as Array<any>).map(TemplateTransactionCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

