/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ParagraphType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ParagraphType{}

// ParagraphType An indication of a new paragraph for a sub-section of a formatted text message.
type ParagraphType struct {
	// An image for this paragraph.
	Image *string `json:"image,omitempty"`
	Text *FormattedTextTextType `json:"text,omitempty"`
	// A URL for this paragraph.
	Url *string `json:"url,omitempty"`
}

// NewParagraphType instantiates a new ParagraphType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewParagraphType() *ParagraphType {
	this := ParagraphType{}
	return &this
}

// NewParagraphTypeWithDefaults instantiates a new ParagraphType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewParagraphTypeWithDefaults() *ParagraphType {
	this := ParagraphType{}
	return &this
}

// GetImage returns the Image field value if set, zero value otherwise.
func (o *ParagraphType) GetImage() string {
	if o == nil || IsNil(o.Image) {
		var ret string
		return ret
	}
	return *o.Image
}

// GetImageOk returns a tuple with the Image field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParagraphType) GetImageOk() (*string, bool) {
	if o == nil || IsNil(o.Image) {
		return nil, false
	}
	return o.Image, true
}

// HasImage returns a boolean if a field has been set.
func (o *ParagraphType) HasImage() bool {
	if o != nil && !IsNil(o.Image) {
		return true
	}

	return false
}

// SetImage gets a reference to the given string and assigns it to the Image field.
func (o *ParagraphType) SetImage(v string) {
	o.Image = &v
}

// GetText returns the Text field value if set, zero value otherwise.
func (o *ParagraphType) GetText() FormattedTextTextType {
	if o == nil || IsNil(o.Text) {
		var ret FormattedTextTextType
		return ret
	}
	return *o.Text
}

// GetTextOk returns a tuple with the Text field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParagraphType) GetTextOk() (*FormattedTextTextType, bool) {
	if o == nil || IsNil(o.Text) {
		return nil, false
	}
	return o.Text, true
}

// HasText returns a boolean if a field has been set.
func (o *ParagraphType) HasText() bool {
	if o != nil && !IsNil(o.Text) {
		return true
	}

	return false
}

// SetText gets a reference to the given FormattedTextTextType and assigns it to the Text field.
func (o *ParagraphType) SetText(v FormattedTextTextType) {
	o.Text = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *ParagraphType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ParagraphType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *ParagraphType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *ParagraphType) SetUrl(v string) {
	o.Url = &v
}

func (o ParagraphType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ParagraphType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Image) {
		toSerialize["image"] = o.Image
	}
	if !IsNil(o.Text) {
		toSerialize["text"] = o.Text
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableParagraphType struct {
	value *ParagraphType
	isSet bool
}

func (v NullableParagraphType) Get() *ParagraphType {
	return v.value
}

func (v *NullableParagraphType) Set(val *ParagraphType) {
	v.value = val
	v.isSet = true
}

func (v NullableParagraphType) IsSet() bool {
	return v.isSet
}

func (v *NullableParagraphType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableParagraphType(val *ParagraphType) *NullableParagraphType {
	return &NullableParagraphType{value: val, isSet: true}
}

func (v NullableParagraphType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableParagraphType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


