# CustomTaxTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomTaxTypes** | Pointer to [**[]CustomTaxTypeType**](CustomTaxTypeType.md) | List of Custom Tax Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCustomTaxTypesDetails

`func NewCustomTaxTypesDetails() *CustomTaxTypesDetails`

NewCustomTaxTypesDetails instantiates a new CustomTaxTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomTaxTypesDetailsWithDefaults

`func NewCustomTaxTypesDetailsWithDefaults() *CustomTaxTypesDetails`

NewCustomTaxTypesDetailsWithDefaults instantiates a new CustomTaxTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomTaxTypes

`func (o *CustomTaxTypesDetails) GetCustomTaxTypes() []CustomTaxTypeType`

GetCustomTaxTypes returns the CustomTaxTypes field if non-nil, zero value otherwise.

### GetCustomTaxTypesOk

`func (o *CustomTaxTypesDetails) GetCustomTaxTypesOk() (*[]CustomTaxTypeType, bool)`

GetCustomTaxTypesOk returns a tuple with the CustomTaxTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomTaxTypes

`func (o *CustomTaxTypesDetails) SetCustomTaxTypes(v []CustomTaxTypeType)`

SetCustomTaxTypes sets CustomTaxTypes field to given value.

### HasCustomTaxTypes

`func (o *CustomTaxTypesDetails) HasCustomTaxTypes() bool`

HasCustomTaxTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CustomTaxTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CustomTaxTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CustomTaxTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CustomTaxTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CustomTaxTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CustomTaxTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CustomTaxTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CustomTaxTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

