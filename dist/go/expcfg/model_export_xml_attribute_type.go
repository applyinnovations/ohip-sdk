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

// checks if the ExportXMLAttributeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportXMLAttributeType{}

// ExportXMLAttributeType Base type that holds information related to xml tag types
type ExportXMLAttributeType struct {
	ExportDataId *UniqueIDType `json:"exportDataId,omitempty"`
	Length *ExportColumnLengthType `json:"length,omitempty"`
	// XML Tag name
	Name *string `json:"name,omitempty"`
	ParentDataID *UniqueIDType `json:"parentDataID,omitempty"`
	// Determines if the tag need to be present in the data even if there is no value available
	Required *bool `json:"required,omitempty"`
	// Value for XML tag
	Value *string `json:"value,omitempty"`
}

// NewExportXMLAttributeType instantiates a new ExportXMLAttributeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportXMLAttributeType() *ExportXMLAttributeType {
	this := ExportXMLAttributeType{}
	return &this
}

// NewExportXMLAttributeTypeWithDefaults instantiates a new ExportXMLAttributeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportXMLAttributeTypeWithDefaults() *ExportXMLAttributeType {
	this := ExportXMLAttributeType{}
	return &this
}

// GetExportDataId returns the ExportDataId field value if set, zero value otherwise.
func (o *ExportXMLAttributeType) GetExportDataId() UniqueIDType {
	if o == nil || IsNil(o.ExportDataId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ExportDataId
}

// GetExportDataIdOk returns a tuple with the ExportDataId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLAttributeType) GetExportDataIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ExportDataId) {
		return nil, false
	}
	return o.ExportDataId, true
}

// HasExportDataId returns a boolean if a field has been set.
func (o *ExportXMLAttributeType) HasExportDataId() bool {
	if o != nil && !IsNil(o.ExportDataId) {
		return true
	}

	return false
}

// SetExportDataId gets a reference to the given UniqueIDType and assigns it to the ExportDataId field.
func (o *ExportXMLAttributeType) SetExportDataId(v UniqueIDType) {
	o.ExportDataId = &v
}

// GetLength returns the Length field value if set, zero value otherwise.
func (o *ExportXMLAttributeType) GetLength() ExportColumnLengthType {
	if o == nil || IsNil(o.Length) {
		var ret ExportColumnLengthType
		return ret
	}
	return *o.Length
}

// GetLengthOk returns a tuple with the Length field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLAttributeType) GetLengthOk() (*ExportColumnLengthType, bool) {
	if o == nil || IsNil(o.Length) {
		return nil, false
	}
	return o.Length, true
}

// HasLength returns a boolean if a field has been set.
func (o *ExportXMLAttributeType) HasLength() bool {
	if o != nil && !IsNil(o.Length) {
		return true
	}

	return false
}

// SetLength gets a reference to the given ExportColumnLengthType and assigns it to the Length field.
func (o *ExportXMLAttributeType) SetLength(v ExportColumnLengthType) {
	o.Length = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ExportXMLAttributeType) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLAttributeType) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ExportXMLAttributeType) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ExportXMLAttributeType) SetName(v string) {
	o.Name = &v
}

// GetParentDataID returns the ParentDataID field value if set, zero value otherwise.
func (o *ExportXMLAttributeType) GetParentDataID() UniqueIDType {
	if o == nil || IsNil(o.ParentDataID) {
		var ret UniqueIDType
		return ret
	}
	return *o.ParentDataID
}

// GetParentDataIDOk returns a tuple with the ParentDataID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLAttributeType) GetParentDataIDOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ParentDataID) {
		return nil, false
	}
	return o.ParentDataID, true
}

// HasParentDataID returns a boolean if a field has been set.
func (o *ExportXMLAttributeType) HasParentDataID() bool {
	if o != nil && !IsNil(o.ParentDataID) {
		return true
	}

	return false
}

// SetParentDataID gets a reference to the given UniqueIDType and assigns it to the ParentDataID field.
func (o *ExportXMLAttributeType) SetParentDataID(v UniqueIDType) {
	o.ParentDataID = &v
}

// GetRequired returns the Required field value if set, zero value otherwise.
func (o *ExportXMLAttributeType) GetRequired() bool {
	if o == nil || IsNil(o.Required) {
		var ret bool
		return ret
	}
	return *o.Required
}

// GetRequiredOk returns a tuple with the Required field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLAttributeType) GetRequiredOk() (*bool, bool) {
	if o == nil || IsNil(o.Required) {
		return nil, false
	}
	return o.Required, true
}

// HasRequired returns a boolean if a field has been set.
func (o *ExportXMLAttributeType) HasRequired() bool {
	if o != nil && !IsNil(o.Required) {
		return true
	}

	return false
}

// SetRequired gets a reference to the given bool and assigns it to the Required field.
func (o *ExportXMLAttributeType) SetRequired(v bool) {
	o.Required = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *ExportXMLAttributeType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportXMLAttributeType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *ExportXMLAttributeType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *ExportXMLAttributeType) SetValue(v string) {
	o.Value = &v
}

func (o ExportXMLAttributeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportXMLAttributeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExportDataId) {
		toSerialize["exportDataId"] = o.ExportDataId
	}
	if !IsNil(o.Length) {
		toSerialize["length"] = o.Length
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	if !IsNil(o.ParentDataID) {
		toSerialize["parentDataID"] = o.ParentDataID
	}
	if !IsNil(o.Required) {
		toSerialize["required"] = o.Required
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableExportXMLAttributeType struct {
	value *ExportXMLAttributeType
	isSet bool
}

func (v NullableExportXMLAttributeType) Get() *ExportXMLAttributeType {
	return v.value
}

func (v *NullableExportXMLAttributeType) Set(val *ExportXMLAttributeType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportXMLAttributeType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportXMLAttributeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportXMLAttributeType(val *ExportXMLAttributeType) *NullableExportXMLAttributeType {
	return &NullableExportXMLAttributeType{value: val, isSet: true}
}

func (v NullableExportXMLAttributeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportXMLAttributeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


