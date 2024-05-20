# ARAccountStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | User defined status message on the Account. | [optional] 
**Restricted** | Pointer to **bool** | Flag to indicate if the Account is restricted. | [optional] 
**Restriction** | Pointer to **string** | The Restriction Code added on the Account. This is available when the functionality for adding restriction codes is ON. | [optional] 

## Methods

### NewARAccountStatusType

`func NewARAccountStatusType() *ARAccountStatusType`

NewARAccountStatusType instantiates a new ARAccountStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountStatusTypeWithDefaults

`func NewARAccountStatusTypeWithDefaults() *ARAccountStatusType`

NewARAccountStatusTypeWithDefaults instantiates a new ARAccountStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ARAccountStatusType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ARAccountStatusType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ARAccountStatusType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ARAccountStatusType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRestricted

`func (o *ARAccountStatusType) GetRestricted() bool`

GetRestricted returns the Restricted field if non-nil, zero value otherwise.

### GetRestrictedOk

`func (o *ARAccountStatusType) GetRestrictedOk() (*bool, bool)`

GetRestrictedOk returns a tuple with the Restricted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestricted

`func (o *ARAccountStatusType) SetRestricted(v bool)`

SetRestricted sets Restricted field to given value.

### HasRestricted

`func (o *ARAccountStatusType) HasRestricted() bool`

HasRestricted returns a boolean if a field has been set.

### GetRestriction

`func (o *ARAccountStatusType) GetRestriction() string`

GetRestriction returns the Restriction field if non-nil, zero value otherwise.

### GetRestrictionOk

`func (o *ARAccountStatusType) GetRestrictionOk() (*string, bool)`

GetRestrictionOk returns a tuple with the Restriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestriction

`func (o *ARAccountStatusType) SetRestriction(v string)`

SetRestriction sets Restriction field to given value.

### HasRestriction

`func (o *ARAccountStatusType) HasRestriction() bool`

HasRestriction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


