# CountryMainGroupsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CountryMainGroups** | Pointer to [**[]CountryMainGroupType**](CountryMainGroupType.md) | List of Country Main Groups. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCountryMainGroupsDetails

`func NewCountryMainGroupsDetails() *CountryMainGroupsDetails`

NewCountryMainGroupsDetails instantiates a new CountryMainGroupsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCountryMainGroupsDetailsWithDefaults

`func NewCountryMainGroupsDetailsWithDefaults() *CountryMainGroupsDetails`

NewCountryMainGroupsDetailsWithDefaults instantiates a new CountryMainGroupsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCountryMainGroups

`func (o *CountryMainGroupsDetails) GetCountryMainGroups() []CountryMainGroupType`

GetCountryMainGroups returns the CountryMainGroups field if non-nil, zero value otherwise.

### GetCountryMainGroupsOk

`func (o *CountryMainGroupsDetails) GetCountryMainGroupsOk() (*[]CountryMainGroupType, bool)`

GetCountryMainGroupsOk returns a tuple with the CountryMainGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryMainGroups

`func (o *CountryMainGroupsDetails) SetCountryMainGroups(v []CountryMainGroupType)`

SetCountryMainGroups sets CountryMainGroups field to given value.

### HasCountryMainGroups

`func (o *CountryMainGroupsDetails) HasCountryMainGroups() bool`

HasCountryMainGroups returns a boolean if a field has been set.

### GetLinks

`func (o *CountryMainGroupsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CountryMainGroupsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CountryMainGroupsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CountryMainGroupsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CountryMainGroupsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CountryMainGroupsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CountryMainGroupsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CountryMainGroupsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


