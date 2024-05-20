# CompAuthorizerHeaderType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompAuthorizerDetails** | Pointer to [**[]CompAuthorizerDetailType**](CompAuthorizerDetailType.md) | Comp authorizer details information. | [optional] 
**CreditLimit** | Pointer to **int32** | Credit limit associated for the authorizer. | [optional] 
**OccurenceLimit** | Pointer to **int32** | Credit limit already used up for the authorizer. | [optional] 

## Methods

### NewCompAuthorizerHeaderType

`func NewCompAuthorizerHeaderType() *CompAuthorizerHeaderType`

NewCompAuthorizerHeaderType instantiates a new CompAuthorizerHeaderType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompAuthorizerHeaderTypeWithDefaults

`func NewCompAuthorizerHeaderTypeWithDefaults() *CompAuthorizerHeaderType`

NewCompAuthorizerHeaderTypeWithDefaults instantiates a new CompAuthorizerHeaderType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompAuthorizerDetails

`func (o *CompAuthorizerHeaderType) GetCompAuthorizerDetails() []CompAuthorizerDetailType`

GetCompAuthorizerDetails returns the CompAuthorizerDetails field if non-nil, zero value otherwise.

### GetCompAuthorizerDetailsOk

`func (o *CompAuthorizerHeaderType) GetCompAuthorizerDetailsOk() (*[]CompAuthorizerDetailType, bool)`

GetCompAuthorizerDetailsOk returns a tuple with the CompAuthorizerDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAuthorizerDetails

`func (o *CompAuthorizerHeaderType) SetCompAuthorizerDetails(v []CompAuthorizerDetailType)`

SetCompAuthorizerDetails sets CompAuthorizerDetails field to given value.

### HasCompAuthorizerDetails

`func (o *CompAuthorizerHeaderType) HasCompAuthorizerDetails() bool`

HasCompAuthorizerDetails returns a boolean if a field has been set.

### GetCreditLimit

`func (o *CompAuthorizerHeaderType) GetCreditLimit() int32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *CompAuthorizerHeaderType) GetCreditLimitOk() (*int32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *CompAuthorizerHeaderType) SetCreditLimit(v int32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *CompAuthorizerHeaderType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetOccurenceLimit

`func (o *CompAuthorizerHeaderType) GetOccurenceLimit() int32`

GetOccurenceLimit returns the OccurenceLimit field if non-nil, zero value otherwise.

### GetOccurenceLimitOk

`func (o *CompAuthorizerHeaderType) GetOccurenceLimitOk() (*int32, bool)`

GetOccurenceLimitOk returns a tuple with the OccurenceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccurenceLimit

`func (o *CompAuthorizerHeaderType) SetOccurenceLimit(v int32)`

SetOccurenceLimit sets OccurenceLimit field to given value.

### HasOccurenceLimit

`func (o *CompAuthorizerHeaderType) HasOccurenceLimit() bool`

HasOccurenceLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


