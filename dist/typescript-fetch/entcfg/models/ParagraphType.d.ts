/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FormattedTextTextType } from './FormattedTextTextType';
/**
 * An indication of a new paragraph for a sub-section of a formatted text message.
 * @export
 * @interface ParagraphType
 */
export interface ParagraphType {
    /**
     * An image for this paragraph.
     * @type {string}
     * @memberof ParagraphType
     */
    image?: string;
    /**
     *
     * @type {FormattedTextTextType}
     * @memberof ParagraphType
     */
    text?: FormattedTextTextType;
    /**
     * A URL for this paragraph.
     * @type {string}
     * @memberof ParagraphType
     */
    url?: string;
}
/**
 * Check if a given object implements the ParagraphType interface.
 */
export declare function instanceOfParagraphType(value: object): boolean;
export declare function ParagraphTypeFromJSON(json: any): ParagraphType;
export declare function ParagraphTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParagraphType;
export declare function ParagraphTypeToJSON(value?: ParagraphType | null): any;
