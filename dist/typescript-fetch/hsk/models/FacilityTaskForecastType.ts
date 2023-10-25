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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { FacilityCodeForecastType } from './FacilityCodeForecastType';
import {
    FacilityCodeForecastTypeFromJSON,
    FacilityCodeForecastTypeFromJSONTyped,
    FacilityCodeForecastTypeToJSON,
} from './FacilityCodeForecastType';
import type { ForecastQuantityType } from './ForecastQuantityType';
import {
    ForecastQuantityTypeFromJSON,
    ForecastQuantityTypeFromJSONTyped,
    ForecastQuantityTypeToJSON,
} from './ForecastQuantityType';

/**
 * A facility task and its forecast.
 * @export
 * @interface FacilityTaskForecastType
 */
export interface FacilityTaskForecastType {
    /**
     * Collection of facility codes with their forecasts.
     * @type {Array<FacilityCodeForecastType>}
     * @memberof FacilityTaskForecastType
     */
    facilityCodes?: Array<FacilityCodeForecastType>;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof FacilityTaskForecastType
     */
    task?: CodeDescriptionType;
    /**
     * Collection of dates and their quantities.
     * @type {Array<ForecastQuantityType>}
     * @memberof FacilityTaskForecastType
     */
    taskForecast?: Array<ForecastQuantityType>;
}

/**
 * Check if a given object implements the FacilityTaskForecastType interface.
 */
export function instanceOfFacilityTaskForecastType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityTaskForecastTypeFromJSON(json: any): FacilityTaskForecastType {
    return FacilityTaskForecastTypeFromJSONTyped(json, false);
}

export function FacilityTaskForecastTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityTaskForecastType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityCodes': !exists(json, 'facilityCodes') ? undefined : ((json['facilityCodes'] as Array<any>).map(FacilityCodeForecastTypeFromJSON)),
        'task': !exists(json, 'task') ? undefined : CodeDescriptionTypeFromJSON(json['task']),
        'taskForecast': !exists(json, 'taskForecast') ? undefined : ((json['taskForecast'] as Array<any>).map(ForecastQuantityTypeFromJSON)),
    };
}

export function FacilityTaskForecastTypeToJSON(value?: FacilityTaskForecastType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityCodes': value.facilityCodes === undefined ? undefined : ((value.facilityCodes as Array<any>).map(FacilityCodeForecastTypeToJSON)),
        'task': CodeDescriptionTypeToJSON(value.task),
        'taskForecast': value.taskForecast === undefined ? undefined : ((value.taskForecast as Array<any>).map(ForecastQuantityTypeToJSON)),
    };
}

