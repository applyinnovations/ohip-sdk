# ValidatedCreditBill

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folio** | Pointer to [**ValidatedCreditBillFolio**](ValidatedCreditBillFolio.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewValidatedCreditBill

`func NewValidatedCreditBill() *ValidatedCreditBill`

NewValidatedCreditBill instantiates a new ValidatedCreditBill object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatedCreditBillWithDefaults

`func NewValidatedCreditBillWithDefaults() *ValidatedCreditBill`

NewValidatedCreditBillWithDefaults instantiates a new ValidatedCreditBill object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolio

`func (o *ValidatedCreditBill) GetFolio() ValidatedCreditBillFolio`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *ValidatedCreditBill) GetFolioOk() (*ValidatedCreditBillFolio, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *ValidatedCreditBill) SetFolio(v ValidatedCreditBillFolio)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *ValidatedCreditBill) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetLinks

`func (o *ValidatedCreditBill) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ValidatedCreditBill) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ValidatedCreditBill) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ValidatedCreditBill) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ValidatedCreditBill) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ValidatedCreditBill) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ValidatedCreditBill) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ValidatedCreditBill) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


