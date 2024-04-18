/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HotelInfoType } from './HotelInfoType';
import {
    HotelInfoTypeFromJSON,
    HotelInfoTypeFromJSONTyped,
    HotelInfoTypeToJSON,
} from './HotelInfoType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MasterInfoType } from './MasterInfoType';
import {
    MasterInfoTypeFromJSON,
    MasterInfoTypeFromJSONTyped,
    MasterInfoTypeToJSON,
} from './MasterInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Property configuration information.
 * @export
 * @interface HotelDetails
 */
export interface HotelDetails {
    /**
     * 
     * @type {HotelInfoType}
     * @memberof HotelDetails
     */
    hotelConfigInfo?: HotelInfoType;
    /**
     * Refer to Generic common types document.
     * @type {Array<MasterInfoType>}
     * @memberof HotelDetails
     */
    masterInfoList?: Array<MasterInfoType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HotelDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HotelDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HotelDetails interface.
 */
export function instanceOfHotelDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelDetailsFromJSON(json: any): HotelDetails {
    return HotelDetailsFromJSONTyped(json, false);
}

export function HotelDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelConfigInfo': !exists(json, 'hotelConfigInfo') ? undefined : HotelInfoTypeFromJSON(json['hotelConfigInfo']),
        'masterInfoList': !exists(json, 'masterInfoList') ? undefined : ((json['masterInfoList'] as Array<any>).map(MasterInfoTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HotelDetailsToJSON(value?: HotelDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelConfigInfo': HotelInfoTypeToJSON(value.hotelConfigInfo),
        'masterInfoList': value.masterInfoList === undefined ? undefined : ((value.masterInfoList as Array<any>).map(MasterInfoTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
