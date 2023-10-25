/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { URLType } from './URLType';
import {
    URLTypeFromJSON,
    URLTypeFromJSONTyped,
    URLTypeToJSON,
} from './URLType';

/**
 * Identifies the kind of Parcel, Baggage, or Lost items or Valet-managed vehicles or services.
 * @export
 * @interface TrackItType
 */
export interface TrackItType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TrackItType
     */
    type?: CodeDescriptionType;
    /**
     * 
     * @type {URLType}
     * @memberof TrackItType
     */
    url?: URLType;
}

/**
 * Check if a given object implements the TrackItType interface.
 */
export function instanceOfTrackItType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackItTypeFromJSON(json: any): TrackItType {
    return TrackItTypeFromJSONTyped(json, false);
}

export function TrackItTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : CodeDescriptionTypeFromJSON(json['type']),
        'url': !exists(json, 'url') ? undefined : URLTypeFromJSON(json['url']),
    };
}

export function TrackItTypeToJSON(value?: TrackItType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': CodeDescriptionTypeToJSON(value.type),
        'url': URLTypeToJSON(value.url),
    };
}

