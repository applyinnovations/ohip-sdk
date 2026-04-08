# ProfileOwnersDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileOwnersList** | Pointer to [**[]OwnerType**](OwnerType.md) | Generic type for a list of owners. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileOwnersDetail

`func NewProfileOwnersDetail() *ProfileOwnersDetail`

NewProfileOwnersDetail instantiates a new ProfileOwnersDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileOwnersDetailWithDefaults

`func NewProfileOwnersDetailWithDefaults() *ProfileOwnersDetail`

NewProfileOwnersDetailWithDefaults instantiates a new ProfileOwnersDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileOwnersList

`func (o *ProfileOwnersDetail) GetProfileOwnersList() []OwnerType`

GetProfileOwnersList returns the ProfileOwnersList field if non-nil, zero value otherwise.

### GetProfileOwnersListOk

`func (o *ProfileOwnersDetail) GetProfileOwnersListOk() (*[]OwnerType, bool)`

GetProfileOwnersListOk returns a tuple with the ProfileOwnersList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileOwnersList

`func (o *ProfileOwnersDetail) SetProfileOwnersList(v []OwnerType)`

SetProfileOwnersList sets ProfileOwnersList field to given value.

### HasProfileOwnersList

`func (o *ProfileOwnersDetail) HasProfileOwnersList() bool`

HasProfileOwnersList returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileOwnersDetail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileOwnersDetail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileOwnersDetail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileOwnersDetail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileOwnersDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileOwnersDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileOwnersDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileOwnersDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


