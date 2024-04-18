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
import type { CopyMarketingTextTypeCopyFrom } from './CopyMarketingTextTypeCopyFrom';
import {
    CopyMarketingTextTypeCopyFromFromJSON,
    CopyMarketingTextTypeCopyFromFromJSONTyped,
    CopyMarketingTextTypeCopyFromToJSON,
} from './CopyMarketingTextTypeCopyFrom';
import type { CopyMarketingTextTypeCopyTo } from './CopyMarketingTextTypeCopyTo';
import {
    CopyMarketingTextTypeCopyToFromJSON,
    CopyMarketingTextTypeCopyToFromJSONTyped,
    CopyMarketingTextTypeCopyToToJSON,
} from './CopyMarketingTextTypeCopyTo';

/**
 * Copy Channel Marketing Text among Channels
 * @export
 * @interface CopyMarketingTextType
 */
export interface CopyMarketingTextType {
    /**
     * 
     * @type {CopyMarketingTextTypeCopyFrom}
     * @memberof CopyMarketingTextType
     */
    copyFrom?: CopyMarketingTextTypeCopyFrom;
    /**
     * 
     * @type {CopyMarketingTextTypeCopyTo}
     * @memberof CopyMarketingTextType
     */
    copyTo?: CopyMarketingTextTypeCopyTo;
}

/**
 * Check if a given object implements the CopyMarketingTextType interface.
 */
export function instanceOfCopyMarketingTextType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyMarketingTextTypeFromJSON(json: any): CopyMarketingTextType {
    return CopyMarketingTextTypeFromJSONTyped(json, false);
}

export function CopyMarketingTextTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyMarketingTextType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyFrom': !exists(json, 'copyFrom') ? undefined : CopyMarketingTextTypeCopyFromFromJSON(json['copyFrom']),
        'copyTo': !exists(json, 'copyTo') ? undefined : CopyMarketingTextTypeCopyToFromJSON(json['copyTo']),
    };
}

export function CopyMarketingTextTypeToJSON(value?: CopyMarketingTextType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyFrom': CopyMarketingTextTypeCopyFromToJSON(value.copyFrom),
        'copyTo': CopyMarketingTextTypeCopyToToJSON(value.copyTo),
    };
}
