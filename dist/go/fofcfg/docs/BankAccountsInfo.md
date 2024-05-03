# BankAccountsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BankAccounts** | Pointer to [**[]ConfigBankAccountType**](ConfigBankAccountType.md) | List of bank accounts. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBankAccountsInfo

`func NewBankAccountsInfo() *BankAccountsInfo`

NewBankAccountsInfo instantiates a new BankAccountsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBankAccountsInfoWithDefaults

`func NewBankAccountsInfoWithDefaults() *BankAccountsInfo`

NewBankAccountsInfoWithDefaults instantiates a new BankAccountsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBankAccounts

`func (o *BankAccountsInfo) GetBankAccounts() []ConfigBankAccountType`

GetBankAccounts returns the BankAccounts field if non-nil, zero value otherwise.

### GetBankAccountsOk

`func (o *BankAccountsInfo) GetBankAccountsOk() (*[]ConfigBankAccountType, bool)`

GetBankAccountsOk returns a tuple with the BankAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankAccounts

`func (o *BankAccountsInfo) SetBankAccounts(v []ConfigBankAccountType)`

SetBankAccounts sets BankAccounts field to given value.

### HasBankAccounts

`func (o *BankAccountsInfo) HasBankAccounts() bool`

HasBankAccounts returns a boolean if a field has been set.

### GetLinks

`func (o *BankAccountsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BankAccountsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BankAccountsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BankAccountsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BankAccountsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BankAccountsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BankAccountsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BankAccountsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


