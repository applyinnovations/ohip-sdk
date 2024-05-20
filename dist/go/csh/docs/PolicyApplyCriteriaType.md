# PolicyApplyCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the deposit exists. | [optional] 
**PolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TransactionNo** | Pointer to **float32** | The transaction number of the payment to which the Deposit policy is being attached or detached. | [optional] 

## Methods

### NewPolicyApplyCriteriaType

`func NewPolicyApplyCriteriaType() *PolicyApplyCriteriaType`

NewPolicyApplyCriteriaType instantiates a new PolicyApplyCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyApplyCriteriaTypeWithDefaults

`func NewPolicyApplyCriteriaTypeWithDefaults() *PolicyApplyCriteriaType`

NewPolicyApplyCriteriaTypeWithDefaults instantiates a new PolicyApplyCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PolicyApplyCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PolicyApplyCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PolicyApplyCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PolicyApplyCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPolicyId

`func (o *PolicyApplyCriteriaType) GetPolicyId() UniqueIDType`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *PolicyApplyCriteriaType) GetPolicyIdOk() (*UniqueIDType, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *PolicyApplyCriteriaType) SetPolicyId(v UniqueIDType)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *PolicyApplyCriteriaType) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetTransactionNo

`func (o *PolicyApplyCriteriaType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *PolicyApplyCriteriaType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *PolicyApplyCriteriaType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *PolicyApplyCriteriaType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


