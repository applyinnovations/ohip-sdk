/*
OPERA Cloud Export Configuration API

APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package expcfg

import (
	"encoding/json"
)

// checks if the ExportComponentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ExportComponentType{}

// ExportComponentType Details of a specific export component.
type ExportComponentType struct {
	// Indicates if the export has sensitive data
	ContainsSensitiveData *bool `json:"containsSensitiveData,omitempty"`
	// The description of the export.
	Description *string `json:"description,omitempty"`
	ExportFileId *UniqueIDType `json:"exportFileId,omitempty"`
	// Component export sequence
	ExportSequence *int32 `json:"exportSequence,omitempty"`
	// The file type of the export.
	FileType *string `json:"fileType,omitempty"`
	// The name of the parameter form used to collect runtime information.
	ParameterForm *string `json:"parameterForm,omitempty"`
}

// NewExportComponentType instantiates a new ExportComponentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewExportComponentType() *ExportComponentType {
	this := ExportComponentType{}
	return &this
}

// NewExportComponentTypeWithDefaults instantiates a new ExportComponentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewExportComponentTypeWithDefaults() *ExportComponentType {
	this := ExportComponentType{}
	return &this
}

// GetContainsSensitiveData returns the ContainsSensitiveData field value if set, zero value otherwise.
func (o *ExportComponentType) GetContainsSensitiveData() bool {
	if o == nil || IsNil(o.ContainsSensitiveData) {
		var ret bool
		return ret
	}
	return *o.ContainsSensitiveData
}

// GetContainsSensitiveDataOk returns a tuple with the ContainsSensitiveData field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportComponentType) GetContainsSensitiveDataOk() (*bool, bool) {
	if o == nil || IsNil(o.ContainsSensitiveData) {
		return nil, false
	}
	return o.ContainsSensitiveData, true
}

// HasContainsSensitiveData returns a boolean if a field has been set.
func (o *ExportComponentType) HasContainsSensitiveData() bool {
	if o != nil && !IsNil(o.ContainsSensitiveData) {
		return true
	}

	return false
}

// SetContainsSensitiveData gets a reference to the given bool and assigns it to the ContainsSensitiveData field.
func (o *ExportComponentType) SetContainsSensitiveData(v bool) {
	o.ContainsSensitiveData = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ExportComponentType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportComponentType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ExportComponentType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ExportComponentType) SetDescription(v string) {
	o.Description = &v
}

// GetExportFileId returns the ExportFileId field value if set, zero value otherwise.
func (o *ExportComponentType) GetExportFileId() UniqueIDType {
	if o == nil || IsNil(o.ExportFileId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ExportFileId
}

// GetExportFileIdOk returns a tuple with the ExportFileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportComponentType) GetExportFileIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ExportFileId) {
		return nil, false
	}
	return o.ExportFileId, true
}

// HasExportFileId returns a boolean if a field has been set.
func (o *ExportComponentType) HasExportFileId() bool {
	if o != nil && !IsNil(o.ExportFileId) {
		return true
	}

	return false
}

// SetExportFileId gets a reference to the given UniqueIDType and assigns it to the ExportFileId field.
func (o *ExportComponentType) SetExportFileId(v UniqueIDType) {
	o.ExportFileId = &v
}

// GetExportSequence returns the ExportSequence field value if set, zero value otherwise.
func (o *ExportComponentType) GetExportSequence() int32 {
	if o == nil || IsNil(o.ExportSequence) {
		var ret int32
		return ret
	}
	return *o.ExportSequence
}

// GetExportSequenceOk returns a tuple with the ExportSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportComponentType) GetExportSequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.ExportSequence) {
		return nil, false
	}
	return o.ExportSequence, true
}

// HasExportSequence returns a boolean if a field has been set.
func (o *ExportComponentType) HasExportSequence() bool {
	if o != nil && !IsNil(o.ExportSequence) {
		return true
	}

	return false
}

// SetExportSequence gets a reference to the given int32 and assigns it to the ExportSequence field.
func (o *ExportComponentType) SetExportSequence(v int32) {
	o.ExportSequence = &v
}

// GetFileType returns the FileType field value if set, zero value otherwise.
func (o *ExportComponentType) GetFileType() string {
	if o == nil || IsNil(o.FileType) {
		var ret string
		return ret
	}
	return *o.FileType
}

// GetFileTypeOk returns a tuple with the FileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportComponentType) GetFileTypeOk() (*string, bool) {
	if o == nil || IsNil(o.FileType) {
		return nil, false
	}
	return o.FileType, true
}

// HasFileType returns a boolean if a field has been set.
func (o *ExportComponentType) HasFileType() bool {
	if o != nil && !IsNil(o.FileType) {
		return true
	}

	return false
}

// SetFileType gets a reference to the given string and assigns it to the FileType field.
func (o *ExportComponentType) SetFileType(v string) {
	o.FileType = &v
}

// GetParameterForm returns the ParameterForm field value if set, zero value otherwise.
func (o *ExportComponentType) GetParameterForm() string {
	if o == nil || IsNil(o.ParameterForm) {
		var ret string
		return ret
	}
	return *o.ParameterForm
}

// GetParameterFormOk returns a tuple with the ParameterForm field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ExportComponentType) GetParameterFormOk() (*string, bool) {
	if o == nil || IsNil(o.ParameterForm) {
		return nil, false
	}
	return o.ParameterForm, true
}

// HasParameterForm returns a boolean if a field has been set.
func (o *ExportComponentType) HasParameterForm() bool {
	if o != nil && !IsNil(o.ParameterForm) {
		return true
	}

	return false
}

// SetParameterForm gets a reference to the given string and assigns it to the ParameterForm field.
func (o *ExportComponentType) SetParameterForm(v string) {
	o.ParameterForm = &v
}

func (o ExportComponentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ExportComponentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ContainsSensitiveData) {
		toSerialize["containsSensitiveData"] = o.ContainsSensitiveData
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.ExportFileId) {
		toSerialize["exportFileId"] = o.ExportFileId
	}
	if !IsNil(o.ExportSequence) {
		toSerialize["exportSequence"] = o.ExportSequence
	}
	if !IsNil(o.FileType) {
		toSerialize["fileType"] = o.FileType
	}
	if !IsNil(o.ParameterForm) {
		toSerialize["parameterForm"] = o.ParameterForm
	}
	return toSerialize, nil
}

type NullableExportComponentType struct {
	value *ExportComponentType
	isSet bool
}

func (v NullableExportComponentType) Get() *ExportComponentType {
	return v.value
}

func (v *NullableExportComponentType) Set(val *ExportComponentType) {
	v.value = val
	v.isSet = true
}

func (v NullableExportComponentType) IsSet() bool {
	return v.isSet
}

func (v *NullableExportComponentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableExportComponentType(val *ExportComponentType) *NullableExportComponentType {
	return &NullableExportComponentType{value: val, isSet: true}
}

func (v NullableExportComponentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableExportComponentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


