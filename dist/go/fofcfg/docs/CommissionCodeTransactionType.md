# CommissionCodeTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to **string** |  | [optional] 
**TransactionCodeDesc** | Pointer to **string** |  | [optional] 
**BasedOnNetAmount** | Pointer to **bool** |  | [optional] 
**CommissionPaidDetails** | Pointer to [**CommissionPaidDetailsType**](CommissionPaidDetailsType.md) |  | [optional] 

## Methods

### NewCommissionCodeTransactionType

`func NewCommissionCodeTransactionType() *CommissionCodeTransactionType`

NewCommissionCodeTransactionType instantiates a new CommissionCodeTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCodeTransactionTypeWithDefaults

`func NewCommissionCodeTransactionTypeWithDefaults() *CommissionCodeTransactionType`

NewCommissionCodeTransactionTypeWithDefaults instantiates a new CommissionCodeTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *CommissionCodeTransactionType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CommissionCodeTransactionType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CommissionCodeTransactionType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CommissionCodeTransactionType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionCodeDesc

`func (o *CommissionCodeTransactionType) GetTransactionCodeDesc() string`

GetTransactionCodeDesc returns the TransactionCodeDesc field if non-nil, zero value otherwise.

### GetTransactionCodeDescOk

`func (o *CommissionCodeTransactionType) GetTransactionCodeDescOk() (*string, bool)`

GetTransactionCodeDescOk returns a tuple with the TransactionCodeDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodeDesc

`func (o *CommissionCodeTransactionType) SetTransactionCodeDesc(v string)`

SetTransactionCodeDesc sets TransactionCodeDesc field to given value.

### HasTransactionCodeDesc

`func (o *CommissionCodeTransactionType) HasTransactionCodeDesc() bool`

HasTransactionCodeDesc returns a boolean if a field has been set.

### GetBasedOnNetAmount

`func (o *CommissionCodeTransactionType) GetBasedOnNetAmount() bool`

GetBasedOnNetAmount returns the BasedOnNetAmount field if non-nil, zero value otherwise.

### GetBasedOnNetAmountOk

`func (o *CommissionCodeTransactionType) GetBasedOnNetAmountOk() (*bool, bool)`

GetBasedOnNetAmountOk returns a tuple with the BasedOnNetAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOnNetAmount

`func (o *CommissionCodeTransactionType) SetBasedOnNetAmount(v bool)`

SetBasedOnNetAmount sets BasedOnNetAmount field to given value.

### HasBasedOnNetAmount

`func (o *CommissionCodeTransactionType) HasBasedOnNetAmount() bool`

HasBasedOnNetAmount returns a boolean if a field has been set.

### GetCommissionPaidDetails

`func (o *CommissionCodeTransactionType) GetCommissionPaidDetails() CommissionPaidDetailsType`

GetCommissionPaidDetails returns the CommissionPaidDetails field if non-nil, zero value otherwise.

### GetCommissionPaidDetailsOk

`func (o *CommissionCodeTransactionType) GetCommissionPaidDetailsOk() (*CommissionPaidDetailsType, bool)`

GetCommissionPaidDetailsOk returns a tuple with the CommissionPaidDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPaidDetails

`func (o *CommissionCodeTransactionType) SetCommissionPaidDetails(v CommissionPaidDetailsType)`

SetCommissionPaidDetails sets CommissionPaidDetails field to given value.

### HasCommissionPaidDetails

`func (o *CommissionCodeTransactionType) HasCommissionPaidDetails() bool`

HasCommissionPaidDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


