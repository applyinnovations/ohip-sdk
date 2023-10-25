/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the CateringPackageResourceNoteType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringPackageResourceNoteType{}

// CateringPackageResourceNoteType Type used for managing Resource Notes associated with a particular Catering Package Resource.
type CateringPackageResourceNoteType struct {
	// Comment associated the Catering Package Resource Note.
	Comment *string `json:"comment,omitempty"`
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	Id *UniqueIDType `json:"id,omitempty"`
	// Indiciates if this is Internal.
	Internal *bool `json:"internal,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	// Title of the Catering Package Resource Note.
	Title *string `json:"title,omitempty"`
}

// NewCateringPackageResourceNoteType instantiates a new CateringPackageResourceNoteType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringPackageResourceNoteType() *CateringPackageResourceNoteType {
	this := CateringPackageResourceNoteType{}
	return &this
}

// NewCateringPackageResourceNoteTypeWithDefaults instantiates a new CateringPackageResourceNoteType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringPackageResourceNoteTypeWithDefaults() *CateringPackageResourceNoteType {
	this := CateringPackageResourceNoteType{}
	return &this
}

// GetComment returns the Comment field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetComment() string {
	if o == nil || IsNil(o.Comment) {
		var ret string
		return ret
	}
	return *o.Comment
}

// GetCommentOk returns a tuple with the Comment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetCommentOk() (*string, bool) {
	if o == nil || IsNil(o.Comment) {
		return nil, false
	}
	return o.Comment, true
}

// HasComment returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasComment() bool {
	if o != nil && !IsNil(o.Comment) {
		return true
	}

	return false
}

// SetComment gets a reference to the given string and assigns it to the Comment field.
func (o *CateringPackageResourceNoteType) SetComment(v string) {
	o.Comment = &v
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *CateringPackageResourceNoteType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *CateringPackageResourceNoteType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetId() UniqueIDType {
	if o == nil || IsNil(o.Id) {
		var ret UniqueIDType
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given UniqueIDType and assigns it to the Id field.
func (o *CateringPackageResourceNoteType) SetId(v UniqueIDType) {
	o.Id = &v
}

// GetInternal returns the Internal field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetInternal() bool {
	if o == nil || IsNil(o.Internal) {
		var ret bool
		return ret
	}
	return *o.Internal
}

// GetInternalOk returns a tuple with the Internal field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetInternalOk() (*bool, bool) {
	if o == nil || IsNil(o.Internal) {
		return nil, false
	}
	return o.Internal, true
}

// HasInternal returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasInternal() bool {
	if o != nil && !IsNil(o.Internal) {
		return true
	}

	return false
}

// SetInternal gets a reference to the given bool and assigns it to the Internal field.
func (o *CateringPackageResourceNoteType) SetInternal(v bool) {
	o.Internal = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *CateringPackageResourceNoteType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *CateringPackageResourceNoteType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *CateringPackageResourceNoteType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetTitle returns the Title field value if set, zero value otherwise.
func (o *CateringPackageResourceNoteType) GetTitle() string {
	if o == nil || IsNil(o.Title) {
		var ret string
		return ret
	}
	return *o.Title
}

// GetTitleOk returns a tuple with the Title field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringPackageResourceNoteType) GetTitleOk() (*string, bool) {
	if o == nil || IsNil(o.Title) {
		return nil, false
	}
	return o.Title, true
}

// HasTitle returns a boolean if a field has been set.
func (o *CateringPackageResourceNoteType) HasTitle() bool {
	if o != nil && !IsNil(o.Title) {
		return true
	}

	return false
}

// SetTitle gets a reference to the given string and assigns it to the Title field.
func (o *CateringPackageResourceNoteType) SetTitle(v string) {
	o.Title = &v
}

func (o CateringPackageResourceNoteType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringPackageResourceNoteType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Comment) {
		toSerialize["comment"] = o.Comment
	}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Internal) {
		toSerialize["internal"] = o.Internal
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.PurgeDate) {
		toSerialize["purgeDate"] = o.PurgeDate
	}
	if !IsNil(o.Title) {
		toSerialize["title"] = o.Title
	}
	return toSerialize, nil
}

type NullableCateringPackageResourceNoteType struct {
	value *CateringPackageResourceNoteType
	isSet bool
}

func (v NullableCateringPackageResourceNoteType) Get() *CateringPackageResourceNoteType {
	return v.value
}

func (v *NullableCateringPackageResourceNoteType) Set(val *CateringPackageResourceNoteType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringPackageResourceNoteType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringPackageResourceNoteType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringPackageResourceNoteType(val *CateringPackageResourceNoteType) *NullableCateringPackageResourceNoteType {
	return &NullableCateringPackageResourceNoteType{value: val, isSet: true}
}

func (v NullableCateringPackageResourceNoteType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringPackageResourceNoteType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


