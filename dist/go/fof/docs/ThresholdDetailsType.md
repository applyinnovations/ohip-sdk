# ThresholdDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entity** | Pointer to [**EntityType**](EntityType.md) |  | [optional] 
**Scope** | Pointer to [**ScopeType**](ScopeType.md) |  | [optional] 
**MinRequired** | Pointer to **int32** | Minimum required number of quantities, counts or minutes that must be posted. | [optional] 
**Complimentary** | Pointer to **int32** | The number of quantities, counts or minutes for which transaction diversion is allowed . | [optional] 
**IsEditable** | Pointer to **bool** | Configuring this flag to be TRUE will make the thresholds editable. | [optional] 

## Methods

### NewThresholdDetailsType

`func NewThresholdDetailsType() *ThresholdDetailsType`

NewThresholdDetailsType instantiates a new ThresholdDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdDetailsTypeWithDefaults

`func NewThresholdDetailsTypeWithDefaults() *ThresholdDetailsType`

NewThresholdDetailsTypeWithDefaults instantiates a new ThresholdDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntity

`func (o *ThresholdDetailsType) GetEntity() EntityType`

GetEntity returns the Entity field if non-nil, zero value otherwise.

### GetEntityOk

`func (o *ThresholdDetailsType) GetEntityOk() (*EntityType, bool)`

GetEntityOk returns a tuple with the Entity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntity

`func (o *ThresholdDetailsType) SetEntity(v EntityType)`

SetEntity sets Entity field to given value.

### HasEntity

`func (o *ThresholdDetailsType) HasEntity() bool`

HasEntity returns a boolean if a field has been set.

### GetScope

`func (o *ThresholdDetailsType) GetScope() ScopeType`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *ThresholdDetailsType) GetScopeOk() (*ScopeType, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *ThresholdDetailsType) SetScope(v ScopeType)`

SetScope sets Scope field to given value.

### HasScope

`func (o *ThresholdDetailsType) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetMinRequired

`func (o *ThresholdDetailsType) GetMinRequired() int32`

GetMinRequired returns the MinRequired field if non-nil, zero value otherwise.

### GetMinRequiredOk

`func (o *ThresholdDetailsType) GetMinRequiredOk() (*int32, bool)`

GetMinRequiredOk returns a tuple with the MinRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinRequired

`func (o *ThresholdDetailsType) SetMinRequired(v int32)`

SetMinRequired sets MinRequired field to given value.

### HasMinRequired

`func (o *ThresholdDetailsType) HasMinRequired() bool`

HasMinRequired returns a boolean if a field has been set.

### GetComplimentary

`func (o *ThresholdDetailsType) GetComplimentary() int32`

GetComplimentary returns the Complimentary field if non-nil, zero value otherwise.

### GetComplimentaryOk

`func (o *ThresholdDetailsType) GetComplimentaryOk() (*int32, bool)`

GetComplimentaryOk returns a tuple with the Complimentary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplimentary

`func (o *ThresholdDetailsType) SetComplimentary(v int32)`

SetComplimentary sets Complimentary field to given value.

### HasComplimentary

`func (o *ThresholdDetailsType) HasComplimentary() bool`

HasComplimentary returns a boolean if a field has been set.

### GetIsEditable

`func (o *ThresholdDetailsType) GetIsEditable() bool`

GetIsEditable returns the IsEditable field if non-nil, zero value otherwise.

### GetIsEditableOk

`func (o *ThresholdDetailsType) GetIsEditableOk() (*bool, bool)`

GetIsEditableOk returns a tuple with the IsEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEditable

`func (o *ThresholdDetailsType) SetIsEditable(v bool)`

SetIsEditable sets IsEditable field to given value.

### HasIsEditable

`func (o *ThresholdDetailsType) HasIsEditable() bool`

HasIsEditable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


