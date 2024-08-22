/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
 * Request object for changing channel marketing texts.
 * @export
 * @interface ChannelMarketingTextToChange
 */
export interface ChannelMarketingTextToChange {
    /**
     * List of channel marketing texts to be changed.
     * @type {Array<MarketingTextType>}
     * @memberof ChannelMarketingTextToChange
     */
    changeChannelMarketingTexts?: Array<MarketingTextType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelMarketingTextToChange
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelMarketingTextToChange
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelMarketingTextToChange interface.
 */
export function instanceOfChannelMarketingTextToChange(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelMarketingTextToChangeFromJSON(json: any): ChannelMarketingTextToChange {
    return ChannelMarketingTextToChangeFromJSONTyped(json, false);
}

export function ChannelMarketingTextToChangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelMarketingTextToChange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'changeChannelMarketingTexts': !exists(json, 'changeChannelMarketingTexts') ? undefined : ((json['changeChannelMarketingTexts'] as Array<any>).map(MarketingTextTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelMarketingTextToChangeToJSON(value?: ChannelMarketingTextToChange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'changeChannelMarketingTexts': value.changeChannelMarketingTexts === undefined ? undefined : ((value.changeChannelMarketingTexts as Array<any>).map(MarketingTextTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

