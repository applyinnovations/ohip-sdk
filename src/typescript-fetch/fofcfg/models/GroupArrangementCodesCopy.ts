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
 * @interface GroupArrangementCodesCopy
 */
export interface GroupArrangementCodesCopy {
    /**
     * List of the group arrangement codes to be copied.
     * @type {Array<CopyConfigurationCodeType>}
     * @memberof GroupArrangementCodesCopy
     */
    groupArrangementCode?: Array<CopyConfigurationCodeType>;
    /**
     * 
     * @type {Links}
     * @memberof GroupArrangementCodesCopy
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof GroupArrangementCodesCopy
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the GroupArrangementCodesCopy interface.
 */
export function instanceOfGroupArrangementCodesCopy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GroupArrangementCodesCopyFromJSON(json: any): GroupArrangementCodesCopy {
    return GroupArrangementCodesCopyFromJSONTyped(json, false);
}

export function GroupArrangementCodesCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupArrangementCodesCopy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupArrangementCode': !exists(json, 'groupArrangementCode') ? undefined : ((json['groupArrangementCode'] as Array<any>).map(CopyConfigurationCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function GroupArrangementCodesCopyToJSON(value?: GroupArrangementCodesCopy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupArrangementCode': value.groupArrangementCode === undefined ? undefined : ((value.groupArrangementCode as Array<any>).map(CopyConfigurationCodeTypeToJSON)),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
