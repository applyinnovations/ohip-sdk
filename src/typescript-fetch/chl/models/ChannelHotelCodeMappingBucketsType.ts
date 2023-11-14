/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelHotelCodeMappingBucketType } from './ChannelHotelCodeMappingBucketType';
import {
    ChannelHotelCodeMappingBucketTypeFromJSON,
    ChannelHotelCodeMappingBucketTypeFromJSONTyped,
    ChannelHotelCodeMappingBucketTypeToJSON,
} from './ChannelHotelCodeMappingBucketType';

/**
 * Channel-hotel mapping buckets information.
 * @export
 * @interface ChannelHotelCodeMappingBucketsType
 */
export interface ChannelHotelCodeMappingBucketsType {
    /**
     * Flag indicating if channel resort mapping is available.
     * @type {boolean}
     * @memberof ChannelHotelCodeMappingBucketsType
     */
    available?: boolean;
    /**
     * Default rate code revenue thresholds.
     * @type {Array<ChannelHotelCodeMappingBucketType>}
     * @memberof ChannelHotelCodeMappingBucketsType
     */
    channelHotelCodeMappingBucket?: Array<ChannelHotelCodeMappingBucketType>;
    /**
     * Default rate code to be used to calculate the total revenue.
     * @type {string}
     * @memberof ChannelHotelCodeMappingBucketsType
     */
    defaultRateCode?: string;
}

/**
 * Check if a given object implements the ChannelHotelCodeMappingBucketsType interface.
 */
export function instanceOfChannelHotelCodeMappingBucketsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelHotelCodeMappingBucketsTypeFromJSON(json: any): ChannelHotelCodeMappingBucketsType {
    return ChannelHotelCodeMappingBucketsTypeFromJSONTyped(json, false);
}

export function ChannelHotelCodeMappingBucketsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelHotelCodeMappingBucketsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': !exists(json, 'available') ? undefined : json['available'],
        'channelHotelCodeMappingBucket': !exists(json, 'channelHotelCodeMappingBucket') ? undefined : ((json['channelHotelCodeMappingBucket'] as Array<any>).map(ChannelHotelCodeMappingBucketTypeFromJSON)),
        'defaultRateCode': !exists(json, 'defaultRateCode') ? undefined : json['defaultRateCode'],
    };
}

export function ChannelHotelCodeMappingBucketsTypeToJSON(value?: ChannelHotelCodeMappingBucketsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
        'channelHotelCodeMappingBucket': value.channelHotelCodeMappingBucket === undefined ? undefined : ((value.channelHotelCodeMappingBucket as Array<any>).map(ChannelHotelCodeMappingBucketTypeToJSON)),
        'defaultRateCode': value.defaultRateCode,
    };
}
