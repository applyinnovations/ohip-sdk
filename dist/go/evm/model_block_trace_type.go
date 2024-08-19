/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the BlockTraceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockTraceType{}

// BlockTraceType Extended Trace object to hold information for a block.
type BlockTraceType struct {
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Indicates the Department code.
	DepartmentId *string `json:"departmentId,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Used to identify the source of the identifier (e.g., IATA, ABTA).
	IdContext *string `json:"idContext,omitempty"`
	// Additional identifying value assigned by the creating system.
	IdExtension *int32 `json:"idExtension,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Date an item will be purged from a database (e.g., from a live database to an archive).
	PurgeDate *string `json:"purgeDate,omitempty"`
	ReservationId *ReservationId `json:"reservationId,omitempty"`
	ResolveInfo *TraceResolveType `json:"resolveInfo,omitempty"`
	TimeInfo *TraceTimeInfoType `json:"timeInfo,omitempty"`
	// The information this trace contains.
	TraceText *string `json:"traceText,omitempty"`
	// A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT).
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
}

// NewBlockTraceType instantiates a new BlockTraceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockTraceType() *BlockTraceType {
	this := BlockTraceType{}
	return &this
}

// NewBlockTraceTypeWithDefaults instantiates a new BlockTraceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockTraceTypeWithDefaults() *BlockTraceType {
	this := BlockTraceType{}
	return &this
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *BlockTraceType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *BlockTraceType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *BlockTraceType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *BlockTraceType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *BlockTraceType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *BlockTraceType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetDepartmentId returns the DepartmentId field value if set, zero value otherwise.
func (o *BlockTraceType) GetDepartmentId() string {
	if o == nil || IsNil(o.DepartmentId) {
		var ret string
		return ret
	}
	return *o.DepartmentId
}

// GetDepartmentIdOk returns a tuple with the DepartmentId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetDepartmentIdOk() (*string, bool) {
	if o == nil || IsNil(o.DepartmentId) {
		return nil, false
	}
	return o.DepartmentId, true
}

// HasDepartmentId returns a boolean if a field has been set.
func (o *BlockTraceType) HasDepartmentId() bool {
	if o != nil && !IsNil(o.DepartmentId) {
		return true
	}

	return false
}

// SetDepartmentId gets a reference to the given string and assigns it to the DepartmentId field.
func (o *BlockTraceType) SetDepartmentId(v string) {
	o.DepartmentId = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *BlockTraceType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *BlockTraceType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *BlockTraceType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *BlockTraceType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *BlockTraceType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *BlockTraceType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetIdExtension returns the IdExtension field value if set, zero value otherwise.
func (o *BlockTraceType) GetIdExtension() int32 {
	if o == nil || IsNil(o.IdExtension) {
		var ret int32
		return ret
	}
	return *o.IdExtension
}

// GetIdExtensionOk returns a tuple with the IdExtension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetIdExtensionOk() (*int32, bool) {
	if o == nil || IsNil(o.IdExtension) {
		return nil, false
	}
	return o.IdExtension, true
}

// HasIdExtension returns a boolean if a field has been set.
func (o *BlockTraceType) HasIdExtension() bool {
	if o != nil && !IsNil(o.IdExtension) {
		return true
	}

	return false
}

// SetIdExtension gets a reference to the given int32 and assigns it to the IdExtension field.
func (o *BlockTraceType) SetIdExtension(v int32) {
	o.IdExtension = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *BlockTraceType) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *BlockTraceType) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *BlockTraceType) SetInstance(v string) {
	o.Instance = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *BlockTraceType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *BlockTraceType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *BlockTraceType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *BlockTraceType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *BlockTraceType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *BlockTraceType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetPurgeDate returns the PurgeDate field value if set, zero value otherwise.
func (o *BlockTraceType) GetPurgeDate() string {
	if o == nil || IsNil(o.PurgeDate) {
		var ret string
		return ret
	}
	return *o.PurgeDate
}

// GetPurgeDateOk returns a tuple with the PurgeDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetPurgeDateOk() (*string, bool) {
	if o == nil || IsNil(o.PurgeDate) {
		return nil, false
	}
	return o.PurgeDate, true
}

// HasPurgeDate returns a boolean if a field has been set.
func (o *BlockTraceType) HasPurgeDate() bool {
	if o != nil && !IsNil(o.PurgeDate) {
		return true
	}

	return false
}

// SetPurgeDate gets a reference to the given string and assigns it to the PurgeDate field.
func (o *BlockTraceType) SetPurgeDate(v string) {
	o.PurgeDate = &v
}

// GetReservationId returns the ReservationId field value if set, zero value otherwise.
func (o *BlockTraceType) GetReservationId() ReservationId {
	if o == nil || IsNil(o.ReservationId) {
		var ret ReservationId
		return ret
	}
	return *o.ReservationId
}

// GetReservationIdOk returns a tuple with the ReservationId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetReservationIdOk() (*ReservationId, bool) {
	if o == nil || IsNil(o.ReservationId) {
		return nil, false
	}
	return o.ReservationId, true
}

// HasReservationId returns a boolean if a field has been set.
func (o *BlockTraceType) HasReservationId() bool {
	if o != nil && !IsNil(o.ReservationId) {
		return true
	}

	return false
}

// SetReservationId gets a reference to the given ReservationId and assigns it to the ReservationId field.
func (o *BlockTraceType) SetReservationId(v ReservationId) {
	o.ReservationId = &v
}

// GetResolveInfo returns the ResolveInfo field value if set, zero value otherwise.
func (o *BlockTraceType) GetResolveInfo() TraceResolveType {
	if o == nil || IsNil(o.ResolveInfo) {
		var ret TraceResolveType
		return ret
	}
	return *o.ResolveInfo
}

// GetResolveInfoOk returns a tuple with the ResolveInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetResolveInfoOk() (*TraceResolveType, bool) {
	if o == nil || IsNil(o.ResolveInfo) {
		return nil, false
	}
	return o.ResolveInfo, true
}

// HasResolveInfo returns a boolean if a field has been set.
func (o *BlockTraceType) HasResolveInfo() bool {
	if o != nil && !IsNil(o.ResolveInfo) {
		return true
	}

	return false
}

// SetResolveInfo gets a reference to the given TraceResolveType and assigns it to the ResolveInfo field.
func (o *BlockTraceType) SetResolveInfo(v TraceResolveType) {
	o.ResolveInfo = &v
}

// GetTimeInfo returns the TimeInfo field value if set, zero value otherwise.
func (o *BlockTraceType) GetTimeInfo() TraceTimeInfoType {
	if o == nil || IsNil(o.TimeInfo) {
		var ret TraceTimeInfoType
		return ret
	}
	return *o.TimeInfo
}

// GetTimeInfoOk returns a tuple with the TimeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetTimeInfoOk() (*TraceTimeInfoType, bool) {
	if o == nil || IsNil(o.TimeInfo) {
		return nil, false
	}
	return o.TimeInfo, true
}

// HasTimeInfo returns a boolean if a field has been set.
func (o *BlockTraceType) HasTimeInfo() bool {
	if o != nil && !IsNil(o.TimeInfo) {
		return true
	}

	return false
}

// SetTimeInfo gets a reference to the given TraceTimeInfoType and assigns it to the TimeInfo field.
func (o *BlockTraceType) SetTimeInfo(v TraceTimeInfoType) {
	o.TimeInfo = &v
}

// GetTraceText returns the TraceText field value if set, zero value otherwise.
func (o *BlockTraceType) GetTraceText() string {
	if o == nil || IsNil(o.TraceText) {
		var ret string
		return ret
	}
	return *o.TraceText
}

// GetTraceTextOk returns a tuple with the TraceText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetTraceTextOk() (*string, bool) {
	if o == nil || IsNil(o.TraceText) {
		return nil, false
	}
	return o.TraceText, true
}

// HasTraceText returns a boolean if a field has been set.
func (o *BlockTraceType) HasTraceText() bool {
	if o != nil && !IsNil(o.TraceText) {
		return true
	}

	return false
}

// SetTraceText gets a reference to the given string and assigns it to the TraceText field.
func (o *BlockTraceType) SetTraceText(v string) {
	o.TraceText = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *BlockTraceType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *BlockTraceType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *BlockTraceType) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *BlockTraceType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockTraceType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *BlockTraceType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *BlockTraceType) SetUrl(v string) {
	o.Url = &v
}

func (o BlockTraceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockTraceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.DepartmentId) {
		toSerialize["departmentId"] = o.DepartmentId
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdContext) {
		toSerialize["idContext"] = o.IdContext
	}
	if !IsNil(o.IdExtension) {
		toSerialize["idExtension"] = o.IdExtension
	}
	if !IsNil(o.Instance) {
		toSerialize["instance"] = o.Instance
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
	if !IsNil(o.ReservationId) {
		toSerialize["reservationId"] = o.ReservationId
	}
	if !IsNil(o.ResolveInfo) {
		toSerialize["resolveInfo"] = o.ResolveInfo
	}
	if !IsNil(o.TimeInfo) {
		toSerialize["timeInfo"] = o.TimeInfo
	}
	if !IsNil(o.TraceText) {
		toSerialize["traceText"] = o.TraceText
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableBlockTraceType struct {
	value *BlockTraceType
	isSet bool
}

func (v NullableBlockTraceType) Get() *BlockTraceType {
	return v.value
}

func (v *NullableBlockTraceType) Set(val *BlockTraceType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockTraceType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockTraceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockTraceType(val *BlockTraceType) *NullableBlockTraceType {
	return &NullableBlockTraceType{value: val, isSet: true}
}

func (v NullableBlockTraceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockTraceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


