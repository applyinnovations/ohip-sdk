# CustomTaxTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomTaxTypes** | Pointer to [**[]CustomTaxTypeType**](CustomTaxTypeType.md) | List of Custom Tax Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCustomTaxTypesToBeChanged

`func NewCustomTaxTypesToBeChanged() *CustomTaxTypesToBeChanged`

NewCustomTaxTypesToBeChanged instantiates a new CustomTaxTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomTaxTypesToBeChangedWithDefaults

`func NewCustomTaxTypesToBeChangedWithDefaults() *CustomTaxTypesToBeChanged`

NewCustomTaxTypesToBeChangedWithDefaults instantiates a new CustomTaxTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomTaxTypes

`func (o *CustomTaxTypesToBeChanged) GetCustomTaxTypes() []CustomTaxTypeType`

GetCustomTaxTypes returns the CustomTaxTypes field if non-nil, zero value otherwise.

### GetCustomTaxTypesOk

`func (o *CustomTaxTypesToBeChanged) GetCustomTaxTypesOk() (*[]CustomTaxTypeType, bool)`

GetCustomTaxTypesOk returns a tuple with the CustomTaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTaxTypes

`func (o *CustomTaxTypesToBeChanged) SetCustomTaxTypes(v []CustomTaxTypeType)`

SetCustomTaxTypes sets CustomTaxTypes field to given value.

### HasCustomTaxTypes

`func (o *CustomTaxTypesToBeChanged) HasCustomTaxTypes() bool`

HasCustomTaxTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CustomTaxTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CustomTaxTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CustomTaxTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CustomTaxTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CustomTaxTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CustomTaxTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CustomTaxTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CustomTaxTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


