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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MarketingTextType } from './MarketingTextType';
import {
    MarketingTextTypeFromJSON,
    MarketingTextTypeFromJSONTyped,
    MarketingTextTypeToJSON,
} from './MarketingTextType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostChannelMarketingTextRequest
 */
export interface PostChannelMarketingTextRequest {
    /**
     * List of channel marketing texts to be created.
     * @type {Array<MarketingTextType>}
     * @memberof PostChannelMarketingTextRequest
     */
    createChannelMarketingTexts?: Array<MarketingTextType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostChannelMarketingTextRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostChannelMarketingTextRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostChannelMarketingTextRequest interface.
 */
export function instanceOfPostChannelMarketingTextRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostChannelMarketingTextRequestFromJSON(json: any): PostChannelMarketingTextRequest {
    return PostChannelMarketingTextRequestFromJSONTyped(json, false);
}

export function PostChannelMarketingTextRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostChannelMarketingTextRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createChannelMarketingTexts': !exists(json, 'createChannelMarketingTexts') ? undefined : ((json['createChannelMarketingTexts'] as Array<any>).map(MarketingTextTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostChannelMarketingTextRequestToJSON(value?: PostChannelMarketingTextRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createChannelMarketingTexts': value.createChannelMarketingTexts === undefined ? undefined : ((value.createChannelMarketingTexts as Array<any>).map(MarketingTextTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

