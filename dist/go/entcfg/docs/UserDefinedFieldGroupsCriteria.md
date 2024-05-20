# UserDefinedFieldGroupsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserDefinedFieldGroups** | Pointer to [**[]UserDefinedFieldGroupType**](UserDefinedFieldGroupType.md) | A recurring element that identifies the User Defined Field Group. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUserDefinedFieldGroupsCriteria

`func NewUserDefinedFieldGroupsCriteria() *UserDefinedFieldGroupsCriteria`

NewUserDefinedFieldGroupsCriteria instantiates a new UserDefinedFieldGroupsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserDefinedFieldGroupsCriteriaWithDefaults

`func NewUserDefinedFieldGroupsCriteriaWithDefaults() *UserDefinedFieldGroupsCriteria`

NewUserDefinedFieldGroupsCriteriaWithDefaults instantiates a new UserDefinedFieldGroupsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserDefinedFieldGroups

`func (o *UserDefinedFieldGroupsCriteria) GetUserDefinedFieldGroups() []UserDefinedFieldGroupType`

GetUserDefinedFieldGroups returns the UserDefinedFieldGroups field if non-nil, zero value otherwise.

### GetUserDefinedFieldGroupsOk

`func (o *UserDefinedFieldGroupsCriteria) GetUserDefinedFieldGroupsOk() (*[]UserDefinedFieldGroupType, bool)`

GetUserDefinedFieldGroupsOk returns a tuple with the UserDefinedFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFieldGroups

`func (o *UserDefinedFieldGroupsCriteria) SetUserDefinedFieldGroups(v []UserDefinedFieldGroupType)`

SetUserDefinedFieldGroups sets UserDefinedFieldGroups field to given value.

### HasUserDefinedFieldGroups

`func (o *UserDefinedFieldGroupsCriteria) HasUserDefinedFieldGroups() bool`

HasUserDefinedFieldGroups returns a boolean if a field has been set.

### GetLinks

`func (o *UserDefinedFieldGroupsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UserDefinedFieldGroupsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UserDefinedFieldGroupsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UserDefinedFieldGroupsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UserDefinedFieldGroupsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UserDefinedFieldGroupsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UserDefinedFieldGroupsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UserDefinedFieldGroupsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


