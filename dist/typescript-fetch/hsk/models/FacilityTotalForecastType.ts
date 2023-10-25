/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityCodeForecastType } from './FacilityCodeForecastType';
import {
    FacilityCodeForecastTypeFromJSON,
    FacilityCodeForecastTypeFromJSONTyped,
    FacilityCodeForecastTypeToJSON,
} from './FacilityCodeForecastType';
import type { ForecastTotalsQuantityType } from './ForecastTotalsQuantityType';
import {
    ForecastTotalsQuantityTypeFromJSON,
    ForecastTotalsQuantityTypeFromJSONTyped,
    ForecastTotalsQuantityTypeToJSON,
} from './ForecastTotalsQuantityType';

/**
 * The Total of the forecasts.
 * @export
 * @interface FacilityTotalForecastType
 */
export interface FacilityTotalForecastType {
    /**
     * Collection of facility codes with their forecasts.
     * @type {Array<FacilityCodeForecastType>}
     * @memberof FacilityTotalForecastType
     */
    totalFacilityCodes?: Array<FacilityCodeForecastType>;
    /**
     * Collection of dates and their total quantities.
     * @type {Array<ForecastTotalsQuantityType>}
     * @memberof FacilityTotalForecastType
     */
    totals?: Array<ForecastTotalsQuantityType>;
}

/**
 * Check if a given object implements the FacilityTotalForecastType interface.
 */
export function instanceOfFacilityTotalForecastType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityTotalForecastTypeFromJSON(json: any): FacilityTotalForecastType {
    return FacilityTotalForecastTypeFromJSONTyped(json, false);
}

export function FacilityTotalForecastTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityTotalForecastType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalFacilityCodes': !exists(json, 'totalFacilityCodes') ? undefined : ((json['totalFacilityCodes'] as Array<any>).map(FacilityCodeForecastTypeFromJSON)),
        'totals': !exists(json, 'totals') ? undefined : ((json['totals'] as Array<any>).map(ForecastTotalsQuantityTypeFromJSON)),
    };
}

export function FacilityTotalForecastTypeToJSON(value?: FacilityTotalForecastType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalFacilityCodes': value.totalFacilityCodes === undefined ? undefined : ((value.totalFacilityCodes as Array<any>).map(FacilityCodeForecastTypeToJSON)),
        'totals': value.totals === undefined ? undefined : ((value.totals as Array<any>).map(ForecastTotalsQuantityTypeToJSON)),
    };
}

