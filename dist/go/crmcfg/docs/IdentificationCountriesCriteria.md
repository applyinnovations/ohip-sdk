# IdentificationCountriesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentificationCountries** | Pointer to [**[]IdentificationCountryType**](IdentificationCountryType.md) | List of Identification Countries. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewIdentificationCountriesCriteria

`func NewIdentificationCountriesCriteria() *IdentificationCountriesCriteria`

NewIdentificationCountriesCriteria instantiates a new IdentificationCountriesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentificationCountriesCriteriaWithDefaults

`func NewIdentificationCountriesCriteriaWithDefaults() *IdentificationCountriesCriteria`

NewIdentificationCountriesCriteriaWithDefaults instantiates a new IdentificationCountriesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentificationCountries

`func (o *IdentificationCountriesCriteria) GetIdentificationCountries() []IdentificationCountryType`

GetIdentificationCountries returns the IdentificationCountries field if non-nil, zero value otherwise.

### GetIdentificationCountriesOk

`func (o *IdentificationCountriesCriteria) GetIdentificationCountriesOk() (*[]IdentificationCountryType, bool)`

GetIdentificationCountriesOk returns a tuple with the IdentificationCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentificationCountries

`func (o *IdentificationCountriesCriteria) SetIdentificationCountries(v []IdentificationCountryType)`

SetIdentificationCountries sets IdentificationCountries field to given value.

### HasIdentificationCountries

`func (o *IdentificationCountriesCriteria) HasIdentificationCountries() bool`

HasIdentificationCountries returns a boolean if a field has been set.

### GetLinks

`func (o *IdentificationCountriesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IdentificationCountriesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IdentificationCountriesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IdentificationCountriesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *IdentificationCountriesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IdentificationCountriesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IdentificationCountriesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IdentificationCountriesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

