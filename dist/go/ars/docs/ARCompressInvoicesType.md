# ARCompressInvoicesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**Invoices** | Pointer to [**[]ARInvoiceType**](ARInvoiceType.md) | A collection of AR Invoices. | [optional] 
**Reference** | Pointer to **string** | Reference Text for the Master Invoice which will be created. | [optional] 
**Remark** | Pointer to **string** | Remarks for the Master Invoice which will be created. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**FolioTypeName** | Pointer to **string** | Folio Type for the Master Invoice which will be created. | [optional] 

## Methods

### NewARCompressInvoicesType

`func NewARCompressInvoicesType() *ARCompressInvoicesType`

NewARCompressInvoicesType instantiates a new ARCompressInvoicesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARCompressInvoicesTypeWithDefaults

`func NewARCompressInvoicesTypeWithDefaults() *ARCompressInvoicesType`

NewARCompressInvoicesTypeWithDefaults instantiates a new ARCompressInvoicesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *ARCompressInvoicesType) GetAccount() ARAccountCriteriaType`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ARCompressInvoicesType) GetAccountOk() (*ARAccountCriteriaType, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ARCompressInvoicesType) SetAccount(v ARAccountCriteriaType)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ARCompressInvoicesType) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetInvoices

`func (o *ARCompressInvoicesType) GetInvoices() []ARInvoiceType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARCompressInvoicesType) GetInvoicesOk() (*[]ARInvoiceType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARCompressInvoicesType) SetInvoices(v []ARInvoiceType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARCompressInvoicesType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetReference

`func (o *ARCompressInvoicesType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARCompressInvoicesType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARCompressInvoicesType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARCompressInvoicesType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ARCompressInvoicesType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARCompressInvoicesType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARCompressInvoicesType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARCompressInvoicesType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetCashierId

`func (o *ARCompressInvoicesType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARCompressInvoicesType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARCompressInvoicesType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARCompressInvoicesType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *ARCompressInvoicesType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *ARCompressInvoicesType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *ARCompressInvoicesType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *ARCompressInvoicesType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


