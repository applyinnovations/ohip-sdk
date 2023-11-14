/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CopyConfigurationCodeType } from './CopyConfigurationCodeType';
import {
    CopyConfigurationCodeTypeFromJSON,
    CopyConfigurationCodeTypeFromJSONTyped,
    CopyConfigurationCodeTypeToJSON,
} from './CopyConfigurationCodeType';
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
 * 
 * @export
 * @interface CopyTrackItActions
 */
export interface CopyTrackItActions {
    /**
     * 
     * @type {Links}
     * @memberof CopyTrackItActions
     */
    links?: Links;
    /**
     * List of Track it Actions to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof CopyTrackItActions
     */
    trackItActions?: Array<CopyConfigurationCodeType>;
    /**
     * 
     * @type {WarningsType}
     * @memberof CopyTrackItActions
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CopyTrackItActions interface.
 */
export function instanceOfCopyTrackItActions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyTrackItActionsFromJSON(json: any): CopyTrackItActions {
    return CopyTrackItActionsFromJSONTyped(json, false);
}

export function CopyTrackItActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyTrackItActions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'trackItActions': !exists(json, 'trackItActions') ? undefined : ((json['trackItActions'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CopyTrackItActionsToJSON(value?: CopyTrackItActions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'trackItActions': value.trackItActions === undefined ? undefined : ((value.trackItActions as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
