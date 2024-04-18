/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the StoredFolioDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StoredFolioDetailsType{}

// StoredFolioDetailsType Stored Folio Details type.Folio can be printed/viewed without re-generation.
type StoredFolioDetailsType struct {
	// Folio Report URL.
	FolioReportURL *string `json:"folioReportURL,omitempty"`
	// Hotel code.
	HotelId *string `json:"hotelId,omitempty"`
	ReportStatus *StatusType `json:"reportStatus,omitempty"`
	// Name of the Stored Folio file.
	StoredFolioFileName *string `json:"storedFolioFileName,omitempty"`
	StoredFolioId *UniqueIDType `json:"storedFolioId,omitempty"`
}

// NewStoredFolioDetailsType instantiates a new StoredFolioDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStoredFolioDetailsType() *StoredFolioDetailsType {
	this := StoredFolioDetailsType{}
	return &this
}

// NewStoredFolioDetailsTypeWithDefaults instantiates a new StoredFolioDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStoredFolioDetailsTypeWithDefaults() *StoredFolioDetailsType {
	this := StoredFolioDetailsType{}
	return &this
}

// GetFolioReportURL returns the FolioReportURL field value if set, zero value otherwise.
func (o *StoredFolioDetailsType) GetFolioReportURL() string {
	if o == nil || IsNil(o.FolioReportURL) {
		var ret string
		return ret
	}
	return *o.FolioReportURL
}

// GetFolioReportURLOk returns a tuple with the FolioReportURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetailsType) GetFolioReportURLOk() (*string, bool) {
	if o == nil || IsNil(o.FolioReportURL) {
		return nil, false
	}
	return o.FolioReportURL, true
}

// HasFolioReportURL returns a boolean if a field has been set.
func (o *StoredFolioDetailsType) HasFolioReportURL() bool {
	if o != nil && !IsNil(o.FolioReportURL) {
		return true
	}

	return false
}

// SetFolioReportURL gets a reference to the given string and assigns it to the FolioReportURL field.
func (o *StoredFolioDetailsType) SetFolioReportURL(v string) {
	o.FolioReportURL = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *StoredFolioDetailsType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetailsType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *StoredFolioDetailsType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *StoredFolioDetailsType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetReportStatus returns the ReportStatus field value if set, zero value otherwise.
func (o *StoredFolioDetailsType) GetReportStatus() StatusType {
	if o == nil || IsNil(o.ReportStatus) {
		var ret StatusType
		return ret
	}
	return *o.ReportStatus
}

// GetReportStatusOk returns a tuple with the ReportStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetailsType) GetReportStatusOk() (*StatusType, bool) {
	if o == nil || IsNil(o.ReportStatus) {
		return nil, false
	}
	return o.ReportStatus, true
}

// HasReportStatus returns a boolean if a field has been set.
func (o *StoredFolioDetailsType) HasReportStatus() bool {
	if o != nil && !IsNil(o.ReportStatus) {
		return true
	}

	return false
}

// SetReportStatus gets a reference to the given StatusType and assigns it to the ReportStatus field.
func (o *StoredFolioDetailsType) SetReportStatus(v StatusType) {
	o.ReportStatus = &v
}

// GetStoredFolioFileName returns the StoredFolioFileName field value if set, zero value otherwise.
func (o *StoredFolioDetailsType) GetStoredFolioFileName() string {
	if o == nil || IsNil(o.StoredFolioFileName) {
		var ret string
		return ret
	}
	return *o.StoredFolioFileName
}

// GetStoredFolioFileNameOk returns a tuple with the StoredFolioFileName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetailsType) GetStoredFolioFileNameOk() (*string, bool) {
	if o == nil || IsNil(o.StoredFolioFileName) {
		return nil, false
	}
	return o.StoredFolioFileName, true
}

// HasStoredFolioFileName returns a boolean if a field has been set.
func (o *StoredFolioDetailsType) HasStoredFolioFileName() bool {
	if o != nil && !IsNil(o.StoredFolioFileName) {
		return true
	}

	return false
}

// SetStoredFolioFileName gets a reference to the given string and assigns it to the StoredFolioFileName field.
func (o *StoredFolioDetailsType) SetStoredFolioFileName(v string) {
	o.StoredFolioFileName = &v
}

// GetStoredFolioId returns the StoredFolioId field value if set, zero value otherwise.
func (o *StoredFolioDetailsType) GetStoredFolioId() UniqueIDType {
	if o == nil || IsNil(o.StoredFolioId) {
		var ret UniqueIDType
		return ret
	}
	return *o.StoredFolioId
}

// GetStoredFolioIdOk returns a tuple with the StoredFolioId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetailsType) GetStoredFolioIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.StoredFolioId) {
		return nil, false
	}
	return o.StoredFolioId, true
}

// HasStoredFolioId returns a boolean if a field has been set.
func (o *StoredFolioDetailsType) HasStoredFolioId() bool {
	if o != nil && !IsNil(o.StoredFolioId) {
		return true
	}

	return false
}

// SetStoredFolioId gets a reference to the given UniqueIDType and assigns it to the StoredFolioId field.
func (o *StoredFolioDetailsType) SetStoredFolioId(v UniqueIDType) {
	o.StoredFolioId = &v
}

func (o StoredFolioDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StoredFolioDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FolioReportURL) {
		toSerialize["folioReportURL"] = o.FolioReportURL
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ReportStatus) {
		toSerialize["reportStatus"] = o.ReportStatus
	}
	if !IsNil(o.StoredFolioFileName) {
		toSerialize["storedFolioFileName"] = o.StoredFolioFileName
	}
	if !IsNil(o.StoredFolioId) {
		toSerialize["storedFolioId"] = o.StoredFolioId
	}
	return toSerialize, nil
}

type NullableStoredFolioDetailsType struct {
	value *StoredFolioDetailsType
	isSet bool
}

func (v NullableStoredFolioDetailsType) Get() *StoredFolioDetailsType {
	return v.value
}

func (v *NullableStoredFolioDetailsType) Set(val *StoredFolioDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableStoredFolioDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableStoredFolioDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStoredFolioDetailsType(val *StoredFolioDetailsType) *NullableStoredFolioDetailsType {
	return &NullableStoredFolioDetailsType{value: val, isSet: true}
}

func (v NullableStoredFolioDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStoredFolioDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

