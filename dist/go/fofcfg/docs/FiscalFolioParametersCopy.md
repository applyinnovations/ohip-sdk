# FiscalFolioParametersCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalFolioParameters** | Pointer to [**[]CopyFiscalFolioParametersType**](CopyFiscalFolioParametersType.md) | List of the Fiscal Folio Parameters to be copied to other hotel code(s). | [optional] 
**FiscalFolioParameter** | Pointer to [**[]GenericHotelCodeCodeType**](GenericHotelCodeCodeType.md) | Fiscal Folio Parameter Configurations to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalFolioParametersCopy

`func NewFiscalFolioParametersCopy() *FiscalFolioParametersCopy`

NewFiscalFolioParametersCopy instantiates a new FiscalFolioParametersCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalFolioParametersCopyWithDefaults

`func NewFiscalFolioParametersCopyWithDefaults() *FiscalFolioParametersCopy`

NewFiscalFolioParametersCopyWithDefaults instantiates a new FiscalFolioParametersCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalFolioParameters

`func (o *FiscalFolioParametersCopy) GetFiscalFolioParameters() []CopyFiscalFolioParametersType`

GetFiscalFolioParameters returns the FiscalFolioParameters field if non-nil, zero value otherwise.

### GetFiscalFolioParametersOk

`func (o *FiscalFolioParametersCopy) GetFiscalFolioParametersOk() (*[]CopyFiscalFolioParametersType, bool)`

GetFiscalFolioParametersOk returns a tuple with the FiscalFolioParameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioParameters

`func (o *FiscalFolioParametersCopy) SetFiscalFolioParameters(v []CopyFiscalFolioParametersType)`

SetFiscalFolioParameters sets FiscalFolioParameters field to given value.

### HasFiscalFolioParameters

`func (o *FiscalFolioParametersCopy) HasFiscalFolioParameters() bool`

HasFiscalFolioParameters returns a boolean if a field has been set.

### GetFiscalFolioParameter

`func (o *FiscalFolioParametersCopy) GetFiscalFolioParameter() []GenericHotelCodeCodeType`

GetFiscalFolioParameter returns the FiscalFolioParameter field if non-nil, zero value otherwise.

### GetFiscalFolioParameterOk

`func (o *FiscalFolioParametersCopy) GetFiscalFolioParameterOk() (*[]GenericHotelCodeCodeType, bool)`

GetFiscalFolioParameterOk returns a tuple with the FiscalFolioParameter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioParameter

`func (o *FiscalFolioParametersCopy) SetFiscalFolioParameter(v []GenericHotelCodeCodeType)`

SetFiscalFolioParameter sets FiscalFolioParameter field to given value.

### HasFiscalFolioParameter

`func (o *FiscalFolioParametersCopy) HasFiscalFolioParameter() bool`

HasFiscalFolioParameter returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalFolioParametersCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalFolioParametersCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalFolioParametersCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalFolioParametersCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalFolioParametersCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalFolioParametersCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalFolioParametersCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalFolioParametersCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


