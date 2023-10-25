/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the CommissionPaymentReportType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionPaymentReportType{}

// CommissionPaymentReportType Contains report id, batch id (for check payments) or export file (for eft payments)
type CommissionPaymentReportType struct {
	BatchId *UniqueIDType `json:"batchId,omitempty"`
	// If payment method is EFT, batch name of the payments.
	BatchName *string `json:"batchName,omitempty"`
	// If payment method is EFT, Export BLOB file from database in base64 binary format.
	ExportBlobFile *string `json:"exportBlobFile,omitempty"`
	// If payment method is EFT, file location of the file generated.
	ExportFile *string `json:"exportFile,omitempty"`
	ReportId *UniqueIDType `json:"reportId,omitempty"`
}

// NewCommissionPaymentReportType instantiates a new CommissionPaymentReportType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionPaymentReportType() *CommissionPaymentReportType {
	this := CommissionPaymentReportType{}
	return &this
}

// NewCommissionPaymentReportTypeWithDefaults instantiates a new CommissionPaymentReportType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionPaymentReportTypeWithDefaults() *CommissionPaymentReportType {
	this := CommissionPaymentReportType{}
	return &this
}

// GetBatchId returns the BatchId field value if set, zero value otherwise.
func (o *CommissionPaymentReportType) GetBatchId() UniqueIDType {
	if o == nil || IsNil(o.BatchId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BatchId
}

// GetBatchIdOk returns a tuple with the BatchId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentReportType) GetBatchIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BatchId) {
		return nil, false
	}
	return o.BatchId, true
}

// HasBatchId returns a boolean if a field has been set.
func (o *CommissionPaymentReportType) HasBatchId() bool {
	if o != nil && !IsNil(o.BatchId) {
		return true
	}

	return false
}

// SetBatchId gets a reference to the given UniqueIDType and assigns it to the BatchId field.
func (o *CommissionPaymentReportType) SetBatchId(v UniqueIDType) {
	o.BatchId = &v
}

// GetBatchName returns the BatchName field value if set, zero value otherwise.
func (o *CommissionPaymentReportType) GetBatchName() string {
	if o == nil || IsNil(o.BatchName) {
		var ret string
		return ret
	}
	return *o.BatchName
}

// GetBatchNameOk returns a tuple with the BatchName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentReportType) GetBatchNameOk() (*string, bool) {
	if o == nil || IsNil(o.BatchName) {
		return nil, false
	}
	return o.BatchName, true
}

// HasBatchName returns a boolean if a field has been set.
func (o *CommissionPaymentReportType) HasBatchName() bool {
	if o != nil && !IsNil(o.BatchName) {
		return true
	}

	return false
}

// SetBatchName gets a reference to the given string and assigns it to the BatchName field.
func (o *CommissionPaymentReportType) SetBatchName(v string) {
	o.BatchName = &v
}

// GetExportBlobFile returns the ExportBlobFile field value if set, zero value otherwise.
func (o *CommissionPaymentReportType) GetExportBlobFile() string {
	if o == nil || IsNil(o.ExportBlobFile) {
		var ret string
		return ret
	}
	return *o.ExportBlobFile
}

// GetExportBlobFileOk returns a tuple with the ExportBlobFile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentReportType) GetExportBlobFileOk() (*string, bool) {
	if o == nil || IsNil(o.ExportBlobFile) {
		return nil, false
	}
	return o.ExportBlobFile, true
}

// HasExportBlobFile returns a boolean if a field has been set.
func (o *CommissionPaymentReportType) HasExportBlobFile() bool {
	if o != nil && !IsNil(o.ExportBlobFile) {
		return true
	}

	return false
}

// SetExportBlobFile gets a reference to the given string and assigns it to the ExportBlobFile field.
func (o *CommissionPaymentReportType) SetExportBlobFile(v string) {
	o.ExportBlobFile = &v
}

// GetExportFile returns the ExportFile field value if set, zero value otherwise.
func (o *CommissionPaymentReportType) GetExportFile() string {
	if o == nil || IsNil(o.ExportFile) {
		var ret string
		return ret
	}
	return *o.ExportFile
}

// GetExportFileOk returns a tuple with the ExportFile field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentReportType) GetExportFileOk() (*string, bool) {
	if o == nil || IsNil(o.ExportFile) {
		return nil, false
	}
	return o.ExportFile, true
}

// HasExportFile returns a boolean if a field has been set.
func (o *CommissionPaymentReportType) HasExportFile() bool {
	if o != nil && !IsNil(o.ExportFile) {
		return true
	}

	return false
}

// SetExportFile gets a reference to the given string and assigns it to the ExportFile field.
func (o *CommissionPaymentReportType) SetExportFile(v string) {
	o.ExportFile = &v
}

// GetReportId returns the ReportId field value if set, zero value otherwise.
func (o *CommissionPaymentReportType) GetReportId() UniqueIDType {
	if o == nil || IsNil(o.ReportId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ReportId
}

// GetReportIdOk returns a tuple with the ReportId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionPaymentReportType) GetReportIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ReportId) {
		return nil, false
	}
	return o.ReportId, true
}

// HasReportId returns a boolean if a field has been set.
func (o *CommissionPaymentReportType) HasReportId() bool {
	if o != nil && !IsNil(o.ReportId) {
		return true
	}

	return false
}

// SetReportId gets a reference to the given UniqueIDType and assigns it to the ReportId field.
func (o *CommissionPaymentReportType) SetReportId(v UniqueIDType) {
	o.ReportId = &v
}

func (o CommissionPaymentReportType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionPaymentReportType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BatchId) {
		toSerialize["batchId"] = o.BatchId
	}
	if !IsNil(o.BatchName) {
		toSerialize["batchName"] = o.BatchName
	}
	if !IsNil(o.ExportBlobFile) {
		toSerialize["exportBlobFile"] = o.ExportBlobFile
	}
	if !IsNil(o.ExportFile) {
		toSerialize["exportFile"] = o.ExportFile
	}
	if !IsNil(o.ReportId) {
		toSerialize["reportId"] = o.ReportId
	}
	return toSerialize, nil
}

type NullableCommissionPaymentReportType struct {
	value *CommissionPaymentReportType
	isSet bool
}

func (v NullableCommissionPaymentReportType) Get() *CommissionPaymentReportType {
	return v.value
}

func (v *NullableCommissionPaymentReportType) Set(val *CommissionPaymentReportType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionPaymentReportType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionPaymentReportType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionPaymentReportType(val *CommissionPaymentReportType) *NullableCommissionPaymentReportType {
	return &NullableCommissionPaymentReportType{value: val, isSet: true}
}

func (v NullableCommissionPaymentReportType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionPaymentReportType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


