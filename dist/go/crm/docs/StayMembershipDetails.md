# StayMembershipDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewMembershipCardNo** | Pointer to **string** | Specifies the Card Number of new membership being attached. | [optional] 
**NewMembershipType** | Pointer to **string** | Specifies the type of new membership being attached. | [optional] 
**OldMembershipCardNo** | Pointer to **string** | Specifies the Card Number of old membership that should be replaced. | [optional] 
**OldMembershipType** | Pointer to **string** | Specifies the type of old membership that should be replaced. | [optional] 
**StayRecordId** | Pointer to **float32** | Stay Record ID | [optional] 
**AttachMode** | [**StayMembershipAttachMode**](StayMembershipAttachMode.md) |  | 

## Methods

### NewStayMembershipDetails

`func NewStayMembershipDetails(attachMode StayMembershipAttachMode, ) *StayMembershipDetails`

NewStayMembershipDetails instantiates a new StayMembershipDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayMembershipDetailsWithDefaults

`func NewStayMembershipDetailsWithDefaults() *StayMembershipDetails`

NewStayMembershipDetailsWithDefaults instantiates a new StayMembershipDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNewMembershipCardNo

`func (o *StayMembershipDetails) GetNewMembershipCardNo() string`

GetNewMembershipCardNo returns the NewMembershipCardNo field if non-nil, zero value otherwise.

### GetNewMembershipCardNoOk

`func (o *StayMembershipDetails) GetNewMembershipCardNoOk() (*string, bool)`

GetNewMembershipCardNoOk returns a tuple with the NewMembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMembershipCardNo

`func (o *StayMembershipDetails) SetNewMembershipCardNo(v string)`

SetNewMembershipCardNo sets NewMembershipCardNo field to given value.

### HasNewMembershipCardNo

`func (o *StayMembershipDetails) HasNewMembershipCardNo() bool`

HasNewMembershipCardNo returns a boolean if a field has been set.

### GetNewMembershipType

`func (o *StayMembershipDetails) GetNewMembershipType() string`

GetNewMembershipType returns the NewMembershipType field if non-nil, zero value otherwise.

### GetNewMembershipTypeOk

`func (o *StayMembershipDetails) GetNewMembershipTypeOk() (*string, bool)`

GetNewMembershipTypeOk returns a tuple with the NewMembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMembershipType

`func (o *StayMembershipDetails) SetNewMembershipType(v string)`

SetNewMembershipType sets NewMembershipType field to given value.

### HasNewMembershipType

`func (o *StayMembershipDetails) HasNewMembershipType() bool`

HasNewMembershipType returns a boolean if a field has been set.

### GetOldMembershipCardNo

`func (o *StayMembershipDetails) GetOldMembershipCardNo() string`

GetOldMembershipCardNo returns the OldMembershipCardNo field if non-nil, zero value otherwise.

### GetOldMembershipCardNoOk

`func (o *StayMembershipDetails) GetOldMembershipCardNoOk() (*string, bool)`

GetOldMembershipCardNoOk returns a tuple with the OldMembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldMembershipCardNo

`func (o *StayMembershipDetails) SetOldMembershipCardNo(v string)`

SetOldMembershipCardNo sets OldMembershipCardNo field to given value.

### HasOldMembershipCardNo

`func (o *StayMembershipDetails) HasOldMembershipCardNo() bool`

HasOldMembershipCardNo returns a boolean if a field has been set.

### GetOldMembershipType

`func (o *StayMembershipDetails) GetOldMembershipType() string`

GetOldMembershipType returns the OldMembershipType field if non-nil, zero value otherwise.

### GetOldMembershipTypeOk

`func (o *StayMembershipDetails) GetOldMembershipTypeOk() (*string, bool)`

GetOldMembershipTypeOk returns a tuple with the OldMembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldMembershipType

`func (o *StayMembershipDetails) SetOldMembershipType(v string)`

SetOldMembershipType sets OldMembershipType field to given value.

### HasOldMembershipType

`func (o *StayMembershipDetails) HasOldMembershipType() bool`

HasOldMembershipType returns a boolean if a field has been set.

### GetStayRecordId

`func (o *StayMembershipDetails) GetStayRecordId() float32`

GetStayRecordId returns the StayRecordId field if non-nil, zero value otherwise.

### GetStayRecordIdOk

`func (o *StayMembershipDetails) GetStayRecordIdOk() (*float32, bool)`

GetStayRecordIdOk returns a tuple with the StayRecordId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayRecordId

`func (o *StayMembershipDetails) SetStayRecordId(v float32)`

SetStayRecordId sets StayRecordId field to given value.

### HasStayRecordId

`func (o *StayMembershipDetails) HasStayRecordId() bool`

HasStayRecordId returns a boolean if a field has been set.

### GetAttachMode

`func (o *StayMembershipDetails) GetAttachMode() StayMembershipAttachMode`

GetAttachMode returns the AttachMode field if non-nil, zero value otherwise.

### GetAttachModeOk

`func (o *StayMembershipDetails) GetAttachModeOk() (*StayMembershipAttachMode, bool)`

GetAttachModeOk returns a tuple with the AttachMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachMode

`func (o *StayMembershipDetails) SetAttachMode(v StayMembershipAttachMode)`

SetAttachMode sets AttachMode field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


