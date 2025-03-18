# ProfileRestrictions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reason** | Pointer to **string** | Restriction reason associated with the current profile. | [optional] 
**ReasonDescription** | Pointer to **string** | Description of restriction reason. | [optional] 
**Restricted** | Pointer to **bool** | True indicates there are restrictions associated with the current profile. | [optional] 

## Methods

### NewProfileRestrictions

`func NewProfileRestrictions() *ProfileRestrictions`

NewProfileRestrictions instantiates a new ProfileRestrictions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileRestrictionsWithDefaults

`func NewProfileRestrictionsWithDefaults() *ProfileRestrictions`

NewProfileRestrictionsWithDefaults instantiates a new ProfileRestrictions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReason

`func (o *ProfileRestrictions) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ProfileRestrictions) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ProfileRestrictions) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *ProfileRestrictions) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetReasonDescription

`func (o *ProfileRestrictions) GetReasonDescription() string`

GetReasonDescription returns the ReasonDescription field if non-nil, zero value otherwise.

### GetReasonDescriptionOk

`func (o *ProfileRestrictions) GetReasonDescriptionOk() (*string, bool)`

GetReasonDescriptionOk returns a tuple with the ReasonDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonDescription

`func (o *ProfileRestrictions) SetReasonDescription(v string)`

SetReasonDescription sets ReasonDescription field to given value.

### HasReasonDescription

`func (o *ProfileRestrictions) HasReasonDescription() bool`

HasReasonDescription returns a boolean if a field has been set.

### GetRestricted

`func (o *ProfileRestrictions) GetRestricted() bool`

GetRestricted returns the Restricted field if non-nil, zero value otherwise.

### GetRestrictedOk

`func (o *ProfileRestrictions) GetRestrictedOk() (*bool, bool)`

GetRestrictedOk returns a tuple with the Restricted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestricted

`func (o *ProfileRestrictions) SetRestricted(v bool)`

SetRestricted sets Restricted field to given value.

### HasRestricted

`func (o *ProfileRestrictions) HasRestricted() bool`

HasRestricted returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


