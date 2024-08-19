/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
