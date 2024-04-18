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

// checks if the SupportingDocumentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SupportingDocumentType{}

// SupportingDocumentType Supporting document details.
type SupportingDocumentType struct {
	// Confirmation number of the reservation.
	ConfirmationNo *string `json:"confirmationNo,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	DocumentCategory *FiscalSupportingDocumentCategory `json:"documentCategory,omitempty"`
	// Supporting document creation date.
	DocumentDate *string `json:"documentDate,omitempty"`
	// Supporting document number.
	DocumentNo *int32 `json:"documentNo,omitempty"`
	DocumentType *FiscalSupportingDocumentType `json:"documentType,omitempty"`
	// OPERA Fiscal status.
	FiscalStatus *string `json:"fiscalStatus,omitempty"`
	// String representation of the full name
	FullName *string `json:"fullName,omitempty"`
	// Unique ID of the hotel
	HotelId *string `json:"hotelId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Room number of the reservation.
	RoomId *string `json:"roomId,omitempty"`
}

// NewSupportingDocumentType instantiates a new SupportingDocumentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSupportingDocumentType() *SupportingDocumentType {
	this := SupportingDocumentType{}
	return &this
}

// NewSupportingDocumentTypeWithDefaults instantiates a new SupportingDocumentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSupportingDocumentTypeWithDefaults() *SupportingDocumentType {
	this := SupportingDocumentType{}
	return &this
}

// GetConfirmationNo returns the ConfirmationNo field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetConfirmationNo() string {
	if o == nil || IsNil(o.ConfirmationNo) {
		var ret string
		return ret
	}
	return *o.ConfirmationNo
}

// GetConfirmationNoOk returns a tuple with the ConfirmationNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetConfirmationNoOk() (*string, bool) {
	if o == nil || IsNil(o.ConfirmationNo) {
		return nil, false
	}
	return o.ConfirmationNo, true
}

// HasConfirmationNo returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasConfirmationNo() bool {
	if o != nil && !IsNil(o.ConfirmationNo) {
		return true
	}

	return false
}

// SetConfirmationNo gets a reference to the given string and assigns it to the ConfirmationNo field.
func (o *SupportingDocumentType) SetConfirmationNo(v string) {
	o.ConfirmationNo = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *SupportingDocumentType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetDocumentCategory returns the DocumentCategory field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetDocumentCategory() FiscalSupportingDocumentCategory {
	if o == nil || IsNil(o.DocumentCategory) {
		var ret FiscalSupportingDocumentCategory
		return ret
	}
	return *o.DocumentCategory
}

// GetDocumentCategoryOk returns a tuple with the DocumentCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetDocumentCategoryOk() (*FiscalSupportingDocumentCategory, bool) {
	if o == nil || IsNil(o.DocumentCategory) {
		return nil, false
	}
	return o.DocumentCategory, true
}

// HasDocumentCategory returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasDocumentCategory() bool {
	if o != nil && !IsNil(o.DocumentCategory) {
		return true
	}

	return false
}

// SetDocumentCategory gets a reference to the given FiscalSupportingDocumentCategory and assigns it to the DocumentCategory field.
func (o *SupportingDocumentType) SetDocumentCategory(v FiscalSupportingDocumentCategory) {
	o.DocumentCategory = &v
}

// GetDocumentDate returns the DocumentDate field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetDocumentDate() string {
	if o == nil || IsNil(o.DocumentDate) {
		var ret string
		return ret
	}
	return *o.DocumentDate
}

// GetDocumentDateOk returns a tuple with the DocumentDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetDocumentDateOk() (*string, bool) {
	if o == nil || IsNil(o.DocumentDate) {
		return nil, false
	}
	return o.DocumentDate, true
}

// HasDocumentDate returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasDocumentDate() bool {
	if o != nil && !IsNil(o.DocumentDate) {
		return true
	}

	return false
}

// SetDocumentDate gets a reference to the given string and assigns it to the DocumentDate field.
func (o *SupportingDocumentType) SetDocumentDate(v string) {
	o.DocumentDate = &v
}

// GetDocumentNo returns the DocumentNo field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetDocumentNo() int32 {
	if o == nil || IsNil(o.DocumentNo) {
		var ret int32
		return ret
	}
	return *o.DocumentNo
}

// GetDocumentNoOk returns a tuple with the DocumentNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetDocumentNoOk() (*int32, bool) {
	if o == nil || IsNil(o.DocumentNo) {
		return nil, false
	}
	return o.DocumentNo, true
}

// HasDocumentNo returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasDocumentNo() bool {
	if o != nil && !IsNil(o.DocumentNo) {
		return true
	}

	return false
}

// SetDocumentNo gets a reference to the given int32 and assigns it to the DocumentNo field.
func (o *SupportingDocumentType) SetDocumentNo(v int32) {
	o.DocumentNo = &v
}

// GetDocumentType returns the DocumentType field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetDocumentType() FiscalSupportingDocumentType {
	if o == nil || IsNil(o.DocumentType) {
		var ret FiscalSupportingDocumentType
		return ret
	}
	return *o.DocumentType
}

// GetDocumentTypeOk returns a tuple with the DocumentType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetDocumentTypeOk() (*FiscalSupportingDocumentType, bool) {
	if o == nil || IsNil(o.DocumentType) {
		return nil, false
	}
	return o.DocumentType, true
}

// HasDocumentType returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasDocumentType() bool {
	if o != nil && !IsNil(o.DocumentType) {
		return true
	}

	return false
}

// SetDocumentType gets a reference to the given FiscalSupportingDocumentType and assigns it to the DocumentType field.
func (o *SupportingDocumentType) SetDocumentType(v FiscalSupportingDocumentType) {
	o.DocumentType = &v
}

// GetFiscalStatus returns the FiscalStatus field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetFiscalStatus() string {
	if o == nil || IsNil(o.FiscalStatus) {
		var ret string
		return ret
	}
	return *o.FiscalStatus
}

// GetFiscalStatusOk returns a tuple with the FiscalStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetFiscalStatusOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalStatus) {
		return nil, false
	}
	return o.FiscalStatus, true
}

// HasFiscalStatus returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasFiscalStatus() bool {
	if o != nil && !IsNil(o.FiscalStatus) {
		return true
	}

	return false
}

// SetFiscalStatus gets a reference to the given string and assigns it to the FiscalStatus field.
func (o *SupportingDocumentType) SetFiscalStatus(v string) {
	o.FiscalStatus = &v
}

// GetFullName returns the FullName field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetFullName() string {
	if o == nil || IsNil(o.FullName) {
		var ret string
		return ret
	}
	return *o.FullName
}

// GetFullNameOk returns a tuple with the FullName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetFullNameOk() (*string, bool) {
	if o == nil || IsNil(o.FullName) {
		return nil, false
	}
	return o.FullName, true
}

// HasFullName returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasFullName() bool {
	if o != nil && !IsNil(o.FullName) {
		return true
	}

	return false
}

// SetFullName gets a reference to the given string and assigns it to the FullName field.
func (o *SupportingDocumentType) SetFullName(v string) {
	o.FullName = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *SupportingDocumentType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *SupportingDocumentType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetRoomId returns the RoomId field value if set, zero value otherwise.
func (o *SupportingDocumentType) GetRoomId() string {
	if o == nil || IsNil(o.RoomId) {
		var ret string
		return ret
	}
	return *o.RoomId
}

// GetRoomIdOk returns a tuple with the RoomId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SupportingDocumentType) GetRoomIdOk() (*string, bool) {
	if o == nil || IsNil(o.RoomId) {
		return nil, false
	}
	return o.RoomId, true
}

// HasRoomId returns a boolean if a field has been set.
func (o *SupportingDocumentType) HasRoomId() bool {
	if o != nil && !IsNil(o.RoomId) {
		return true
	}

	return false
}

// SetRoomId gets a reference to the given string and assigns it to the RoomId field.
func (o *SupportingDocumentType) SetRoomId(v string) {
	o.RoomId = &v
}

func (o SupportingDocumentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SupportingDocumentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConfirmationNo) {
		toSerialize["confirmationNo"] = o.ConfirmationNo
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.DocumentCategory) {
		toSerialize["documentCategory"] = o.DocumentCategory
	}
	if !IsNil(o.DocumentDate) {
		toSerialize["documentDate"] = o.DocumentDate
	}
	if !IsNil(o.DocumentNo) {
		toSerialize["documentNo"] = o.DocumentNo
	}
	if !IsNil(o.DocumentType) {
		toSerialize["documentType"] = o.DocumentType
	}
	if !IsNil(o.FiscalStatus) {
		toSerialize["fiscalStatus"] = o.FiscalStatus
	}
	if !IsNil(o.FullName) {
		toSerialize["fullName"] = o.FullName
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.RoomId) {
		toSerialize["roomId"] = o.RoomId
	}
	return toSerialize, nil
}

type NullableSupportingDocumentType struct {
	value *SupportingDocumentType
	isSet bool
}

func (v NullableSupportingDocumentType) Get() *SupportingDocumentType {
	return v.value
}

func (v *NullableSupportingDocumentType) Set(val *SupportingDocumentType) {
	v.value = val
	v.isSet = true
}

func (v NullableSupportingDocumentType) IsSet() bool {
	return v.isSet
}

func (v *NullableSupportingDocumentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSupportingDocumentType(val *SupportingDocumentType) *NullableSupportingDocumentType {
	return &NullableSupportingDocumentType{value: val, isSet: true}
}

func (v NullableSupportingDocumentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSupportingDocumentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

