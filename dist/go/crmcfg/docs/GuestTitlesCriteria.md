# GuestTitlesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestTitles** | Pointer to [**[]GuestTitleType**](GuestTitleType.md) | List of Guest Titles. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestTitlesCriteria

`func NewGuestTitlesCriteria() *GuestTitlesCriteria`

NewGuestTitlesCriteria instantiates a new GuestTitlesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestTitlesCriteriaWithDefaults

`func NewGuestTitlesCriteriaWithDefaults() *GuestTitlesCriteria`

NewGuestTitlesCriteriaWithDefaults instantiates a new GuestTitlesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestTitles

`func (o *GuestTitlesCriteria) GetGuestTitles() []GuestTitleType`

GetGuestTitles returns the GuestTitles field if non-nil, zero value otherwise.

### GetGuestTitlesOk

`func (o *GuestTitlesCriteria) GetGuestTitlesOk() (*[]GuestTitleType, bool)`

GetGuestTitlesOk returns a tuple with the GuestTitles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTitles

`func (o *GuestTitlesCriteria) SetGuestTitles(v []GuestTitleType)`

SetGuestTitles sets GuestTitles field to given value.

### HasGuestTitles

`func (o *GuestTitlesCriteria) HasGuestTitles() bool`

HasGuestTitles returns a boolean if a field has been set.

### GetLinks

`func (o *GuestTitlesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestTitlesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestTitlesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestTitlesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestTitlesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestTitlesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestTitlesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestTitlesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


