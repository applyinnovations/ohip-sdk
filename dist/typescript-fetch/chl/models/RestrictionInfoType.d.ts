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
import type { RestrictionInfoStatusType } from './RestrictionInfoStatusType';
/**
 *
 * @export
 * @interface RestrictionInfoType
 */
export interface RestrictionInfoType {
    /**
     *
     * @type {RestrictionInfoStatusType}
     * @memberof RestrictionInfoType
     */
    restrictionStatus?: RestrictionInfoStatusType;
}
/**
 * Check if a given object implements the RestrictionInfoType interface.
 */
export declare function instanceOfRestrictionInfoType(value: object): boolean;
export declare function RestrictionInfoTypeFromJSON(json: any): RestrictionInfoType;
export declare function RestrictionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionInfoType;
export declare function RestrictionInfoTypeToJSON(value?: RestrictionInfoType | null): any;
