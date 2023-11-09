# CommissionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAccount** | Pointer to [**BankAccountType**](BankAccountType.md) |  | [optional] 
**CommissionAgents** | Pointer to [**CommissionAgentsType**](CommissionAgentsType.md) |  | [optional] 
**CommissionSummary** | Pointer to [**CommissionSummaryType**](CommissionSummaryType.md) |  | [optional] 

## Methods

### NewCommissionInfoType

`func NewCommissionInfoType() *CommissionInfoType`

NewCommissionInfoType instantiates a new CommissionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionInfoTypeWithDefaults

`func NewCommissionInfoTypeWithDefaults() *CommissionInfoType`

NewCommissionInfoTypeWithDefaults instantiates a new CommissionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBankAccount

`func (o *CommissionInfoType) GetBankAccount() BankAccountType`

GetBankAccount returns the BankAccount field if non-nil, zero value otherwise.

### GetBankAccountOk

`func (o *CommissionInfoType) GetBankAccountOk() (*BankAccountType, bool)`

GetBankAccountOk returns a tuple with the BankAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccount

`func (o *CommissionInfoType) SetBankAccount(v BankAccountType)`

SetBankAccount sets BankAccount field to given value.

### HasBankAccount

`func (o *CommissionInfoType) HasBankAccount() bool`

HasBankAccount returns a boolean if a field has been set.

### GetCommissionAgents

`func (o *CommissionInfoType) GetCommissionAgents() CommissionAgentsType`

GetCommissionAgents returns the CommissionAgents field if non-nil, zero value otherwise.

### GetCommissionAgentsOk

`func (o *CommissionInfoType) GetCommissionAgentsOk() (*CommissionAgentsType, bool)`

GetCommissionAgentsOk returns a tuple with the CommissionAgents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAgents

`func (o *CommissionInfoType) SetCommissionAgents(v CommissionAgentsType)`

SetCommissionAgents sets CommissionAgents field to given value.

### HasCommissionAgents

`func (o *CommissionInfoType) HasCommissionAgents() bool`

HasCommissionAgents returns a boolean if a field has been set.

### GetCommissionSummary

`func (o *CommissionInfoType) GetCommissionSummary() CommissionSummaryType`

GetCommissionSummary returns the CommissionSummary field if non-nil, zero value otherwise.

### GetCommissionSummaryOk

`func (o *CommissionInfoType) GetCommissionSummaryOk() (*CommissionSummaryType, bool)`

GetCommissionSummaryOk returns a tuple with the CommissionSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionSummary

`func (o *CommissionInfoType) SetCommissionSummary(v CommissionSummaryType)`

SetCommissionSummary sets CommissionSummary field to given value.

### HasCommissionSummary

`func (o *CommissionInfoType) HasCommissionSummary() bool`

HasCommissionSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


