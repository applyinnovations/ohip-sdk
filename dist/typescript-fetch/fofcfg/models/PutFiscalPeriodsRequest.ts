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
import type { FiscalPeriodEditType } from './FiscalPeriodEditType';
import {
    FiscalPeriodEditTypeFromJSON,
    FiscalPeriodEditTypeFromJSONTyped,
    FiscalPeriodEditTypeToJSON,
} from './FiscalPeriodEditType';
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
 * @interface PutFiscalPeriodsRequest
 */
export interface PutFiscalPeriodsRequest {
    /**
     * List of Fiscal Periods.
     * @type {Array<FiscalPeriodEditType>}
     * @memberof PutFiscalPeriodsRequest
     */
    fiscalPeriods?: Array<FiscalPeriodEditType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutFiscalPeriodsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutFiscalPeriodsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutFiscalPeriodsRequest interface.
 */
export function instanceOfPutFiscalPeriodsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutFiscalPeriodsRequestFromJSON(json: any): PutFiscalPeriodsRequest {
    return PutFiscalPeriodsRequestFromJSONTyped(json, false);
}

export function PutFiscalPeriodsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutFiscalPeriodsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fiscalPeriods': !exists(json, 'fiscalPeriods') ? undefined : ((json['fiscalPeriods'] as Array<any>).map(FiscalPeriodEditTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutFiscalPeriodsRequestToJSON(value?: PutFiscalPeriodsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fiscalPeriods': value.fiscalPeriods === undefined ? undefined : ((value.fiscalPeriods as Array<any>).map(FiscalPeriodEditTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

