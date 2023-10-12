# PutConfigBankAccountsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAccounts** | Pointer to [**[]ConfigBankAccountType**](ConfigBankAccountType.md) | List of bank accounts. | [optional] 
**UpdateDefault** | Pointer to **bool** | Update default confirmation response | [optional] 
**UpdateDefaultForCurrency** | Pointer to **bool** | Update default for currency confirmation response | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutConfigBankAccountsRequest

`func NewPutConfigBankAccountsRequest() *PutConfigBankAccountsRequest`

NewPutConfigBankAccountsRequest instantiates a new PutConfigBankAccountsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConfigBankAccountsRequestWithDefaults

`func NewPutConfigBankAccountsRequestWithDefaults() *PutConfigBankAccountsRequest`

NewPutConfigBankAccountsRequestWithDefaults instantiates a new PutConfigBankAccountsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBankAccounts

`func (o *PutConfigBankAccountsRequest) GetBankAccounts() []ConfigBankAccountType`

GetBankAccounts returns the BankAccounts field if non-nil, zero value otherwise.

### GetBankAccountsOk

`func (o *PutConfigBankAccountsRequest) GetBankAccountsOk() (*[]ConfigBankAccountType, bool)`

GetBankAccountsOk returns a tuple with the BankAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccounts

`func (o *PutConfigBankAccountsRequest) SetBankAccounts(v []ConfigBankAccountType)`

SetBankAccounts sets BankAccounts field to given value.

### HasBankAccounts

`func (o *PutConfigBankAccountsRequest) HasBankAccounts() bool`

HasBankAccounts returns a boolean if a field has been set.

### GetUpdateDefault

`func (o *PutConfigBankAccountsRequest) GetUpdateDefault() bool`

GetUpdateDefault returns the UpdateDefault field if non-nil, zero value otherwise.

### GetUpdateDefaultOk

`func (o *PutConfigBankAccountsRequest) GetUpdateDefaultOk() (*bool, bool)`

GetUpdateDefaultOk returns a tuple with the UpdateDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateDefault

`func (o *PutConfigBankAccountsRequest) SetUpdateDefault(v bool)`

SetUpdateDefault sets UpdateDefault field to given value.

### HasUpdateDefault

`func (o *PutConfigBankAccountsRequest) HasUpdateDefault() bool`

HasUpdateDefault returns a boolean if a field has been set.

### GetUpdateDefaultForCurrency

`func (o *PutConfigBankAccountsRequest) GetUpdateDefaultForCurrency() bool`

GetUpdateDefaultForCurrency returns the UpdateDefaultForCurrency field if non-nil, zero value otherwise.

### GetUpdateDefaultForCurrencyOk

`func (o *PutConfigBankAccountsRequest) GetUpdateDefaultForCurrencyOk() (*bool, bool)`

GetUpdateDefaultForCurrencyOk returns a tuple with the UpdateDefaultForCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateDefaultForCurrency

`func (o *PutConfigBankAccountsRequest) SetUpdateDefaultForCurrency(v bool)`

SetUpdateDefaultForCurrency sets UpdateDefaultForCurrency field to given value.

### HasUpdateDefaultForCurrency

`func (o *PutConfigBankAccountsRequest) HasUpdateDefaultForCurrency() bool`

HasUpdateDefaultForCurrency returns a boolean if a field has been set.

### GetLinks

`func (o *PutConfigBankAccountsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutConfigBankAccountsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutConfigBankAccountsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutConfigBankAccountsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutConfigBankAccountsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutConfigBankAccountsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutConfigBankAccountsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutConfigBankAccountsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


