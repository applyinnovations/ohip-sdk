# VoidedFolio

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalCreditBillFolio** | Pointer to [**FolioWindowType**](FolioWindowType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewVoidedFolio

`func NewVoidedFolio() *VoidedFolio`

NewVoidedFolio instantiates a new VoidedFolio object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVoidedFolioWithDefaults

`func NewVoidedFolioWithDefaults() *VoidedFolio`

NewVoidedFolioWithDefaults instantiates a new VoidedFolio object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalCreditBillFolio

`func (o *VoidedFolio) GetFiscalCreditBillFolio() FolioWindowType`

GetFiscalCreditBillFolio returns the FiscalCreditBillFolio field if non-nil, zero value otherwise.

### GetFiscalCreditBillFolioOk

`func (o *VoidedFolio) GetFiscalCreditBillFolioOk() (*FolioWindowType, bool)`

GetFiscalCreditBillFolioOk returns a tuple with the FiscalCreditBillFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalCreditBillFolio

`func (o *VoidedFolio) SetFiscalCreditBillFolio(v FolioWindowType)`

SetFiscalCreditBillFolio sets FiscalCreditBillFolio field to given value.

### HasFiscalCreditBillFolio

`func (o *VoidedFolio) HasFiscalCreditBillFolio() bool`

HasFiscalCreditBillFolio returns a boolean if a field has been set.

### GetLinks

`func (o *VoidedFolio) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *VoidedFolio) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *VoidedFolio) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *VoidedFolio) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *VoidedFolio) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *VoidedFolio) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *VoidedFolio) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *VoidedFolio) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


