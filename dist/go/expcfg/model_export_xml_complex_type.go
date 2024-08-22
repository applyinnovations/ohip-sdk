/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the ExportXMLComplexType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportXMLComplexType{}

// ExportXMLComplexType XML simple type that holds all the information related to complex element tag
type ExportXMLComplexType struct {
	// XML attribute type that holds all the information related to attribute tag
	Attributes []ExportXMLAttributeType `json:"attributes,omitempty"`
	// XML element type that holds all the information related to element tag
	Elements []ExportXMLElementType `json:"elements,omitempty"`
	// XML simple tag name
	Name *string `json:"name,omitempty"`
}

// NewExportXMLComplexType instantiates a new ExportXMLComplexType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportXMLComplexType() *ExportXMLComplexType {
	this := ExportXMLComplexType{}
	return &this
}

// NewExportXMLComplexTypeWithDefaults instantiates a new ExportXMLComplexType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportXMLComplexTypeWithDefaults() *ExportXMLComplexType {
	this := ExportXMLComplexType{}
	return &this
}

// GetAttributes returns the Attributes field value if set, zero value otherwise.
func (o *ExportXMLComplexType) GetAttributes() []ExportXMLAttributeType {
	if o == nil || IsNil(o.Attributes) {
		var ret []ExportXMLAttributeType
		return ret
	}
	return o.Attributes
}

// GetAttributesOk returns a tuple with the Attributes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLComplexType) GetAttributesOk() ([]ExportXMLAttributeType, bool) {
	if o == nil || IsNil(o.Attributes) {
		return nil, false
	}
	return o.Attributes, true
}

// HasAttributes returns a boolean if a field has been set.
func (o *ExportXMLComplexType) HasAttributes() bool {
	if o != nil && !IsNil(o.Attributes) {
		return true
	}

	return false
}

// SetAttributes gets a reference to the given []ExportXMLAttributeType and assigns it to the Attributes field.
func (o *ExportXMLComplexType) SetAttributes(v []ExportXMLAttributeType) {
	o.Attributes = v
}

// GetElements returns the Elements field value if set, zero value otherwise.
func (o *ExportXMLComplexType) GetElements() []ExportXMLElementType {
	if o == nil || IsNil(o.Elements) {
		var ret []ExportXMLElementType
		return ret
	}
	return o.Elements
}

// GetElementsOk returns a tuple with the Elements field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLComplexType) GetElementsOk() ([]ExportXMLElementType, bool) {
	if o == nil || IsNil(o.Elements) {
		return nil, false
	}
	return o.Elements, true
}

// HasElements returns a boolean if a field has been set.
func (o *ExportXMLComplexType) HasElements() bool {
	if o != nil && !IsNil(o.Elements) {
		return true
	}

	return false
}

// SetElements gets a reference to the given []ExportXMLElementType and assigns it to the Elements field.
func (o *ExportXMLComplexType) SetElements(v []ExportXMLElementType) {
	o.Elements = v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ExportXMLComplexType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLComplexType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ExportXMLComplexType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ExportXMLComplexType) SetName(v string) {
	o.Name = &v
}

func (o ExportXMLComplexType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportXMLComplexType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attributes) {
		toSerialize["attributes"] = o.Attributes
	}
	if !IsNil(o.Elements) {
		toSerialize["elements"] = o.Elements
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	return toSerialize, nil
}

type NullableExportXMLComplexType struct {
	value *ExportXMLComplexType
	isSet bool
}

func (v NullableExportXMLComplexType) Get() *ExportXMLComplexType {
	return v.value
}

func (v *NullableExportXMLComplexType) Set(val *ExportXMLComplexType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportXMLComplexType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportXMLComplexType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportXMLComplexType(val *ExportXMLComplexType) *NullableExportXMLComplexType {
	return &NullableExportXMLComplexType{value: val, isSet: true}
}

func (v NullableExportXMLComplexType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportXMLComplexType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


