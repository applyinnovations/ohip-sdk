# BasedOnCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QueryId** | Pointer to **float32** | The query ID that is used to filter condition. | [optional] 
**Conditions** | Pointer to [**ConditionGroupType**](ConditionGroupType.md) |  | [optional] 

## Methods

### NewBasedOnCondition

`func NewBasedOnCondition() *BasedOnCondition`

NewBasedOnCondition instantiates a new BasedOnCondition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBasedOnConditionWithDefaults

`func NewBasedOnConditionWithDefaults() *BasedOnCondition`

NewBasedOnConditionWithDefaults instantiates a new BasedOnCondition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQueryId

`func (o *BasedOnCondition) GetQueryId() float32`

GetQueryId returns the QueryId field if non-nil, zero value otherwise.

### GetQueryIdOk

`func (o *BasedOnCondition) GetQueryIdOk() (*float32, bool)`

GetQueryIdOk returns a tuple with the QueryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueryId

`func (o *BasedOnCondition) SetQueryId(v float32)`

SetQueryId sets QueryId field to given value.

### HasQueryId

`func (o *BasedOnCondition) HasQueryId() bool`

HasQueryId returns a boolean if a field has been set.

### GetConditions

`func (o *BasedOnCondition) GetConditions() ConditionGroupType`

GetConditions returns the Conditions field if non-nil, zero value otherwise.

### GetConditionsOk

`func (o *BasedOnCondition) GetConditionsOk() (*ConditionGroupType, bool)`

GetConditionsOk returns a tuple with the Conditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConditions

`func (o *BasedOnCondition) SetConditions(v ConditionGroupType)`

SetConditions sets Conditions field to given value.

### HasConditions

`func (o *BasedOnCondition) HasConditions() bool`

HasConditions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


