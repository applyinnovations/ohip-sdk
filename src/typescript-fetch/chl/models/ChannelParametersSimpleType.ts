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
import type { ChannelParameterSimpleType } from './ChannelParameterSimpleType';
import {
    ChannelParameterSimpleTypeFromJSON,
    ChannelParameterSimpleTypeFromJSONTyped,
    ChannelParameterSimpleTypeToJSON,
} from './ChannelParameterSimpleType';

/**
 * Collection of channel parameters simple information.
 * @export
 * @interface ChannelParametersSimpleType
 */
export interface ChannelParametersSimpleType extends Array<ChannelParameterSimpleType> {
}

/**
 * Check if a given object implements the ChannelParametersSimpleType interface.
 */
export function instanceOfChannelParametersSimpleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelParametersSimpleTypeFromJSON(json: any): ChannelParametersSimpleType {
    return ChannelParametersSimpleTypeFromJSONTyped(json, false);
}

export function ChannelParametersSimpleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelParametersSimpleType {
    return json;
}

export function ChannelParametersSimpleTypeToJSON(value?: ChannelParametersSimpleType | null): any {
    return value;
}
