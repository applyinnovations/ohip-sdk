# FiscalFolioParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalFolioParameters** | Pointer to [**[]FiscalFolioParameterType**](FiscalFolioParameterType.md) | Holds Fiscal Folio Parameter details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalFolioParameters

`func NewFiscalFolioParameters() *FiscalFolioParameters`

NewFiscalFolioParameters instantiates a new FiscalFolioParameters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalFolioParametersWithDefaults

`func NewFiscalFolioParametersWithDefaults() *FiscalFolioParameters`

NewFiscalFolioParametersWithDefaults instantiates a new FiscalFolioParameters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalFolioParameters

`func (o *FiscalFolioParameters) GetFiscalFolioParameters() []FiscalFolioParameterType`

GetFiscalFolioParameters returns the FiscalFolioParameters field if non-nil, zero value otherwise.

### GetFiscalFolioParametersOk

`func (o *FiscalFolioParameters) GetFiscalFolioParametersOk() (*[]FiscalFolioParameterType, bool)`

GetFiscalFolioParametersOk returns a tuple with the FiscalFolioParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioParameters

`func (o *FiscalFolioParameters) SetFiscalFolioParameters(v []FiscalFolioParameterType)`

SetFiscalFolioParameters sets FiscalFolioParameters field to given value.

### HasFiscalFolioParameters

`func (o *FiscalFolioParameters) HasFiscalFolioParameters() bool`

HasFiscalFolioParameters returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalFolioParameters) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalFolioParameters) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalFolioParameters) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalFolioParameters) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalFolioParameters) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalFolioParameters) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalFolioParameters) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalFolioParameters) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


