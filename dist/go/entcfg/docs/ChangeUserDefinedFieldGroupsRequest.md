# ChangeUserDefinedFieldGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UserDefinedFieldGroups** | Pointer to [**[]UserDefinedFieldGroupType**](UserDefinedFieldGroupType.md) | A recurring element that identifies the User Defined Field Group. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeUserDefinedFieldGroupsRequest

`func NewChangeUserDefinedFieldGroupsRequest() *ChangeUserDefinedFieldGroupsRequest`

NewChangeUserDefinedFieldGroupsRequest instantiates a new ChangeUserDefinedFieldGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeUserDefinedFieldGroupsRequestWithDefaults

`func NewChangeUserDefinedFieldGroupsRequestWithDefaults() *ChangeUserDefinedFieldGroupsRequest`

NewChangeUserDefinedFieldGroupsRequestWithDefaults instantiates a new ChangeUserDefinedFieldGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeUserDefinedFieldGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeUserDefinedFieldGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeUserDefinedFieldGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeUserDefinedFieldGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUserDefinedFieldGroups

`func (o *ChangeUserDefinedFieldGroupsRequest) GetUserDefinedFieldGroups() []UserDefinedFieldGroupType`

GetUserDefinedFieldGroups returns the UserDefinedFieldGroups field if non-nil, zero value otherwise.

### GetUserDefinedFieldGroupsOk

`func (o *ChangeUserDefinedFieldGroupsRequest) GetUserDefinedFieldGroupsOk() (*[]UserDefinedFieldGroupType, bool)`

GetUserDefinedFieldGroupsOk returns a tuple with the UserDefinedFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFieldGroups

`func (o *ChangeUserDefinedFieldGroupsRequest) SetUserDefinedFieldGroups(v []UserDefinedFieldGroupType)`

SetUserDefinedFieldGroups sets UserDefinedFieldGroups field to given value.

### HasUserDefinedFieldGroups

`func (o *ChangeUserDefinedFieldGroupsRequest) HasUserDefinedFieldGroups() bool`

HasUserDefinedFieldGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeUserDefinedFieldGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeUserDefinedFieldGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeUserDefinedFieldGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeUserDefinedFieldGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


