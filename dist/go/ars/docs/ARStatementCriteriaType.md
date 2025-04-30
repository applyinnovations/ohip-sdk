# ARStatementCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilterDate** | Pointer to [**DateRangeType**](DateRangeType.md) |  | [optional] 
**StatementText** | Pointer to **string** | Text which will be printed on the Invoice. | [optional] 
**InclZero** | Pointer to **bool** | Flag to indicate if Zero Balances Invoices are to be included in the Statement. | [optional] 
**InclPrinted** | Pointer to **bool** | Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES. | [optional] 
**BalanceForwardDate** | Pointer to **string** | The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.) | [optional] 
**InclFolios** | Pointer to **bool** | Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement. | [optional] 

## Methods

### NewARStatementCriteriaType

`func NewARStatementCriteriaType() *ARStatementCriteriaType`

NewARStatementCriteriaType instantiates a new ARStatementCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARStatementCriteriaTypeWithDefaults

`func NewARStatementCriteriaTypeWithDefaults() *ARStatementCriteriaType`

NewARStatementCriteriaTypeWithDefaults instantiates a new ARStatementCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFilterDate

`func (o *ARStatementCriteriaType) GetFilterDate() DateRangeType`

GetFilterDate returns the FilterDate field if non-nil, zero value otherwise.

### GetFilterDateOk

`func (o *ARStatementCriteriaType) GetFilterDateOk() (*DateRangeType, bool)`

GetFilterDateOk returns a tuple with the FilterDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterDate

`func (o *ARStatementCriteriaType) SetFilterDate(v DateRangeType)`

SetFilterDate sets FilterDate field to given value.

### HasFilterDate

`func (o *ARStatementCriteriaType) HasFilterDate() bool`

HasFilterDate returns a boolean if a field has been set.

### GetStatementText

`func (o *ARStatementCriteriaType) GetStatementText() string`

GetStatementText returns the StatementText field if non-nil, zero value otherwise.

### GetStatementTextOk

`func (o *ARStatementCriteriaType) GetStatementTextOk() (*string, bool)`

GetStatementTextOk returns a tuple with the StatementText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementText

`func (o *ARStatementCriteriaType) SetStatementText(v string)`

SetStatementText sets StatementText field to given value.

### HasStatementText

`func (o *ARStatementCriteriaType) HasStatementText() bool`

HasStatementText returns a boolean if a field has been set.

### GetInclZero

`func (o *ARStatementCriteriaType) GetInclZero() bool`

GetInclZero returns the InclZero field if non-nil, zero value otherwise.

### GetInclZeroOk

`func (o *ARStatementCriteriaType) GetInclZeroOk() (*bool, bool)`

GetInclZeroOk returns a tuple with the InclZero field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclZero

`func (o *ARStatementCriteriaType) SetInclZero(v bool)`

SetInclZero sets InclZero field to given value.

### HasInclZero

`func (o *ARStatementCriteriaType) HasInclZero() bool`

HasInclZero returns a boolean if a field has been set.

### GetInclPrinted

`func (o *ARStatementCriteriaType) GetInclPrinted() bool`

GetInclPrinted returns the InclPrinted field if non-nil, zero value otherwise.

### GetInclPrintedOk

`func (o *ARStatementCriteriaType) GetInclPrintedOk() (*bool, bool)`

GetInclPrintedOk returns a tuple with the InclPrinted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclPrinted

`func (o *ARStatementCriteriaType) SetInclPrinted(v bool)`

SetInclPrinted sets InclPrinted field to given value.

### HasInclPrinted

`func (o *ARStatementCriteriaType) HasInclPrinted() bool`

HasInclPrinted returns a boolean if a field has been set.

### GetBalanceForwardDate

`func (o *ARStatementCriteriaType) GetBalanceForwardDate() string`

GetBalanceForwardDate returns the BalanceForwardDate field if non-nil, zero value otherwise.

### GetBalanceForwardDateOk

`func (o *ARStatementCriteriaType) GetBalanceForwardDateOk() (*string, bool)`

GetBalanceForwardDateOk returns a tuple with the BalanceForwardDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalanceForwardDate

`func (o *ARStatementCriteriaType) SetBalanceForwardDate(v string)`

SetBalanceForwardDate sets BalanceForwardDate field to given value.

### HasBalanceForwardDate

`func (o *ARStatementCriteriaType) HasBalanceForwardDate() bool`

HasBalanceForwardDate returns a boolean if a field has been set.

### GetInclFolios

`func (o *ARStatementCriteriaType) GetInclFolios() bool`

GetInclFolios returns the InclFolios field if non-nil, zero value otherwise.

### GetInclFoliosOk

`func (o *ARStatementCriteriaType) GetInclFoliosOk() (*bool, bool)`

GetInclFoliosOk returns a tuple with the InclFolios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclFolios

`func (o *ARStatementCriteriaType) SetInclFolios(v bool)`

SetInclFolios sets InclFolios field to given value.

### HasInclFolios

`func (o *ARStatementCriteriaType) HasInclFolios() bool`

HasInclFolios returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


