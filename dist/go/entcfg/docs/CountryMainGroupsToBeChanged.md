# CountryMainGroupsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CountryMainGroups** | Pointer to [**[]CountryMainGroupType**](CountryMainGroupType.md) | List of Country Main Groups. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCountryMainGroupsToBeChanged

`func NewCountryMainGroupsToBeChanged() *CountryMainGroupsToBeChanged`

NewCountryMainGroupsToBeChanged instantiates a new CountryMainGroupsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCountryMainGroupsToBeChangedWithDefaults

`func NewCountryMainGroupsToBeChangedWithDefaults() *CountryMainGroupsToBeChanged`

NewCountryMainGroupsToBeChangedWithDefaults instantiates a new CountryMainGroupsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCountryMainGroups

`func (o *CountryMainGroupsToBeChanged) GetCountryMainGroups() []CountryMainGroupType`

GetCountryMainGroups returns the CountryMainGroups field if non-nil, zero value otherwise.

### GetCountryMainGroupsOk

`func (o *CountryMainGroupsToBeChanged) GetCountryMainGroupsOk() (*[]CountryMainGroupType, bool)`

GetCountryMainGroupsOk returns a tuple with the CountryMainGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountryMainGroups

`func (o *CountryMainGroupsToBeChanged) SetCountryMainGroups(v []CountryMainGroupType)`

SetCountryMainGroups sets CountryMainGroups field to given value.

### HasCountryMainGroups

`func (o *CountryMainGroupsToBeChanged) HasCountryMainGroups() bool`

HasCountryMainGroups returns a boolean if a field has been set.

### GetLinks

`func (o *CountryMainGroupsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CountryMainGroupsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CountryMainGroupsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CountryMainGroupsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CountryMainGroupsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CountryMainGroupsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CountryMainGroupsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CountryMainGroupsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


