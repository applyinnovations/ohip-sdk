# ContractRangeInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractRange** | Pointer to [**NumberRangeType**](NumberRangeType.md) |  | [optional] 
**ContractTransaction** | Pointer to [**ContractTransactionType**](ContractTransactionType.md) |  | [optional] 
**Months** | Pointer to **float32** | Holds No of months calculated while generating statements for Maintenance Fee type. | [optional] 
**Range** | Pointer to **int32** | Holds No of reservations range for Transaction Fee type. | [optional] 

## Methods

### NewContractRangeInformationType

`func NewContractRangeInformationType() *ContractRangeInformationType`

NewContractRangeInformationType instantiates a new ContractRangeInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContractRangeInformationTypeWithDefaults

`func NewContractRangeInformationTypeWithDefaults() *ContractRangeInformationType`

NewContractRangeInformationTypeWithDefaults instantiates a new ContractRangeInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractRange

`func (o *ContractRangeInformationType) GetContractRange() NumberRangeType`

GetContractRange returns the ContractRange field if non-nil, zero value otherwise.

### GetContractRangeOk

`func (o *ContractRangeInformationType) GetContractRangeOk() (*NumberRangeType, bool)`

GetContractRangeOk returns a tuple with the ContractRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractRange

`func (o *ContractRangeInformationType) SetContractRange(v NumberRangeType)`

SetContractRange sets ContractRange field to given value.

### HasContractRange

`func (o *ContractRangeInformationType) HasContractRange() bool`

HasContractRange returns a boolean if a field has been set.

### GetContractTransaction

`func (o *ContractRangeInformationType) GetContractTransaction() ContractTransactionType`

GetContractTransaction returns the ContractTransaction field if non-nil, zero value otherwise.

### GetContractTransactionOk

`func (o *ContractRangeInformationType) GetContractTransactionOk() (*ContractTransactionType, bool)`

GetContractTransactionOk returns a tuple with the ContractTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractTransaction

`func (o *ContractRangeInformationType) SetContractTransaction(v ContractTransactionType)`

SetContractTransaction sets ContractTransaction field to given value.

### HasContractTransaction

`func (o *ContractRangeInformationType) HasContractTransaction() bool`

HasContractTransaction returns a boolean if a field has been set.

### GetMonths

`func (o *ContractRangeInformationType) GetMonths() float32`

GetMonths returns the Months field if non-nil, zero value otherwise.

### GetMonthsOk

`func (o *ContractRangeInformationType) GetMonthsOk() (*float32, bool)`

GetMonthsOk returns a tuple with the Months field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonths

`func (o *ContractRangeInformationType) SetMonths(v float32)`

SetMonths sets Months field to given value.

### HasMonths

`func (o *ContractRangeInformationType) HasMonths() bool`

HasMonths returns a boolean if a field has been set.

### GetRange

`func (o *ContractRangeInformationType) GetRange() int32`

GetRange returns the Range field if non-nil, zero value otherwise.

### GetRangeOk

`func (o *ContractRangeInformationType) GetRangeOk() (*int32, bool)`

GetRangeOk returns a tuple with the Range field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRange

`func (o *ContractRangeInformationType) SetRange(v int32)`

SetRange sets Range field to given value.

### HasRange

`func (o *ContractRangeInformationType) HasRange() bool`

HasRange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


