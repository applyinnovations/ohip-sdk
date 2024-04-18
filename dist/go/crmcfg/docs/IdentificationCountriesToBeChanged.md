# IdentificationCountriesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentificationCountries** | Pointer to [**[]IdentificationCountryType**](IdentificationCountryType.md) | List of Identification Countries. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewIdentificationCountriesToBeChanged

`func NewIdentificationCountriesToBeChanged() *IdentificationCountriesToBeChanged`

NewIdentificationCountriesToBeChanged instantiates a new IdentificationCountriesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentificationCountriesToBeChangedWithDefaults

`func NewIdentificationCountriesToBeChangedWithDefaults() *IdentificationCountriesToBeChanged`

NewIdentificationCountriesToBeChangedWithDefaults instantiates a new IdentificationCountriesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentificationCountries

`func (o *IdentificationCountriesToBeChanged) GetIdentificationCountries() []IdentificationCountryType`

GetIdentificationCountries returns the IdentificationCountries field if non-nil, zero value otherwise.

### GetIdentificationCountriesOk

`func (o *IdentificationCountriesToBeChanged) GetIdentificationCountriesOk() (*[]IdentificationCountryType, bool)`

GetIdentificationCountriesOk returns a tuple with the IdentificationCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationCountries

`func (o *IdentificationCountriesToBeChanged) SetIdentificationCountries(v []IdentificationCountryType)`

SetIdentificationCountries sets IdentificationCountries field to given value.

### HasIdentificationCountries

`func (o *IdentificationCountriesToBeChanged) HasIdentificationCountries() bool`

HasIdentificationCountries returns a boolean if a field has been set.

### GetLinks

`func (o *IdentificationCountriesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IdentificationCountriesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IdentificationCountriesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IdentificationCountriesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *IdentificationCountriesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IdentificationCountriesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IdentificationCountriesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IdentificationCountriesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

