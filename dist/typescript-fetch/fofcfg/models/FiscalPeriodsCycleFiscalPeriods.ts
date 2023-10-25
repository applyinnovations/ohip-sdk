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
import type { CycleFiscalPeriodType } from './CycleFiscalPeriodType';
import {
    CycleFiscalPeriodTypeFromJSON,
    CycleFiscalPeriodTypeFromJSONTyped,
    CycleFiscalPeriodTypeToJSON,
} from './CycleFiscalPeriodType';

/**
 * Details of the Cycle Fiscal Periods
 * @export
 * @interface FiscalPeriodsCycleFiscalPeriods
 */
export interface FiscalPeriodsCycleFiscalPeriods {
    /**
     * List of Cycle Fiscal Periods.
     * @type {Array<CycleFiscalPeriodType>}
     * @memberof FiscalPeriodsCycleFiscalPeriods
     */
    cycleFiscalPeriods?: Array<CycleFiscalPeriodType>;
    /**
     * If true all overlapping periods will be deleted. No further confirmation required.
     * @type {boolean}
     * @memberof FiscalPeriodsCycleFiscalPeriods
     */
    forceDelete?: boolean;
}

/**
 * Check if a given object implements the FiscalPeriodsCycleFiscalPeriods interface.
 */
export function instanceOfFiscalPeriodsCycleFiscalPeriods(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalPeriodsCycleFiscalPeriodsFromJSON(json: any): FiscalPeriodsCycleFiscalPeriods {
    return FiscalPeriodsCycleFiscalPeriodsFromJSONTyped(json, false);
}

export function FiscalPeriodsCycleFiscalPeriodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalPeriodsCycleFiscalPeriods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cycleFiscalPeriods': !exists(json, 'cycleFiscalPeriods') ? undefined : ((json['cycleFiscalPeriods'] as Array<any>).map(CycleFiscalPeriodTypeFromJSON)),
        'forceDelete': !exists(json, 'forceDelete') ? undefined : json['forceDelete'],
    };
}

export function FiscalPeriodsCycleFiscalPeriodsToJSON(value?: FiscalPeriodsCycleFiscalPeriods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cycleFiscalPeriods': value.cycleFiscalPeriods === undefined ? undefined : ((value.cycleFiscalPeriods as Array<any>).map(CycleFiscalPeriodTypeToJSON)),
        'forceDelete': value.forceDelete,
    };
}

