/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TrackItGroupType
 */
export interface TrackItGroupType {
    /**
     * Indicates if the Track It belongs to the Baggage Group.
     * @type {boolean}
     * @memberof TrackItGroupType
     */
    baggage?: boolean;
    /**
     * Indicates if the Track It belongs to the Lost Group.
     * @type {boolean}
     * @memberof TrackItGroupType
     */
    lost?: boolean;
    /**
     * Indicates if the Track It belongs to the Parcel Group.
     * @type {boolean}
     * @memberof TrackItGroupType
     */
    parcel?: boolean;
    /**
     * Indicates if the Track It belongs to the Valet Group.
     * @type {boolean}
     * @memberof TrackItGroupType
     */
    valet?: boolean;
}

/**
 * Check if a given object implements the TrackItGroupType interface.
 */
export function instanceOfTrackItGroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackItGroupTypeFromJSON(json: any): TrackItGroupType {
    return TrackItGroupTypeFromJSONTyped(json, false);
}

export function TrackItGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItGroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baggage': !exists(json, 'baggage') ? undefined : json['baggage'],
        'lost': !exists(json, 'lost') ? undefined : json['lost'],
        'parcel': !exists(json, 'parcel') ? undefined : json['parcel'],
        'valet': !exists(json, 'valet') ? undefined : json['valet'],
    };
}

export function TrackItGroupTypeToJSON(value?: TrackItGroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baggage': value.baggage,
        'lost': value.lost,
        'parcel': value.parcel,
        'valet': value.valet,
    };
}

