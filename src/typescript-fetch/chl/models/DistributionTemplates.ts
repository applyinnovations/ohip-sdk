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
import type { DistributionTemplatesType } from './DistributionTemplatesType';
import {
    DistributionTemplatesTypeFromJSON,
    DistributionTemplatesTypeFromJSONTyped,
    DistributionTemplatesTypeToJSON,
} from './DistributionTemplatesType';
import type { HotelsDistributionTemplatesType } from './HotelsDistributionTemplatesType';
import {
    HotelsDistributionTemplatesTypeFromJSON,
    HotelsDistributionTemplatesTypeFromJSONTyped,
    HotelsDistributionTemplatesTypeToJSON,
} from './HotelsDistributionTemplatesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Response object for fetching distribution templates based on search criteria.
 * @export
 * @interface DistributionTemplates
 */
export interface DistributionTemplates {
    /**
     * 
     * @type {DistributionTemplatesType}
     * @memberof DistributionTemplates
     */
    distributionTemplates?: DistributionTemplatesType;
    /**
     * 
     * @type {HotelsDistributionTemplatesType}
     * @memberof DistributionTemplates
     */
    hotelsDistributionTemplates?: HotelsDistributionTemplatesType;
    /**
     * 
     * @type {Links}
     * @memberof DistributionTemplates
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof DistributionTemplates
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the DistributionTemplates interface.
 */
export function instanceOfDistributionTemplates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DistributionTemplatesFromJSON(json: any): DistributionTemplates {
    return DistributionTemplatesFromJSONTyped(json, false);
}

export function DistributionTemplatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistributionTemplates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'distributionTemplates': !exists(json, 'distributionTemplates') ? undefined : DistributionTemplatesTypeFromJSON(json['distributionTemplates']),
        'hotelsDistributionTemplates': !exists(json, 'hotelsDistributionTemplates') ? undefined : HotelsDistributionTemplatesTypeFromJSON(json['hotelsDistributionTemplates']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function DistributionTemplatesToJSON(value?: DistributionTemplates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'distributionTemplates': DistributionTemplatesTypeToJSON(value.distributionTemplates),
        'hotelsDistributionTemplates': HotelsDistributionTemplatesTypeToJSON(value.hotelsDistributionTemplates),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
