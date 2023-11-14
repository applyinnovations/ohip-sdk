/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateGuaranteeCodeScheduleDetailType } from './CreateGuaranteeCodeScheduleDetailType';
import {
    CreateGuaranteeCodeScheduleDetailTypeFromJSON,
    CreateGuaranteeCodeScheduleDetailTypeFromJSONTyped,
    CreateGuaranteeCodeScheduleDetailTypeToJSON,
} from './CreateGuaranteeCodeScheduleDetailType';

/**
 * The Guarantee Code Schedule Type.
 * @export
 * @interface CreateGuaranteeCodeScheduleType
 */
export interface CreateGuaranteeCodeScheduleType {
    /**
     * Hotel code for the Guarantee Code Schedule.
     * @type {string}
     * @memberof CreateGuaranteeCodeScheduleType
     */
    hotelId?: string;
    /**
     * 
     * @type {CreateGuaranteeCodeScheduleDetailType}
     * @memberof CreateGuaranteeCodeScheduleType
     */
    scheduleDetail?: CreateGuaranteeCodeScheduleDetailType;
}

/**
 * Check if a given object implements the CreateGuaranteeCodeScheduleType interface.
 */
export function instanceOfCreateGuaranteeCodeScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateGuaranteeCodeScheduleTypeFromJSON(json: any): CreateGuaranteeCodeScheduleType {
    return CreateGuaranteeCodeScheduleTypeFromJSONTyped(json, false);
}

export function CreateGuaranteeCodeScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateGuaranteeCodeScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'scheduleDetail': !exists(json, 'scheduleDetail') ? undefined : CreateGuaranteeCodeScheduleDetailTypeFromJSON(json['scheduleDetail']),
    };
}

export function CreateGuaranteeCodeScheduleTypeToJSON(value?: CreateGuaranteeCodeScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'scheduleDetail': CreateGuaranteeCodeScheduleDetailTypeToJSON(value.scheduleDetail),
    };
}
