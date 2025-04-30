# CountryGuestTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CountryGuestTypes** | Pointer to [**[]CountryGuestTypeType**](CountryGuestTypeType.md) | List of Philippines Country specific Guest Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCountryGuestTypesDetails

`func NewCountryGuestTypesDetails() *CountryGuestTypesDetails`

NewCountryGuestTypesDetails instantiates a new CountryGuestTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCountryGuestTypesDetailsWithDefaults

`func NewCountryGuestTypesDetailsWithDefaults() *CountryGuestTypesDetails`

NewCountryGuestTypesDetailsWithDefaults instantiates a new CountryGuestTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCountryGuestTypes

`func (o *CountryGuestTypesDetails) GetCountryGuestTypes() []CountryGuestTypeType`

GetCountryGuestTypes returns the CountryGuestTypes field if non-nil, zero value otherwise.

### GetCountryGuestTypesOk

`func (o *CountryGuestTypesDetails) GetCountryGuestTypesOk() (*[]CountryGuestTypeType, bool)`

GetCountryGuestTypesOk returns a tuple with the CountryGuestTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryGuestTypes

`func (o *CountryGuestTypesDetails) SetCountryGuestTypes(v []CountryGuestTypeType)`

SetCountryGuestTypes sets CountryGuestTypes field to given value.

### HasCountryGuestTypes

`func (o *CountryGuestTypesDetails) HasCountryGuestTypes() bool`

HasCountryGuestTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CountryGuestTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CountryGuestTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CountryGuestTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CountryGuestTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CountryGuestTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CountryGuestTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CountryGuestTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CountryGuestTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


