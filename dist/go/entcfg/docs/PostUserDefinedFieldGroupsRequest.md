# PostUserDefinedFieldGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UserDefinedFieldGroups** | Pointer to [**[]UserDefinedFieldGroupType**](UserDefinedFieldGroupType.md) | A recurring element that identifies the User Defined Field Group. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostUserDefinedFieldGroupsRequest

`func NewPostUserDefinedFieldGroupsRequest() *PostUserDefinedFieldGroupsRequest`

NewPostUserDefinedFieldGroupsRequest instantiates a new PostUserDefinedFieldGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostUserDefinedFieldGroupsRequestWithDefaults

`func NewPostUserDefinedFieldGroupsRequestWithDefaults() *PostUserDefinedFieldGroupsRequest`

NewPostUserDefinedFieldGroupsRequestWithDefaults instantiates a new PostUserDefinedFieldGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostUserDefinedFieldGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostUserDefinedFieldGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostUserDefinedFieldGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostUserDefinedFieldGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUserDefinedFieldGroups

`func (o *PostUserDefinedFieldGroupsRequest) GetUserDefinedFieldGroups() []UserDefinedFieldGroupType`

GetUserDefinedFieldGroups returns the UserDefinedFieldGroups field if non-nil, zero value otherwise.

### GetUserDefinedFieldGroupsOk

`func (o *PostUserDefinedFieldGroupsRequest) GetUserDefinedFieldGroupsOk() (*[]UserDefinedFieldGroupType, bool)`

GetUserDefinedFieldGroupsOk returns a tuple with the UserDefinedFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFieldGroups

`func (o *PostUserDefinedFieldGroupsRequest) SetUserDefinedFieldGroups(v []UserDefinedFieldGroupType)`

SetUserDefinedFieldGroups sets UserDefinedFieldGroups field to given value.

### HasUserDefinedFieldGroups

`func (o *PostUserDefinedFieldGroupsRequest) HasUserDefinedFieldGroups() bool`

HasUserDefinedFieldGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PostUserDefinedFieldGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostUserDefinedFieldGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostUserDefinedFieldGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostUserDefinedFieldGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


