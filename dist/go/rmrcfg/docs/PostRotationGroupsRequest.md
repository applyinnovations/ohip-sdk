# PostRotationGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationGroups** | Pointer to [**[]RotationGroupType**](RotationGroupType.md) | Defines collection of Room Rotation Groups. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRotationGroupsRequest

`func NewPostRotationGroupsRequest() *PostRotationGroupsRequest`

NewPostRotationGroupsRequest instantiates a new PostRotationGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRotationGroupsRequestWithDefaults

`func NewPostRotationGroupsRequestWithDefaults() *PostRotationGroupsRequest`

NewPostRotationGroupsRequestWithDefaults instantiates a new PostRotationGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationGroups

`func (o *PostRotationGroupsRequest) GetRotationGroups() []RotationGroupType`

GetRotationGroups returns the RotationGroups field if non-nil, zero value otherwise.

### GetRotationGroupsOk

`func (o *PostRotationGroupsRequest) GetRotationGroupsOk() (*[]RotationGroupType, bool)`

GetRotationGroupsOk returns a tuple with the RotationGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationGroups

`func (o *PostRotationGroupsRequest) SetRotationGroups(v []RotationGroupType)`

SetRotationGroups sets RotationGroups field to given value.

### HasRotationGroups

`func (o *PostRotationGroupsRequest) HasRotationGroups() bool`

HasRotationGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRotationGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRotationGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRotationGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRotationGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


