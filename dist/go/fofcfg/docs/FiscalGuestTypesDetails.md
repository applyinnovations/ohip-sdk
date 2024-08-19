# FiscalGuestTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalGuestTypes** | Pointer to [**[]FiscalGuestTypeType**](FiscalGuestTypeType.md) | List of Fiscal Guest Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalGuestTypesDetails

`func NewFiscalGuestTypesDetails() *FiscalGuestTypesDetails`

NewFiscalGuestTypesDetails instantiates a new FiscalGuestTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalGuestTypesDetailsWithDefaults

`func NewFiscalGuestTypesDetailsWithDefaults() *FiscalGuestTypesDetails`

NewFiscalGuestTypesDetailsWithDefaults instantiates a new FiscalGuestTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalGuestTypes

`func (o *FiscalGuestTypesDetails) GetFiscalGuestTypes() []FiscalGuestTypeType`

GetFiscalGuestTypes returns the FiscalGuestTypes field if non-nil, zero value otherwise.

### GetFiscalGuestTypesOk

`func (o *FiscalGuestTypesDetails) GetFiscalGuestTypesOk() (*[]FiscalGuestTypeType, bool)`

GetFiscalGuestTypesOk returns a tuple with the FiscalGuestTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalGuestTypes

`func (o *FiscalGuestTypesDetails) SetFiscalGuestTypes(v []FiscalGuestTypeType)`

SetFiscalGuestTypes sets FiscalGuestTypes field to given value.

### HasFiscalGuestTypes

`func (o *FiscalGuestTypesDetails) HasFiscalGuestTypes() bool`

HasFiscalGuestTypes returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalGuestTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalGuestTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalGuestTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalGuestTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalGuestTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalGuestTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalGuestTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalGuestTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


