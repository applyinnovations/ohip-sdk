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
import type { ChannelNegotiatedRateDetailsChannelNegRates } from './ChannelNegotiatedRateDetailsChannelNegRates';
import {
    ChannelNegotiatedRateDetailsChannelNegRatesFromJSON,
    ChannelNegotiatedRateDetailsChannelNegRatesFromJSONTyped,
    ChannelNegotiatedRateDetailsChannelNegRatesToJSON,
} from './ChannelNegotiatedRateDetailsChannelNegRates';
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
 * Response object for fetching Negotiated channel rates.
 * @export
 * @interface ChannelNegotiatedRateDetails
 */
export interface ChannelNegotiatedRateDetails {
    /**
     * 
     * @type {ChannelNegotiatedRateDetailsChannelNegRates}
     * @memberof ChannelNegotiatedRateDetails
     */
    channelNegRates?: ChannelNegotiatedRateDetailsChannelNegRates;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelNegotiatedRateDetails
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelNegotiatedRateDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelNegotiatedRateDetails interface.
 */
export function instanceOfChannelNegotiatedRateDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelNegotiatedRateDetailsFromJSON(json: any): ChannelNegotiatedRateDetails {
    return ChannelNegotiatedRateDetailsFromJSONTyped(json, false);
}

export function ChannelNegotiatedRateDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelNegotiatedRateDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelNegRates': !exists(json, 'channelNegRates') ? undefined : ChannelNegotiatedRateDetailsChannelNegRatesFromJSON(json['channelNegRates']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelNegotiatedRateDetailsToJSON(value?: ChannelNegotiatedRateDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelNegRates': ChannelNegotiatedRateDetailsChannelNegRatesToJSON(value.channelNegRates),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

